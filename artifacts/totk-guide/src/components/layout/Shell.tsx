import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import {
  Map, Sword, Shield, Target, ScrollText,
  MapPin, Sparkles, Navigation, Menu, Eye, BookOpen, Trophy
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { href: "/",          label: "Overview",        icon: BookOpen  },
  { href: "/walkthrough", label: "Walkthrough",   icon: ScrollText },
  { href: "/shrines",   label: "Shrines",          icon: MapPin    },
  { href: "/weapons",   label: "Weapons",          icon: Sword     },
  { href: "/shields",   label: "Shields",          icon: Shield    },
  { href: "/bows",      label: "Bows",             icon: Target    },
  { href: "/gear",      label: "Gear & Armor",     icon: Navigation },
  { href: "/secrets",   label: "Secrets",          icon: Sparkles  },
  { href: "/hidden",    label: "Hidden Areas",     icon: Eye       },
  { href: "/map",       label: "Interactive Map",  icon: Map       },
  { href: "/tracker",   label: "Tracker",          icon: Trophy    },
];

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  const NavLinks = () => (
    <nav className="space-y-1">
      {NAV_ITEMS.map((item) => {
        const active = location === item.href;
        return (
          <Link key={item.href} href={item.href}>
            <div
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors cursor-pointer ${
                active
                  ? "bg-primary/20 text-primary font-medium"
                  : "text-muted-foreground hover:bg-accent/10 hover:text-foreground"
              }`}
            >
              <item.icon className={`h-4 w-4 ${active ? "text-primary" : "text-muted-foreground"}`} />
              {item.label}
            </div>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div className="flex min-h-screen bg-background dark text-foreground">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex w-64 flex-col border-r border-border bg-sidebar-background sticky top-0 h-screen">
        <div className="p-4 border-b border-border hylian-border">
          <h1 className="text-xl font-serif text-gradient font-bold tracking-widest uppercase">TOTK Guide</h1>
        </div>
        <div className="p-4 flex-1 overflow-y-auto">
          <NavLinks />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        <header className="md:hidden flex items-center border-b border-border p-4 bg-sidebar-background sticky top-0 z-50">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 bg-sidebar-background p-0 border-r-border dark">
              <div className="p-4 border-b border-border">
                <h1 className="text-xl font-serif text-gradient font-bold tracking-widest uppercase">TOTK Guide</h1>
              </div>
              <div className="p-4">
                <NavLinks />
              </div>
            </SheetContent>
          </Sheet>
          <span className="font-serif text-gradient font-bold tracking-widest uppercase">TOTK Guide</span>
        </header>
        <div className="flex-1 pb-16">
          {children}
        </div>
      </main>
    </div>
  );
}
