export const WALKTHROUGH_STEPS = [
  {
    id: "great-sky-island",
    title: "The Great Sky Island",
    icon: "cloud",
    description: "Your journey begins in the sky. Master your new abilities.",
    steps: [
      "Awaken in the Room of Awakening on the Great Sky Island.",
      "Find the Ukouh Shrine (0274, -0913, 1460) to unlock Ultrahand.",
      "Navigate to In Isa Shrine (0027, -1503, 1408) to unlock Fuse.",
      "Climb the snowy peaks to Gutanbac Shrine (0709, -1381, 1584) to unlock Ascend.",
      "Return to the Temple of Time and access Nachoyah Shrine (0388, -1660, 2299) to unlock Recall.",
      "Speak with Rauru and receive the Paraglider before diving from the sky.",
    ],
  },
  {
    id: "hyrule-descent",
    title: "To the Kingdom of Hyrule",
    icon: "map",
    description: "Dive below the clouds and establish a base of operations.",
    steps: [
      "Dive from the Temple of Time platform into Central Hyrule.",
      "Land near Central Hyrule and make your way to Lookout Landing (-0244, 0057, 0021).",
      "Speak with Purah to receive the Paraglider.",
      "Activate the Lookout Landing Skyview Tower (-0244, 0109, 0021) to unlock the map.",
      "Speak with Josha in Lookout Landing to learn about the Regional Phenomena.",
      "Follow Hoz to start the 'Crisis at Hyrule Castle' quest.",
    ],
  },
  {
    id: "regional-phenomena",
    title: "Regional Phenomena",
    icon: "wind",
    description: "Investigate the four regions plagued by sudden disasters.",
    steps: [
      "Rito Village — Wind Temple: Reach Rito Village (-3608, 1843, 0232), escort Tulin through the storm, defeat Colgera → Sage of Wind.",
      "Goron City — Fire Temple: Reach Goron City (1638, 2460, 0382), cure Yunobo, navigate Fire Temple, defeat Marbled Gohma → Sage of Fire.",
      "Zora's Domain — Water Temple: Reach Zora's Domain (3289, 0600, 0270), use Sidon's power, defeat Mucktorok → Sage of Water.",
      "Gerudo Town — Lightning Temple: Reach Gerudo Town (-3731, -2920, 0015), cure the Gibdo Plague, defeat Queen Gibdo → Sage of Lightning.",
    ],
  },
  {
    id: "gloom-lair",
    title: "Into the Depths",
    icon: "moon",
    description: "Descend into the Gloom's Lair and face the Demon King.",
    steps: [
      "Complete the 'Tears of the Dragon' quest — find all 12 Dragon's Tears geoglyphs.",
      "Head to Hyrule Castle and enter the Gloom Lair through the main floor breach.",
      "Battle the Demon King's Phantom (Ganondorf armored form) in the Depths.",
      "Face Demon Dragon Ganondorf in the sky above Hyrule.",
      "Reunite with Zelda in the game's ending sequence.",
    ],
  },
];

