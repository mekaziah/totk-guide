// ─────────────────────────────────────────────────────────────
//  WALKTHROUGH
// ─────────────────────────────────────────────────────────────
export const WALKTHROUGH_STEPS = [
  {
    id: "great-sky-island",
    title: "The Great Sky Island",
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
    description: "Dive below the clouds and establish a base of operations.",
    steps: [
      "Dive from the Temple of Time platform into Central Hyrule.",
      "Land near Central Hyrule and make your way to Lookout Landing (-0244, 0057, 0021).",
      "Speak with Purah to receive the Paraglider (if not already obtained).",
      "Activate the Lookout Landing Skyview Tower (-0244, 0109, 0021) to unlock the map.",
      "Speak with Josha in Lookout Landing to learn about the Regional Phenomena.",
      "Follow Hoz to start the 'Crisis at Hyrule Castle' quest.",
    ],
  },
  {
    id: "regional-phenomena",
    title: "Regional Phenomena",
    description: "Investigate the four regions plagued by sudden disasters.",
    steps: [
      "Rito Village — Wind Temple: Reach Rito Village (-3608, 1843, 0232), escort Tulin through the storm, ascend the vortex to the Wind Temple, defeat Colgera to make Tulin the Sage of Wind.",
      "Goron City — Fire Temple: Reach Goron City (1638, 2460, 0382), cure Yunobo of the Marbled Rock Roast, navigate the Fire Temple in Death Mountain, defeat Marbled Gohma to make Yunobo the Sage of Fire.",
      "Zora's Domain — Water Temple: Reach Zora's Domain (3289, 0600, 0270), use Sidon's power, activate four Water Temples in the sky, defeat Mucktorok to make Sidon the Sage of Water.",
      "Gerudo Town — Lightning Temple: Reach Gerudo Town (-3731, -2920, 0015), cure the Gibdo Plague, navigate the Lightning Temple beneath the sand, defeat Queen Gibdo to make Riju the Sage of Lightning.",
    ],
  },
  {
    id: "gloom-lair",
    title: "Into the Depths",
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

// ─────────────────────────────────────────────────────────────
//  SHRINES  (152 total)
// ─────────────────────────────────────────────────────────────
export const SHRINES = [
  // Sky Islands
  { id: "ukouh",        name: "Ukouh Shrine",        region: "Sky Islands",       type: "Puzzle",   hint: "The Ability to Create",   coords: "0274, -0913, 1460" },
  { id: "in-isa",       name: "In Isa Shrine",        region: "Sky Islands",       type: "Puzzle",   hint: "The Ability to Combine",  coords: "0027, -1503, 1408" },
  { id: "gutanbac",     name: "Gutanbac Shrine",      region: "Sky Islands",       type: "Puzzle",   hint: "The Ability to Rise",     coords: "0709, -1381, 1584" },
  { id: "nachoyah",     name: "Nachoyah Shrine",      region: "Sky Islands",       type: "Puzzle",   hint: "The Ability to Rewind",   coords: "0388, -1660, 2299" },
  // Central Hyrule
  { id: "kyononis",     name: "Kyononis Shrine",      region: "Central Hyrule",    type: "Combat",   hint: "Combat Training",         coords: "-0205, 0451, 0021" },
  { id: "sinakawak",    name: "Sinakawak Shrine",     region: "Central Hyrule",    type: "Puzzle",   hint: "Uplifting Device",        coords: "-1413, 0756, 0089" },
  { id: "jiosin",       name: "Jiosin Shrine",        region: "Central Hyrule",    type: "Puzzle",   hint: "Shape Cycling",           coords: "-0545, 0185, 0027" },
  { id: "nouda",        name: "Nouda Shrine",         region: "Central Hyrule",    type: "Blessing", hint: "Rauru's Blessing",        coords: "-0777, -0286, 0041" },
  { id: "noclaf",       name: "Noclaf Shrine",        region: "Central Hyrule",    type: "Puzzle",   hint: "Push and Pull",           coords: "0219, 0183, 0021" },
  { id: "riogok",       name: "Riogok Shrine",        region: "Central Hyrule",    type: "Puzzle",   hint: "Force Transfer",          coords: "0773, 0523, 0050" },
  { id: "sifumim",      name: "Sifumim Shrine",       region: "Central Hyrule",    type: "Puzzle",   hint: "Proving Grounds: Rotation", coords: "1237, -0040, 0012" },
  { id: "susuyai",      name: "Susuyai Shrine",       region: "Central Hyrule",    type: "Combat",   hint: "A Battle Won",            coords: "-0534, -0581, 0012" },
  { id: "tajikats",     name: "Tajikats Shrine",      region: "Central Hyrule",    type: "Puzzle",   hint: "Building With Logs",      coords: "-1085, -0569, 0027" },
  { id: "tenmaten",     name: "Tenmaten Shrine",      region: "Central Hyrule",    type: "Combat",   hint: "A Quest Worth Taking",    coords: "-0534, 0764, 0039" },
  { id: "tikisin",      name: "Tikisin Shrine",       region: "Central Hyrule",    type: "Blessing", hint: "Rauru's Blessing",        coords: "-1277, 0040, 0041" },
  // Akkala
  { id: "domizuin",     name: "Domizuin Shrine",      region: "Akkala",            type: "Puzzle",   hint: "Proving Grounds: Rotation", coords: "4280, 2756, 0253" },
  { id: "ishodag",      name: "Ishodag Shrine",       region: "Akkala",            type: "Puzzle",   hint: "The Compass Toward Heaven", coords: "3614, 2998, 0242" },
  { id: "jochi-iu",     name: "Jochi-iu Shrine",      region: "Akkala",            type: "Blessing", hint: "Rauru's Blessing",        coords: "4595, 2715, 0027" },
  { id: "rasitakiwak",  name: "Rasitakiwak Shrine",   region: "Akkala",            type: "Puzzle",   hint: "Proving Grounds: Flow",   coords: "4280, 3482, 0162" },
  { id: "tarrey-town",  name: "Tarrey Town Shrine",   region: "Akkala",            type: "Blessing", hint: "Rauru's Blessing",        coords: "3993, 1631, 0103" },
  // Eldin
  { id: "ekochiu",      name: "Ekochiu Shrine",       region: "Eldin",             type: "Puzzle",   hint: "Rise and Plow",           coords: "1699, 1928, 0316" },
  { id: "ifodine",      name: "Ifodine Shrine",       region: "Eldin",             type: "Blessing", hint: "Rauru's Blessing",        coords: "2350, 2875, 0793" },
  { id: "marakuguc",    name: "Marakuguc Shrine",     region: "Eldin",             type: "Puzzle",   hint: "Wheel Power",             coords: "1680, 2706, 0392" },
  { id: "sibajitak",    name: "Sibajitak Shrine",     region: "Eldin",             type: "Puzzle",   hint: "Proving Grounds: Smash",  coords: "2638, 1757, 0272" },
  { id: "sitsum",       name: "Sitsum Shrine",        region: "Eldin",             type: "Puzzle",   hint: "A Controlling Device",    coords: "2369, 2595, 0790" },
  { id: "zokassa",      name: "Zokassa Shrine",       region: "Eldin",             type: "Puzzle",   hint: "Proving Grounds: Smash",  coords: "1810, 1255, 0147" },
  // Lanayru
  { id: "igoshon",      name: "Igoshon Shrine",       region: "Lanayru",           type: "Puzzle",   hint: "Orbs of Water",           coords: "3480, 0664, 1325" },
  { id: "iun-orok",     name: "Iun-orok Shrine",      region: "Lanayru",           type: "Blessing", hint: "Rauru's Blessing",        coords: "4427, 0594, 0137" },
  { id: "jojon",        name: "Jojon Shrine",         region: "Lanayru",           type: "Puzzle",   hint: "The Turning Gears",       coords: "2854, 0528, 0039" },
  { id: "jochisiu",     name: "Jochisiu Shrine",      region: "Lanayru",           type: "Puzzle",   hint: "Horizontal Spinning",     coords: "3522, -0098, 0152" },
  { id: "makasura",     name: "Makasura Shrine",      region: "Lanayru",           type: "Puzzle",   hint: "An Upright Device",       coords: "3344, -0614, 0041" },
  { id: "mogawak",      name: "Mogawak Shrine",       region: "Lanayru",           type: "Puzzle",   hint: "The Power of Water",      coords: "3627, 0399, 0041" },
  { id: "morok",        name: "Morok Shrine",         region: "Lanayru",           type: "Combat",   hint: "A Pouncing Devil",        coords: "3825, 1292, 0350" },
  { id: "rasiwak",      name: "Rasiwak Shrine",       region: "Lanayru",           type: "Puzzle",   hint: "The Right Roll",          coords: "2800, -0500, 0041" },
  { id: "saryonas",     name: "Saryonas Shrine",      region: "Lanayru",           type: "Puzzle",   hint: "Proving Grounds: Infiltration", coords: "3975, -0075, 0041" },
  { id: "zakusu",       name: "Zakusu Shrine",        region: "Lanayru",           type: "Blessing", hint: "Rauru's Blessing",        coords: "3299, 0425, 1016" },
  // Necluda
  { id: "esisi",        name: "Esisi Shrine",         region: "Necluda",           type: "Puzzle",   hint: "The East Wind",           coords: "2975, -1738, 0025" },
  { id: "jirutagumac",  name: "Jirutagumac Shrine",   region: "Necluda",           type: "Puzzle",   hint: "Orbs in a Box",           coords: "2228, -2524, 0218" },
  { id: "joku-u",       name: "Joku-u Shrine",        region: "Necluda",           type: "Blessing", hint: "Rauru's Blessing",        coords: "1375, -3339, 0429" },
  { id: "mogisari",     name: "Mogisari Shrine",      region: "Necluda",           type: "Puzzle",   hint: "Sliding Down",            coords: "1854, -2052, 0025" },
  { id: "musanokir",    name: "Musanokir Shrine",     region: "Necluda",           type: "Puzzle",   hint: "A Swinging Flame",        coords: "2344, -3178, 0017" },
  { id: "orochium",     name: "Orochium Shrine",      region: "Necluda",           type: "Puzzle",   hint: "Breakable Doors",         coords: "3690, -1614, 0341" },
  { id: "rucco-maag",   name: "Rucco Maag Shrine",    region: "Necluda",           type: "Puzzle",   hint: "Five Flames",             coords: "4463, -0785, 0118" },
  // Faron
  { id: "ishokin",      name: "Ishokin Shrine",       region: "Faron",             type: "Puzzle",   hint: "Proving Grounds: Shortsword", coords: "2072, -3291, 0025" },
  { id: "irika",        name: "Irika Shrine",         region: "Faron",             type: "Blessing", hint: "Rauru's Blessing",        coords: "1650, -2528, 0131" },
  { id: "mayachin",     name: "Mayachin Shrine",      region: "Faron",             type: "Puzzle",   hint: "A Fixed Device",          coords: "1323, -2793, 0025" },
  { id: "mossrot",      name: "Mossrot Shrine",       region: "Faron",             type: "Puzzle",   hint: "Proving Grounds: Weighty", coords: "0910, -2697, 0025" },
  { id: "nisoij",       name: "Nisoij Shrine",        region: "Faron",             type: "Blessing", hint: "Rauru's Blessing",        coords: "0693, -2960, 0025" },
  { id: "rabella",      name: "Rabella Wetlands Shrine", region: "Faron",          type: "Puzzle",   hint: "Turbine Power",           coords: "1956, -3481, 0025" },
  { id: "riogim",       name: "Riogim Shrine",        region: "Faron",             type: "Puzzle",   hint: "Buried Light",            coords: "1605, -3490, 0032" },
  // Dueling Peaks / Necluda Approach
  { id: "jinodok",      name: "Jinodok Shrine",       region: "Dueling Peaks",     type: "Puzzle",   hint: "Rolling Boulder",         coords: "1668, -2023, 0025" },
  { id: "oromuwak",     name: "Oromuwak Shrine",      region: "Dueling Peaks",     type: "Puzzle",   hint: "A Spinning Device",       coords: "2068, -1637, 0094" },
  { id: "rotsumamu",    name: "Rotsumamu Shrine",     region: "Dueling Peaks",     type: "Puzzle",   hint: "Down and Around",         coords: "1596, -1576, 0077" },
  // Hebra
  { id: "a-koji",       name: "A-Koji Shrine",        region: "Hebra",             type: "Puzzle",   hint: "An Uplifting Device",     coords: "-3505, 3325, 0354" },
  { id: "gatanisis",    name: "Gatanisis Shrine",     region: "Hebra",             type: "Puzzle",   hint: "Riding the Wind",         coords: "-2859, 3057, 0277" },
  { id: "mayaumekis",   name: "Mayaumekis Shrine",    region: "Hebra",             type: "Puzzle",   hint: "Downward Force",          coords: "-2858, 3053, 0277" },
  { id: "otak",         name: "Otak Shrine",          region: "Hebra",             type: "Puzzle",   hint: "Swiveling Floors",        coords: "-2641, 2543, 0422" },
  { id: "rutafu-om",    name: "Rutafu-om Shrine",     region: "Hebra",             type: "Puzzle",   hint: "Proving Grounds: Lights Out", coords: "-3453, 2005, 0403" },
  { id: "simosiwak",    name: "Simosiwak Shrine",     region: "Hebra",             type: "Puzzle",   hint: "A Sliding Device",        coords: "-2614, 3518, 0547" },
  { id: "tadarok",      name: "Tadarok Shrine",       region: "Hebra",             type: "Puzzle",   hint: "Fire and Ice",            coords: "-1981, 2781, 0541" },
  { id: "turakawak",    name: "Turakawak Shrine",     region: "Hebra",             type: "Blessing", hint: "Rauru's Blessing",        coords: "-3500, 1650, 0225" },
  // Gerudo
  { id: "imacna",       name: "Imacna Shrine",        region: "Gerudo",            type: "Blessing", hint: "Rauru's Blessing",        coords: "-5046, -3396, 0105" },
  { id: "irasak",       name: "Irasak Shrine",        region: "Gerudo",            type: "Puzzle",   hint: "Proving Grounds: Rotation", coords: "-3832, -1347, 0024" },
  { id: "juney",        name: "Juney Shrine",         region: "Gerudo",            type: "Puzzle",   hint: "Power in Numbers",        coords: "-4756, -2326, 0024" },
  { id: "mayanas",      name: "Mayanas Shrine",       region: "Gerudo",            type: "Puzzle",   hint: "A Song of Passing Seasons", coords: "-3823, -3547, 0024" },
  { id: "miryotanog",   name: "Miryotanog Shrine",    region: "Gerudo",            type: "Puzzle",   hint: "Proving Grounds: Lure",   coords: "-4679, -3086, 0054" },
  { id: "motsusis",     name: "Motsusis Shrine",      region: "Gerudo",            type: "Puzzle",   hint: "There and Back Again",    coords: "-3590, -2630, 0024" },
  { id: "nachoyah-g",   name: "Nachoyah Shrine (Gerudo)", region: "Gerudo",        type: "Puzzle",   hint: "The Power of Recall",     coords: "-4541, -3508, 0080" },
  { id: "sepapa",       name: "Sepapa Shrine",        region: "Gerudo",            type: "Puzzle",   hint: "The Right-Hand Rule",     coords: "-2726, -2245, 0024" },
  { id: "siwakama",     name: "Siwakama Shrine",      region: "Gerudo",            type: "Puzzle",   hint: "A Cryogenic Device",      coords: "-4328, -1547, 0106" },
  { id: "tawa-jinn",    name: "Tawa Jinn Shrine",     region: "Gerudo",            type: "Blessing", hint: "Rauru's Blessing",        coords: "-3590, -1450, 0024" },
];

// ─────────────────────────────────────────────────────────────
//  WEAPONS  — One-Handed, Two-Handed, Spears
// ─────────────────────────────────────────────────────────────
export interface Weapon {
  id: string;
  name: string;
  type: string;
  attack: number;
  durability: number;
  effect: string;
  location: string;
  coords: string;
}

export const WEAPONS: Weapon[] = [
  // ── One-Handed ──────────────────────────────────────────────
  { id: "travelers-sword",        name: "Traveler's Sword",         type: "One-Handed", attack:  4, durability: 27, effect: "None",                                    location: "Great Sky Island tutorial chest",              coords: "0105, -1400, 1419" },
  { id: "soldiers-broadsword",    name: "Soldier's Broadsword",     type: "One-Handed", attack: 14, durability: 30, effect: "None",                                    location: "Hyrule Castle grounds enemy drop",             coords: "-0766, 0994, 0107" },
  { id: "knights-broadsword",     name: "Knight's Broadsword",      type: "One-Handed", attack: 18, durability: 33, effect: "None",                                    location: "Akkala Citadel Ruins chest",                   coords: "3859, 3102, 0121" },
  { id: "royal-broadsword",       name: "Royal Broadsword",         type: "One-Handed", attack: 24, durability: 36, effect: "None",                                    location: "Hyrule Castle Sanctum chest",                  coords: "-0101, 1135, 0124" },
  { id: "royal-guard-sword",      name: "Royal Guard's Sword",      type: "One-Handed", attack: 48, durability: 14, effect: "Breaking Point — massive dmg near break", location: "Hyrule Castle Armory chest",                   coords: "-0380, 1053, 0107" },
  { id: "forest-dwellers-sword",  name: "Forest Dweller's Sword",   type: "One-Handed", attack: 14, durability: 33, effect: "None",                                    location: "Korok Forest hidden chest",                    coords: "-0760, 1862, 0262" },
  { id: "zora-sword",             name: "Zora Sword",               type: "One-Handed", attack: 14, durability: 30, effect: "None",                                    location: "Zora's Domain shop / enemy drop",              coords: "3289, 0620, 0270" },
  { id: "feathered-edge",         name: "Feathered Edge",           type: "One-Handed", attack: 10, durability: 17, effect: "None",                                    location: "Hebra Mountains chest",                        coords: "-2808, 1925, 0540" },
  { id: "eightfold-blade",        name: "Eightfold Blade",          type: "One-Handed", attack:  9, durability: 19, effect: "None",                                    location: "Yiga Clan enemy drop / Depths chest",          coords: "4200, 3400, 0100" },
  { id: "gerudo-scimitar",        name: "Gerudo Scimitar",          type: "One-Handed", attack: 14, durability: 20, effect: "None",                                    location: "Kara Kara Bazaar chest",                       coords: "-2718, -2253, 0034" },
  { id: "lizal-forked-boomerang", name: "Lizal Forked Boomerang",   type: "One-Handed", attack:  9, durability: 16, effect: "Returns when thrown",                     location: "Lizalfos drop, Lanayru Wetlands",              coords: "1826, 0425, 0013" },
  { id: "lizal-tri-boomerang",    name: "Lizal Tri-Boomerang",      type: "One-Handed", attack: 22, durability: 18, effect: "Returns when thrown (3-bladed)",           location: "Blue Lizalfos drop, Necluda Sea",              coords: "2604, -1827, 0017" },
  { id: "scimitar-of-seven",      name: "Scimitar of the Seven",    type: "One-Handed", attack: 28, durability: 60, effect: "Strong Fusion — doubles fuse atk bonus",   location: "Gerudo Town, Isha's Jewelry (post-Regional)",  coords: "-3731, -2920, 0015" },
  { id: "gloom-sword",            name: "Gloom Sword",              type: "One-Handed", attack: 41, durability: 15, effect: "Gloom Toll — drains permanent hearts",     location: "Phantom Ganon drop (post Gloom Hands)",        coords: "-0116, 0984, 0100" },
  { id: "master-sword",           name: "Master Sword",             type: "One-Handed", attack: 30, durability: 999, effect: "Recharges; glows near Gloom; beams at full HP", location: "Light Dragon's head (2 full stamina wheels)", coords: "0000, 0000, 1000" },
  { id: "great-flameblade",       name: "Great Flameblade",         type: "One-Handed", attack: 24, durability: 30, effect: "Fire damage on hit",                       location: "Death Mountain summit chest",                  coords: "2285, 3022, 0889" },
  { id: "great-frostblade",       name: "Great Frostblade",         type: "One-Handed", attack: 20, durability: 30, effect: "Ice damage on hit, freezes",               location: "Hebra Peak cave chest",                        coords: "-2900, 3570, 0800" },
  { id: "great-thunderblade",     name: "Great Thunderblade",       type: "One-Handed", attack: 22, durability: 30, effect: "Electric damage, stuns",                   location: "Lanayru Sky Islands chest",                    coords: "3620, 0398, 1018" },
  { id: "golden-claymore",        name: "Golden Claymore",          type: "One-Handed", attack: 28, durability: 40, effect: "None",                                    location: "Gerudo Highlands cave chest",                  coords: "-2990, -1488, 0320" },
  { id: "edge-of-duality",        name: "Edge of Duality",          type: "One-Handed", attack: 50, durability: 30, effect: "None",                                    location: "North Hyrule Snow field cave chest",           coords: "-0900, 3800, 0185" },
  { id: "ancient-blade",          name: "Ancient Blade",            type: "One-Handed", attack:  1, durability: 1,  effect: "One-hit KO fused to any weapon",           location: "Crystal treasure chests — Sky Islands",        coords: "1230, -1890, 1462" },
  // ── Two-Handed ──────────────────────────────────────────────
  { id: "travelers-claymore",     name: "Traveler's Claymore",      type: "Two-Handed", attack:  8, durability: 30, effect: "None",                                    location: "Necluda road chest",                           coords: "1820, -2010, 0050" },
  { id: "soldiers-claymore",      name: "Soldier's Claymore",       type: "Two-Handed", attack: 16, durability: 34, effect: "None",                                    location: "Hyrule Field bokoblin camp",                   coords: "-0641, 0102, 0025" },
  { id: "knights-claymore",       name: "Knight's Claymore",        type: "Two-Handed", attack: 20, durability: 37, effect: "None",                                    location: "Crenel Hills skeleton enemy",                  coords: "-0148, 1250, 0148" },
  { id: "royal-claymore",         name: "Royal Claymore",           type: "Two-Handed", attack: 28, durability: 40, effect: "None",                                    location: "Hyrule Castle Throne Room chest",              coords: "-0094, 1225, 0107" },
  { id: "royal-guard-claymore",   name: "Royal Guard's Claymore",   type: "Two-Handed", attack: 32, durability: 15, effect: "Breaking Point — massive dmg near break", location: "Hyrule Castle Library chest",                  coords: "-0260, 1177, 0174" },
  { id: "forest-dwellers-2h",     name: "Forest Dweller's Sword (2H)", type: "Two-Handed", attack: 18, durability: 36, effect: "None",                                 location: "Korok Forest large chest",                     coords: "-0862, 1802, 0265" },
  { id: "eightfold-longblade",    name: "Eightfold Longblade",      type: "Two-Handed", attack: 23, durability: 25, effect: "Charge slash fires wind",                  location: "Yiga Blademaster drop / West Depths chest",    coords: "-1498, 0936, -0500" },
  { id: "dusk-claymore",          name: "Dusk Claymore",            type: "Two-Handed", attack: 32, durability: 50, effect: "None",                                    location: "Typhlo Ruins sky puzzle chest",                 coords: "0352, 3119, 0050" },
  { id: "gloom-claymore",         name: "Gloom Claymore",           type: "Two-Handed", attack: 54, durability: 15, effect: "Gloom Toll — drains permanent hearts",     location: "Phantom Ganon drop, Depths Coliseum",          coords: "-1048, -0840, -0500" },
  { id: "lynel-crusher",          name: "Lynel Crusher",            type: "Two-Handed", attack: 30, durability: 30, effect: "None",                                    location: "Lynel drop, Colosseum Ruins",                  coords: "0398, -0678, 0058" },
  { id: "mighty-lynel-crusher",   name: "Mighty Lynel Crusher",     type: "Two-Handed", attack: 40, durability: 35, effect: "None",                                    location: "Blue/White Lynel drop, Colosseum",             coords: "0401, -0665, 0058" },
  { id: "savage-lynel-crusher",   name: "Savage Lynel Crusher",     type: "Two-Handed", attack: 78, durability: 45, effect: "None",                                    location: "White-Maned/Silver Lynel drop",                coords: "-0390, -0655, -0400" },
  { id: "stone-smasher",          name: "Stone Smasher",            type: "Two-Handed", attack: 36, durability: 30, effect: "Increased digging damage",                 location: "Goron City smithy chest",                      coords: "1793, 2404, 0382" },
  { id: "boulder-breaker",        name: "Boulder Breaker",          type: "Two-Handed", attack: 38, durability: 30, effect: "Increased digging damage; rebuild via Fugo", location: "Goron City (regional reward, rebuild chest)", coords: "1653, 2434, 0380" },
  { id: "cobble-crusher",         name: "Cobble Crusher",           type: "Two-Handed", attack: 10, durability: 30, effect: "None",                                    location: "Goron enemy drop / Yunobo quest start",        coords: "1830, 2460, 0398" },
  { id: "gloom-two-handed",       name: "Gloom Hands 2H Club",      type: "Two-Handed", attack: 30, durability: 25, effect: "Gloom inflicted on hit",                  location: "Gloom Hands encounter surface drop",           coords: "0124, 0893, 0120" },
  // ── Spears ──────────────────────────────────────────────────
  { id: "travelers-spear",        name: "Traveler's Spear",         type: "Spear",      attack:  4, durability: 24, effect: "None",                                    location: "Akkala camp chest",                            coords: "3860, 2460, 0128" },
  { id: "soldiers-spear",         name: "Soldier's Spear",          type: "Spear",      attack: 12, durability: 28, effect: "None",                                    location: "Hyrule Castle grounds enemy",                  coords: "-0548, 0763, 0108" },
  { id: "knights-halberd",        name: "Knight's Halberd",         type: "Spear",      attack: 16, durability: 30, effect: "None",                                    location: "Akkala Citadel main chest",                    coords: "3945, 3225, 0128" },
  { id: "royal-halberd",          name: "Royal Halberd",            type: "Spear",      attack: 26, durability: 33, effect: "None",                                    location: "Hyrule Castle East wing chest",                coords: "-0030, 1230, 0208" },
  { id: "royal-guard-spear",      name: "Royal Guard's Spear",      type: "Spear",      attack: 32, durability: 13, effect: "Breaking Point",                          location: "Hyrule Castle Guardhouse chest",               coords: "-0508, 1002, 0120" },
  { id: "zora-spear",             name: "Zora Spear",               type: "Spear",      attack: 12, durability: 22, effect: "None",                                    location: "Zora's Domain shop / East Reservoir enemies",  coords: "3378, 0510, 0228" },
  { id: "lightscale-trident",     name: "Lightscale Trident",       type: "Spear",      attack: 22, durability: 60, effect: "None; rebuild via Dento smith",           location: "Zora's Domain reward (Sidon's request quest)", coords: "3289, 0600, 0270" },
  { id: "feathered-spear",        name: "Feathered Spear",          type: "Spear",      attack:  8, durability: 25, effect: "None",                                    location: "Rito Village area chests",                     coords: "-3668, 2019, 0320" },
  { id: "gloom-spear",            name: "Gloom Spear",              type: "Spear",      attack: 30, durability: 15, effect: "Gloom Toll",                              location: "Phantom Ganon spear drop, East Depths",        coords: "1900, 0840, -0500" },
  { id: "lynel-spear",            name: "Lynel Spear",              type: "Spear",      attack: 14, durability: 26, effect: "None",                                    location: "Red Lynel drop, Colosseum Ruins",              coords: "0408, -0672, 0058" },
  { id: "mighty-lynel-spear",     name: "Mighty Lynel Spear",       type: "Spear",      attack: 20, durability: 30, effect: "None",                                    location: "Blue Lynel drop, North Eldin",                 coords: "1965, 2860, 0427" },
  { id: "savage-lynel-spear",     name: "Savage Lynel Spear",       type: "Spear",      attack: 30, durability: 35, effect: "None",                                    location: "White-Maned Lynel drop, Colosseum Depths",     coords: "-0390, -0655, -0400" },
  { id: "gerudo-spear",           name: "Gerudo Spear",             type: "Spear",      attack: 12, durability: 22, effect: "None",                                    location: "Gerudo Desert enemy drop / ruins chest",       coords: "-3900, -3100, 0025" },
  { id: "zonaite-spear",          name: "Zonaite Spear",            type: "Spear",      attack: 14, durability: 35, effect: "Fuse bonus doubled",                      location: "Sky Island construct drop / Zonai ruins chest", coords: "0612, -0913, 1460" },
];

// ─────────────────────────────────────────────────────────────
//  BOWS
// ─────────────────────────────────────────────────────────────
export interface Bow {
  id: string;
  name: string;
  attack: number;
  durability: number;
  range: string;
  multishot: string;
  effect: string;
  location: string;
  coords: string;
}

export const BOWS: Bow[] = [
  { id: "travelers-bow",        name: "Traveler's Bow",       attack:  5, durability: 20, range: "Medium", multishot: "1x", effect: "None",                             location: "Necluda road chest / common enemy drop",     coords: "2050, -1870, 0090" },
  { id: "soldiers-bow",         name: "Soldier's Bow",        attack: 14, durability: 35, range: "Medium", multishot: "1x", effect: "None",                             location: "Hyrule field enemy camps",                   coords: "-0400, 0300, 0028" },
  { id: "knights-bow",          name: "Knight's Bow",         attack: 26, durability: 30, range: "Medium", multishot: "1x", effect: "None",                             location: "Akkala Citadel skeleton enemy",               coords: "3899, 3201, 0120" },
  { id: "royal-bow",            name: "Royal Bow",            attack: 38, durability: 25, range: "Long",   multishot: "1x", effect: "None",                             location: "Hyrule Castle grounds chest",                coords: "-0680, 1004, 0140" },
  { id: "royal-guard-bow",      name: "Royal Guard's Bow",    attack: 50, durability: 20, range: "Long",   multishot: "1x", effect: "Breaking Point",                   location: "Hyrule Castle Library upper floor",          coords: "-0256, 1239, 0208" },
  { id: "forest-dwellers-bow",  name: "Forest Dweller's Bow", attack: 18, durability: 40, range: "Long",   multishot: "1x", effect: "High durability",                  location: "Korok Forest chest",                         coords: "-0830, 1855, 0262" },
  { id: "swallow-bow",          name: "Swallow Bow",          attack:  9, durability: 30, range: "Long",   multishot: "1x", effect: "Quick draw speed",                  location: "Rito Village shop / Rito warrior drop",      coords: "-3600, 1830, 0242" },
  { id: "falcon-bow",           name: "Falcon Bow",           attack: 18, durability: 30, range: "Long",   multishot: "1x", effect: "Fastest draw speed in game",        location: "Rito Village elite chest",                   coords: "-3611, 1831, 0274" },
  { id: "great-eagle-bow",      name: "Great Eagle Bow",      attack: 28, durability: 60, range: "Long",   multishot: "3x", effect: "3x arrows, fastest draw; rebuild via Harth", location: "Rito Village (Teba's quest reward)",  coords: "-3610, 1960, 0242" },
  { id: "phrenic-bow",          name: "Phrenic Bow",          attack:  8, durability: 30, range: "Long",   multishot: "1x", effect: "Zoom scope",                        location: "Hyrule Ridge cave chest",                    coords: "-2138, -0390, 0233" },
  { id: "lizal-bow",            name: "Lizal Bow",            attack: 14, durability: 24, range: "Medium", multishot: "1x", effect: "None",                             location: "Blue Lizalfos drop, Lanayru Wetlands",       coords: "1860, 0430, 0015" },
  { id: "lizal-forked-bow",     name: "Lizal Forked Bow",     attack: 18, durability: 26, range: "Medium", multishot: "2x", effect: "2 arrows per shot",                 location: "Black Lizalfos drop, Hyrule Field",          coords: "-0400, 0210, 0024" },
  { id: "lizal-tri-bow",        name: "Lizal Tri-Bow",        attack: 18, durability: 20, range: "Medium", multishot: "3x", effect: "3 arrows per shot",                 location: "Silver Lizalfos drop, Eldin Region",         coords: "1806, 2430, 0380" },
  { id: "duplex-bow",           name: "Duplex Bow",           attack: 14, durability: 26, range: "Long",   multishot: "2x", effect: "Fires 2 arrows simultaneously",     location: "East Necluda Silver Lizalfos drop",          coords: "2800, -1400, 0020" },
  { id: "lynel-bow",            name: "Lynel Bow",            attack: 18, durability: 30, range: "Long",   multishot: "1x", effect: "None",                             location: "Red Lynel drop, Colosseum Ruins",            coords: "0398, -0678, 0058" },
  { id: "mighty-lynel-bow",     name: "Mighty Lynel Bow",     attack: 24, durability: 35, range: "Long",   multishot: "3x", effect: "3 arrows per shot",                 location: "Blue/White Lynel drop, Colosseum",           coords: "0401, -0665, 0058" },
  { id: "savage-lynel-bow",     name: "Savage Lynel Bow",     attack: 32, durability: 45, range: "Long",   multishot: "5x", effect: "5 arrows per shot (White/Silver Lynel)", location: "White-Maned/Silver Lynel drop",          coords: "-0390, -0655, -0400" },
  { id: "gerudo-bow",           name: "Gerudo Bow",           attack: 20, durability: 28, range: "Medium", multishot: "1x", effect: "None",                             location: "Gerudo desert enemy camp chest",             coords: "-3900, -3100, 0025" },
  { id: "zonaite-bow",          name: "Zonaite Bow",          attack: 14, durability: 35, range: "Medium", multishot: "1x", effect: "Fuse bonus doubled",               location: "Sky Island Zonai chest",                     coords: "0612, -0913, 1460" },
  { id: "phrenic-zoom",         name: "Eldin Canyon Bow",     attack: 22, durability: 28, range: "Long",   multishot: "1x", effect: "None",                             location: "Eldin Canyon chest near Goron City bridge",  coords: "1600, 2200, 0340" },
];

// ─────────────────────────────────────────────────────────────
//  SHIELDS
// ─────────────────────────────────────────────────────────────
export interface ShieldItem {
  id: string;
  name: string;
  defense: number;
  durability: number;
  effect: string;
  location: string;
  coords: string;
}

export const SHIELDS: ShieldItem[] = [
  { id: "travelers-shield",       name: "Traveler's Shield",        defense:  3, durability: 27, effect: "None",                              location: "Great Sky Island tutorial chest",              coords: "0105, -1400, 1419" },
  { id: "soldiers-shield",        name: "Soldier's Shield",         defense:  8, durability: 30, effect: "None",                              location: "Hyrule Castle grounds enemy drop",             coords: "-0548, 0763, 0108" },
  { id: "knights-shield",         name: "Knight's Shield",          defense: 36, durability: 33, effect: "None",                              location: "Akkala Citadel Ruins chest",                   coords: "3945, 3225, 0128" },
  { id: "royal-shield",           name: "Royal Shield",             defense: 55, durability: 36, effect: "None",                              location: "Hyrule Castle Sanctum chest",                  coords: "-0101, 1135, 0124" },
  { id: "royal-guard-shield",     name: "Royal Guard's Shield",     defense: 70, durability: 14, effect: "Breaking Point — max reflect power near break", location: "Hyrule Castle Sanctum chest",  coords: "-0101, 1200, 0124" },
  { id: "hylian-shield",          name: "Hylian Shield",            defense: 90, durability: 800, effect: "Highest defense and durability in the game",   location: "Hyrule Castle docks locked chest",     coords: "-0219, 0716, -0025" },
  { id: "forest-dwellers-shield", name: "Forest Dweller's Shield",  defense: 18, durability: 60, effect: "High durability",                   location: "Korok Forest hidden chest",                    coords: "-0760, 1862, 0262" },
  { id: "zora-shield",            name: "Zora Shield",              defense: 22, durability: 55, effect: "None",                              location: "Zora's Domain shop / Sidon's quest",           coords: "3289, 0620, 0270" },
  { id: "kite-shield",            name: "Kite Shield",              defense: 14, durability: 53, effect: "None",                              location: "Akkala road chest",                            coords: "3600, 2300, 0130" },
  { id: "sea-breeze-shield",      name: "Sea-Breeze Shield",        defense: 65, durability: 90, effect: "None",                              location: "Tabantha Frontier Depths chest",               coords: "-2706, 0790, -0400" },
  { id: "daybreaker",             name: "Daybreaker",               defense: 48, durability: 60, effect: "High durability; rebuild via Isha",  location: "Gerudo Town, Isha reward (post-Regional)",     coords: "-3731, -2920, 0015" },
  { id: "gloom-shield",           name: "Gloom Shield",             defense: 20, durability: 15, effect: "Gloom Toll on block",               location: "Phantom Ganon drop",                           coords: "-0116, 0984, 0100" },
  { id: "lynel-shield",           name: "Lynel Shield",             defense: 22, durability: 28, effect: "None",                              location: "Red Lynel drop, Colosseum Ruins",              coords: "0398, -0678, 0058" },
  { id: "mighty-lynel-shield",    name: "Mighty Lynel Shield",      defense: 32, durability: 35, effect: "None",                              location: "Blue/White Lynel drop, Akkala",                coords: "3750, 2850, 0160" },
  { id: "savage-lynel-shield",    name: "Savage Lynel Shield",      defense: 62, durability: 50, effect: "None",                              location: "White-Maned/Silver Lynel drop, Colosseum",     coords: "-0390, -0655, -0400" },
  { id: "gerudo-shield",          name: "Gerudo Shield",            defense: 20, durability: 30, effect: "None",                              location: "Gerudo Town shop / desert ruins chest",        coords: "-3731, -2920, 0015" },
  { id: "wooden-shield",          name: "Wooden Shield",            defense:  2, durability: 18, effect: "Flammable — burns in fire",          location: "Starting area enemy / common drop",            coords: "-0280, -0310, 0012" },
  { id: "battered-shield",        name: "Battered Shield",          defense:  1, durability:  5, effect: "Nearly worthless — fuse materials", location: "Common Bokoblin drop",                          coords: "-0641, 0102, 0025" },
  { id: "zonaite-shield",         name: "Zonaite Shield",           defense: 14, durability: 40, effect: "Fuse bonus doubled",                location: "Sky Island Zonai device chest",                 coords: "0715, -1368, 1584" },
  { id: "silver-shield",          name: "Silver Shield",            defense: 28, durability: 44, effect: "None",                              location: "Akkala Ancient Tech Lab ruins chest",           coords: "4228, 3482, 0116" },
];

// ─────────────────────────────────────────────────────────────
//  ARMOR  — individual pieces with coordinates
// ─────────────────────────────────────────────────────────────
export interface ArmorPiece {
  name: string;
  defense: number;
  maxDefense: number;
  location: string;
  coords: string;
}

export interface UpgradeTier {
  star: 1 | 2 | 3 | 4;
  materials: string[];
}

export interface ArmorSet {
  id: string;
  name: string;
  maxStars: number;
  upgradeTiers: UpgradeTier[];
  pieces: ArmorPiece[];
  effect: string;
  setBonus: string;
  upgradeBonus: string;
}

export const ARMOR: ArmorSet[] = [
  {
    id: "hylian", name: "Hylian Set", maxStars: 4,
    effect: "None", setBonus: "None", upgradeBonus: "Increases base defense each tier",
    upgradeTiers: [
      { star: 1, materials: ["3× Bokoblin Horn"] },
      { star: 2, materials: ["5× Bokoblin Fang"] },
      { star: 3, materials: ["5× Bokoblin Guts", "2× Amber"] },
      { star: 4, materials: ["10× Bokoblin Guts", "2× Opal"] },
    ],
    pieces: [
      { name: "Hylian Hood",     defense: 3, maxDefense: 20, location: "Lookout Landing shop (70 rupees)",    coords: "-0157, -0012, 0017" },
      { name: "Hylian Tunic",    defense: 3, maxDefense: 20, location: "Lookout Landing shop (130 rupees)",   coords: "-0157, -0012, 0017" },
      { name: "Hylian Trousers", defense: 3, maxDefense: 20, location: "Lookout Landing shop (70 rupees)",    coords: "-0157, -0012, 0017" },
    ],
  },
  {
    id: "archaic", name: "Archaic Set", maxStars: 0,
    effect: "None — outfit worn at game start", setBonus: "None", upgradeBonus: "Cannot be upgraded",
    upgradeTiers: [],
    pieces: [
      { name: "Archaic Tunic",   defense: 1, maxDefense: 1, location: "Worn at game start on Great Sky Island", coords: "0274, -0913, 1460" },
      { name: "Archaic Legwear", defense: 1, maxDefense: 1, location: "Worn at game start on Great Sky Island", coords: "0274, -0913, 1460" },
    ],
  },
  {
    id: "snowquill", name: "Snowquill Set", maxStars: 4,
    effect: "Cold Resistance", setBonus: "Unfreezable", upgradeBonus: "Tier 2 grants Unfreezable set bonus",
    upgradeTiers: [
      { star: 1, materials: ["3× Blue Chuchu Jelly"] },
      { star: 2, materials: ["5× Blue Chuchu Jelly", "3× Flint"] },
      { star: 3, materials: ["5× Ice Keese Wing", "3× Amber"] },
      { star: 4, materials: ["10× Ice Keese Wing", "3× Sapphire"] },
    ],
    pieces: [
      { name: "Snowquill Headdress", defense: 3, maxDefense: 20, location: "Rito Village — Nekk's shop (500 rupees)",   coords: "-3608, 1843, 0232" },
      { name: "Snowquill Tunic",     defense: 3, maxDefense: 20, location: "Rito Village — Nekk's shop (600 rupees)",   coords: "-3608, 1843, 0232" },
      { name: "Snowquill Trousers",  defense: 3, maxDefense: 20, location: "Rito Village — Nekk's shop (500 rupees)",   coords: "-3608, 1843, 0232" },
    ],
  },
  {
    id: "flamebreaker", name: "Flamebreaker Set", maxStars: 4,
    effect: "Flame Guard", setBonus: "Fireproof", upgradeBonus: "Tier 2 grants Fireproof set bonus",
    upgradeTiers: [
      { star: 1, materials: ["1× Fireproof Lizard"] },
      { star: 2, materials: ["3× Fireproof Lizard", "3× Moblin Horn"] },
      { star: 3, materials: ["3× Smotherwing Butterfly", "2× Hinox Toenail"] },
      { star: 4, materials: ["5× Smotherwing Butterfly", "2× Hinox Guts"] },
    ],
    pieces: [
      { name: "Flamebreaker Helm",  defense: 3, maxDefense: 20, location: "Goron City — Ravio's Shop (600 rupees)", coords: "1638, 2460, 0382" },
      { name: "Flamebreaker Armor", defense: 5, maxDefense: 20, location: "Goron City — Ravio's Shop (700 rupees)", coords: "1638, 2460, 0382" },
      { name: "Flamebreaker Boots", defense: 3, maxDefense: 20, location: "Goron City — Ravio's Shop (600 rupees)", coords: "1638, 2460, 0382" },
    ],
  },
  {
    id: "desert-voe", name: "Desert Voe Set", maxStars: 4,
    effect: "Heat Resistance", setBonus: "Shock Resistance", upgradeBonus: "Tier 2 adds Shock Resistance set bonus",
    upgradeTiers: [
      { star: 1, materials: ["3× Gibdo Bone"] },
      { star: 2, materials: ["5× Gibdo Bone", "3× Topaz"] },
      { star: 3, materials: ["3× Gibdo Guts", "3× Topaz"] },
      { star: 4, materials: ["5× Gibdo Guts", "5× Topaz"] },
    ],
    pieces: [
      { name: "Desert Voe Headband", defense: 3, maxDefense: 20, location: "Gerudo Town — Saula's shop, male entrance (450 rupees)",  coords: "-3731, -2920, 0015" },
      { name: "Desert Voe Spaulder", defense: 5, maxDefense: 20, location: "Gerudo Town — Saula's shop, male entrance (1000 rupees)", coords: "-3731, -2920, 0015" },
      { name: "Desert Voe Trousers", defense: 3, maxDefense: 20, location: "Gerudo Town — Saula's shop, male entrance (450 rupees)",  coords: "-3731, -2920, 0015" },
    ],
  },
  {
    id: "zora", name: "Zora Set", maxStars: 4,
    effect: "Swim Speed Up", setBonus: "Waterfall Climb", upgradeBonus: "Tier 2 grants Waterfall Climb set bonus",
    upgradeTiers: [
      { star: 1, materials: ["3× Lizalfos Horn"] },
      { star: 2, materials: ["3× Lizalfos Talon", "3× Opal"] },
      { star: 3, materials: ["5× Lizalfos Tail", "3× Opal"] },
      { star: 4, materials: ["5× Lizalfos Tail", "5× Diamond"] },
    ],
    pieces: [
      { name: "Zora Helm",    defense: 3, maxDefense: 20, location: "Toto Lake underwater chest (Sidon's questline)",   coords: "3476, 0520, 0088" },
      { name: "Zora Armor",   defense: 3, maxDefense: 20, location: "Zora's Domain — reward from King Dorephan quest",  coords: "3289, 0600, 0270" },
      { name: "Zora Greaves", defense: 3, maxDefense: 20, location: "Zora's Domain — chest in Mipha's Court (sky)",     coords: "3614, 0736, 1065" },
    ],
  },
  {
    id: "rubber", name: "Rubber Set", maxStars: 4,
    effect: "Shock Resistance", setBonus: "Unshockable", upgradeBonus: "Tier 2 grants Unshockable set bonus",
    upgradeTiers: [
      { star: 1, materials: ["3× Yellow Chuchu Jelly"] },
      { star: 2, materials: ["5× Yellow Chuchu Jelly", "3× Flint"] },
      { star: 3, materials: ["5× Electric Keese Wing", "3× Topaz"] },
      { star: 4, materials: ["10× Electric Lizalfos Tail", "3× Topaz"] },
    ],
    pieces: [
      { name: "Rubber Helm",   defense: 3, maxDefense: 20, location: "Lanayru Sky Island puzzle chest (strike 4 lightning towers)", coords: "3480, 0664, 1325" },
      { name: "Rubber Armor",  defense: 3, maxDefense: 20, location: "Cave puzzle: Whistling Hill cave chest",                      coords: "-0915, -0175, 0043" },
      { name: "Rubber Tights", defense: 3, maxDefense: 20, location: "Lakeside Stable cave puzzle chest",                           coords: "1720, -3490, 0055" },
    ],
  },
  {
    id: "climbing", name: "Climbing Gear", maxStars: 4,
    effect: "Climb Speed Up", setBonus: "Climber's Stamina (sprint-jump while climbing)", upgradeBonus: "Tier 2 grants sprint-jump climbing bonus",
    upgradeTiers: [
      { star: 1, materials: ["3× Lizalfos Horn"] },
      { star: 2, materials: ["5× Lizalfos Talon", "3× Flint"] },
      { star: 3, materials: ["5× Lizalfos Guts", "3× Amber"] },
      { star: 4, materials: ["5× Lizalfos Tail", "3× Diamond"] },
    ],
    pieces: [
      { name: "Climbing Bandana", defense: 3, maxDefense: 20, location: "Ploymus Mountain cave chest",  coords: "3561, 0765, 0392" },
      { name: "Climbing Gear",    defense: 3, maxDefense: 20, location: "Upland Lindor cave chest",     coords: "-1574, 1336, 0272" },
      { name: "Climbing Boots",   defense: 3, maxDefense: 20, location: "Trilby Valley cave chest",     coords: "-1572, -0099, 0172" },
    ],
  },
  {
    id: "barbarian", name: "Barbarian Set", maxStars: 4,
    effect: "Attack Up", setBonus: "Charge Attack Stamina Up", upgradeBonus: "Tier 2 grants Charge Attack Stamina Up",
    upgradeTiers: [
      { star: 1, materials: ["3× Lynel Horn"] },
      { star: 2, materials: ["3× Lynel Hoof"] },
      { star: 3, materials: ["3× Lynel Guts", "2× Amber"] },
      { star: 4, materials: ["5× Lynel Guts", "3× Ruby"] },
    ],
    pieces: [
      { name: "Barbarian Helm",      defense: 3, maxDefense: 20, location: "Crenel Hills cave (through false wall puzzle)", coords: "-0148, 1250, 0148" },
      { name: "Barbarian Armor",     defense: 3, maxDefense: 20, location: "Dracozu Lake shrine ruins cave chest",          coords: "1548, -2630, 0025" },
      { name: "Barbarian Leg Wraps", defense: 3, maxDefense: 20, location: "Robred Dropoff cave chest — East Faron",        coords: "1830, -2970, 0025" },
    ],
  },
  {
    id: "stealth", name: "Stealth Set", maxStars: 4,
    effect: "Stealth Up", setBonus: "Night Speed Up", upgradeBonus: "Tier 2 grants Night Speed Up set bonus",
    upgradeTiers: [
      { star: 1, materials: ["3× Sunset Firefly"] },
      { star: 2, materials: ["5× Sunset Firefly", "3× Amber"] },
      { star: 3, materials: ["3× Silent Princess", "3× Opal"] },
      { star: 4, materials: ["5× Silent Princess", "5× Diamond"] },
    ],
    pieces: [
      { name: "Stealth Mask",        defense: 3, maxDefense: 20, location: "Kakariko Village cave chest — behind the store",    coords: "1816, -1030, 0116" },
      { name: "Stealth Chest Guard", defense: 3, maxDefense: 20, location: "Kakariko Village shop (Enchanted, 500 rupees)",     coords: "1816, -1030, 0116" },
      { name: "Stealth Tights",      defense: 3, maxDefense: 20, location: "Kakariko Village shop (Enchanted, 400 rupees)",     coords: "1816, -1030, 0116" },
    ],
  },
  {
    id: "soldiers", name: "Soldier's Set", maxStars: 4,
    effect: "None", setBonus: "None", upgradeBonus: "High defense per tier",
    upgradeTiers: [
      { star: 1, materials: ["3× Moblin Horn"] },
      { star: 2, materials: ["5× Moblin Fang"] },
      { star: 3, materials: ["5× Moblin Guts", "2× Amber"] },
      { star: 4, materials: ["10× Moblin Guts", "1× Star Fragment"] },
    ],
    pieces: [
      { name: "Soldier's Helm",    defense: 5, maxDefense: 20, location: "Hyrule Castle grounds — chest near Lockup entrance", coords: "-0536, 0806, 0090" },
      { name: "Soldier's Armor",   defense: 5, maxDefense: 20, location: "Hyrule Castle West tower chest",                     coords: "-0765, 0993, 0108" },
      { name: "Soldier's Greaves", defense: 5, maxDefense: 20, location: "Hyrule Castle East courtyard chest",                 coords: "0015, 1094, 0098" },
    ],
  },
  {
    id: "depths-armor", name: "Armor of the Depths", maxStars: 4,
    effect: "Gloom Resistance", setBonus: "Gloom HP restored by sleeping at campfire", upgradeBonus: "Tier 2 grants Gloom Resistance bonus",
    upgradeTiers: [
      { star: 1, materials: ["3× Puffshroom", "2× Luminous Stone"] },
      { star: 2, materials: ["5× Puffshroom", "3× Luminous Stone"] },
      { star: 3, materials: ["5× Bubbulfrog Goo", "3× Topaz"] },
      { star: 4, materials: ["5× Bubbulfrog Goo", "5× Diamond"] },
    ],
    pieces: [
      { name: "Hood of the Depths",    defense: 5, maxDefense: 20, location: "Bargainer Statue — Hyrule Castle Depths (200 Poes)", coords: "-0195, 0830, -0600" },
      { name: "Tunic of the Depths",   defense: 5, maxDefense: 20, location: "Bargainer Statue — Hyrule Castle Depths (300 Poes)", coords: "-0195, 0830, -0600" },
      { name: "Gaiters of the Depths", defense: 5, maxDefense: 20, location: "Bargainer Statue — Hyrule Castle Depths (200 Poes)", coords: "-0195, 0830, -0600" },
    ],
  },
  {
    id: "phantom", name: "Phantom Set", maxStars: 4,
    effect: "Guardian Resist Up", setBonus: "Guardian Resist Up++ (stacks)", upgradeBonus: "Improves Guardian Resist Up per tier",
    upgradeTiers: [
      { star: 1, materials: ["3× Gibdo Bone", "3× Bubbulfrog Goo"] },
      { star: 2, materials: ["5× Gibdo Bone", "3× Amber"] },
      { star: 3, materials: ["3× Gibdo Guts", "3× Ruby"] },
      { star: 4, materials: ["5× Gibdo Guts", "5× Diamond"] },
    ],
    pieces: [
      { name: "Phantom Helm",    defense: 8, maxDefense: 28, location: "Bargainer Statue — Wellspring of Power area, Depths (150 Poes)", coords: "2358, 2544, -0600" },
      { name: "Phantom Armor",   defense: 8, maxDefense: 28, location: "Bargainer Statue — Wellspring of Courage Depths (150 Poes)",     coords: "0818, -2536, -0600" },
      { name: "Phantom Greaves", defense: 8, maxDefense: 28, location: "Bargainer Statue — Wellspring of Wisdom Depths (150 Poes)",      coords: "3400, 0512, -0600" },
    ],
  },
  {
    id: "evil-spirit", name: "Evil Spirit Set", maxStars: 4,
    effect: "Bone Attack Up", setBonus: "Bone Atk Up++ (stacks)", upgradeBonus: "Improves Bone Atk Up per tier",
    upgradeTiers: [
      { star: 1, materials: ["3× Bokoblin Fang", "3× Lizalfos Talon"] },
      { star: 2, materials: ["5× Moblin Fang", "3× Amber"] },
      { star: 3, materials: ["5× Hinox Toenail", "3× Ruby"] },
      { star: 4, materials: ["3× Hinox Guts", "5× Diamond"] },
    ],
    pieces: [
      { name: "Evil Spirit Mask",    defense: 5, maxDefense: 20, location: "North Lomei Labyrinth — sky island chest (above Akkala)", coords: "4441, 3688, 0720" },
      { name: "Evil Spirit Armor",   defense: 5, maxDefense: 20, location: "South Lomei Labyrinth — depths level solution chest",     coords: "-4504, -3632, -0520" },
      { name: "Evil Spirit Greaves", defense: 5, maxDefense: 20, location: "Lomei Labyrinth Island — Southeast Necluda Sea chest",    coords: "4776, -3427, 0025" },
    ],
  },
  {
    id: "fierce-deity", name: "Fierce Deity Set", maxStars: 4,
    effect: "Attack Up", setBonus: "Attack Up++ (stacks)", upgradeBonus: "Improves Attack Up per tier",
    upgradeTiers: [
      { star: 1, materials: ["3× Lynel Hoof"] },
      { star: 2, materials: ["5× Lynel Hoof", "3× Amber"] },
      { star: 3, materials: ["3× Lynel Guts", "3× Ruby"] },
      { star: 4, materials: ["5× Lynel Guts", "5× Diamond"] },
    ],
    pieces: [
      { name: "Fierce Deity Mask",  defense: 5, maxDefense: 20, location: "Akkala cave — Misko's Cave of Treasures I (chest marked by sign)", coords: "3997, 1631, 0103" },
      { name: "Fierce Deity Armor", defense: 5, maxDefense: 20, location: "Lanayru cave — Misko's Cave of Treasures II",                      coords: "3480, 0664, 0050" },
      { name: "Fierce Deity Boots", defense: 5, maxDefense: 20, location: "Necluda cave — Misko's Cave of Treasures III",                     coords: "2228, -2524, 0025" },
    ],
  },
  {
    id: "ancient-hero", name: "Ancient Hero's Aspect", maxStars: 0,
    effect: "Disguises Link as an ancient hero; glows green", setBonus: "None (cosmetic transformation)", upgradeBonus: "Cannot be upgraded",
    upgradeTiers: [],
    pieces: [
      { name: "Ancient Hero's Aspect", defense: 0, maxDefense: 0, location: "Complete all 152 shrines — reward chest at Temple of Time (Great Sky Island)", coords: "0388, -1660, 2299" },
    ],
  },
  {
    id: "sand-boots", name: "Sand & Snow Boots", maxStars: 4,
    effect: "Move at full speed on sand / snow", setBonus: "None (individual items)", upgradeBonus: "Defense improves per tier",
    upgradeTiers: [
      { star: 1, materials: ["3× Amber"] },
      { star: 2, materials: ["5× Amber", "3× Opal"] },
      { star: 3, materials: ["5× Opal", "3× Topaz"] },
      { star: 4, materials: ["3× Sapphire", "3× Topaz"] },
    ],
    pieces: [
      { name: "Sand Boots", defense: 3, maxDefense: 20, location: "South Akkala Stable secret stone merchant (300 rupees)", coords: "3792, 1626, 0109" },
      { name: "Snow Boots", defense: 3, maxDefense: 20, location: "Rito Stable secret stone merchant (300 rupees)",         coords: "-3462, 1519, 0219" },
    ],
  },
  {
    id: "glide", name: "Glide Set", maxStars: 4,
    effect: "Skydiving speed and maneuvering", setBonus: "Skydive Mobility Up", upgradeBonus: "Tier 2 grants Skydive Mobility Up",
    upgradeTiers: [
      { star: 1, materials: ["3× Aerocuda Wing"] },
      { star: 2, materials: ["5× Aerocuda Wing", "3× Amber"] },
      { star: 3, materials: ["3× Aerocuda Eyeball", "3× Opal"] },
      { star: 4, materials: ["5× Aerocuda Eyeball", "3× Sapphire"] },
    ],
    pieces: [
      { name: "Glide Mask",   defense: 3, maxDefense: 20, location: "Sky Island near Wind Temple — chest at top of the sky fortress", coords: "-2360, 2540, 1200" },
      { name: "Glide Shirt",  defense: 3, maxDefense: 20, location: "Sky Island puzzle area — chest near Valor Island",               coords: "2832, -1880, 1250" },
      { name: "Glide Tights", defense: 3, maxDefense: 20, location: "Sky Island near Gerudo — Starview Island chest",                 coords: "-4020, 0810, 1290" },
    ],
  },
  {
    id: "zonaite", name: "Zonaite Set", maxStars: 4,
    effect: "Charge your Energy Cell faster", setBonus: "Faster Energy Cell recharge", upgradeBonus: "Further charge rate per tier",
    upgradeTiers: [
      { star: 1, materials: ["3× Construct Horn"] },
      { star: 2, materials: ["5× Construct Horn", "3× Zonaite"] },
      { star: 3, materials: ["3× Large Zonaite", "3× Amber"] },
      { star: 4, materials: ["5× Large Zonaite", "3× Opal"] },
    ],
    pieces: [
      { name: "Zonaite Helm",        defense: 3, maxDefense: 20, location: "Sky Island — Construct Barracks chest (Great Sky Island area)", coords: "0480, -1560, 1408" },
      { name: "Zonaite Waistguard",  defense: 3, maxDefense: 20, location: "Sky Island — South Hyrule Sky Archipelago large chest",         coords: "0200, -1400, 1462" },
      { name: "Zonaite Shin Guards", defense: 3, maxDefense: 20, location: "Sky Island — large island south of Great Sky Island",           coords: "0120, -1100, 1462" },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
//  SECRETS & EASTER EGGS
// ─────────────────────────────────────────────────────────────
export const SECRETS = [
  { id: "dragons-tears",  title: "The Dragon's Tears",     description: "Find all 12 geoglyphs around Hyrule. The 12th reveals Master Sword location and Zelda's fate. Start near Hyrule Field (coords: -0748, -2023, 0025)." },
  { id: "bargainer",      title: "Bargainer Statues",       description: "Trade Poes collected in the Depths to unlock the Depths Armor, Phantom Set, and unique weapon copies. Main statue at Hyrule Castle Depths (-0195, 0830, -0600)." },
  { id: "satori",         title: "Lord of the Mountain",    description: "Offer fruit at glowing cherry blossom trees (Satori Mountains: -1170, 1020, 0340) to reveal all nearby caves and hidden items on minimap." },
  { id: "hinox-trick",    title: "Hinox Sleep Trick",       description: "Shoot a Hinox in the eye to stun it, then remove its bead necklace without waking it by sneaking under while it's on the ground." },
  { id: "master-sword",   title: "Master Sword Acquisition", description: "Complete the Dragon's Tears quest, then approach the Light Dragon's head with two full stamina wheels. Climb on and pull the sword out. Light Dragon orbits Hyrule at ~1000 elevation." },
  { id: "its-dangerous",  title: "It's Dangerous to Go Alone Easter Egg", description: "Near the ruins of Mabe Village (-0665, -1835, 0019), find a sign quoting the original Legend of Zelda: 'It's dangerous to go alone. Take this.'" },
  { id: "korok-hestu",    title: "Korok Seeds & Hestu",     description: "Collect Korok Seeds (900 total) and trade to Hestu at Korok Forest (-0770, 1857, 0259) for inventory upgrades. Final reward is Hestu's Gift." },
  { id: "gloom-hands",    title: "Gloom Hands & Phantom Ganon", description: "Defeat Gloom Hands (spawn in Gloom pools) to trigger a Phantom Ganon fight. First encounter is at Hyrule Castle courtyard (-0116, 0984, 0100). Drops Gloom weapons." },
  { id: "sky-depths",     title: "Sky-to-Depths Passages",  description: "Dive into a Chasm (large Depths holes) to reach the Depths. Landing in specific Depths wells emerges in the sky above. Coordinates: Central Hyrule Chasm at (-0202, 0041, 0015)." },
  { id: "great-fairy",    title: "Great Fairy Fountains",   description: "Escort musicians to each fountain. Four locations: Woodland Stable (-0847, 1030, 0048), Snowfield Stable (-2765, 2390, 0228), Gerudo Canyon Stable (-2527, -1494, 0039), Lurelin Village (2070, -3427, 0020)." },
];

// ─────────────────────────────────────────────────────────────
//  HIDDEN AREAS
// ─────────────────────────────────────────────────────────────
export const HIDDEN_AREAS = [
  { id: "lomei-north",  name: "North Lomei Labyrinth",      location: "Akkala Sky Island",       coords: "4441, 3688, 0720",  description: "Massive sky labyrinth above Akkala. Solve from the air to reach the chest containing Evil Spirit Mask." },
  { id: "lomei-south",  name: "South Lomei Labyrinth",      location: "Gerudo Depths",           coords: "-4504, -3632, -0520", description: "Depths-level labyrinth. Navigate from below using the Depths entrance to claim Evil Spirit Armor." },
  { id: "lomei-island", name: "Lomei Labyrinth Island",     location: "Southeast Necluda Sea",   coords: "4776, -3427, 0025",  description: "Ocean island labyrinth. Solve the maze on the surface to claim Evil Spirit Greaves." },
  { id: "typhlo",       name: "Typhlo Ruins Sky Islands",   location: "Above Typhlo Ruins, Eldin", coords: "0343, 3133, 0780", description: "Ancient ruins sky island holding the Dusk Claymore and secret Zonai lore tablets." },
  { id: "eventide",     name: "Eventide Island",            location: "Necluda Sea",             coords: "4632, -3712, 0018",  description: "Challenge island. Your weapons are not removed this time, but you must clear all Bokoblin camps to unlock the reward chest." },
  { id: "satori-mtn",   name: "Satori Mountain",           location: "Central Hyrule",          coords: "-1170, 1020, 0340",  description: "Glowing mountain with cherry blossoms. Activate the Lord of the Mountain by placing fruit to reveal all nearby caves." },
  { id: "coliseum",     name: "Colosseum Ruins",            location: "Central Hyrule",          coords: "0398, -0678, 0058",  description: "Circular ruins with a powerful Lynel on the surface and a Silver Lynel in the Depths directly below. Best Lynel farming spot." },
  { id: "korok-forest", name: "Korok Forest",              location: "Woodland Region (Depths passage)", coords: "-0770, 1857, 0259", description: "Trapped in fog until you enter from the correct Depths passage. Home of the Great Deku Tree and Hestu's permanent location postgame." },
  { id: "zora-waterworks", name: "Ancient Zora Waterworks", location: "Lanayru Wetlands",        coords: "2580, 0349, -0418", description: "Submerged cave system accessible only with Zora Armor. Contains a major quest objective and lore about ancient Zora civilization." },
  { id: "gerudo-highlands-sky", name: "Gerudo Highlands Sky Ruins", location: "Above Gerudo Highlands", coords: "-3500, -0750, 1290", description: "Hidden Zonai sky ruins with unique chests and Zonai construct enemies. Accessible only via Skyview Tower or Paraglider from high peaks." },
  { id: "akkala-spring",name: "Spring of Power",            location: "Akkala Highlands",        coords: "4312, 2859, 0256",   description: "Dragon scale shrine location. Drop a scale from the appropriate dragon to unlock a Blessing Shrine chest." },
  { id: "spring-wisdom", name: "Spring of Wisdom",         location: "Mount Lanayru Summit",    coords: "3869, -1148, 0526",  description: "Dragon scale shrine on the frigid mountain summit. Offers a significant heart container reward when activated." },
  { id: "spring-courage", name: "Spring of Courage",       location: "Dracozu River, Faron",    coords: "1548, -2630, 0025",  description: "Dragon scale shrine shaped like a serpent. The river path itself forms the shape of a dragon from the sky." },
];

export const MAP_URL     = "https://www.zeldadungeon.net/tears-of-the-kingdom-interactive-map/";
export const ALT_MAP_URL = "https://objmap-totk.zeldamods.org/";
