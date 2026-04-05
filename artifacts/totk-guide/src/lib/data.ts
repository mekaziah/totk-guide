export const WALKTHROUGH_STEPS = [
  {
    id: "great-sky-island",
    title: "The Great Sky Island",
    description: "Your journey begins in the sky. Master your new abilities.",
    steps: [
      "Awaken in the Room of Awakening.",
      "Find the Ukouh Shrine (Ultrahand).",
      "Navigate to In Isa Shrine (Fuse).",
      "Reach the Gutanbac Shrine in the snowy peaks (Ascend).",
      "Return to the Temple of Time and access the Nachoyah Shrine (Recall)."
    ]
  },
  {
    id: "hyrule-descent",
    title: "To the Kingdom of Hyrule",
    description: "Dive below the clouds and establish a base of operations.",
    steps: [
      "Dive from the Temple of Time.",
      "Land in Central Hyrule.",
      "Head to Lookout Landing and speak with Purah.",
      "Activate the Lookout Landing Skyview Tower to unlock the map and Paraglider."
    ]
  },
  {
    id: "regional-phenomena",
    title: "Regional Phenomena",
    description: "Investigate the four regions plagued by sudden disasters.",
    steps: [
      "Rito Village: The Wind Temple (Tulin, Sage of Wind).",
      "Goron City: The Fire Temple (Yunobo, Sage of Fire).",
      "Zora's Domain: The Water Temple (Sidon, Sage of Water).",
      "Gerudo Town: The Lightning Temple (Riju, Sage of Lightning)."
    ]
  },
  {
    id: "final-battle",
    title: "Destroy Ganondorf",
    description: "Descend into the depths of Hyrule Castle.",
    steps: [
      "Plunge into the Gloom's Lair beneath Hyrule Castle.",
      "Defeat the Demon King's Army.",
      "Confront Demon King Ganondorf.",
      "The Final Battle."
    ]
  }
];

export const SHRINES = [
  { id: "ukouh", name: "Ukouh Shrine", region: "Sky Islands", type: "Puzzle", hint: "The Ability to Create", coords: "0274, -0913, 1460" },
  { id: "in-isa", name: "In Isa Shrine", region: "Sky Islands", type: "Puzzle", hint: "The Ability to Combine", coords: "0027, -1503, 1408" },
  { id: "gutanbac", name: "Gutanbac Shrine", region: "Sky Islands", type: "Puzzle", hint: "The Ability to Rise", coords: "0709, -1381, 1584" },
  { id: "nachoyah", name: "Nachoyah Shrine", region: "Sky Islands", type: "Puzzle", hint: "The Ability to Rewind", coords: "0388, -1660, 2299" },
  { id: "kyononis", name: "Kyononis Shrine", region: "Central Hyrule", type: "Combat", hint: "Combat Training", coords: "-0205, 0451, 0021" },
  { id: "sinakawak", name: "Sinakawak Shrine", region: "Central Hyrule", type: "Puzzle", hint: "Uplifting Device", coords: "-1413, 0756, 0089" },
  { id: "mayaumekis", name: "Mayaumekis Shrine", region: "Hebra", type: "Puzzle", hint: "Downward Force", coords: "-2858, 3053, 0277" },
  { id: "sitsum", name: "Sitsum Shrine", region: "Eldin", type: "Puzzle", hint: "A Controlling Device", coords: "2369, 2595, 0790" },
  { id: "igoshon", name: "Igoshon Shrine", region: "Lanayru", type: "Puzzle", hint: "Orbs of Water", coords: "3480, 0664, 1325" },
  { id: "miryotanog", name: "Miryotanog Shrine", region: "Gerudo", type: "Puzzle", hint: "Proving Grounds: Lure", coords: "-4679, -3086, 0054" },
  { id: "joku-u", name: "Joku-u Shrine", region: "Faron", type: "Blessing", hint: "Rauru's Blessing", coords: "1375, -3339, 0429" }
];

