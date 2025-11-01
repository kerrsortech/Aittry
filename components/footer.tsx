import { Sparkles, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-background py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-chart-2">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-base font-bold text-foreground">Closelook</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>San Francisco, CA</span>
          </div>

          {/* Contact */}
          <div className="text-sm text-muted-foreground">
            <a href="mailto:hello@closelook.ai" className="hover:text-foreground transition-colors">
              hello@closelook.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
