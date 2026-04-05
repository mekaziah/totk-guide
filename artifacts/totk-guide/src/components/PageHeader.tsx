import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export function PageHeader({ title, description, icon }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden mb-8 rounded-lg hylian-border border-b-0 border-x-0 bg-card p-8">
      <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
        {icon}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <div className="flex items-center gap-3 mb-2 text-primary">
          <span className="w-8 h-8 flex items-center justify-center rounded bg-primary/20">
            {icon}
          </span>
          <h1 className="text-3xl font-serif font-bold text-foreground tracking-wide uppercase">{title}</h1>
        </div>
        <p className="text-muted-foreground max-w-2xl text-lg mt-4">{description}</p>
      </motion.div>
    </div>
  );
}