export const WEAPONS = [
  { id: "master-sword", name: "Master Sword", type: "Sword", attack: 30, durability: 40, effect: "Glows near Gloom/Ganondorf. Recharges.", location: "Light Dragon (requires 2 full stamina wheels)" },
  { id: "scimitar-of-seven", name: "Scimitar of the Seven", type: "Sword", attack: 28, durability: 60, effect: "Strong Fusion (doubles fuse material attack)", location: "Gerudo Town (Reward from Isha)" },
  { id: "royal-guard-claymore", name: "Royal Guard's Claymore", type: "Two-Handed", attack: 32, durability: 15, effect: "Breaking Point (massive damage when near breaking)", location: "Hyrule Castle" },
  { id: "dusk-claymore", name: "Dusk Claymore", type: "Two-Handed", attack: 32, durability: 50, effect: "None", location: "Typhlo Ruins puzzle / Amiibo" },
  { id: "gloom-sword", name: "Gloom Sword", type: "Sword", attack: 41, durability: 15, effect: "Gloom Toll (drains hearts on use)", location: "Phantom Ganon drop" },
  { id: "eightfold-longblade", name: "Eightfold Longblade", type: "Two-Handed", attack: 23, durability: 25, effect: "Wind Razor (charge attack shoots wind)", location: "Yiga Clan hideout / Depths" }
];

export const SHIELDS = [
  { id: "hylian-shield", name: "Hylian Shield", defense: 90, durability: 800, effect: "Highest durability", location: "Hyrule Castle Docks" },
  { id: "daybreaker", name: "Daybreaker", defense: 48, durability: 60, effect: "High durability", location: "Gerudo Town (Reward from Isha)" },
  { id: "royal-guard-shield", name: "Royal Guard's Shield", defense: 70, durability: 14, effect: "High defense, brittle", location: "Hyrule Castle Sanctum" },
  { id: "sea-breeze-shield", name: "Sea-Breeze Shield", defense: 65, durability: 90, effect: "None", location: "Tabantha Frontier Depths" }
];

export const BOWS = [
  { id: "savage-lynel-bow", name: "Savage Lynel Bow", attack: 32, durability: 45, range: "Medium", effect: "3x or 5x Multishot", location: "White/Silver Lynels" },
  { id: "great-eagle-bow", name: "Great Eagle Bow", attack: 28, durability: 60, range: "Long", effect: "3x Multishot, fast draw", location: "Rito Village (Reward from Teba)" },
  { id: "royal-guard-bow", name: "Royal Guard's Bow", attack: 50, durability: 20, range: "Medium", effect: "High attack, low durability", location: "Hyrule Castle" }
];

export const ARMOR = [
  { id: "fierce-deity", name: "Fierce Deity Set", pieces: ["Mask", "Armor", "Boots"], effect: "Attack Up", location: "Misko's Cave of Chests questline" },
  { id: "gloom", name: "Armor of the Depths", pieces: ["Hood", "Tunic", "Gaiters"], effect: "Gloom Resistance", location: "Bargainer Statues in the Depths" },
  { id: "ancient-hero", name: "Ancient Hero's Aspect", pieces: ["Full Body"], effect: "Master Sword Beam Up", location: "Complete all 152 Shrines" },
  { id: "zora", name: "Zora Set", pieces: ["Helm", "Armor", "Greaves"], effect: "Swim Speed Up, Waterfall Climb", location: "Zora's Domain quests" },
  { id: "climbing", name: "Climbing Gear", pieces: ["Band", "Gear", "Boots"], effect: "Climb Speed Up", location: "Various Caves in Central Hyrule/Lanayru" }
];

export const SECRETS = [
  { id: "dragons-tears", title: "The Dragon's Tears", description: "Find the 11 geoglyphs around Hyrule. The 12th tear reveals the Master Sword's location and Zelda's fate." },
  { id: "bargainer", title: "Bargainer Statues", description: "Trade Poes in the Depths for the Depths Set, Dark Tunic, and copies of unique weapons." },
  { id: "satori", title: "Lord of the Mountain", description: "Offer fruit at cherry blossom trees to reveal all caves in the region." }
];

export const HIDDEN_AREAS = [
  { id: "lomei", name: "Lomei Labyrinths", location: "Surface, Sky, Depths", coords: "Various", description: "Three interconnected labyrinths. Complete all three to earn the Evil Spirit Armor set." },
  { id: "typhlo", name: "Typhlo Ruins Sky Islands", location: "Above Typhlo Ruins", coords: "0343, 3133, 0780", description: "Ancient ruins holding secret Zonai devices and lore." },
  { id: "eventide", name: "Eventide Island", location: "Necluda Sea", coords: "4632, -3712, 0018", description: "A pirate strongold challenge where you must clear out Monster Forces to claim your reward." }
];

export const MAP_URL = "https://www.zeldadungeon.net/tears-of-the-kingdom-interactive-map/";
export const ALT_MAP_URL = "https://www.marjacob.me/totk/";
