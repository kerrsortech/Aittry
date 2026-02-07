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
import { preloadAllImages, preloadCriticalImages } from "@/lib/preload-images"

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
  const [imagesPreloaded, setImagesPreloaded] = useState(false)
  const [autoRotate, setAutoRotate] = useState(true)

  // Preload all images from all sections when hero section mounts
  useEffect(() => {
    // Preload critical images immediately (above-the-fold)
    preloadCriticalImages()

    // Preload all other images in batches (non-blocking)
    preloadAllImages()

    // Also preload hero section images specifically for immediate use
    const preloadHeroImages = () => {
      const imagePromises: Promise<void>[] = []

      productCategories.forEach((category) => {
        const types: ("before" | "after" | "user")[] = ["before", "after", "user"]
        types.forEach((type) => {
          const imagePath = getImagePath(category.id, type)
          const promise = new Promise<void>((resolve) => {
            const img = new window.Image()
            img.onload = () => resolve()
            img.onerror = () => resolve() // Resolve even on error to not block other images
            img.src = imagePath
          })
          imagePromises.push(promise)
        })
      })

      Promise.all(imagePromises).then(() => {
        setImagesPreloaded(true)
      })
    }

    preloadHeroImages()
  }, [])

  // Rotate through categories (only if auto-rotate is enabled)
  useEffect(() => {
    if (!autoRotate) return

    const interval = setInterval(() => {
      setSelectedCategory((prev) => (prev + 1) % productCategories.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [autoRotate])

  // Handle category selection
  const handleCategorySelect = (index: number) => {
    setSelectedCategory(index)
    setAutoRotate(false) // Pause auto-rotation when user manually selects

    // Resume auto-rotation after 10 seconds of inactivity
    setTimeout(() => {
      setAutoRotate(true)
    }, 10000)
  }

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
    <section className="relative min-h-[100vh] md:min-h-[90vh] w-full overflow-hidden flex flex-col justify-center md:block pt-8 pb-16 md:pt-20 md:pb-12 lg:pt-24 lg:pb-14">
      <div className="container relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Hero Content - Centered Layout */}
        <div className="text-center animate-fade-in space-y-6 md:space-y-10 mb-8 md:mb-16">
          {/* Pill Badge */}
          <div className="flex justify-center px-4 mb-4 md:mb-6">
            <div className="inline-flex items-center gap-1.5 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-border/40 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
              <span className="text-xs sm:text-sm font-normal text-foreground/80 tracking-wide">
                One Plugin: <span className="text-foreground font-medium">Lower Returns</span> • <span className="text-foreground font-medium">Higher Conversion</span> • <span className="text-foreground font-medium">Automated Customer Care</span>
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-2 md:space-y-3 px-4">
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground">
              Turn Visitors Into Shoppers
              <br />
              <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#FF6B35]">
                with AI Shopping Assistant
              </span>
            </h1>
          </div>

          {/* Description - Minimalistic */}
          <div className="space-y-3 max-w-2xl mx-auto px-4">
            <p className="text-sm sm:text-lg md:text-xl text-foreground/70 leading-relaxed">
              Studio-quality virtual try-on experiences so customers instantly picture themselves in your products plus an intelligent assistant that guides, recommends, and boosts sales.
            </p>
          </div>

          {/* CTA Button */}
          <div>
            <Button
              size="lg"
              onClick={() => setContactModalOpen(true)}
              className="h-14 min-w-[200px] bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 active:translate-y-0 rounded-xl font-semibold text-base px-8"
            >
              Request access
            </Button>
          </div>
        </div>

        {/* Split Panel Container */}
        <div className="flex flex-col lg:grid gap-4 md:gap-6 lg:grid-cols-[1.2fr_1fr] mb-8 md:mb-12 items-stretch">
          {/* LEFT PANEL: Virtual Try-On */}
          <div className="space-y-3 flex flex-col">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-primary/50 bg-primary/5 text-primary">
                Virtual Try-On
              </Badge>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>

            <Card className="group relative overflow-hidden border border-border/30 bg-white/80 p-5 sm:p-6 md:p-7 backdrop-blur-xl transition-all hover:border-primary/40 hover:shadow-lg rounded-xl h-full">
              <div className="flex flex-col space-y-4 h-full">
                {/* Product Category Selector */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-foreground">Select Category</h3>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      15+ Categories
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-2.5">
                    {productCategories.map((category, index) => {
                      const Icon = category.icon
                      const isSelected = index === selectedCategory
                      return (
                        <button
                          key={category.id}
                          onClick={() => handleCategorySelect(index)}
                          className={`group/cat flex flex-col items-center gap-1.5 sm:gap-2 rounded-lg border p-2 sm:p-2.5 transition-all duration-300 ease-out ${isSelected
                              ? "border-primary bg-primary/10 shadow-md shadow-primary/20 scale-105"
                              : "border-border/50 bg-card/30 hover:border-primary/50 hover:bg-card/50 hover:scale-105 hover:-translate-y-0.5"
                            }`}
                        >
                          <div
                            className={`rounded-full p-1.5 sm:p-1.5 transition-colors duration-300 ${isSelected ? "bg-primary/20" : "bg-muted/50 group-hover/cat:bg-muted"
                              }`}
                          >
                            <Icon className={`h-4 w-4 sm:h-3.5 sm:w-3.5 transition-colors duration-300 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                          </div>
                          <span className="text-[10px] sm:text-[9px] font-medium text-foreground/80 transition-colors duration-300 text-center leading-tight">{category.label}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="relative flex-1 overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-card/40 to-card/20">
                    <div className="relative grid h-full grid-cols-1 md:grid-cols-2 gap-0">
                      {/* Product Image - Render all categories, show only selected */}
                      <div className="relative flex flex-col items-center justify-center md:border-r border-b md:border-b-0 border-primary/20 bg-gradient-to-br from-card/40 to-card/10 overflow-hidden" style={{ aspectRatio: "1/1" }}>
                        {productCategories.map((category, index) => {
                          const isSelected = index === selectedCategory
                          const errorKey = `${category.id}_before`
                          const hasError = imageErrors[errorKey]

                          return (
                            <div
                              key={`before_${category.id}`}
                              className={`absolute inset-0 transition-opacity duration-300 ${isSelected ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                                }`}
                            >
                              {hasError ? (
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
                                  src={getImagePath(category.id, "before")}
                                  alt={`${category.label} product`}
                                  fill
                                  sizes="(max-width: 768px) 50vw, 50vw"
                                  className="object-cover"
                                  priority={index === 0}
                                  loading={index === 0 ? "eager" : "eager"}
                                  quality={85}
                                  onError={() => {
                                    setImageErrors(prev => ({
                                      ...prev,
                                      [errorKey]: true
                                    }))
                                  }}
                                />
                              )}
                            </div>
                          )
                        })}
                      </div>

                      {/* Result with User - Generated Image - Render all categories, show only selected */}
                      <div className="relative flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-chart-2/10 overflow-hidden" style={{ aspectRatio: "1/1" }}>
                        {productCategories.map((category, index) => {
                          const isSelected = index === selectedCategory
                          const errorKey = `${category.id}_after`
                          const hasError = imageErrors[errorKey]

                          return (
                            <div
                              key={`after_${category.id}`}
                              className={`absolute inset-0 transition-opacity duration-300 ${isSelected ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                                }`}
                            >
                              {hasError ? (
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
                                  src={getImagePath(category.id, "after")}
                                  alt={`${category.label} generated result`}
                                  fill
                                  sizes="(max-width: 768px) 50vw, 50vw"
                                  className="object-cover"
                                  priority={index === 0}
                                  loading={index === 0 ? "eager" : "eager"}
                                  quality={85}
                                  onError={() => {
                                    setImageErrors(prev => ({
                                      ...prev,
                                      [errorKey]: true
                                    }))
                                  }}
                                />
                              )}
                            </div>
                          )
                        })}
                      </div>

                    </div>
                  </div>

                  {/* Badges and User's Photo below images */}
                  <div className="flex flex-col sm:grid sm:grid-cols-3 gap-2 sm:gap-0 mt-2 items-center">
                    <div className="flex justify-center order-1 sm:order-1">
                      <Badge variant="secondary" className="bg-background/95 backdrop-blur-sm text-[10px] sm:text-[10px] font-semibold border border-border/30 rounded-full px-3 py-1">
                        Product Image
                      </Badge>
                    </div>
                    <div className="flex justify-center order-2 sm:order-2">
                      <div className="rounded-lg bg-background/95 p-0.5 shadow-xl backdrop-blur-md border border-border/50 ring-2 ring-primary/10 flex flex-col items-center">
                        <div className="relative h-12 w-12 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 overflow-hidden rounded-md">
                          {productCategories.map((category, index) => {
                            const isSelected = index === selectedCategory
                            const errorKey = `${category.id}_user`
                            const hasError = imageErrors[errorKey]

                            return (
                              <div
                                key={`user_${category.id}`}
                                className={`absolute inset-0 transition-opacity duration-300 ${isSelected ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                                  }`}
                              >
                                {hasError ? (
                                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                                      <Avatar className="h-4 w-4">
                                        <div className="flex h-full w-full items-center justify-center bg-primary/20">
                                          <span className="text-[8px] text-primary/50">U</span>
                                        </div>
                                      </Avatar>
                                    </div>
                                  </div>
                                ) : (
                                  <Image
                                    src={getImagePath(category.id, "user")}
                                    alt="User"
                                    fill
                                    sizes="(max-width: 768px) 48px, 64px"
                                    className="object-cover rounded-md"
                                    priority={index === 0}
                                    loading={index === 0 ? "eager" : "eager"}
                                    quality={85}
                                    onError={() => {
                                      setImageErrors(prev => ({
                                        ...prev,
                                        [errorKey]: true
                                      }))
                                    }}
                                  />
                                )}
                              </div>
                            )
                          })}
                        </div>
                        <p className="mt-0.5 text-center text-[9px] sm:text-[8px] font-semibold text-foreground">User's Photo</p>
                      </div>
                    </div>
                    <div className="flex justify-center order-3 sm:order-3">
                      <Badge className="gap-1 bg-primary/25 backdrop-blur-sm text-primary border border-primary/30 text-[10px] font-semibold rounded-full px-3 py-1">
                        <Sparkles className="h-2.5 w-2.5" />
                        <span>AI Generated</span>
                      </Badge>
                    </div>
                  </div>
                </div>


              </div>
            </Card>
          </div>

          {/* RIGHT PANEL: AI Chatbot */}
          <div className="space-y-3 flex flex-col">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-chart-2/50 bg-chart-2/5 text-chart-2">
                Context-Aware Chatbot
              </Badge>
              <div className="h-px flex-1 bg-gradient-to-r from-chart-2/20 to-transparent" />
            </div>

            <div className="group relative overflow-hidden border border-border/30 bg-white/80 backdrop-blur-xl transition-all hover:border-primary/40 hover:shadow-lg rounded-xl flex flex-col p-5 sm:p-6 md:p-7 h-full">
              {/* Chat Header */}
              <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 border-b border-border/50 pb-2">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <div className="flex h-full w-full items-center justify-center bg-background">
                      <img
                        src="/Stylr_icon.png"
                        alt="Stylr"
                        width={32}
                        height={32}
                        className="h-full w-full object-contain dark:invert dark:brightness-110"
                      />
                    </div>
                  </Avatar>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-foreground font-sora">Stylr</h3>
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="flex gap-1.5 flex-wrap">
                  <Badge variant="secondary" className="text-[9px]">
                    Context-Aware
                  </Badge>
                  <Badge variant="secondary" className="text-[9px]">
                    Catalog-Trained
                  </Badge>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 space-y-1.5 overflow-y-auto py-1">
                {/* User Message */}
                {showMessages.includes(0) && (
                  <div className="flex justify-end animate-in fade-in slide-in-from-right-4">
                    <div className="max-w-[85%] rounded-2xl rounded-tr-sm border border-border/50 bg-secondary/50 px-2.5 py-1.5">
                      <p className="text-xs text-foreground">
                        I need an outfit for my interview, budget around $200, prefer blue
                      </p>
                    </div>
                  </div>
                )}

                {/* Bot Response */}
                {showMessages.includes(1) && (
                  <div className="flex justify-start animate-in fade-in slide-in-from-left-4">
                    <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-primary/30 bg-primary/10 px-2.5 py-1.5">
                      <p className="text-xs text-foreground">Perfect! Here's a complete interview outfit:</p>
                    </div>
                  </div>
                )}

                {showMessages.includes(2) && (
                  <div className="animate-in fade-in slide-in-from-left-4">
                    <div className="rounded-xl border border-border/50 bg-card/30 p-3 pb-4">
                      {/* Product Cards Grid - Responsive layout */}
                      <div className="grid grid-cols-2 sm:flex sm:gap-2.5 sm:justify-start sm:items-start gap-2">
                        {[
                          { name: "Navy Blazer", price: "$89", image: "/Product_images/navy blazer.jpg" },
                          { name: "Blue Shirt", price: "$32", image: "/Product_images/blue shirt.jpg" },
                          { name: "Grey Trousers", price: "$45", image: "/Product_images/grey apnts.jpg" },
                          { name: "Black Shoes", price: "$34", image: "/Product_images/shoes.jpg" },
                        ].map((product, i) => (
                          <div
                            key={i}
                            className="w-full sm:w-20 rounded-lg border border-border/50 bg-card/80 pt-1.5 px-1.5 pb-2.5 shadow-md hover:shadow-lg transition-all hover:scale-105 flex flex-col flex-shrink-0"
                          >
                            <div className="mb-1.5 aspect-square rounded-md relative overflow-hidden bg-gradient-to-br from-muted/50 to-muted/20 flex-shrink-0">
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                sizes="(max-width: 640px) 50vw, 80px"
                                className="object-cover rounded-md"
                                loading="lazy"
                                quality={80}
                              />
                            </div>
                            <p className="mb-1 truncate text-[9px] sm:text-[9px] font-medium text-foreground flex-shrink-0 text-center">{product.name}</p>
                            <div className="flex items-center justify-between flex-shrink-0">
                              <span className="text-[9px] font-semibold text-primary">{product.price}</span>
                              <div className="rounded-full bg-primary/20 p-0.5">
                                <Check className="h-1.5 w-1.5 text-primary" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Summary Panel */}
                {showMessages.includes(3) && (
                  <div className="flex justify-start animate-in fade-in slide-in-from-left-4 mt-2">
                    <div className="max-w-[90%] rounded-2xl rounded-tl-sm border border-primary/30 bg-primary/10 px-3 py-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                        {/* Left side - Budget and Colors */}
                        <div className="flex-1 space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">Total Budget</span>
                            <span className="font-semibold text-primary">$200 / $200</span>
                          </div>
                          <Progress value={100} className="h-1.5" />
                          <div className="flex items-center gap-1.5 text-[10px]">
                            <span className="text-muted-foreground">Colors:</span>
                            <div className="flex gap-1">
                              <div className="h-3 w-3 rounded-full bg-[#FF6B35] ring-1 ring-border" />
                              <div className="h-3 w-3 rounded-full bg-gray-500 ring-1 ring-border" />
                              <div className="h-3 w-3 rounded-full bg-slate-800 ring-1 ring-border" />
                            </div>
                          </div>
                        </div>
                        {/* Right side - Professional */}
                        <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground flex-shrink-0 sm:self-start">
                          <Briefcase className="h-3 w-3" />
                          <span>Professional</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Bar */}
              <div className="mt-2 border-t border-border/50 pt-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Ask about products, styles, or fit..."
                    className="flex-1 rounded-lg border border-border/50 bg-card/30 px-2.5 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
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
          </div>
        </div>

        {/* Connecting Element */}
        <div className="relative mt-8 mb-8 md:mb-12 flex items-center justify-center">
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
