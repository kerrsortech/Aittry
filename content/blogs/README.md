# Blog content structure

This folder holds the blog collection that powers `/blog`. Add one new object per post in `posts.ts`.

## Required fields

- `slug`: URL-safe unique id (kebab-case)
- `title`: short, clear headline
- `summary`: 1–2 sentence teaser (also used as the post subheading)
- `date`: publish date in `YYYY-MM-DD`
- `readTime`: short reading-time label (e.g. `5 min read`)
- `tags`: 2–4 topical tags
- `author.name`: display name
- `content`: ordered list of content blocks (see below)

## Optional fields

- `author.role`: role or team label
- `featured`: `true` to highlight at the top of the list

## Content blocks

Each post uses an ordered list of blocks so you can mix headings, text, lists, images, and quotes. Use any combination and keep it minimal.

Supported blocks:

- `heading`: section title
- `paragraph`: main body text
- `list`: bullet list
- `image`: full-width image with optional caption (store images in `public/blog/` and reference as `/blog/filename.jpg`)
- `quote`: short highlight or takeaway

## Template

```ts
{
  slug: "your-post-slug",
  title: "Your Post Title",
  summary: "A concise teaser that explains what readers will get.",
  date: "2026-02-10",
  readTime: "4 min read",
  tags: ["Product", "AI"],
  author: {
    name: "Stylr Team",
    role: "Research",
  },
  featured: false,
  content: [
    { type: "paragraph", text: "Open with a clear, 2–3 sentence intro." },
    { type: "heading", text: "What this update means" },
    {
      type: "list",
      items: ["Point one", "Point two", "Point three"],
    },
    {
      type: "image",
      src: "/blog/example.png",
      alt: "Short description of the image",
      caption: "Optional caption to add context.",
    },
    {
      type: "quote",
      text: "A strong one-line takeaway to remember.",
      author: "Stylr Team",
    },
  ],
}
```
