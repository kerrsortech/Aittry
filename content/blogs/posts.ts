export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
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
        type: "list",
        items: [
          "Conversion rates go up because shoppers can make a confident decision.",
          "Return rates go down because expectations match what they receive.",
          "Customer satisfaction improves, which supports repeat purchases.",
        ],
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
      { type: "subheading", text: "1. Realistic Quality" },
      {
        type: "paragraph",
        text:
          "Gimmicky overlays or cartoon-like results hurt trust more than they help. The image needs to be realistic enough that shoppers can make a confident decision.",
      },
      { type: "subheading", text: "2. Fast Performance" },
      {
        type: "paragraph",
        text:
          "If it takes 30 seconds to generate an image, shoppers won't wait. It needs to feel instant.",
      },
      { type: "subheading", text: "3. Works Across Your Entire Catalog" },
      {
        type: "paragraph",
        text:
          "It can't just work for one demo product. It needs to work for clothing, accessories, eyewear, jewelry, shoes — your entire catalog without manual setup for every item.",
      },
      { type: "subheading", text: "4. Easy to Use" },
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
        type: "list",
        items: [
          "Understands your full product catalog, stock, and item relationships.",
          "Builds complete outfits within budget from a single shopper prompt.",
          "Gives personalized recommendations by style, occasion, and budget.",
          "Uses your brand voice, policies, and store-specific context.",
        ],
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
      { type: "subheading", text: "1. Realistic Virtual Try-On" },
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
      { type: "subheading", text: "2. AI Shopping Assistant Trained on Your Brand" },
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
      { type: "subheading", text: "3. Works Across Your Entire Catalog" },
      {
        type: "paragraph",
        text:
          "No manual setup for every product. Stylr automatically works with your full catalog — no matter how many items you have.",
      },
      { type: "subheading", text: "4. Real Analytics You Can Use" },
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
      { type: "subheading", text: "Get started: stylr.tech" },
      { type: "subheading", text: "Questions: hello@stylr.tech" },
      {
        type: "paragraph",
        text:
          "Install from the Shopify App Store today — it takes less than 2 minutes.",
      },
    ],
  },
]
