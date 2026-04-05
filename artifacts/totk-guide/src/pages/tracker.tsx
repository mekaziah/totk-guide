import { useState, useCallback } from "react";
import {
  CheckSquare, Square, ChevronDown, ChevronRight,
  RotateCcw, Trophy, Sword, Shield, Target,
  Navigation, Sparkles, Eye, MapPin, Leaf, Plus, Minus
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SHRINES, WEAPONS, BOWS, SHIELDS, ARMOR, SECRETS, HIDDEN_AREAS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

// ── Checkbox persistence hook ───────────────────────────────────
function useChecked(storageKey: string) {
  const [checked, setChecked] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem(`totk-${storageKey}`);
      return raw ? new Set(JSON.parse(raw)) : new Set();
    } catch { return new Set(); }
  });

  const toggle = useCallback((id: string) => {
    setChecked(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      try { localStorage.setItem(`totk-${storageKey}`, JSON.stringify([...next])); } catch {}
      return next;
    });
  }, [storageKey]);

  const setAll = useCallback((ids: string[], on: boolean) => {
    setChecked(prev => {
      const next = new Set(prev);
      ids.forEach(id => on ? next.add(id) : next.delete(id));
      try { localStorage.setItem(`totk-${storageKey}`, JSON.stringify([...next])); } catch {}
      return next;
    });
  }, [storageKey]);

  const reset = useCallback(() => {
    setChecked(new Set());
    try { localStorage.removeItem(`totk-${storageKey}`); } catch {}
  }, [storageKey]);

  return { checked, toggle, setAll, reset };
}

// ── Counter hook (for Korok Seeds) ────────────────────────────
function useCounter(storageKey: string, max: number) {
  const [count, setCount] = useState<number>(() => {
    try { return Math.min(max, Math.max(0, Number(localStorage.getItem(`totk-${storageKey}`) ?? 0))); }
    catch { return 0; }
  });

  const set = useCallback((val: number) => {
    const clamped = Math.min(max, Math.max(0, val));
    setCount(clamped);
    try { localStorage.setItem(`totk-${storageKey}`, String(clamped)); } catch {}
  }, [storageKey, max]);

  const reset = useCallback(() => { set(0); }, [set]);

  return { count, set, reset, max };
}

// ── Progress bar ───────────────────────────────────────────────
function ProgressBar({ done, total, color = "bg-primary" }: { done: number; total: number; color?: string }) {
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>
      <span className="text-xs text-muted-foreground w-20 text-right shrink-0">
        {done} / {total} &nbsp;<span className="text-primary">{pct}%</span>
      </span>
    </div>
  );
}

// ── Collapsible section ────────────────────────────────────────
interface SectionProps {
  title: string;
  icon: React.ReactNode;
  done: number;
  total: number;
  barColor?: string;
  children: React.ReactNode;
  onCheckAll?: () => void;
  onUncheckAll?: () => void;
}