export const SHRINES = [
  { id: "ukouh", name: "Ukouh Shrine", region: "Sky Islands", type: "Puzzle", hint: "The Ability to Create", coords: "0274, -0913, 1460" },
  { id: "in-isa", name: "In Isa Shrine", region: "Sky Islands", type: "Puzzle", hint: "The Ability to Combine", coords: "0027, -1503, 1408" },
  { id: "gutanbac", name: "Gutanbac Shrine", region: "Sky Islands", type: "Puzzle", hint: "The Ability to Rise", coords: "0709, -1381, 1584" },
  { id: "nachoyah", name: "Nachoyah Shrine", region: "Sky Islands", type: "Puzzle", hint: "The Ability to Rewind", coords: "0388, -1660, 2299" },
  { id: "kyononis", name: "Kyononis Shrine", region: "Central Hyrule", type: "Combat", hint: "Combat Training", coords: "-0205, 0451, 0021" },
  { id: "sinakawak", name: "Sinakawak Shrine", region: "Central Hyrule", type: "Puzzle", hint: "Uplifting Device", coords: "-1413, 0756, 0089" },
  { id: "jiosin", name: "Jiosin Shrine", region: "Central Hyrule", type: "Puzzle", hint: "Shape Cycling", coords: "-0545, 0185, 0027" },
  { id: "nouda", name: "Nouda Shrine", region: "Central Hyrule", type: "Blessing", hint: "Rauru's Blessing", coords: "-0777, -0286, 0041" },
  { id: "noclaf", name: "Noclaf Shrine", region: "Central Hyrule", type: "Puzzle", hint: "Push and Pull", coords: "0219, 0183, 0021" },
  { id: "riogok", name: "Riogok Shrine", region: "Central Hyrule", type: "Puzzle", hint: "Force Transfer", coords: "0773, 0523, 0050" },
  { id: "sifumim", name: "Sifumim Shrine", region: "Central Hyrule", type: "Puzzle", hint: "Proving Grounds: Rotation", coords: "1237, -0040, 0012" },
  { id: "susuyai", name: "Susuyai Shrine", region: "Central Hyrule", type: "Combat", hint: "A Battle Won", coords: "-0534, -0581, 0012" },
  { id: "tajikats", name: "Tajikats Shrine", region: "Central Hyrule", type: "Puzzle", hint: "Building With Logs", coords: "-1085, -0569, 0027" },
  { id: "domizuin", name: "Domizuin Shrine", region: "Akkala", type: "Puzzle", hint: "Proving Grounds: Rotation", coords: "4280, 2756, 0253" },
  { id: "ishodag", name: "Ishodag Shrine", region: "Akkala", type: "Puzzle", hint: "The Compass Toward Heaven", coords: "3614, 2998, 0242" },
  { id: "jochi-iu", name: "Jochi-iu Shrine", region: "Akkala", type: "Blessing", hint: "Rauru's Blessing", coords: "4595, 2715, 0027" },
  { id: "rasitakiwak", name: "Rasitakiwak Shrine", region: "Akkala", type: "Puzzle", hint: "Proving Grounds: Flow", coords: "4280, 3482, 0162" },
  { id: "ekochiu", name: "Ekochiu Shrine", region: "Eldin", type: "Puzzle", hint: "Rise and Plow", coords: "1699, 1928, 0316" },
  { id: "marakuguc", name: "Marakuguc Shrine", region: "Eldin", type: "Puzzle", hint: "Wheel Power", coords: "1680, 2706, 0392" },
  { id: "sibajitak", name: "Sibajitak Shrine", region: "Eldin", type: "Puzzle", hint: "Proving Grounds: Smash", coords: "2638, 1757, 0272" },
  { id: "igoshon", name: "Igoshon Shrine", region: "Lanayru", type: "Puzzle", hint: "Orbs of Water", coords: "3480, 0664, 1325" },
  { id: "jojon", name: "Jojon Shrine", region: "Lanayru", type: "Puzzle", hint: "The Turning Gears", coords: "2854, 0528, 0039" },
  { id: "mogawak", name: "Mogawak Shrine", region: "Lanayru", type: "Puzzle", hint: "The Power of Water", coords: "3627, 0399, 0041" },
  { id: "morok", name: "Morok Shrine", region: "Lanayru", type: "Combat", hint: "A Pouncing Devil", coords: "3825, 1292, 0350" },
  { id: "esisi", name: "Esisi Shrine", region: "Necluda", type: "Puzzle", hint: "The East Wind", coords: "2975, -1738, 0025" },
  { id: "jirutagumac", name: "Jirutagumac Shrine", region: "Necluda", type: "Puzzle", hint: "Orbs in a Box", coords: "2228, -2524, 0218" },
  { id: "musanokir", name: "Musanokir Shrine", region: "Necluda", type: "Puzzle", hint: "A Swinging Flame", coords: "2344, -3178, 0017" },
  { id: "ishokin", name: "Ishokin Shrine", region: "Faron", type: "Puzzle", hint: "Proving Grounds: Shortsword", coords: "2072, -3291, 0025" },
  { id: "mayachin", name: "Mayachin Shrine", region: "Faron", type: "Puzzle", hint: "A Fixed Device", coords: "1323, -2793, 0025" },
  { id: "rabella", name: "Rabella Wetlands Shrine", region: "Faron", type: "Puzzle", hint: "Turbine Power", coords: "1956, -3481, 0025" },
  { id: "a-koji", name: "A-Koji Shrine", region: "Hebra", type: "Puzzle", hint: "An Uplifting Device", coords: "-3505, 3325, 0354" },
  { id: "gatanisis", name: "Gatanisis Shrine", region: "Hebra", type: "Puzzle", hint: "Riding the Wind", coords: "-2859, 3057, 0277" },
  { id: "tadarok", name: "Tadarok Shrine", region: "Hebra", type: "Puzzle", hint: "Fire and Ice", coords: "-1981, 2781, 0541" },
  { id: "turakawak", name: "Turakawak Shrine", region: "Hebra", type: "Blessing", hint: "Rauru's Blessing", coords: "-3500, 1650, 0225" },
  { id: "imacna", name: "Imacna Shrine", region: "Gerudo", type: "Blessing", hint: "Rauru's Blessing", coords: "-5046, -3396, 0105" },
  { id: "irasak", name: "Irasak Shrine", region: "Gerudo", type: "Puzzle", hint: "Proving Grounds: Rotation", coords: "-3832, -1347, 0024" },
  { id: "juney", name: "Juney Shrine", region: "Gerudo", type: "Puzzle", hint: "Power in Numbers", coords: "-4756, -2326, 0024" },
  { id: "mayanas", name: "Mayanas Shrine", region: "Gerudo", type: "Puzzle", hint: "A Song of Passing Seasons", coords: "-3823, -3547, 0024" },
  { id: "motsusis", name: "Motsusis Shrine", region: "Gerudo", type: "Puzzle", hint: "There and Back Again", coords: "-3590, -2630, 0024" },
  { id: "sepapa", name: "Sepapa Shrine", region: "Gerudo", type: "Puzzle", hint: "The Right-Hand Rule", coords: "-2726, -2245, 0024" },
];

