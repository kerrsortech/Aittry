"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Send, ShoppingBag, Glasses, Watch, Shirt, Crown, Footprints, Check, Briefcase, Sparkles, Users, ShoppingCart, ArrowRight, Zap } from "lucide-react"
import { useEffect, useState } from "react"
import { ContactModal } from "@/components/contact-modal"
import { DemoModal } from "@/components/demo-modal"
import Image from "next/image"

const productCategories = [
  { icon: Glasses, label: "Eyewear", id: "eyewear" },
  { icon: Shirt, label: "Clothing", id: "clothing" },
  { icon: ShoppingBag, label: "Handbags", id: "handbag" },
  { icon: Crown, label: "Hats", id: "hats" },
  { icon: Watch, label: "Jewelry", id: "jewelry" },
  { icon: Footprints, label: "Shoes", id: "shoes" },
]

// Mapping of category + type to exact file names in Product_images folder
const imageFileMap: Record<string, string> = {
  // Handbag
  "handbag_before": "Handbag before 1.png",
  "handbag_after": "Handbag after.png",
  "handbag_user": "Handbag user.jpg",
  // Eyewear (Glasses)
  "eyewear_before": "Glasses before.png",
  "eyewear_after": "Glasses after.png",
  "eyewear_user": "Glasses user.webp",
  // Jewelry (Chain)
  "jewelry_before": "Chain before.webp",
  "jewelry_after": "Chain after.png",
  "jewelry_user": "chain user.png", // Note: lowercase 'chain'
  // Clothing
  "clothing_before": "Clothing before.jpg",
  "clothing_after": "Clothing after.jpg",
  "clothing_user": "Clothing user.png",
  // Hats
  "hats_before": "Hat before.jpg",
  "hats_after": "Hat after.png",
  "hats_user": "Hat user.webp",
  // Shoes
  "shoes_before": "Shoes before.png",
  "shoes_after": "Shoes after.png",
  "shoes_user": "Shoes user.png",
}

// Helper function to get image path
// Images are in /Product_images/ folder with exact file names
// Next.js Image component handles URL encoding automatically, but we ensure proper format
const getImagePath = (category: string, type: "before" | "after" | "user"): string => {
  const key = `${category}_${type}`
  const fileName = imageFileMap[key]
  
  if (!fileName) {
    // Fallback if mapping is missing
    const categoryName = category.charAt(0).toUpperCase() + category.slice(1)
    return `/Product_images/${categoryName} ${type}.png`
  }
  
  // Return path with proper encoding - Next.js Image will handle spaces in URLs
  return `/Product_images/${fileName}`
}

const categoryVisuals = [
  { product: "Sunglasses", overlay: "top-[25%] left-1/2 -translate-x-1/2 h-6 w-16 rounded-full" },
  { product: "Blue Shirt", overlay: "top-[35%] left-1/2 -translate-x-1/2 h-20 w-20 rounded-lg" },
  { product: "Designer Handbag", overlay: "bottom-[40%] left-[20%] h-12 w-16 rounded-lg" },
  { product: "Fedora Hat", overlay: "top-[15%] left-1/2 -translate-x-1/2 h-10 w-16 rounded-t-full" },
  { product: "Gold Watch", overlay: "top-[45%] left-[15%] h-8 w-10 rounded-md" },
  { product: "Sneakers", overlay: "bottom-[20%] left-[25%] h-10 w-14 rounded-md" },
]

