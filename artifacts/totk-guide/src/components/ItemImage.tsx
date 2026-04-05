import { useState } from "react";
import { Sword, Shield, Target, Navigation } from "lucide-react";

// Hyrule Compendium API — Access-Control-Allow-Origin: *  ✓
// Image URL: https://botw-compendium.herokuapp.com/api/v3/compendium/entry/{id}/image
const BASE = "https://botw-compendium.herokuapp.com/api/v3/compendium/entry";

function compendiumUrl(id: number): string {
  return `${BASE}/${id}/image`;
}

// Name → Hyrule Compendium item ID
// Covers all weapons, bows, shields tracked in this guide.
const COMPENDIUM_IDS: Record<string, number> = {
  // ── One-Handed Swords ──────────────────────────────────────
  "Traveler's Sword":             207,
  "Soldier's Broadsword":         208,
  "Knight's Broadsword":          209,
  "Royal Broadsword":             210,
  "Royal Guard's Sword":          220,
  "Forest Dweller's Sword":       211,
  "Forest Dweller's Sword (2H)":  211,
  "Zora Sword":                   212,
  "Moonlight Scimitar":           215,
  "Scimitar of the Seven":        216,
  "Eightfold Blade":              217,
  "Feathered Edge":               213,
  "Gerudo Scimitar":              214,
  "Master Sword":                 201,
  "Flameblade":                   221,
  "Frostblade":                   222,
  "Thunderblade":                 223,
  "Lynel Sword":                  233,
  "Mighty Lynel Sword":           234,
  "Savage Lynel Sword":           235,
  "Ancient Short Sword":          218,
  "Rusty Broadsword":             219,
  "Silver Longsword":             258,
  "Demon Carver":                 243,
  "Vicious Sickle":               242,
  "Windcleaver":                  283,
  // ── Two-Handed Swords / Claymores ─────────────────────────
  "Traveler's Claymore":          254,
  "Soldier's Claymore":           255,
  "Knight's Claymore":            256,
  "Royal Claymore":               257,
  "Royal Guard's Claymore":       267,
  "Great Flameblade":             268,
  "Great Frostblade":             269,
  "Great Thunderblade":           270,
  "Boulder Breaker":              261,
  "Stone Smasher":                260,
  "Cobble Crusher":               259,
  "Eightfold Longblade":          263,
  "Edge of Duality":              264,
  "Golden Claymore":              262,
  "Lynel Crusher":                280,
  "Mighty Lynel Crusher":         281,
  "Savage Lynel Crusher":         282,
  // ── Spears / Halberds ──────────────────────────────────────
  "Traveler's Spear":             289,
  "Soldier's Spear":              290,
  "Knight's Halberd":             291,
  "Royal Halberd":                292,
  "Royal Guard's Spear":          304,
  "Lightscale Trident":           297,
  "Ceremonial Trident":           296,
  "Zora Spear":                   294,
  "Silverscale Spear":            295,
  "Gerudo Spear":                 300,
  "Serpentine Spear":             301,
  "Forest Dweller's Spear":       293,
  "Flamespear":                   305,
  "Frostspear":                   306,
  "Thunderspear":                 307,
  "Lynel Spear":                  320,
  "Mighty Lynel Spear":           321,
  "Savage Lynel Spear":           322,
  "Drillshaft":                   298,
  "Feathered Spear":              299,
  // ── Bows ───────────────────────────────────────────────────
  "Traveler's Bow":               325,
  "Soldier's Bow":                326,
  "Knight's Bow":                 327,
  "Royal Bow":                    328,
  "Royal Guard's Bow":            337,
  "Forest Dweller's Bow":         329,
  "Silver Bow":                   330,
  "Swallow Bow":                  331,
  "Falcon Bow":                   332,
  "Great Eagle Bow":              333,
  "Golden Bow":                   334,
  "Phrenic Bow":                  335,
  "Ancient Bow":                  336,
  "Lynel Bow":                    344,
  "Mighty Lynel Bow":             345,
  "Savage Lynel Bow":             346,
  "Duplex Bow":                   347,
  "Wooden Bow":                   324,
  "Lizal Bow":                    341,
  "Steel Lizal Bow":              343,
  "Strengthened Lizal Bow":       342,
  "Spiked Boko Bow":              339,
  "Dragon Bone Boko Bow":         340,
  "Boko Bow":                     338,
  // ── Shields ────────────────────────────────────────────────
  "Traveler's Shield":            360,
  "Soldier's Shield":             361,
  "Knight's Shield":              362,
  "Royal Shield":                 363,
  "Royal Guard's Shield":         373,
  "Forest Dweller's Shield":      364,
  "Silver Shield":                365,
  "Kite Shield":                  366,
  "Gerudo Shield":                367,
  "Radiant Shield":               368,
  "Daybreaker":                   369,
  "Shield of the Mind's Eye":     370,
  "Hylian Shield":                354,
  "Pot Lid":                      355,
  "Wooden Shield":                356,
  "Emblazoned Shield":            357,
  "Hunter's Shield":              358,
  "Fisherman's Shield":           359,
  "Rusty Shield":                 372,
  "Ancient Shield":               371,
  "Guardian Shield":              380,
  "Guardian Shield+":             381,
  "Guardian Shield++":            382,
  "Lynel Shield":                 383,
  "Mighty Lynel Shield":          384,
  "Savage Lynel Shield":          385,
  "Boko Shield":                  374,
  "Spiked Boko Shield":           375,
  "Dragonbone Boko Shield":       376,
  "Lizal Shield":                 377,
  "Reinforced Lizal Shield":      378,
  "Steel Lizal Shield":           379,
};

type FallbackType = "weapon" | "bow" | "shield" | "armor";

const FALLBACK_ICONS: Record<FallbackType, React.ReactNode> = {
  weapon: <Sword      className="h-5 w-5 text-orange-400" />,
  bow:    <Target     className="h-5 w-5 text-sky-400"    />,
  shield: <Shield     className="h-5 w-5 text-violet-400" />,
  armor:  <Navigation className="h-5 w-5 text-amber-400"  />,
};

interface ItemImageProps {
  name: string;
  type?: FallbackType;
  size?: number;
  className?: string;
}

export function ItemImage({ name, type = "weapon", size = 36, className = "" }: ItemImageProps) {
  const [failed, setFailed] = useState(false);

  const compendiumId = COMPENDIUM_IDS[name];

  const fallback = (
    <div
      style={{ width: size, height: size, minWidth: size }}
      className={`rounded bg-muted/40 flex items-center justify-center ${className}`}
    >
      {FALLBACK_ICONS[type]}
    </div>
  );

  if (!compendiumId || failed) return fallback;

  return (
    <img
      src={compendiumUrl(compendiumId)}
      alt={name}
      title={name}
      style={{ width: size, height: size, minWidth: size, objectFit: "contain" }}
      className={`rounded bg-muted/10 ${className}`}
      onError={() => setFailed(true)}
      loading="lazy"
    />
  );
}
