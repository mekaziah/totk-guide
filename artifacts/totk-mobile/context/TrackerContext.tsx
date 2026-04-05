import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

interface TrackerState {
  completed: Record<string, Set<string>>;
}

interface TrackerContextType {
  isCompleted: (category: string, id: string) => boolean;
  toggle: (category: string, id: string) => void;
  getProgress: (category: string, total: number) => { count: number; percent: number };
  totalCompleted: number;
  totalItems: number;
}

const TrackerContext = createContext<TrackerContextType | null>(null);

const STORAGE_KEY = "totk_tracker_v1";

export function TrackerProvider({ children }: { children: React.ReactNode }) {
  const [completed, setCompleted] = useState<Record<string, Set<string>>>({});

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((raw) => {
      if (!raw) return;
      try {
        const parsed = JSON.parse(raw) as Record<string, string[]>;
        const result: Record<string, Set<string>> = {};
        for (const [k, v] of Object.entries(parsed)) {
          result[k] = new Set(v);
        }
        setCompleted(result);
      } catch {}
    });
  }, []);

  const save = useCallback((next: Record<string, Set<string>>) => {
    const serializable: Record<string, string[]> = {};
    for (const [k, v] of Object.entries(next)) {
      serializable[k] = Array.from(v);
    }
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(serializable));
  }, []);

  const isCompleted = useCallback((category: string, id: string) => {
    return completed[category]?.has(id) ?? false;
  }, [completed]);

  const toggle = useCallback((category: string, id: string) => {
    setCompleted((prev) => {
      const next = { ...prev };
      const set = new Set(next[category] ?? []);
      if (set.has(id)) set.delete(id);
      else set.add(id);
      next[category] = set;
      save(next);
      return next;
    });
  }, [save]);

  const getProgress = useCallback((category: string, total: number) => {
    const count = completed[category]?.size ?? 0;
    return { count, percent: total > 0 ? count / total : 0 };
  }, [completed]);

  const totalCompleted = Object.values(completed).reduce((sum, s) => sum + s.size, 0);
  const totalItems = 1284;

  return (
    <TrackerContext.Provider value={{ isCompleted, toggle, getProgress, totalCompleted, totalItems }}>
      {children}
    </TrackerContext.Provider>
  );
}

export function useTracker() {
  const ctx = useContext(TrackerContext);
  if (!ctx) throw new Error("useTracker must be used inside TrackerProvider");
  return ctx;
}
