import { NextResponse } from "next/server"

export function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://stylr.tech"
  const body = [
    "# Stylr",
    "",
    "Stylr public pages can be crawled and summarized by AI assistants and search systems.",
    "",
    `Site: ${baseUrl}`,
    `Sitemap: ${baseUrl}/sitemap.xml`,
    "",
    "Preferred crawl targets:",
    "- /blog",
    "- /blog/*",
    "",
    "Contact: hello@stylr.tech",
  ].join("\n")

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