export interface Weapon {
  id: string; name: string; type: string; attack: number; durability: number; effect: string; location: string; coords: string;
}

export const WEAPONS: Weapon[] = [
  { id: "travelers-sword", name: "Traveler's Sword", type: "One-Handed", attack: 4, durability: 27, effect: "None", location: "Great Sky Island tutorial chest", coords: "0105, -1400, 1419" },
  { id: "soldiers-broadsword", name: "Soldier's Broadsword", type: "One-Handed", attack: 14, durability: 30, effect: "None", location: "Hyrule Castle grounds enemy drop", coords: "-0766, 0994, 0107" },
  { id: "knights-broadsword", name: "Knight's Broadsword", type: "One-Handed", attack: 18, durability: 33, effect: "None", location: "Akkala Citadel Ruins chest", coords: "3859, 3102, 0121" },
  { id: "royal-broadsword", name: "Royal Broadsword", type: "One-Handed", attack: 24, durability: 36, effect: "None", location: "Hyrule Castle Sanctum chest", coords: "-0101, 1135, 0124" },
  { id: "royal-guard-sword", name: "Royal Guard's Sword", type: "One-Handed", attack: 48, durability: 14, effect: "Breaking Point — massive dmg near break", location: "Hyrule Castle Armory chest", coords: "-0380, 1053, 0107" },
  { id: "master-sword", name: "Master Sword", type: "One-Handed", attack: 30, durability: 999, effect: "Recharges; glows near Gloom; beams at full HP", location: "Light Dragon's head (2 full stamina wheels)", coords: "0000, 0000, 1000" },
  { id: "scimitar-of-seven", name: "Scimitar of the Seven", type: "One-Handed", attack: 28, durability: 60, effect: "Strong Fusion — doubles fuse atk bonus", location: "Gerudo Town, Isha's Jewelry (post-Regional)", coords: "-3731, -2920, 0015" },
  { id: "gloom-sword", name: "Gloom Sword", type: "One-Handed", attack: 41, durability: 15, effect: "Gloom Toll — drains permanent hearts", location: "Phantom Ganon drop (post Gloom Hands)", coords: "-0116, 0984, 0100" },
  { id: "travelers-claymore", name: "Traveler's Claymore", type: "Two-Handed", attack: 8, durability: 30, effect: "None", location: "Necluda road chest", coords: "1820, -2010, 0050" },
  { id: "royal-claymore", name: "Royal Claymore", type: "Two-Handed", attack: 28, durability: 40, effect: "None", location: "Hyrule Castle Throne Room chest", coords: "-0094, 1225, 0107" },
  { id: "gloom-claymore", name: "Gloom Claymore", type: "Two-Handed", attack: 54, durability: 15, effect: "Gloom Toll — drains permanent hearts", location: "Phantom Ganon drop, Depths Coliseum", coords: "-1048, -0840, -0500" },
  { id: "savage-lynel-crusher", name: "Savage Lynel Crusher", type: "Two-Handed", attack: 78, durability: 45, effect: "None", location: "White-Maned/Silver Lynel drop", coords: "-0390, -0655, -0400" },
  { id: "boulder-breaker", name: "Boulder Breaker", type: "Two-Handed", attack: 38, durability: 30, effect: "Increased digging damage; rebuild via Fugo", location: "Goron City (regional reward)", coords: "1653, 2434, 0380" },
  { id: "travelers-spear", name: "Traveler's Spear", type: "Spear", attack: 4, durability: 24, effect: "None", location: "Akkala camp chest", coords: "3860, 2460, 0128" },
  { id: "royal-halberd", name: "Royal Halberd", type: "Spear", attack: 26, durability: 33, effect: "None", location: "Hyrule Castle East wing chest", coords: "-0030, 1230, 0208" },
  { id: "lightscale-trident", name: "Lightscale Trident", type: "Spear", attack: 22, durability: 60, effect: "None; rebuild via Dento smith", location: "Zora's Domain reward (Sidon's quest)", coords: "3289, 0600, 0270" },
  { id: "savage-lynel-spear", name: "Savage Lynel Spear", type: "Spear", attack: 30, durability: 35, effect: "None", location: "White-Maned/Silver Lynel drop", coords: "-0390, -0655, -0400" },
  { id: "zonaite-spear", name: "Zonaite Spear", type: "Spear", attack: 14, durability: 35, effect: "Fuse bonus doubled", location: "Sky Island construct drop / Zonai ruins chest", coords: "0612, -0913, 1460" },
];

