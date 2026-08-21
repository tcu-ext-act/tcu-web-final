/* ==========================================================================
   NEWS &  BLOG
   ========================================================================== */

var SITE_POSTS = [
  {
    id: 1,
    type: "news",
    slug: "nakheel-handover-of-892-homes-at-jebel-ali-village",
    title: "Nakheel commences handover of 892 homes at Jebel Ali Village",
    category: "Property",
    author: "TCU",
    role: "Admin",
    date: "2026-08-19",
    readTime: "5 min read",
    image: "https://meconstructionnews.com/wp-content/uploads/2026/08/Nakheel.jpg",
    excerpt: "Nakheel begins handover of 892 homes at Jebel Ali Village, marking the beginning of residents’ move into this new residential community",
    tags: ["Property"]
  },
  {
    id: 2,
    type: "news",
    slug: "lava-appointed-custodian-of-expo-2030-riyadh",
    title: "LAVA appointed Custodian of Expo 2030 Riyadh Master plan",
    category: "Project",
    author: "TCU",
    role: "Admin",
    date: "2026-08-19",
    readTime: "5 min read",
    image: "https://meconstructionnews.com/wp-content/uploads/2026/08/EXPO-RIYADH.jpg",
    excerpt: "LAVA appointed as Custodian of Expo 2030 Riyadh Master plan as the project transitions into detailed design and implementation stage",
    tags: ["Project"]
  },
  {
    id: 3,
    type: "news",
    slug: "red-sea-global-opens-110-key-rosewood-amaala-resort-in-saudi-arabia",
    title: "Red Sea Global opens 110-key Rosewood AMAALA Resort in Saudi Arabia",
    category: "Infrastructure",
    author: "TCU",
    role: "Admin",
    date: "2026-08-19",
    readTime: "4 min read",
    image: "https://www.constructionweekonline.com/cloud/2026/08/18/4f3640ed-b48e-48ac-b55b-96ec4e0ded78.jpg",
    excerpt: "Rosewood AMAALA opens at Triple Bay, adding 110 keys, branded residences and a major wellness offering.",
    tags: ["Infrastructure"]
  },
  {
    id: 4,
    type: "news",
    slug: "raimondi-debuts-first-ever-telecrawler-crane-line-powered-by-terex-engineering",
    title: "Raimondi Debuts First-Ever Telecrawler Crane Line, Powered By Terex Engineering",
    category: "Machinery",
    author: "TCU",
    role: "Admin",
    date: "2026-08-19",
    readTime: "5 min read",
    image: "https://www.cbnme.com/wp-content/uploads/2026/04/Raimondi-to-address-market-demand-with-the-launch-of-its-first-telecrawler-crane-line-engineered-by-Terex-Rough-Terrain-Cranes-1-scaled.jpg",
    excerpt: "The new line debuts with the TTC 70, a telecrawler crane designed, engineered, and manufactured at the Group’s rough terrian headquarters in Italy",
    tags: ["Machinery"]
  },
  {
    id: 5,
    type: "blog",
    slug: "residential-construction-equipment-machines-used-on-housing-sites",
    title: "Residential Construction Equipment: Machines Used on Housing Sites",
    category: "Blog",
    author: "TCU",
    role: "Admin",
    date: "2026-08-20",
    readTime: "10 min read",
    image: "https://www.hopenn.com/wp-content/uploads/2024/12/C595183-scaled.jpg",
    excerpt: "Residential construction equipment explained: mini excavators, backhoe loaders, telehandlers, concrete pumps and compaction plant used on housing sites.",
    tags: ["Blog"]
  },
  {
    id: 6,
    type: "blog",
    slug: "commercial-construction-equipment-machines-used-on-office-retail-and-high-rise-projects",
    title: "Commercial Construction Equipment: Machines Used on Office, Retail and High-Rise Projects",
    category: "Blog",
    author: "TCU",
    role: "Admin",
    date: "2026-08-20",
    readTime: "10 min read",
    image: "https://cmscdn.almarwan.com/public/inline-images/Al%20Marwan%20rental%20fleet%20at%20Al%20Layyah.jpg",
    excerpt: "Commercial construction equipment guide: tower cranes, concrete pumps, placing booms, hoists, mast climbers and access plant for office and high-rise builds.",
    tags: ["Blog"]
  }
  /*,
  
  {
    id: 8,
    type: "blog",
    slug: "contractors-guide-rising-material-costs",
    title: "The Contractor's Guide to Navigating Rising Material Costs",
    category: "Business",
    author: "Priya Nair",
    role: "Markets Correspondent",
    date: "2026-08-04",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/buildwire-materials/1000/620",
    excerpt: "Escalation clauses, early procurement, and better forecasting — practical ways contractors are protecting margins as material prices stay volatile.",
    tags: ["Business", "Cost Management", "Materials", "Procurement"]
  },
  {
    id: 9,
    type: "blog",
    slug: "bim-adoption-no-longer-optional",
    title: "Why BIM Adoption Is No Longer Optional for Mid-Size Firms",
    category: "Technology",
    author: "Tomás Reyes",
    role: "Contributing Editor",
    date: "2026-07-30",
    readTime: "6 min read",
    image: "https://picsum.photos/seed/buildwire-bim/1000/620",
    excerpt: "Building information modeling used to be a nice-to-have for large GCs. For mid-size firms competing on complex projects, it's becoming table stakes.",
    tags: ["Technology", "BIM", "Coordination", "Innovation"]
  },
  {
    id: 10,
    type: "blog",
    slug: "lessons-from-the-field-managing-subcontractors",
    title: "Lessons from the Field: Managing Subcontractors on Multi-Phase Projects",
    category: "Field Operations",
    author: "Angela Fitzgerald",
    role: "Field Operations Columnist",
    date: "2026-07-24",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/buildwire-subs/1000/620",
    excerpt: "Multi-phase projects live or die on subcontractor coordination. A few hard-won lessons from twenty years of running complex jobsites.",
    tags: ["Field Operations", "Subcontractors", "Scheduling", "Leadership"]
  }
    */
];

/* Expose to the browser (window.SITE_POSTS, used by main.js) and to Node
   (module.exports, used by generate.js) from the same array. */
if (typeof window !== "undefined") { window.SITE_POSTS = SITE_POSTS; }
if (typeof module !== "undefined" && module.exports) { module.exports = SITE_POSTS; }
