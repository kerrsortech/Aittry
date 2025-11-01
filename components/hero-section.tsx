"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Send, ShoppingBag, Glasses, Watch, Shirt, Crown, Footprints, Check, Briefcase, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

const productCategories = [
  { icon: ShoppingBag, label: "Handbags", id: "handbag" },
  { icon: Glasses, label: "Eyewear", id: "eyewear" },
  { icon: Watch, label: "Jewelry", id: "jewelry" },
  { icon: Shirt, label: "Clothing", id: "clothing" },
  { icon: Crown, label: "Hats", id: "hats" },
  { icon: Footprints, label: "Shoes", id: "shoes" },
]

const categoryVisuals = [
  { product: "Designer Handbag", overlay: "bottom-[40%] left-[20%] h-12 w-16 rounded-lg" },
  { product: "Sunglasses", overlay: "top-[25%] left-1/2 -translate-x-1/2 h-6 w-16 rounded-full" },
  { product: "Gold Watch", overlay: "top-[45%] left-[15%] h-8 w-10 rounded-md" },
  { product: "Blue Shirt", overlay: "top-[35%] left-1/2 -translate-x-1/2 h-20 w-20 rounded-lg" },
  { product: "Fedora Hat", overlay: "top-[15%] left-1/2 -translate-x-1/2 h-10 w-16 rounded-t-full" },
  { product: "Sneakers", overlay: "bottom-[20%] left-[25%] h-10 w-14 rounded-md" },
]