function Section({ title, icon, done, total, barColor, children, onCheckAll, onUncheckAll }: SectionProps) {
  const [open, setOpen] = useState(false);
  const allDone = done === total;

  return (
    <div className="rounded-lg border border-border bg-card/50 overflow-hidden">
      <div
        className="flex items-center gap-3 p-4 cursor-pointer hover:bg-accent/5 transition-colors"
        onClick={() => setOpen(o => !o)}
      >
        <span className={`${allDone ? "text-green-400" : "text-primary"}`}>{icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-serif font-medium text-foreground">{title}</span>
            {allDone && <span className="text-green-400 text-xs font-medium ml-2">✓ Complete</span>}
          </div>
          <ProgressBar done={done} total={total} color={barColor} />
        </div>
        <span className="text-muted-foreground ml-2 shrink-0">
          {open ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </span>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="border-t border-border px-4 py-3">
              {(onCheckAll || onUncheckAll) && (
                <div className="flex gap-2 mb-3">
                  {onCheckAll && (
                    <Button size="sm" variant="outline" className="text-xs h-7 px-2 border-primary/40 text-primary" onClick={e => { e.stopPropagation(); onCheckAll(); }}>
                      Check All
                    </Button>
                  )}
                  {onUncheckAll && (
                    <Button size="sm" variant="ghost" className="text-xs h-7 px-2 text-muted-foreground" onClick={e => { e.stopPropagation(); onUncheckAll(); }}>
                      Uncheck All
                    </Button>
                  )}
                </div>
              )}
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Checkbox row ───────────────────────────────────────────────
function CheckRow({ id, label, sub, checked, onToggle }: { id: string; label: string; sub?: string; checked: boolean; onToggle: () => void }) {
  return (
    <label
      className="flex items-start gap-3 py-1.5 cursor-pointer hover:bg-accent/5 px-1 rounded group"
      onClick={onToggle}
    >
      <span className={`mt-0.5 shrink-0 transition-colors ${checked ? "text-green-400" : "text-muted-foreground group-hover:text-primary"}`}>
        {checked ? <CheckSquare className="h-4 w-4" /> : <Square className="h-4 w-4" />}
      </span>
      <span className="flex-1 min-w-0">
        <span className={`text-sm ${checked ? "line-through text-muted-foreground/60" : "text-foreground"}`}>{label}</span>
        {sub && <span className="text-xs text-muted-foreground block">{sub}</span>}
      </span>
    </label>
  );
}

// ── Korok Seeds counter section ────────────────────────────────
function KorokSection({ counter }: { counter: ReturnType<typeof useCounter> }) {
  const [open, setOpen] = useState(false);
  const { count, set, max } = counter;
  const pct = Math.round((count / max) * 100);
  const allDone = count === max;

  return (
    <div className="rounded-lg border border-border bg-card/50 overflow-hidden">
      <div
        className="flex items-center gap-3 p-4 cursor-pointer hover:bg-accent/5 transition-colors"
        onClick={() => setOpen(o => !o)}
      >
        <span className={allDone ? "text-green-400" : "text-yellow-400"}>
          <Leaf className="h-5 w-5" />
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-serif font-medium text-foreground">Korok Seeds ({max} total)</span>
            {allDone && <span className="text-green-400 text-xs font-medium ml-2">✓ Complete</span>}
          </div>
          <ProgressBar done={count} total={max} color="bg-yellow-500" />
        </div>
        <span className="text-muted-foreground ml-2 shrink-0">
          {open ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </span>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="border-t border-border px-4 py-4 space-y-4">
              <p className="text-xs text-muted-foreground">
                There are <span className="text-foreground font-medium">1,000 Korok Seeds</span> hidden across Hyrule — too many to list individually. Use the counter below to track how many you've collected.
                Trade seeds with Hestu (found near Lookout Landing, then Korok Forest) to expand your weapon/bow/shield pouches.
              </p>

              {/* Counter UI */}
              <div className="flex items-center justify-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 border-primary/40 text-primary hover:bg-primary/10"
                  onClick={e => { e.stopPropagation(); set(count - 1); }}
                  disabled={count === 0}
                >
                  <Minus className="h-4 w-4" />
                </Button>

                <div className="text-center">
                  <input
                    type="number"
                    min={0}
                    max={max}
                    value={count}
                    onClick={e => e.stopPropagation()}
                    onChange={e => set(Number(e.target.value))}
                    className="w-20 text-center text-2xl font-bold font-serif text-primary bg-transparent border-b-2 border-primary/40 focus:border-primary outline-none"
                  />
                  <p className="text-xs text-muted-foreground mt-1">of {max.toLocaleString()} seeds</p>
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 border-primary/40 text-primary hover:bg-primary/10"
                  onClick={e => { e.stopPropagation(); set(count + 1); }}
                  disabled={count === max}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {/* Quick-set buttons */}
              <div className="flex flex-wrap gap-2 justify-center">
                {[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000].map(n => (
                  <Button
                    key={n}
                    size="sm"
                    variant={count >= n ? "default" : "outline"}
                    className={`text-xs h-7 px-2 ${count >= n ? "bg-yellow-600 hover:bg-yellow-700 text-black border-0" : "border-yellow-700/40 text-yellow-600 hover:bg-yellow-700/10"}`}
                    onClick={e => { e.stopPropagation(); set(n); }}
                  >
                    {n}
                  </Button>
                ))}
              </div>

              <Button
                size="sm"
                variant="ghost"
                className="text-xs text-muted-foreground w-full"
                onClick={e => { e.stopPropagation(); set(0); }}
              >
                Reset to 0
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────
export default function Tracker() {
  const shrines  = useChecked("shrines");
  const weapons  = useChecked("weapons");
  const bows     = useChecked("bows");
  const shields  = useChecked("shields");
  const armor    = useChecked("armor");
  const secrets  = useChecked("secrets");
  const hidden   = useChecked("hidden");
  const koroks   = useCounter("koroks", 1000);

  const armorPieces = ARMOR.flatMap(set =>
    set.pieces.map(p => ({ id: `${set.id}::${p.name}`, label: p.name, sub: set.name }))
  );
  const armorIds = armorPieces.map(p => p.id);

  const categories = [
    { done: shrines.checked.size,   total: SHRINES.length },
    { done: koroks.count,           total: koroks.max },
    { done: weapons.checked.size,   total: WEAPONS.length },
    { done: bows.checked.size,      total: BOWS.length },
    { done: shields.checked.size,   total: SHIELDS.length },
    { done: armor.checked.size,     total: armorIds.length },
    { done: secrets.checked.size,   total: SECRETS.length },
    { done: hidden.checked.size,    total: HIDDEN_AREAS.length },
  ];
  const grandTotal = categories.reduce((s, c) => s + c.total, 0);
  const grandDone  = categories.reduce((s, c) => s + c.done, 0);
  const overallPct = Math.round((grandDone / grandTotal) * 100);

  const resetAll = () => {
    shrines.reset(); weapons.reset(); bows.reset(); shields.reset();
    armor.reset(); secrets.reset(); hidden.reset(); koroks.reset();
  };

  const shrinesByRegion = SHRINES.reduce<Record<string, typeof SHRINES>>((acc, s) => {
    (acc[s.region] ??= []).push(s);
    return acc;
  }, {});

  return (
    <div className="p-6 lg:p-12 max-w-4xl mx-auto">
      <PageHeader
        title="Completionist Tracker"
        description="Track every shrine, Korok seed, weapon, bow, shield, armor piece, secret, and hidden area. Progress is saved automatically in your browser."
        icon={<Trophy className="h-12 w-12" />}
      />

      {/* ── Overall progress ──────────────────────────────────── */}
      <div className="mb-8 p-5 rounded-xl border border-border bg-card/60 backdrop-blur-sm">
        <div className="flex items-end justify-between mb-3">
          <div>
            <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Overall Completion</p>
            <p className="text-4xl font-serif font-bold text-primary">
              {overallPct}<span className="text-2xl text-muted-foreground">%</span>
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={resetAll}
            className="gap-2 text-destructive border-destructive/40 hover:bg-destructive/10 mb-1"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset All
          </Button>
        </div>
        <ProgressBar done={grandDone} total={grandTotal} color="bg-primary" />
        <p className="text-xs text-muted-foreground mt-2">{grandDone.toLocaleString()} of {grandTotal.toLocaleString()} items collected</p>
      </div>

      {/* ── Sections ──────────────────────────────────────────── */}
      <div className="space-y-4">

        {/* Shrines */}
        <Section
          title={`Shrines (${SHRINES.length} total)`}
          icon={<MapPin className="h-5 w-5" />}
          done={shrines.checked.size} total={SHRINES.length}
          barColor="bg-emerald-500"
          onCheckAll={() => shrines.setAll(SHRINES.map(s => s.id), true)}
          onUncheckAll={() => shrines.setAll(SHRINES.map(s => s.id), false)}
        >
          {Object.entries(shrinesByRegion).map(([region, list]) => (
            <div key={region} className="mb-4">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1 mt-2">{region}</p>
              {list.map(s => (
                <CheckRow key={s.id} id={s.id} label={s.name}
                  sub={`${s.type} · ${s.coords}`}
                  checked={shrines.checked.has(s.id)} onToggle={() => shrines.toggle(s.id)} />
              ))}
            </div>
          ))}
        </Section>

        {/* Korok Seeds */}
        <KorokSection counter={koroks} />

        {/* Weapons */}
        <Section
          title={`Weapons (${WEAPONS.length} total)`}
          icon={<Sword className="h-5 w-5" />}
          done={weapons.checked.size} total={WEAPONS.length}
          barColor="bg-orange-500"
          onCheckAll={() => weapons.setAll(WEAPONS.map(w => w.id), true)}
          onUncheckAll={() => weapons.setAll(WEAPONS.map(w => w.id), false)}
        >
          {WEAPONS.map(w => (
            <CheckRow key={w.id} id={w.id} label={w.name}
              sub={`${w.type} · ATK ${w.attack} · ${w.coords}`}
              checked={weapons.checked.has(w.id)} onToggle={() => weapons.toggle(w.id)} />
          ))}
        </Section>

        {/* Bows */}
        <Section
          title={`Bows (${BOWS.length} total)`}
          icon={<Target className="h-5 w-5" />}
          done={bows.checked.size} total={BOWS.length}
          barColor="bg-sky-500"
          onCheckAll={() => bows.setAll(BOWS.map(b => b.id), true)}
          onUncheckAll={() => bows.setAll(BOWS.map(b => b.id), false)}
        >
          {BOWS.map(b => (
            <CheckRow key={b.id} id={b.id} label={b.name}
              sub={`${b.multishot} · ATK ${b.attack} · ${b.coords}`}
              checked={bows.checked.has(b.id)} onToggle={() => bows.toggle(b.id)} />
          ))}
        </Section>

        {/* Shields */}
        <Section
          title={`Shields (${SHIELDS.length} total)`}
          icon={<Shield className="h-5 w-5" />}
          done={shields.checked.size} total={SHIELDS.length}
          barColor="bg-violet-500"
          onCheckAll={() => shields.setAll(SHIELDS.map(s => s.id), true)}
          onUncheckAll={() => shields.setAll(SHIELDS.map(s => s.id), false)}
        >
          {SHIELDS.map(s => (
            <CheckRow key={s.id} id={s.id} label={s.name}
              sub={`DEF ${s.defense} · DUR ${s.durability} · ${s.coords}`}
              checked={shields.checked.has(s.id)} onToggle={() => shields.toggle(s.id)} />
          ))}
        </Section>

        {/* Armor Pieces */}
        <Section
          title={`Armor Pieces (${armorIds.length} pieces across ${ARMOR.length} sets)`}
          icon={<Navigation className="h-5 w-5" />}
          done={armor.checked.size} total={armorIds.length}
          barColor="bg-amber-500"
          onCheckAll={() => armor.setAll(armorIds, true)}
          onUncheckAll={() => armor.setAll(armorIds, false)}
        >
          {ARMOR.map(set => (
            <div key={set.id} className="mb-4">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1 mt-2">{set.name}</p>
              {set.pieces.map(p => {
                const pid = `${set.id}::${p.name}`;
                return (
                  <CheckRow key={pid} id={pid} label={p.name}
                    sub={`DEF ${p.defense} · ${p.coords}`}
                    checked={armor.checked.has(pid)} onToggle={() => armor.toggle(pid)} />
                );
              })}
            </div>
          ))}
        </Section>

        {/* Secrets */}
        <Section
          title={`Secrets & Easter Eggs (${SECRETS.length} total)`}
          icon={<Sparkles className="h-5 w-5" />}
          done={secrets.checked.size} total={SECRETS.length}
          barColor="bg-pink-500"
          onCheckAll={() => secrets.setAll(SECRETS.map(s => s.id), true)}
          onUncheckAll={() => secrets.setAll(SECRETS.map(s => s.id), false)}
        >
          {SECRETS.map(s => (
            <CheckRow key={s.id} id={s.id} label={s.title}
              sub={s.description.slice(0, 90) + "…"}
              checked={secrets.checked.has(s.id)} onToggle={() => secrets.toggle(s.id)} />
          ))}
        </Section>

        {/* Hidden Areas */}
        <Section
          title={`Hidden Areas (${HIDDEN_AREAS.length} total)`}
          icon={<Eye className="h-5 w-5" />}
          done={hidden.checked.size} total={HIDDEN_AREAS.length}
          barColor="bg-teal-500"
          onCheckAll={() => hidden.setAll(HIDDEN_AREAS.map(h => h.id), true)}
          onUncheckAll={() => hidden.setAll(HIDDEN_AREAS.map(h => h.id), false)}
        >
          {HIDDEN_AREAS.map(h => (
            <CheckRow key={h.id} id={h.id} label={h.name}
              sub={`${h.location} · ${h.coords}`}
              checked={hidden.checked.has(h.id)} onToggle={() => hidden.toggle(h.id)} />
          ))}
        </Section>

      </div>
    </div>
  );
}