export interface Bow {
  id: string; name: string; attack: number; durability: number; range: string; multishot: string; effect: string; location: string; coords: string;
}

export const BOWS: Bow[] = [
  { id: "travelers-bow", name: "Traveler's Bow", attack: 5, durability: 20, range: "Medium", multishot: "1x", effect: "None", location: "Necluda road chest / common enemy drop", coords: "2050, -1870, 0090" },
  { id: "royal-bow", name: "Royal Bow", attack: 38, durability: 25, range: "Long", multishot: "1x", effect: "None", location: "Hyrule Castle grounds chest", coords: "-0680, 1004, 0140" },
  { id: "great-eagle-bow", name: "Great Eagle Bow", attack: 28, durability: 60, range: "Long", multishot: "3x", effect: "3x arrows, fastest draw; rebuild via Harth", location: "Rito Village (Teba's quest reward)", coords: "-3610, 1960, 0242" },
  { id: "falcon-bow", name: "Falcon Bow", attack: 18, durability: 30, range: "Long", multishot: "1x", effect: "Fastest draw speed in game", location: "Rito Village elite chest", coords: "-3611, 1831, 0274" },
  { id: "savage-lynel-bow", name: "Savage Lynel Bow", attack: 32, durability: 45, range: "Long", multishot: "5x", effect: "5 arrows per shot (White/Silver Lynel)", location: "White-Maned/Silver Lynel drop", coords: "-0390, -0655, -0400" },
  { id: "phrenic-bow", name: "Phrenic Bow", attack: 8, durability: 30, range: "Long", multishot: "1x", effect: "Zoom scope", location: "Hyrule Ridge cave chest", coords: "-2138, -0390, 0233" },
  { id: "duplex-bow", name: "Duplex Bow", attack: 14, durability: 26, range: "Long", multishot: "2x", effect: "Fires 2 arrows simultaneously", location: "East Necluda Silver Lizalfos drop", coords: "2800, -1400, 0020" },
  { id: "zonaite-bow", name: "Zonaite Bow", attack: 14, durability: 35, range: "Medium", multishot: "1x", effect: "Fuse bonus doubled", location: "Sky Island Zonai chest", coords: "0612, -0913, 1460" },
];