export function HeroSection() {
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [showMessages, setShowMessages] = useState<number[]>([])
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [demoModalOpen, setDemoModalOpen] = useState(false)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  // Rotate through categories
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedCategory((prev) => (prev + 1) % productCategories.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Reset image errors when category changes
  useEffect(() => {
    setImageErrors({})
  }, [selectedCategory])

  // Stagger chat messages
  useEffect(() => {
    const timeouts = [0, 800, 1600, 2400].map((delay, index) =>
      setTimeout(() => setShowMessages((prev) => [...prev, index]), delay),
    )
    return () => timeouts.forEach(clearTimeout)
  }, [])

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden py-12 md:py-16">
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Heading */}
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="mb-8 md:mb-10 text-balance text-3xl font-semibold leading-none tracking-normal text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">Turn</span>{' '}
            <span className="inline-flex items-center gap-2 relative group">
              <Users className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" style={{ 
                animation: 'gentle-float 4s ease-in-out infinite',
                filter: 'drop-shadow(0 0 6px hsl(var(--primary) / 0.4))'
              }} />
              <span className="font-semibold bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">Visitors</span>
            </span>
            {' '}
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">Into</span>
            {' '}
            <span className="inline-flex items-center gap-2 relative group">
              <ShoppingCart className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" style={{ 
                animation: 'gentle-float 4s ease-in-out infinite',
                animationDelay: '0.5s',
                filter: 'drop-shadow(0 0 6px hsl(var(--primary) / 0.4))'
              }} />
              <span className="font-semibold bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">Shoppers</span>
            </span>
            <br className="hidden sm:block" />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">with AI Shopping Assistant</span>
          </h1>
          <p className="mx-auto max-w-3xl text-balance text-base sm:text-lg text-white">
            Studio-quality virtual try-on experiences so customers instantly picture themselves in your products plus an intelligent assistant that guides, recommends, and boosts sales.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {/* <Button
              size="lg"
              onClick={() => setDemoModalOpen(true)}
              className="h-12 min-w-[160px] bg-primary text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md active:translate-y-0"
            >
              Request Demo
            </Button> */}
            <Button
              size="lg"
              onClick={() => setContactModalOpen(true)}
              className="h-12 min-w-[160px] bg-primary text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md active:translate-y-0"
            >
              Join the waiting list
            </Button>
          </div>
        </div>

        {/* Split Panel Container */}
        <div className="grid gap-4 md:gap-6 lg:grid-cols-[1.2fr_1fr]">
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
                    <h3 className="text-sm font-semibold text-foreground">Select Category</h3>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      15+ Categories
                    </Badge>
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    {productCategories.map((category, index) => {
                      const Icon = category.icon
                      const isSelected = index === selectedCategory
                      return (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(index)}
                          className={`group/cat flex flex-col items-center gap-2 rounded-lg border p-2.5 transition-all ${
                            isSelected
                              ? "border-primary bg-primary/10 shadow-md shadow-primary/20"
                              : "border-border/50 bg-card/30 hover:border-primary/50 hover:bg-card/50"
                          }`}
                        >
                          <div
                            className={`rounded-full p-1.5 transition-colors ${
                              isSelected ? "bg-primary/20" : "bg-muted/50 group-hover/cat:bg-muted"
                            }`}
                          >
                            <Icon className={`h-3.5 w-3.5 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                          </div>
                          <span className="text-[9px] font-medium text-foreground/80">{category.label}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="relative flex-1 overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-card/40 to-card/20">
                  <div className="relative grid h-full grid-cols-2 gap-0">
                    {/* Product Image */}
                    <div className="relative flex flex-col items-center justify-center border-r border-primary/20 bg-gradient-to-br from-card/40 to-card/10 overflow-hidden" style={{ aspectRatio: "1/1" }}>
                      <div className="relative w-full h-full">
                        {imageErrors[`${productCategories[selectedCategory].id}_before`] ? (
                          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-chart-2/10">
                            <div className="text-center">
                              <div className="mx-auto mb-2 h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                                <ShoppingBag className="h-6 w-6 text-primary/50" />
                              </div>
                              <p className="text-xs text-muted-foreground">Product Image</p>
                            </div>
                          </div>
                        ) : (
                          <Image
                            src={getImagePath(productCategories[selectedCategory].id, "before")}
                            alt={`${productCategories[selectedCategory].label} product`}
                            fill
                            sizes="(max-width: 768px) 50vw, 50vw"
                            className="object-cover transition-opacity duration-500"
                            priority={selectedCategory === 0}
                            loading={selectedCategory === 0 ? "eager" : "lazy"}
                            quality={85}
                            onError={() => {
                              setImageErrors(prev => ({
                                ...prev,
                                [`${productCategories[selectedCategory].id}_before`]: true
                              }))
                            }}
                          />
                        )}
                      </div>
                      <Badge variant="secondary" className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-background/95 backdrop-blur-sm text-[10px] font-semibold border border-border/30">
                        Product Image
                      </Badge>
                    </div>

                    {/* Result with User - Generated Image */}
                    <div className="relative flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-chart-2/10 overflow-hidden" style={{ aspectRatio: "1/1" }}>
                      <div className="relative w-full h-full">
                        {imageErrors[`${productCategories[selectedCategory].id}_after`] ? (
                          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-chart-2/10">
                            <div className="text-center">
                              <div className="mx-auto mb-2 h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                                <Sparkles className="h-6 w-6 text-primary/50" />
                              </div>
                              <p className="text-xs text-muted-foreground">Generated Image</p>
                            </div>
                          </div>
                        ) : (
                          <Image
                            src={getImagePath(productCategories[selectedCategory].id, "after")}
                            alt={`${productCategories[selectedCategory].label} generated result`}
                            fill
                            sizes="(max-width: 768px) 50vw, 50vw"
                            className="object-cover transition-opacity duration-500"
                            priority={selectedCategory === 0}
                            loading={selectedCategory === 0 ? "eager" : "lazy"}
                            quality={85}
                            onError={() => {
                              setImageErrors(prev => ({
                                ...prev,
                                [`${productCategories[selectedCategory].id}_after`]: true
                              }))
                            }}
                          />
                        )}
                      </div>
                      <Badge className="absolute bottom-3 left-1/2 -translate-x-1/2 gap-1 bg-primary/25 backdrop-blur-sm text-primary border border-primary/30 text-[10px] font-semibold">
                        <Sparkles className="h-2.5 w-2.5" />
                        <span>AI Generated</span>
                      </Badge>
                    </div>

                    {/* Center User Image Card */}
                    <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                      <div className="flex flex-col items-center gap-1">
                        <div className="rounded-lg bg-background/95 p-1 shadow-xl backdrop-blur-md border border-border/50 ring-2 ring-primary/10 flex flex-col items-center">
                          <div className="relative h-16 w-16 overflow-hidden rounded-md lg:h-20 lg:w-20">
                            {imageErrors[`${productCategories[selectedCategory].id}_user`] ? (
                              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                                  <Avatar className="h-6 w-6">
                                    <div className="flex h-full w-full items-center justify-center bg-primary/20">
                                      <span className="text-xs text-primary/50">U</span>
                                    </div>
                                  </Avatar>
                                </div>
                              </div>
                            ) : (
                              <Image
                                src={getImagePath(productCategories[selectedCategory].id, "user")}
                                alt="User"
                                fill
                                sizes="(max-width: 768px) 64px, 80px"
                                className="object-cover transition-opacity duration-500 rounded-md"
                                priority={selectedCategory === 0}
                                loading={selectedCategory === 0 ? "eager" : "lazy"}
                                quality={85}
                                onError={() => {
                                  setImageErrors(prev => ({
                                    ...prev,
                                    [`${productCategories[selectedCategory].id}_user`]: true
                                  }))
                                }}
                              />
                            )}
                          </div>
                          <p className="mt-1 text-center text-[9px] font-semibold text-foreground">User's Photo</p>
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
                    <div className="flex h-full w-full items-center justify-center bg-background">
                      <img 
                        src="/stylr icon.svg" 
                        alt="Stylr" 
                        width={36} 
                        height={36}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-foreground">Stylr</h3>
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
                          { name: "Navy Blazer", price: "$89", offset: "left-0", image: "/Product_images/navy blazer.jpg" },
                          { name: "Blue Shirt", price: "$32", offset: "left-16", image: "/Product_images/blue shirt.jpg" },
                          { name: "Grey Trousers", price: "$45", offset: "left-32", image: "/Product_images/grey apnts.jpg" },
                          { name: "Black Shoes", price: "$34", offset: "left-48", image: "/Product_images/shoes.jpg" },
                        ].map((product, i) => (
                          <div
                            key={i}
                            className={`absolute top-3 ${product.offset} h-24 w-20 overflow-hidden rounded-lg border border-border/50 bg-card/80 p-1.5 shadow-lg backdrop-blur-sm transition-all hover:z-10 hover:scale-105`}
                            style={{
                              transform: `translateX(${i * 4}px) rotate(${i * 2 - 3}deg)`,
                            }}
                          >
                            <div className="mb-1 aspect-square rounded-md relative overflow-hidden bg-gradient-to-br from-muted/50 to-muted/20">
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                sizes="80px"
                                className="object-cover rounded-md"
                                loading="lazy"
                                quality={80}
                              />
                            </div>
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

      {/* Modals */}
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
      <DemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </section>
  )
}
