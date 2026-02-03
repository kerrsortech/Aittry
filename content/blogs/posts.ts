export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; author?: string }
  | { type: "image"; src: string; alt: string; caption?: string }

export type BlogPost = {
  slug: string
  title: string
  summary: string
  date: string
  readTime: string
  tags: string[]
  author: {
    name: string
    role?: string
  }
  featured?: boolean
  content: BlogContentBlock[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "virtual-try-on-shopify",
    title: "Virtual Try-On on Shopify: Setup Options + Integration Checklist (2026)",
    summary:
      "A practical guide to shipping virtual try-on on Shopify: placement, integration options, catalog requirements, QA checklist, and a rollout plan that drives conversion.",
    date: "2026-02-03",
    readTime: "8 min read",
    tags: ["Shopify", "Integration", "Virtual Try-On", "Ecommerce"],
    author: {
      name: "Stylr Team",
      role: "Growth",
    },
    featured: true,
    content: [
      {
        type: "paragraph",
        text:
          "Virtual try-on only moves revenue when it’s fast, believable, and easy to find. On Shopify, the difference between a cool demo and a conversion lever comes down to PDP placement, catalog readiness, and performance QA.",
      },
      { type: "heading", text: "TL;DR" },
      {
        type: "list",
        items: [
          "Place try-on on the PDP near the primary image carousel (above the fold).",
          "Clean up catalog + variant mapping before you integrate anything.",
          "Launch as a pilot category, measure lift, then expand.",
        ],
      },
      { type: "heading", text: "1) Where virtual try-on should live (Shopify UX)" },
      {
        type: "paragraph",
        text:
          "For most Shopify stores, the highest adoption placement is the PDP image area: next to the main carousel with a clear “Try it on” entry point. A secondary placement after Add to Cart can work as a safety net, but avoid burying try-on in tabs or far below reviews—usage drops fast.",
      },
      { type: "heading", text: "2) Three ways to add virtual try-on to Shopify" },
      { type: "heading", text: "Option 1: Shopify App embed (fastest path)" },
      {
        type: "paragraph",
        text:
          "Best when you want speed-to-launch and minimal dev time. Typical timeline is days to a couple of weeks, depending on catalog readiness.",
      },
      {
        type: "list",
        items: [
          "Pros: fastest launch, lowest engineering lift, easiest maintenance.",
          "Cons: less bespoke customization than a headless build.",
        ],
      },
      { type: "heading", text: "Option 2: Headless Shopify (custom storefront)" },
      {
        type: "paragraph",
        text:
          "Best when you already run a custom storefront (Hydrogen/Next.js) and want full UI control. Timeline is usually weeks.",
      },
      {
        type: "list",
        items: [
          "Pros: pixel-perfect UI, deeper experimentation and personalization.",
          "Cons: higher engineering cost and ongoing maintenance.",
        ],
      },
      { type: "heading", text: "Option 3: SDK/API integration (custom needs)" },
      {
        type: "paragraph",
        text:
          "Best when you need deeper workflows (custom catalog pipelines, bespoke analytics, or enterprise constraints). Timeline is weeks+."
      },
      {
        type: "list",
        items: [
          "Pros: maximum flexibility.",
          "Cons: requires engineering and clear requirements up front.",
        ],
      },
      { type: "heading", text: "3) Data you need before integration" },
      {
        type: "paragraph",
        text:
          "Try-on quality is heavily upstream of the model: clean catalog inputs produce believable outputs. Before launching, make sure your product data is consistent and variant mapping is reliable.",
      },
      {
        type: "list",
        items: [
          "Clean product images per variant (consistent angles help).",
          "Reliable variant mapping (size/color) and category tagging.",
          "Any sizing context you already have (size charts, fit notes) if you plan to surface fit guidance.",
        ],
      },
      { type: "heading", text: "4) UX patterns that actually convert" },
      {
        type: "list",
        items: [
          "Add a trust cue near the button (studio-quality preview, private & secure, fast try-on).",
          "Give simple photo guidance (good light, correct framing for category).",
          "Keep the flow short: upload once, try multiple items.",
        ],
      },
      { type: "heading", text: "5) QA checklist (don’t skip this)" },
      {
        type: "list",
        items: [
          "Mobile performance: PDP stays fast and stable (no layout shift).",
          "Latency: try-on results feel “instant enough” for a shopping flow.",
          "Edge cases: low light, unusual angles, accessories overlap.",
          "Analytics events: try-on started, completed, add-to-cart after try-on.",
        ],
      },
      { type: "heading", text: "6) Launch plan: pilot → scale" },
      {
        type: "list",
        items: [
          "Start with 1–2 high-traffic categories (eyewear or a top-selling collection).",
          "Run a simple measurement plan (A/B or phased rollout).",
          "Expand by category once quality + performance are stable.",
        ],
      },
      {
        type: "quote",
        text:
          "The best try-on isn’t the most complex one — it’s the one shoppers actually use on the PDP.",
        author: "Stylr Growth",
      },
      { type: "heading", text: "Next step" },
      {
        type: "paragraph",
        text:
          "Want a Shopify-first rollout with onboarding support? Request access and share your store URL + the category you want to pilot. We’ll recommend the fastest integration path and a measurement plan.",
      },
    ],
  },
  {
    slug: "building-trust-in-virtual-try-on",
    title: "Building Trust in Virtual Try-On",
    summary:
      "How fit feedback, realistic lighting, and consistent scale cues help shoppers feel confident enough to hit checkout.",
    date: "2026-02-03",
    readTime: "6 min read",
    tags: ["Product", "AI", "Retail"],
    author: {
      name: "Stylr Team",
      role: "Product Insights",
    },
    featured: false,
    content: [
      {
        type: "paragraph",
        text:
          "Confidence is the currency of online fashion. When customers can clearly see how an item sits on their body, they hesitate less and complete the purchase more often. For virtual try-on, trust is built in small, compounding details.",
      },
      { type: "heading", text: "Why trust is the conversion lever" },
      {
        type: "paragraph",
        text:
          "Most try-on experiences fail because they feel approximate. Shoppers notice when lighting is off, when a garment floats, or when proportions feel inconsistent. Those tiny mismatches add friction at the exact moment you need momentum.",
      },
      {
        type: "list",
        items: [
          "Match lighting to the user’s photo so fabric looks believable.",
          "Keep sizing consistent across categories to reduce “scale drift.”",
          "Explain fit signals in plain language so shoppers know what to expect.",
        ],
      },
      { type: "heading", text: "What we ship at Stylr" },
      {
        type: "paragraph",
        text:
          "Stylr blends studio-quality rendering with fast AI to keep the experience smooth and honest. We focus on the few details shoppers care about most: realistic material behavior, accurate proportions, and a guided flow that makes decisions easier.",
      },
      {
        type: "image",
        src: "/og-image.png",
        alt: "Stylr virtual try-on experience preview",
        caption: "Consistent lighting and scale cues build confidence.",
      },
      {
        type: "quote",
        text:
          "The best try-on doesn’t feel like a demo. It feels like a mirror that understands you.",
        author: "Stylr Product Team",
      },
      { type: "heading", text: "Next on the roadmap" },
      {
        type: "paragraph",
        text:
          "We’re building clearer sizing guidance, better body-shape matching, and faster category onboarding so retailers can ship new collections in hours, not weeks.",
      },
    ],
  },
]
