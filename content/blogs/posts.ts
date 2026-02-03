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
    featured: true,
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
