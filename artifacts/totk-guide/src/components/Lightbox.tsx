import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export function Lightbox({ src, alt, onClose }: LightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        />
        <motion.div
          className="relative z-10 max-w-[90vw] max-h-[90vh] rounded-xl overflow-hidden shadow-2xl border border-primary/20"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ duration: 0.25, type: "spring", bounce: 0.2 }}
        >
          <img
            src={src}
            alt={alt}
            className="block max-w-[85vw] max-h-[85vh] object-contain"
          />
          <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-sm text-white/80 font-serif">{alt}</p>
          </div>
        </motion.div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/90 transition-colors"
          aria-label="Close image"
        >
          <X className="h-5 w-5" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

interface ArmorImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ArmorImage({ src, alt, className = "" }: ArmorImageProps) {
  const openLightbox = () => {
    const event = new CustomEvent("open-lightbox", { detail: { src, alt } });
    window.dispatchEvent(event);
  };

  return (
    <div
      className={`relative group cursor-zoom-in overflow-hidden rounded-lg ${className}`}
      onClick={openLightbox}
      title="Click to enlarge"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
          const parent = (e.target as HTMLImageElement).parentElement;
          if (parent) parent.classList.add("bg-primary/10", "flex", "items-center", "justify-center");
        }}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200 flex items-center justify-center">
        <ZoomIn className="h-8 w-8 text-white/0 group-hover:text-white/90 transition-all duration-200 drop-shadow-lg" />
      </div>
    </div>
  );
}
