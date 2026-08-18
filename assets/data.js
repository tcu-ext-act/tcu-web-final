/* ==========================================================================
   NEWS &  BLOG
   ========================================================================== */

var SITE_POSTS = [
  {
    id: 1,
    type: "news",
    slug: "downtown-transit-hub-breaks-ground",
    title: "Downtown Transit Hub Breaks Ground After $2.4B Funding Approval",
    category: "Infrastructure",
    author: "Maria Chen",
    role: "Senior Infrastructure Correspondent",
    date: "2026-08-14",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/buildwire-transit/1000/620",
    excerpt: "City officials and transit authorities broke ground on the long-delayed downtown interchange this week, kicking off a five-year build after federal funding cleared its final hurdle.",
    tags: ["Infrastructure", "Public Transit", "Funding", "Urban Development"]
  },
  {
    id: 2,
    type: "news",
    slug: "osha-fall-protection-rules-take-effect",
    title: "New OSHA Fall-Protection Rules Take Effect Nationwide",
    category: "Safety & Regulation",
    author: "David Alvarez",
    role: "Safety & Policy Reporter",
    date: "2026-08-11",
    readTime: "4 min read",
    image: "https://picsum.photos/seed/buildwire-osha/1000/620",
    excerpt: "Updated fall-protection standards for residential and commercial jobsites are now in force, with a 90-day grace period for smaller contractors to come into compliance.",
    tags: ["Safety", "OSHA", "Regulation", "Workforce"]
  },
  {
    id: 3,
    type: "news",
    slug: "steel-prices-climb-12-percent",
    title: "Steel Prices Climb 12% as Demand Outpaces Supply",
    category: "Materials & Markets",
    author: "Priya Nair",
    role: "Markets Correspondent",
    date: "2026-08-07",
    readTime: "3 min read",
    image: "https://picsum.photos/seed/buildwire-steel/1000/620",
    excerpt: "Structural steel prices posted their sharpest monthly gain in two years, driven by a wave of infrastructure spending and tightening mill capacity.",
    tags: ["Materials", "Steel", "Markets", "Cost Management"]
  },
  {
    id: 4,
    type: "news",
    slug: "regional-contractor-wins-largest-infrastructure-contract",
    title: "Regional Contractor Wins Largest Infrastructure Contract in State History",
    category: "Industry",
    author: "Maria Chen",
    role: "Senior Infrastructure Correspondent",
    date: "2026-08-02",
    readTime: "4 min read",
    image: "https://picsum.photos/seed/buildwire-contract/1000/620",
    excerpt: "A joint venture led by a mid-sized regional firm was awarded a $1.8 billion highway modernization contract, beating out three national-scale competitors.",
    tags: ["Industry", "Contracts", "Highways", "Regional"]
  },
  {
    id: 5,
    type: "news",
    slug: "green-building-mandate-passes-three-more-states",
    title: "Green Building Mandate Passes in Three More States",
    category: "Policy",
    author: "David Alvarez",
    role: "Safety & Policy Reporter",
    date: "2026-07-28",
    readTime: "3 min read",
    image: "https://picsum.photos/seed/buildwire-green/1000/620",
    excerpt: "New legislation requires all new commercial buildings over 50,000 square feet to meet updated energy-performance standards starting in 2028.",
    tags: ["Policy", "Sustainability", "Green Building", "Commercial"]
  },
  {
    id: 6,
    type: "blog",
    slug: "modular-construction-cutting-timelines",
    title: "5 Ways Modular Construction Is Cutting Project Timelines in Half",
    category: "Innovation",
    author: "Tomás Reyes",
    role: "Contributing Editor",
    date: "2026-08-15",
    readTime: "6 min read",
    image: "https://picsum.photos/seed/buildwire-modular/1000/620",
    excerpt: "Off-site fabrication isn't new, but a new generation of modular systems is compressing schedules in ways that are hard to ignore. Here's what's actually driving the gains.",
    tags: ["Modular", "Innovation", "Scheduling", "Prefab"]
  },
  {
    id: 7,
    type: "blog",
    slug: "jobsite-safety-culture-that-sticks",
    title: "How to Build a Jobsite Safety Culture That Actually Sticks",
    category: "Safety",
    author: "Angela Fitzgerald",
    role: "Field Operations Columnist",
    date: "2026-08-09",
    readTime: "7 min read",
    image: "https://picsum.photos/seed/buildwire-safetyculture/1000/620",
    excerpt: "Posters and toolbox talks aren't enough. Real safety culture comes from how crews are led day to day — here's what separates sites that talk about safety from sites that live it.",
    tags: ["Safety", "Leadership", "Culture", "Field Operations"]
  },
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
];

/* Expose to the browser (window.SITE_POSTS, used by main.js) and to Node
   (module.exports, used by generate.js) from the same array. */
if (typeof window !== "undefined") { window.SITE_POSTS = SITE_POSTS; }
if (typeof module !== "undefined" && module.exports) { module.exports = SITE_POSTS; }