export interface Shield {
  id: string; name: string; defense: number; durability: number; effect: string; location: string; coords: string;
}

export const SHIELDS: Shield[] = [
  { id: "travelers-shield", name: "Traveler's Shield", defense: 3, durability: 27, effect: "None", location: "Great Sky Island tutorial chest", coords: "0105, -1400, 1419" },
  { id: "royal-shield", name: "Royal Shield", defense: 55, durability: 36, effect: "None", location: "Hyrule Castle Sanctum chest", coords: "-0101, 1135, 0124" },
  { id: "hylian-shield", name: "Hylian Shield", defense: 90, durability: 800, effect: "Highest defense and durability in the game", location: "Hyrule Castle docks locked chest", coords: "-0219, 0716, -0025" },
  { id: "royal-guard-shield", name: "Royal Guard's Shield", defense: 70, durability: 14, effect: "Breaking Point — max reflect power near break", location: "Hyrule Castle Sanctum chest", coords: "-0101, 1200, 0124" },
  { id: "daybreaker", name: "Daybreaker", defense: 48, durability: 60, effect: "High durability; rebuild via Isha", location: "Gerudo Town, Isha reward (post-Regional)", coords: "-3731, -2920, 0015" },
  { id: "gloom-shield", name: "Gloom Shield", defense: 20, durability: 15, effect: "Gloom Toll on block", location: "Phantom Ganon drop", coords: "-0116, 0984, 0100" },
  { id: "savage-lynel-shield", name: "Savage Lynel Shield", defense: 62, durability: 50, effect: "None", location: "White-Maned/Silver Lynel drop, Colosseum", coords: "-0390, -0655, -0400" },
  { id: "zonaite-shield", name: "Zonaite Shield", defense: 14, durability: 40, effect: "Fuse bonus doubled", location: "Sky Island Zonai device chest", coords: "0715, -1368, 1584" },
];

export interface ArmorPiece {
  name: string; defense: number; maxDefense: number; location: string; coords: string;
}
export interface UpgradeTier {
  star: 1 | 2 | 3 | 4; materials: string[];
}
export interface ArmorSet {
  id: string; name: string; maxStars: number; upgradeTiers: UpgradeTier[]; pieces: ArmorPiece[]; effect: string; setBonus: string; upgradeBonus: string; imageUrl?: string;
}

const ARMOR_IMG = (id: string) =>
  `https://raw.githubusercontent.com/mekaziah/totk-guide/main/artifacts/totk-guide/public/armor/${id}.png`;

