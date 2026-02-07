import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { blogPosts } from "@/content/blogs/posts"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Product insights, AI commerce ideas, and virtual try-on learnings from the Stylr team.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://stylr.tech"}/blog`,
  },
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://stylr.tech"}/blog`,
    title: "Stylr Blog",
    description:
      "Product insights, AI commerce ideas, and virtual try-on learnings from the Stylr team.",
    siteName: "Stylr",
  },
}

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`))

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date))
  const hasSinglePost = posts.length === 1

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
        <section className="relative overflow-hidden pt-14 pb-12 md:pt-20">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,107,53,0.18),transparent_60%)] blur-2xl" />
            <div className="absolute -bottom-24 right-[10%] h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,182,193,0.25),transparent_65%)] blur-2xl" />
          </div>
          <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-foreground/70 backdrop-blur">
                Stylr Blog
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                Tools, insights, and playbooks for modern e-commerce.
              </h1>
              <p className="text-base md:text-lg text-muted-foreground">
                We share the latest in virtual try-on, AI shopping assistants, and the tools that help commerce teams convert more and return less.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-foreground">Latest posts</h2>
                <p className="text-sm text-muted-foreground">
                  The newest product notes, experiments, and tools we’re exploring.
                </p>
              </div>
              <Badge variant="secondary" className="w-fit bg-primary/10 text-primary">
                {posts.length} {posts.length === 1 ? "post" : "posts"}
              </Badge>
            </div>

            <div
              className={cn(
                "grid gap-4",
                hasSinglePost ? "mx-auto max-w-3xl md:grid-cols-1" : "md:grid-cols-2",
              )}
            >
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <Card className="relative overflow-hidden border border-border/40 bg-white/80 p-4 md:p-5 backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-lg hover-lift">
                    <div className="flex items-center justify-between gap-3 text-[11px] text-muted-foreground">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="secondary" className="bg-foreground/5 px-2 py-0.5 text-[10px] text-foreground/70">
                          Blog
                        </Badge>
                        {post.featured && (
                          <Badge variant="outline" className="border-primary/40 px-2 py-0.5 text-[10px] text-primary">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <span>
                        {formatDate(post.date)} · {post.readTime}
                      </span>
                    </div>

                    <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">
                      {post.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                      {post.summary}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {post.tags.slice(0, 4).map((tag) => (
                        <span
                          key={`${post.slug}-${tag}`}
                          className="rounded-full border border-border/40 bg-white/70 px-2 py-0.5 text-[11px] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                      <span>
                        {post.author.name}
                        {post.author.role ? ` · ${post.author.role}` : ""}
                      </span>
                      <span className="text-primary/80">Read post</span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