export function HeroSection() {
  const [selectedCategory, setSelectedCategory] = useState(1)
  const [showMessages, setShowMessages] = useState<number[]>([])

  // Rotate through categories
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedCategory((prev) => (prev + 1) % productCategories.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Stagger chat messages
  useEffect(() => {
    const timeouts = [0, 800, 1600, 2400].map((delay, index) =>
      setTimeout(() => setShowMessages((prev) => [...prev, index]), delay),
    )
    return () => timeouts.forEach(clearTimeout)
  }, [])

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-background py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] h-64 w-64 animate-float rounded-full bg-primary/5 blur-3xl" />
        <div
          className="absolute right-[15%] top-[40%] h-80 w-80 animate-float-delayed rounded-full bg-chart-2/5 blur-3xl"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-[20%] left-[30%] h-72 w-72 animate-float rounded-full bg-chart-4/5 blur-3xl"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        {/* Hero Heading */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-balance text-5xl font-bold tracking-tight text-foreground lg:text-6xl">
            Turn Shoppers into Buyers<br>
          </h1>
          <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
            Let customers see themselves in your products with studio-quality virtual try-on, plus an AI shopping assistant that recommends the perfect match.
          </p>
        </div>

        {/* Split Panel Container */}
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          {/* LEFT PANEL: Virtual Try-On */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-primary/50 bg-primary/5 text-primary">
                Virtual Try-On
              </Badge>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>

            <Card className="group relative min-h-[600px] overflow-hidden border-border/50 bg-card/50 p-6 backdrop-blur-xl transition-all hover:border-primary/30">
              <div className="flex h-full flex-col space-y-4">
                {/* Product Category Selector */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-muted-foreground">Select Category</h3>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      15+ Categories
                    </Badge>
                  </div>
                  <div className="grid grid-cols-6 gap-3">
                    {productCategories.map((category, index) => {
                      const Icon = category.icon
                      const isSelected = index === selectedCategory
                      return (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(index)}
                          className={`group/cat flex flex-col items-center gap-2 rounded-lg border p-3 transition-all ${
                            isSelected
                              ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                              : "border-border/50 bg-card/30 hover:border-primary/50 hover:bg-card/50"
                          }`}
                        >
                          <div
                            className={`rounded-full p-2 transition-colors ${
                              isSelected ? "bg-primary/20" : "bg-muted/50 group-hover/cat:bg-muted"
                            }`}
                          >
                            <Icon className={`h-4 w-4 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                          </div>
                          <span className="text-[10px] font-medium text-foreground/80">{category.label}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="relative flex-1 overflow-hidden rounded-xl border border-border/50 bg-muted/20">
                  <div className="relative grid h-full grid-cols-2 gap-0">
                    {/* Product Image */}
                    <div className="relative flex flex-col items-center justify-end border-r border-dashed border-primary/30 bg-card/30 p-4 pb-6 lg:p-6 lg:pb-8">
                      <div className="mb-auto flex flex-1 items-center justify-center">
                        <div className="relative flex h-28 w-28 items-center justify-center rounded-xl border-2 border-primary/40 bg-gradient-to-br from-primary/10 to-chart-2/10 lg:h-36 lg:w-36">
                          {/* Product placeholder */}
                          <div className="h-16 w-16 rounded-lg bg-primary/20 lg:h-24 lg:w-24" />
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-muted/80 text-xs font-medium">
                        Product
                      </Badge>
                    </div>

                    {/* Result with User */}
                    <div className="relative flex flex-col items-center justify-end bg-gradient-to-br from-primary/5 to-chart-2/5 p-4 pb-6 lg:p-6 lg:pb-8">
                      <div className="mb-auto flex flex-1 items-center justify-center">
                        <div className="relative">
                          {/* User silhouette */}
                          <div className="h-28 w-20 rounded-lg border-2 border-dashed border-primary/40 bg-card/20 lg:h-36 lg:w-28" />

                          {/* Product overlay - positioned based on category */}
                          <div
                            className={`absolute border-2 border-primary bg-primary/30 shadow-lg shadow-primary/30 transition-all duration-500 ${categoryVisuals[selectedCategory].overlay}`}
                          />

                          {/* Alignment guides */}
                          <div className="absolute left-0 top-[25%] h-px w-full border-t border-dashed border-primary/20" />
                          <div className="absolute left-1/2 top-0 h-full w-px border-l border-dashed border-primary/20" />
                        </div>
                      </div>
                      <Badge className="gap-1 bg-primary/20 text-primary">
                        <Sparkles className="h-3 w-3 lg:h-3.5 lg:w-3.5" />
                        <span className="text-xs">Generated Image</span>
                      </Badge>
                    </div>

                    {/* Center User Image Card */}
                    <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                      <div className="flex flex-col items-center gap-1">
                        <div className="rounded-lg bg-card/80 p-1.5 shadow-sm backdrop-blur-sm">
                          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-muted to-muted/50 lg:h-12 lg:w-12">
                            {/* User image placeholder */}
                            <div className="h-7 w-7 rounded-full bg-primary/20 lg:h-8 lg:w-8" />
                          </div>
                          <p className="mt-1 text-center text-[8px] font-medium text-muted-foreground">User</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                
              </div>
            </Card>
          </div>

          {/* RIGHT PANEL: AI Chatbot */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-chart-2/50 bg-chart-2/5 text-chart-2">
                Context-Aware Chatbot
              </Badge>
              <div className="h-px flex-1 bg-gradient-to-r from-chart-2/20 to-transparent" />
            </div>

            <Card className="group relative min-h-[600px] overflow-hidden border-border/50 bg-card/50 backdrop-blur-xl transition-all hover:border-primary/30">
              <div className="flex h-full flex-col p-6">
                {/* Chat Header */}
                <div className="mb-3 flex items-center gap-3 border-b border-border/50 pb-3">
                  <Avatar className="h-9 w-9">
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary to-chart-2">
                      <Sparkles className="h-4 w-4 text-primary-foreground" />
                    </div>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-foreground">StyleBot AI</h3>
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    </div>
                    <div className="flex gap-1.5">
                      <Badge variant="secondary" className="text-[9px]">
                        Context-Aware
                      </Badge>
                      <Badge variant="secondary" className="text-[9px]">
                        Catalog-Trained
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 space-y-2.5 overflow-y-auto">
                  {/* User Message */}
                  {showMessages.includes(0) && (
                    <div className="flex justify-end animate-in fade-in slide-in-from-right-4">
                      <div className="max-w-[85%] rounded-2xl rounded-tr-sm border border-border/50 bg-secondary/50 px-3 py-2">
                        <p className="text-xs text-foreground">
                          I need an outfit for my interview, budget around $200, prefer blue
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Bot Response */}
                  {showMessages.includes(1) && (
                    <div className="flex justify-start animate-in fade-in slide-in-from-left-4">
                      <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-primary/30 bg-primary/10 px-3 py-2">
                        <p className="text-xs text-foreground">Perfect! Here's a complete interview outfit:</p>
                      </div>
                    </div>
                  )}

                  {showMessages.includes(2) && (
                    <div className="animate-in fade-in slide-in-from-left-4">
                      <div className="relative h-32 rounded-xl border border-border/50 bg-card/30 p-3">
                        {/* Stacked cards effect */}
                        {[
                          { name: "Navy Blazer", price: "$89", offset: "left-0" },
                          { name: "Blue Shirt", price: "$32", offset: "left-16" },
                          { name: "Grey Trousers", price: "$45", offset: "left-32" },
                          { name: "Black Shoes", price: "$34", offset: "left-48" },
                        ].map((product, i) => (
                          <div
                            key={i}
                            className={`absolute top-3 ${product.offset} h-24 w-20 overflow-hidden rounded-lg border border-border/50 bg-card/80 p-1.5 shadow-lg backdrop-blur-sm transition-all hover:z-10 hover:scale-105`}
                            style={{
                              transform: `translateX(${i * 4}px) rotate(${i * 2 - 3}deg)`,
                            }}
                          >
                            <div className="mb-1 aspect-square rounded-md bg-gradient-to-br from-muted/50 to-muted/20" />
                            <p className="mb-0.5 truncate text-[9px] font-medium text-foreground">{product.name}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-[9px] font-semibold text-primary">{product.price}</span>
                              <div className="rounded-full bg-primary/20 p-0.5">
                                <Check className="h-2 w-2 text-primary" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Summary Panel */}
                  {showMessages.includes(3) && (
                    <div className="flex justify-start animate-in fade-in slide-in-from-left-4">
                      <div className="max-w-[85%] space-y-2 rounded-2xl rounded-tl-sm border border-primary/30 bg-primary/10 px-3 py-2">
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">Total Budget</span>
                            <span className="font-semibold text-primary">$200 / $200</span>
                          </div>
                          <Progress value={100} className="h-1" />
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px]">
                          <span className="text-muted-foreground">Colors:</span>
                          <div className="flex gap-1">
                            <div className="h-3 w-3 rounded-full bg-blue-500 ring-1 ring-border" />
                            <div className="h-3 w-3 rounded-full bg-gray-500 ring-1 ring-border" />
                            <div className="h-3 w-3 rounded-full bg-slate-800 ring-1 ring-border" />
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                          <Briefcase className="h-3 w-3" />
                          <span>Professional</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input Bar */}
                <div className="mt-3 space-y-2 border-t border-border/50 pt-3">
                  <div className="flex gap-1.5">
                    <Badge variant="outline" className="cursor-pointer text-[10px] hover:bg-primary/10">
                      Summer outfits
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer text-[10px] hover:bg-primary/10">
                      Trending
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Ask about products, styles, or fit..."
                      className="flex-1 rounded-lg border border-border/50 bg-card/30 px-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    <Button
                      size="icon"
                      className="h-8 w-8 shrink-0 bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Send className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Connecting Element */}
        <div className="relative mt-8 flex items-center justify-center">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Badge className="gap-2 bg-primary/20 text-primary backdrop-blur-sm">
              <Sparkles className="h-3 w-3" />
              Unified Intelligence
            </Badge>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 25s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