export const ARMOR: ArmorSet[] = [
  {
    id: "hylian", name: "Hylian Set", maxStars: 4, imageUrl: ARMOR_IMG("hylian"),
    effect: "None", setBonus: "None", upgradeBonus: "Increases base defense each tier",
    upgradeTiers: [
      { star: 1, materials: ["3× Bokoblin Horn"] },
      { star: 2, materials: ["5× Bokoblin Fang"] },
      { star: 3, materials: ["5× Bokoblin Guts", "2× Amber"] },
      { star: 4, materials: ["10× Bokoblin Guts", "2× Opal"] },
    ],
    pieces: [
      { name: "Hylian Hood", defense: 3, maxDefense: 20, location: "Lookout Landing shop (70 rupees)", coords: "-0157, -0012, 0017" },
      { name: "Hylian Tunic", defense: 3, maxDefense: 20, location: "Lookout Landing shop (130 rupees)", coords: "-0157, -0012, 0017" },
      { name: "Hylian Trousers", defense: 3, maxDefense: 20, location: "Lookout Landing shop (70 rupees)", coords: "-0157, -0012, 0017" },
    ],
  },
  {
    id: "snowquill", name: "Snowquill Set", maxStars: 4, imageUrl: ARMOR_IMG("snowquill"),
    effect: "Cold Resistance", setBonus: "Unfreezable", upgradeBonus: "Tier 2 grants Unfreezable set bonus",
    upgradeTiers: [
      { star: 1, materials: ["3× Blue Chuchu Jelly"] },
      { star: 2, materials: ["5× Blue Chuchu Jelly", "3× Flint"] },
      { star: 3, materials: ["5× Ice Keese Wing", "3× Amber"] },
      { star: 4, materials: ["10× Ice Keese Wing", "3× Sapphire"] },
    ],
    pieces: [
      { name: "Snowquill Headdress", defense: 3, maxDefense: 20, location: "Rito Village — Nekk's shop (500 rupees)", coords: "-3608, 1843, 0232" },
      { name: "Snowquill Tunic", defense: 3, maxDefense: 20, location: "Rito Village — Nekk's shop (600 rupees)", coords: "-3608, 1843, 0232" },
      { name: "Snowquill Trousers", defense: 3, maxDefense: 20, location: "Rito Village — Nekk's shop (500 rupees)", coords: "-3608, 1843, 0232" },
    ],
  },
  {
    id: "flamebreaker", name: "Flamebreaker Set", maxStars: 4, imageUrl: ARMOR_IMG("flamebreaker"),
    effect: "Flame Guard", setBonus: "Fireproof", upgradeBonus: "Tier 2 grants Fireproof set bonus",
    upgradeTiers: [
      { star: 1, materials: ["1× Fireproof Lizard"] },
      { star: 2, materials: ["3× Fireproof Lizard", "3× Moblin Horn"] },
      { star: 3, materials: ["3× Smotherwing Butterfly", "2× Hinox Toenail"] },
      { star: 4, materials: ["5× Smotherwing Butterfly", "2× Hinox Guts"] },
    ],
    pieces: [
      { name: "Flamebreaker Helm", defense: 3, maxDefense: 20, location: "Goron City — Ravio's Shop (600 rupees)", coords: "1638, 2460, 0382" },
      { name: "Flamebreaker Armor", defense: 5, maxDefense: 20, location: "Goron City — Ravio's Shop (700 rupees)", coords: "1638, 2460, 0382" },
      { name: "Flamebreaker Boots", defense: 3, maxDefense: 20, location: "Goron City — Ravio's Shop (600 rupees)", coords: "1638, 2460, 0382" },
    ],
  },
  {
    id: "zora", name: "Zora Set", maxStars: 4, imageUrl: ARMOR_IMG("zora"),
    effect: "Swim Speed Up", setBonus: "Waterfall Climb", upgradeBonus: "Tier 2 grants Waterfall Climb set bonus",
    upgradeTiers: [
      { star: 1, materials: ["3× Lizalfos Horn"] },
      { star: 2, materials: ["3× Lizalfos Talon", "3× Opal"] },
      { star: 3, materials: ["5× Lizalfos Tail", "3× Opal"] },
      { star: 4, materials: ["5× Lizalfos Tail", "5× Diamond"] },
    ],
    pieces: [
      { name: "Zora Helm", defense: 3, maxDefense: 20, location: "Toto Lake underwater chest (Sidon's questline)", coords: "3476, 0520, 0088" },
      { name: "Zora Armor", defense: 3, maxDefense: 20, location: "Zora's Domain — reward from King Dorephan quest", coords: "3289, 0600, 0270" },
      { name: "Zora Greaves", defense: 3, maxDefense: 20, location: "Zora's Domain — chest in Mipha's Court (sky)", coords: "3614, 0736, 1065" },
    ],
  },
  {
    id: "barbarian", name: "Barbarian Set", maxStars: 4, imageUrl: ARMOR_IMG("barbarian"),
    effect: "Attack Up", setBonus: "Charge Attack Stamina Up", upgradeBonus: "Tier 2 grants Charge Attack Stamina Up",
    upgradeTiers: [
      { star: 1, materials: ["3× Lynel Horn"] },
      { star: 2, materials: ["3× Lynel Hoof"] },
      { star: 3, materials: ["3× Lynel Guts", "2× Amber"] },
      { star: 4, materials: ["5× Lynel Guts", "3× Ruby"] },
    ],
    pieces: [
      { name: "Barbarian Helm", defense: 3, maxDefense: 20, location: "Crenel Hills cave (through false wall puzzle)", coords: "-0148, 1250, 0148" },
      { name: "Barbarian Armor", defense: 3, maxDefense: 20, location: "Dracozu Lake shrine ruins cave chest", coords: "1548, -2630, 0025" },
      { name: "Barbarian Leg Wraps", defense: 3, maxDefense: 20, location: "Robred Dropoff cave chest — East Faron", coords: "1830, -2970, 0025" },
    ],
  },
  {
    id: "stealth", name: "Stealth Set", maxStars: 4, imageUrl: ARMOR_IMG("stealth"),
    effect: "Stealth Up", setBonus: "Night Speed Up", upgradeBonus: "Tier 2 grants Night Speed Up set bonus",
    upgradeTiers: [
      { star: 1, materials: ["3× Sunset Firefly"] },
      { star: 2, materials: ["5× Sunset Firefly", "3× Amber"] },
      { star: 3, materials: ["3× Silent Princess", "3× Opal"] },
      { star: 4, materials: ["5× Silent Princess", "5× Diamond"] },
    ],
    pieces: [
      { name: "Stealth Mask", defense: 3, maxDefense: 20, location: "Kakariko Village cave chest", coords: "1816, -1030, 0116" },
      { name: "Stealth Chest Guard", defense: 3, maxDefense: 20, location: "Kakariko Village shop (Enchanted, 500 rupees)", coords: "1816, -1030, 0116" },
      { name: "Stealth Tights", defense: 3, maxDefense: 20, location: "Kakariko Village shop (Enchanted, 400 rupees)", coords: "1816, -1030, 0116" },
    ],
  },
  {
    id: "rubber", name: "Rubber Set", maxStars: 4, imageUrl: ARMOR_IMG("rubber"),
    effect: "Shock Resistance", setBonus: "Unshockable", upgradeBonus: "Tier 2 grants Unshockable set bonus",
    upgradeTiers: [
      { star: 1, materials: ["3× Yellow Chuchu Jelly"] },
      { star: 2, materials: ["5× Yellow Chuchu Jelly", "3× Flint"] },
      { star: 3, materials: ["5× Electric Keese Wing", "3× Topaz"] },
      { star: 4, materials: ["10× Electric Lizalfos Tail", "3× Topaz"] },
    ],
    pieces: [
      { name: "Rubber Helm", defense: 3, maxDefense: 20, location: "Lanayru Sky Island puzzle chest", coords: "3480, 0664, 1325" },
      { name: "Rubber Armor", defense: 3, maxDefense: 20, location: "Whistling Hill cave chest", coords: "-0915, -0175, 0043" },
      { name: "Rubber Tights", defense: 3, maxDefense: 20, location: "Lakeside Stable cave puzzle chest", coords: "1720, -3490, 0055" },
    ],
  },
  {
    id: "climbing", name: "Climbing Gear", maxStars: 4, imageUrl: ARMOR_IMG("climbing"),
    effect: "Climb Speed Up", setBonus: "Climber's Stamina (sprint-jump while climbing)", upgradeBonus: "Tier 2 grants sprint-jump climbing bonus",
    upgradeTiers: [
      { star: 1, materials: ["3× Lizalfos Horn"] },
      { star: 2, materials: ["5× Lizalfos Talon", "3× Flint"] },
      { star: 3, materials: ["5× Lizalfos Guts", "3× Amber"] },
      { star: 4, materials: ["5× Lizalfos Tail", "3× Diamond"] },
    ],
    pieces: [
      { name: "Climbing Bandana", defense: 3, maxDefense: 20, location: "Ploymus Mountain cave chest", coords: "3561, 0765, 0392" },
      { name: "Climbing Gear", defense: 3, maxDefense: 20, location: "Upland Lindor cave chest", coords: "-1574, 1336, 0272" },
      { name: "Climbing Boots", defense: 3, maxDefense: 20, location: "Trilby Valley cave chest", coords: "-1572, -0099, 0172" },
    ],
  },
];

