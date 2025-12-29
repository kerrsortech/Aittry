"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from "@/lib/use-scroll-animation"
import { MessageSquare, Zap, Search, Shirt, Ruler, ShoppingCart, Edit, Truck, Sparkles, ChevronRight, ShoppingBag } from "lucide-react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

export function ChatbotExamples() {
    const headerAnimation = useScrollAnimation({ delay: 0 })
    const carouselAnimation = useScrollAnimation({ delay: 100 })

    // Calculate delivery date (today + 3 days)
    const deliveryDateVal = new React.useMemo(() => {
        const date = new Date()
        date.setDate(date.getDate() + 3)
        return date.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })
    }, [])

    const examples = [
        {
            title: "Product Discovery",
            icon: Search,
            user: "I need a black oversized hoodie for under £60. Something cozy for lounging.",
            bot: "I've found 3 great options. The 'Cloud-Soft Hoodie' is a customer favorite for lounging.",
            products: [
                { name: "Cloud-Soft Hoodie", price: "£45", image: "/Product_images/Clothing before.jpg" },
                { name: "Urban Oversized", price: "£55", image: "/Product_images/Clothing user.png" },
            ]
        },
        {
            title: "Complete Look",
            icon: Shirt,
            user: "I have a cocktail party this weekend. Build me a look under £180.",
            bot: "Here's a classy combination for you: sleek blazer, crisp shirt, and tailored trousers.",
            products: [
                { name: "Midnight Blazer", price: "£85", image: "/Product_images/navy blazer.jpg" },
                { name: "Oxford White Shirt", price: "£45", image: "/Product_images/blue shirt.jpg" },
                { name: "Slim Fit Chinos", price: "£45", image: "/Product_images/grey apnts.jpg" },
            ]
        },
        {
            title: "Sizing Help",
            icon: Ruler,
            user: "I'm usually a UK 9. Do these loafers run true to size?",
            bot: "Most customers size down for this specific leather pair. A UK 8.5 would be your perfect fit.",
            products: [
                { name: "Classic Loafers", price: "£95", image: "/Product_images/pants.jpg" },
            ]
        },
        {
            title: "Smart Add to Cart",
            icon: ShoppingCart,
            user: "Add the Aviator Sunglasses in Matte Black. If there's polarized, pick that.",
            bot: "Done. Added Matte Black (Polarized) to your cart.",
            products: [
                { name: "Aviator Sunglasses", price: "£125", image: "/Product_images/Clothing after.jpg" },
            ]
        },
        {
            title: "Cart Management",
            icon: Edit,
            user: "Change the cap color to black and remove the extra socks.",
            bot: "Updated. Black cap selected, socks removed. Your new total is £45. Checkout now?",
            products: []
        },
        {
            title: "Order Status",
            icon: Truck,
            user: "Where is my order #ST-20491?",
            bot: "Your order #ST-20491 is on the way! It's scheduled for delivery on 01/02/2026.",
            products: []
        },
    ]

    return (
        <section id="chatbot-examples" className="relative pt-10 pb-10 md:pt-14 md:pb-14 lg:pt-16 lg:pb-16 bg-muted/20">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div
                    ref={headerAnimation.ref}
                    className={`mb-10 md:mb-12 text-center transition-all duration-700 ${headerAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span className="text-xs font-semibold uppercase tracking-wider">Real Conversations</span>
                    </div>
                    <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl tracking-tight">
                        More Than Just Keywords. <br className="hidden sm:block" />
                        <span className="text-primary">True Agentic Understanding.</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg sm:text-xl text-foreground/70">
                        See how Stylr handles complex, multi-step requests that break standard chatbots.
                    </p>
                </div>

                <div
                    ref={carouselAnimation.ref}
                    className={`transition-all duration-700 px-1 md:px-8 ${carouselAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 4000,
                                stopOnMouseEnter: true,
                            }),
                        ]}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4 md:-ml-6">
                            {examples.map((card, index) => (
                                <CarouselItem key={index} className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                                    {/* Reduced padding p-4, reduced gap, height increased */}
                                    <Card className="flex flex-col overflow-hidden bg-background/60 backdrop-blur-xl border-border/50 hover:border-primary/40 transition-all hover:shadow-md h-[500px] relative group container-snap">
                                        <div className="px-5 pt-4 pb-5 flex flex-col h-full gap-2">
                                            {/* Header - Compact */}
                                            <div className="flex items-center gap-2 pb-2 border-b border-border/30">
                                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                                    <card.icon className="w-4 h-4 text-primary" />
                                                </div>
                                                <h3 className="text-sm font-semibold">{card.title}</h3>
                                            </div>

                                            {/* Content - Expanded space */}
                                            <div className="flex-1 flex flex-col gap-3 min-h-0 justify-between">
                                                {/* User Bubble */}
                                                <div className="self-end max-w-[90%] pl-6">
                                                    <div className="bg-primary/10 rounded-2xl rounded-tr-sm px-3 py-2.5 text-xs sm:text-sm text-foreground/90 leading-relaxed">
                                                        <p>{card.user}</p>
                                                    </div>
                                                </div>

                                                {/* Bot Bubble */}
                                                <div className="self-start max-w-[98%] pr-2 flex flex-col">
                                                    <div className="bg-background rounded-2xl rounded-tl-sm border border-border/50 px-3 py-3 text-xs sm:text-sm text-foreground/90 leading-relaxed shadow-sm">
                                                        <p className="mb-2">{card.bot}</p>

                                                        {/* Product Placeholders */}
                                                        {card.products && card.products.length > 0 && (
                                                            <div className="flex gap-2 mt-2 overflow-x-auto pb-1 scrollbar-hide">
                                                                {card.products.map((prod, idx) => (
                                                                    <div key={idx} className="flex-shrink-0 w-24 bg-muted/30 rounded-md p-1.5 border border-border/40">
                                                                        <div className="relative w-full aspect-[4/5] rounded overflow-hidden mb-1 bg-muted">
                                                                            <Image
                                                                                src={prod.image}
                                                                                alt={prod.name}
                                                                                fill
                                                                                className="object-cover"
                                                                            />
                                                                        </div>
                                                                        <p className="text-[10px] font-medium truncate">{prod.name}</p>
                                                                        <p className="text-[10px] text-muted-foreground">{prod.price}</p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="flex items-center gap-1.5 mt-2 ml-1">
                                                        <Zap className="w-3 h-3 text-primary" />
                                                        <p className="text-[10px] text-muted-foreground">Stylr Agent</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Navigation Arrows - Mobile: Bottom Centered, Desktop: Side */}
                        <div className="flex justify-center gap-4 mt-6 md:hidden">
                            <CarouselPrevious className="static translate-y-0" />
                            <CarouselNext className="static translate-y-0" />
                        </div>

                        <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12" />
                        <CarouselNext className="hidden md:flex -right-4 lg:-right-12" />
                    </Carousel>
                </div>

                {/* Trust Note - Optional mini-line */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-muted-foreground/80 font-medium">
                        Every answer stays aligned to your catalog, policies, and brand tone.
                    </p>
                </div>
            </div>
        </section>
    )
}
