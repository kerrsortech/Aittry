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
    slug: "best-virtual-try-on-software-ecommerce",
    title:
      "Best Virtual Try-On Software for Ecommerce (2026): Feature Checklist + Evaluation Scorecard",
    summary:
      "A practical scorecard to evaluate virtual try-on vendors: realism, speed, onboarding, Shopify integration, analytics, privacy, and red flags to avoid.",
    date: "2026-02-10",
    readTime: "9 min read",
    tags: ["Virtual Try-On", "Ecommerce", "Vendor Evaluation", "Shopify"],
    author: {
      name: "Stylr Team",
      role: "Growth",
    },
    featured: false,
    content: [
      {
        type: "paragraph",
        text:
          "Virtual try-on is one of those categories where a demo can look impressive and still fail on a real product page. The winning platforms are the ones that stay fast on mobile, keep scale consistent, and don’t create a content-ops nightmare.",
      },
      {
        type: "paragraph",
        text:
          "If you’re launching on Shopify, start with placement + performance. See: /blog/virtual-try-on-shopify",
      },
      { type: "heading", text: "TL;DR" },
      {
        type: "list",
        items: [
          "Evaluate vendors on believability + speed + onboarding, not flashy outputs.",
          "Demand clarity on Shopify integration and analytics events.",
          "Run a short pilot with defined success metrics (conversion rate, returns, AOV).",
        ],
      },
      { type: "heading", text: "What “virtual try-on software” should include" },
      {
        type: "list",
        items: [
          "A customer-facing try-on UI that fits your PDP flow.",
          "A generation/rendering pipeline that looks believable across categories.",
          "Catalog ingestion + variant mapping that doesn’t break at scale.",
          "Measurement hooks (events + analytics) to prove ROI.",
        ],
      },
      { type: "heading", text: "The 10 criteria that predict business impact" },
      {
        type: "list",
        items: [
          "Realism (lighting + material behavior).",
          "Consistent scale (no floating artifacts across products).",
          "Speed/latency (fast enough for shopping, especially mobile).",
          "Mobile PDP performance (no layout shift, no heavy scripts).",
          "Catalog onboarding time (hours/days vs weeks).",
          "Variant correctness (color/size mapping is reliable).",
          "Multi-category support (eyewear, apparel, shoes, accessories).",
          "Analytics instrumentation (try-on started/completed, add-to-cart after try-on).",
          "Privacy/data handling (clear policies, retention options).",
          "Rollout support (pilot → scale plan, not “good luck”).",
        ],
      },
      { type: "heading", text: "Copy/paste evaluation scorecard (weighted)" },
      {
        type: "list",
        items: [
          "Realism — weight 3",
          "Scale consistency — weight 3",
          "Speed — weight 3",
          "Shopify integration maturity — weight 3",
          "Onboarding ops (catalog + variants) — weight 3",
          "Analytics/events — weight 2",
          "Multi-category support — weight 2",
          "Brand controls — weight 1",
          "Privacy controls — weight 1",
          "Support/SLAs — weight 1",
        ],
      },
      { type: "heading", text: "Pass/fail questions" },
      {
        type: "list",
        items: [
          "Can we launch a pilot category in <30 days?",
          "Can we measure try-on → add-to-cart → purchase lift?",
          "Does it stay fast on mobile PDP?",
        ],
      },
      { type: "heading", text: "A 2-week vendor test plan" },
      {
        type: "list",
        items: [
          "Choose 1 category with meaningful traffic (eyewear or top-selling apparel).",
          "Define success: conversion lift, add-to-cart lift, returns reduction (if measurable).",
          "QA on mobile devices and real customer photos.",
          "Run a controlled rollout (A/B if possible; otherwise phased exposure).",
        ],
      },
      { type: "heading", text: "Red flags to watch for" },
      {
        type: "list",
        items: [
          "Great demos, unclear answers on measurement/events.",
          "Heavy manual editing required for each SKU.",
          "Try-on lives on a separate page (low adoption).",
          "Accuracy claims without a clear evaluation method.",
        ],
      },
      { type: "heading", text: "Next step" },
      {
        type: "paragraph",
        text:
          "If you’re evaluating vendors, start with Shopify placement + measurement design so you can validate impact quickly. Request access and share your store URL + category to pilot—we’ll recommend the fastest rollout path and what to measure first.",
      },
    ],
  },
  {
    slug: "virtual-try-on-roi",
    title: "Virtual Try-On ROI: How to Measure Conversion Lift, Returns Reduction, and AOV",
    summary:
      "A practical measurement plan and simple ROI model for virtual try-on: what to track, how to run a rollout, and how to quantify business impact.",
    date: "2026-02-13",
    readTime: "8 min read",
    tags: ["Virtual Try-On", "ROI", "Analytics", "Ecommerce"],
    author: {
      name: "Stylr Team",
      role: "Growth",
    },
    featured: false,
    content: [
      {
        type: "paragraph",
        text:
          "Most brands evaluate try-on with vibes: “users liked it.” That’s not enough to justify rollout. ROI is measurable—if you instrument the right events and run a controlled rollout.",
      },
      {
        type: "paragraph",
        text:
          "If you’re implementing on Shopify, use this as your baseline: /blog/virtual-try-on-shopify",
      },
      { type: "heading", text: "TL;DR" },
      {
        type: "list",
        items: [
          "ROI comes from conversion lift and returns reduction (AOV is a bonus).",
          "Don’t launch and pray: define events and run a controlled rollout.",
          "Start with a pilot category, then scale.",
        ],
      },
      { type: "heading", text: "The 3 ROI levers" },
      {
        type: "list",
        items: [
          "Conversion lift: try-on reduces uncertainty and increases add-to-cart + checkout completion.",
          "Returns reduction: fewer “not as expected” outcomes when shoppers see themselves in the product.",
          "AOV uplift: higher confidence enables bundles and reduces abandoned carts.",
        ],
      },
      { type: "heading", text: "What to measure (events)" },
      {
        type: "list",
        items: [
          "Try-on started",
          "Try-on completed",
          "Add-to-cart after try-on",
          "Purchase after try-on",
          "Returns rate + return reason codes (if available)",
        ],
      },
      { type: "heading", text: "Measurement design (choose one)" },
      {
        type: "list",
        items: [
          "A/B test: split traffic and compare conversion + returns.",
          "Phased rollout: launch one category/collection first, then expand.",
          "Holdout: keep a portion of traffic without try-on for a defined period.",
        ],
      },
      { type: "heading", text: "A simple ROI model (inputs)" },
      {
        type: "list",
        items: [
          "Monthly PDP sessions eligible for try-on",
          "Baseline conversion rate",
          "Expected conversion lift (start conservative)",
          "Return rate + average order value",
          "Tool cost (plan) + onboarding time",
        ],
      },
      { type: "heading", text: "30 / 60 / 90 day rollout plan" },
      {
        type: "list",
        items: [
          "30 days: pilot + QA + instrumentation.",
          "60 days: expand categories + iterate PDP placement + improve photo guidance.",
          "90 days: optimize, decide scaling, and quantify returns impact.",
        ],
      },
      { type: "heading", text: "Next step" },
      {
        type: "paragraph",
        text:
          "If you share your store URL, category, and monthly traffic range, we’ll provide a simple ROI model and a rollout plan. Request access to get started.",
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
  {
    slug: "struggling-with-low-conversion-rates-and-high-returns-in-your-fashion-store",
    title: "Struggling With Low Conversion Rates and High Returns in Your Fashion Store?",
    summary:
      "Are you seeing decent traffic on your store but shoppers aren't buying? Or worse — they buy your products and then return them a week later?",
    date: "2026-02-07",
    readTime: "6 min read",
    tags: ["Shopify", "Fashion", "Virtual Try-On", "Conversion", "Returns", "AI"],
    author: {
      name: "Stylr Team",
      role: "Growth",
    },
    featured: false,
    content: [
      {
        type: "heading",
        text: "Struggling With Low Conversion Rates and High Returns in Your Fashion Store?",
      },
      {
        type: "paragraph",
        text:
          "Are you seeing decent traffic on your store but shoppers aren't buying? Or worse — they buy your products and then return them a week later?",
      },
      {
        type: "paragraph",
        text: "If you're running an apparel or fashion store, you're not alone.",
      },
      {
        type: "paragraph",
        text:
          "Thousands of online fashion businesses face the exact same problem: low conversion rates and high return rates. And both issues stem from the same root cause.",
      },
      {
        type: "heading",
        text: "The Real Problem: Shoppers Can't See Themselves in Your Products",
      },
      {
        type: "paragraph",
        text: "Here's what happens when someone lands on your product page:",
      },
      {
        type: "paragraph",
        text:
          "They see beautiful photos of models wearing your clothes. Professional lighting, perfect angles, ideal fit. But then they ask themselves one critical question:",
      },
      {
        type: "paragraph",
        text: "\"How will this actually look on ME?\"",
      },
      {
        type: "paragraph",
        text:
          "They can't answer that question from model photos alone. So they either:",
      },
      {
        type: "list",
        items: [
          "Leave without buying (lost sale)",
          "Buy and hope for the best, then return it when it doesn't match their expectations (lost margin + hassle)",
        ],
      },
      { type: "heading", text: "The Numbers Tell the Story" },
      {
        type: "paragraph",
        text:
          "According to the National Retail Federation (NRF), 19.3% of online fashion sales are returned. That's nearly 1 in 5 purchases coming back.",
      },
      {
        type: "paragraph",
        text: "The top reason? \"Didn't look as expected.\"",
      },
      {
        type: "paragraph",
        text:
          "When shoppers can't visualize how a product will look on their own body, they make uncertain purchases. And uncertain purchases lead to returns.",
      },
      {
        type: "paragraph",
        text: "This isn't just about lost sales — it's about:",
      },
      {
        type: "list",
        items: [
          "Wasted shipping costs (both ways)",
          "Restocking and handling time",
          "Lost margins on returned items",
          "Frustrated customers who might not come back",
        ],
      },
      {
        type: "paragraph",
        text:
          "The solution isn't better product photos or more detailed size charts. Those help, but they don't solve the core problem.",
      },
      {
        type: "paragraph",
        text:
          "The solution is letting shoppers see themselves wearing your products before they buy.",
      },
      { type: "heading", text: "The Solution: AI Virtual Try-On Technology" },
      {
        type: "paragraph",
        text:
          "What if your shoppers could upload their photo and instantly see how your products look on them?",
      },
      {
        type: "paragraph",
        text:
          "Not a cartoon or a basic overlay — but a realistic, studio-quality image of them actually wearing your jacket, sunglasses, dress, or jewelry.",
      },
      {
        type: "paragraph",
        text: "That's exactly what AI virtual try-on does.",
      },
      { type: "heading", text: "How It Works" },
      { type: "paragraph", text: "It's simple:" },
      {
        type: "list",
        items: [
          "A shopper lands on your product page",
          'They click a "Virtual Try-On" button',
          "They upload a photo of themselves",
          "Within seconds, they see a realistic image of themselves wearing that exact product",
        ],
      },
      {
        type: "paragraph",
        text:
          "Now they can actually see if it suits them. No more guessing. No more \"I hope this works.\"",
      },
      { type: "heading", text: "Why This Changes Everything" },
      {
        type: "paragraph",
        text: "When shoppers can visualize themselves in your products:",
      },
      {
        type: "paragraph",
        text:
          "✅ Conversion rates go up — They're more confident about buying because they know it'll look good on them",
      },
      {
        type: "paragraph",
        text:
          "✅ Return rates go down — No more \"didn't look as expected\" returns because they knew exactly what they were getting",
      },
      {
        type: "paragraph",
        text:
          "✅ Customer satisfaction improves — Shoppers get what they expected, which builds trust and repeat purchases",
      },
      {
        type: "paragraph",
        text:
          "This isn't theory. Stores using high-quality virtual try-on see measurable improvements in both conversion and returns.",
      },
      { type: "heading", text: "What Makes Good Virtual Try-On?" },
      {
        type: "paragraph",
        text:
          "Not all virtual try-on tools are the same. Here's what actually matters:",
      },
      { type: "paragraph", text: "1. Realistic Quality" },
      {
        type: "paragraph",
        text:
          "Gimmicky overlays or cartoon-like results hurt trust more than they help. The image needs to be realistic enough that shoppers can make a confident decision.",
      },
      { type: "paragraph", text: "2. Fast Performance" },
      {
        type: "paragraph",
        text:
          "If it takes 30 seconds to generate an image, shoppers won't wait. It needs to feel instant.",
      },
      { type: "paragraph", text: "3. Works Across Your Entire Catalog" },
      {
        type: "paragraph",
        text:
          "It can't just work for one demo product. It needs to work for clothing, accessories, eyewear, jewelry, shoes — your entire catalog without manual setup for every item.",
      },
      { type: "paragraph", text: "4. Easy to Use" },
      {
        type: "paragraph",
        text:
          "If shoppers need to download an app or jump through hoops, they won't use it. One click, upload photo, see result — that's it.",
      },
      { type: "heading", text: "Beyond Virtual Try-On: AI Shopping Assistant" },
      {
        type: "paragraph",
        text:
          "Virtual try-on solves one problem: \"How will this look on me?\"",
      },
      {
        type: "paragraph",
        text: "But shoppers have other questions too:",
      },
      {
        type: "list",
        items: [
          '"What else would go with this?"',
          '"Do you have this in my budget?"',
          '"What should I wear to a wedding under £150?"',
          '"Does this run true to size?"',
        ],
      },
      {
        type: "paragraph",
        text: "That's where an AI shopping assistant comes in.",
      },
      {
        type: "paragraph",
        text:
          "Instead of a basic chatbot that just answers FAQs, imagine a shopping assistant that:",
      },
      {
        type: "paragraph",
        text:
          "✅ Understands your entire product catalog — It knows what you sell, what's in stock, and what goes together",
      },
      {
        type: "paragraph",
        text:
          "✅ Can build complete outfits within budget — A shopper asks for \"interview outfit under £200\" and it suggests a blazer, shirt, pants, and shoes that work together",
      },
      {
        type: "paragraph",
        text:
          "✅ Gives personalized recommendations — Based on style preferences, occasion, and budget",
      },
      {
        type: "paragraph",
        text:
          "✅ Is trained on your brand — It sounds like your brand, knows your policies, and gives answers specific to your store",
      },
      {
        type: "paragraph",
        text:
          "When you combine virtual try-on with an intelligent shopping assistant, you're not just showing shoppers how products look — you're guiding them through the entire purchase decision.",
      },
      {
        type: "paragraph",
        text:
          "The result? Higher conversion, lower returns, and happier customers.",
      },
      {
        type: "heading",
        text: "Meet Stylr: Virtual Try-On + AI Shopping Assistant for Your Store",
      },
      {
        type: "paragraph",
        text:
          "Stylr gives you both: studio-quality virtual try-on and a brand-trained AI shopping assistant — in one simple plugin.",
      },
      { type: "heading", text: "What Stylr Does" },
      { type: "paragraph", text: "1. Realistic Virtual Try-On" },
      {
        type: "paragraph",
        text:
          "Shoppers upload their photo and see themselves wearing your products in seconds. Not cartoonish overlays — actual studio-quality images that look real.",
      },
      {
        type: "paragraph",
        text:
          "Works for 15+ categories: clothing, eyewear, jewelry, handbags, shoes, hats, and more.",
      },
      { type: "paragraph", text: "2. AI Shopping Assistant Trained on Your Brand" },
      {
        type: "paragraph",
        text:
          "A chatbot that actually understands your products and can help shoppers make decisions:",
      },
      {
        type: "list",
        items: [
          '"Show me dresses under £100"',
          '"What would go with this jacket for a casual look?"',
          '"Build me a complete outfit for a wedding"',
        ],
      },
      {
        type: "paragraph",
        text:
          "It knows your catalog, your policies, and speaks in your brand voice.",
      },
      { type: "paragraph", text: "3. Works Across Your Entire Catalog" },
      {
        type: "paragraph",
        text:
          "No manual setup for every product. Stylr automatically works with your full catalog — no matter how many items you have.",
      },
      { type: "paragraph", text: "4. Real Analytics You Can Use" },
      {
        type: "paragraph",
        text:
          "See which products get the most try-ons, track conversion rates, and understand what's driving sales.",
      },
      { type: "heading", text: "Installation is Incredibly Easy" },
      { type: "paragraph", text: "For Shopify stores:" },
      {
        type: "paragraph",
        text:
          "Install Stylr from the Shopify App Store for free. It takes under 2 minutes.",
      },
      {
        type: "list",
        items: [
          'Search for "Stylr" in the Shopify App Store',
          "Click Install",
          "Approve permissions",
          "Enable the widget on your product pages",
          "Done",
        ],
      },
      { type: "paragraph", text: "For custom platforms:" },
      {
        type: "paragraph",
        text: "Use our SDK with full technical support. We'll have you live in under 7 days.",
      },
      { type: "heading", text: "Pricing That Makes Sense" },
      { type: "paragraph", text: "Plans start at $49/month for small stores." },
      {
        type: "paragraph",
        text: "Scale to $129/month (Pro) or $249/month (Max) as you grow.",
      },
      {
        type: "paragraph",
        text:
          "No hidden fees. No surprise charges. Just straightforward pricing based on usage.",
      },
      { type: "heading", text: "Ready to Increase Conversions and Lower Returns?" },
      {
        type: "paragraph",
        text:
          "Stop losing sales because shoppers can't visualize your products on themselves.",
      },
      {
        type: "paragraph",
        text:
          "Try Stylr free and see the difference it makes in your conversion rates and return rates.",
      },
      { type: "paragraph", text: "👉 Get started: stylr.tech" },
      { type: "paragraph", text: "📧 Questions? hello@stylr.tech" },
      {
        type: "paragraph",
        text:
          "Install from the Shopify App Store today — it takes less than 2 minutes.",
      },
    ],
  },
]
