import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { blogPosts, type BlogContentBlock } from "@/content/blogs/posts"

type PageProps = {
  params: Promise<{ slug: string }>
}

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`))

const renderBlock = (block: BlogContentBlock, index: number) => {
  switch (block.type) {
    case "heading":
      return (
        <h2 key={index} className="text-2xl font-semibold text-foreground">
          {block.text}
        </h2>
      )
    case "paragraph":
      return (
        <p key={index} className="text-base leading-relaxed text-muted-foreground">
          {block.text}
        </p>
      )
    case "list":
      return (
        <ul key={index} className="space-y-2 text-base text-muted-foreground list-disc pl-5">
          {block.items.map((item, itemIndex) => (
            <li key={`${index}-${itemIndex}`}>{item}</li>
          ))}
        </ul>
      )
    case "quote":
      return (
        <figure
          key={index}
          className="rounded-2xl border border-border/40 bg-white/80 p-6 text-foreground shadow-sm"
        >
          <blockquote className="text-lg font-medium leading-relaxed">
            “{block.text}”
          </blockquote>
          {block.author && (
            <figcaption className="mt-3 text-sm text-muted-foreground">
              — {block.author}
            </figcaption>
          )}
        </figure>
      )
    case "image":
      return (
        <figure key={index} className="space-y-3">
          <div className="overflow-hidden rounded-2xl border border-border/40 bg-white/60">
            <img src={block.src} alt={block.alt} className="h-auto w-full object-cover" />
          </div>
          {block.caption && (
            <figcaption className="text-sm text-muted-foreground">
              {block.caption}
            </figcaption>
          )}
        </figure>
      )
    default:
      return null
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((item) => item.slug === slug)
  if (!post) {
    return {
      title: "Blog",
    }
  }
  return {
    title: post.title,
    description: post.summary,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden textured-gradient">
        <div className="cloud-shape w-[260px] h-[140px] top-[12%] left-[8%]" style={{ animationDelay: "0s" }} />
        <div className="cloud-shape w-[220px] h-[120px] top-[6%] right-[12%]" style={{ animationDelay: "4s" }} />
        <div className="petal-shape w-[70px] h-[70px] top-[18%] right-[20%]" style={{ animationDelay: "2s" }} />
        <div className="petal-shape w-[60px] h-[60px] top-[30%] left-[18%]" style={{ animationDelay: "6s" }} />
      </div>

      <Header />
      <main className="relative z-10 min-h-screen pt-20">
        <section className="pt-10 pb-8">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
              ← Back to blog
            </Link>

            <div className="mt-6 space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <Badge variant="secondary" className="bg-foreground/5 text-foreground/70">
                  Blog
                </Badge>
                {post.featured && (
                  <Badge variant="outline" className="border-primary/40 text-primary">
                    Featured
                  </Badge>
                )}
                <span>
                  {formatDate(post.date)} · {post.readTime}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                {post.title}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground">
                {post.summary}
              </p>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={`${post.slug}-${tag}`}
                    className="rounded-full border border-border/40 bg-white/70 px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="text-xs text-muted-foreground">
                {post.author.name}
                {post.author.role ? ` · ${post.author.role}` : ""}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <article className="space-y-6">
              {post.content.map((block, index) => renderBlock(block, index))}
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