export const TRACKER_CATEGORIES = [
  {
    id: "shrines",
    label: "Shrines",
    icon: "triangle",
    total: 152,
    items: SHRINES.map(s => ({ id: s.id, label: s.name, sublabel: s.region })),
  },
  {
    id: "korok-seeds",
    label: "Korok Seeds",
    icon: "leaf",
    total: 1000,
    items: Array.from({ length: 1000 }, (_, i) => ({ id: `korok-${i + 1}`, label: `Korok Seed #${i + 1}`, sublabel: "" })),
  },
  {
    id: "lightroots",
    label: "Lightroots",
    icon: "sun",
    total: 120,
    items: Array.from({ length: 120 }, (_, i) => ({ id: `lightroot-${i + 1}`, label: `Lightroot #${i + 1}`, sublabel: "The Depths" })),
  },
  {
    id: "memories",
    label: "Dragon's Tears",
    icon: "droplets",
    total: 12,
    items: [
      { id: "mem-1", label: "Tear 1: Thyphlo Ruins", sublabel: "Geoglyph" },
      { id: "mem-2", label: "Tear 2: Akkala Highlands", sublabel: "Geoglyph" },
      { id: "mem-3", label: "Tear 3: Hyrule Ridge", sublabel: "Geoglyph" },
      { id: "mem-4", label: "Tear 4: Tabantha Frontier", sublabel: "Geoglyph" },
      { id: "mem-5", label: "Tear 5: Eldin Mountains", sublabel: "Geoglyph" },
      { id: "mem-6", label: "Tear 6: Lanayru Wetlands", sublabel: "Geoglyph" },
      { id: "mem-7", label: "Tear 7: Lake Hylia", sublabel: "Geoglyph" },
      { id: "mem-8", label: "Tear 8: West Necluda", sublabel: "Geoglyph" },
      { id: "mem-9", label: "Tear 9: Gerudo Highlands", sublabel: "Geoglyph" },
      { id: "mem-10", label: "Tear 10: Faron Grasslands", sublabel: "Geoglyph" },
      { id: "mem-11", label: "Tear 11: South Lanayru", sublabel: "Geoglyph" },
      { id: "mem-12", label: "Tear 12: Rauru's Explanation", sublabel: "Geoglyph" },
    ],
  },
];
