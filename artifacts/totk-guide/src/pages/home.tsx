import { Link } from "wouter";
import { motion } from "framer-motion";
import { Sword, Map, ScrollText, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CARDS = [
  { href: "/walkthrough", title: "Walkthrough", icon: ScrollText, desc: "Step-by-step main quest guide." },
  { href: "/weapons", title: "Weapons", icon: Sword, desc: "Complete armory with stats." },
  { href: "/map", title: "Map", icon: Map, desc: "Interactive Hyrule map." },
  { href: "/secrets", title: "Secrets", icon: Sparkles, desc: "Dragon's Tears & hidden lore." },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-12 flex flex-col items-center justify-center text-center hylian-border m-4 md:m-8 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <div className="mb-4 flex justify-center">
            <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center zonai-glow">
              <Sword className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif mb-6 text-foreground font-bold drop-shadow-lg">
            Tears of the Kingdom <br/> <span className="text-gradient">Ultimate Guide</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            An encyclopedic companion for your journey through the sky, the surface, and the depths. Uncover every secret in Hyrule.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/walkthrough">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 zonai-glow">
                Begin Walkthrough
              </Button>
            </Link>
            <Link href="/map">
              <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                Interactive Map
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Quick Nav */}
      <section className="px-6 lg:px-12 pb-12">
        <h2 className="text-2xl font-serif mb-6 border-b border-border pb-2 text-accent">Compendium</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CARDS.map((card, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={card.href}
            >
              <Link href={card.href}>
                <div className="group block h-full p-6 rounded-lg bg-card border border-card-border hover:border-primary/50 transition-all hover:bg-accent/5 cursor-pointer">
                  <card.icon className="h-8 w-8 text-secondary mb-4 group-hover:text-primary transition-colors" />
                  <h3 className="text-lg font-serif font-semibold mb-2 group-hover:text-primary transition-colors">{card.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{card.desc}</p>
                  <div className="flex items-center text-xs font-medium text-primary mt-auto">
                    Explore <ChevronRight className="h-3 w-3 ml-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
