import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Sparkles,
  Upload,
  Download,
  Share2,
  MessageSquare,
  ShoppingBag,
  Target,
  DollarSign,
  Briefcase,
  TrendingUp,
  BarChart3,
  Check,
  Zap,
  Lock,
  Award,
  Glasses,
  Shirt,
  Watch,
  Gem,
  Wallet,
} from "lucide-react"

export function FeaturesGrid() {
  return (
    <section id="features" className="relative py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-foreground lg:text-4xl">Platform Features</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Everything you need to transform your online shopping experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feature 1: Virtual Try-On Engine */}
          <Card className="relative overflow-hidden bg-card/50 backdrop-blur-xl border-border/50 p-8 group hover:border-primary/50 transition-all duration-300 h-[600px] flex flex-col">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
                  <Lock className="w-3 h-3 mr-1" />
                  Secure & Private
                </Badge>
                <h3 className="text-xl font-semibold mb-1 text-balance">See It On You, Not The Model</h3>
                <p className="text-xs text-muted-foreground text-balance">
                  Upload once. Try everything. Get studio-grade previews instantly.
                </p>
              </div>

              {/* Illustration */}
              <div className="flex-1 grid grid-cols-2 gap-3 min-h-0">
                {/* Upload Zone */}
                <div className="relative bg-secondary/50 backdrop-blur-sm rounded-lg border-2 border-dashed border-border/50 p-4 flex flex-col items-center justify-center group-hover:border-primary/30 transition-all">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Upload className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground text-center">Upload Photo</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg" />
                </div>

                {/* Preview Panel */}
                <div className="relative bg-gradient-to-br from-secondary/80 to-secondary/40 backdrop-blur-sm rounded-lg border border-border/50 p-3 flex flex-col">
                  <div className="flex-1 bg-muted/30 rounded-md mb-2 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-chart-2/20" />
                    <Award className="w-14 h-14 text-primary/40" />
                    <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground text-[10px]">
                      Studio Quality
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent text-xs h-7">
                      <Download className="w-3 h-3 mr-1" />
                      Save
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent text-xs h-7">
                      <Share2 className="w-3 h-3 mr-1" />
                      Share
                    </Button>
                  </div>
                </div>

                {/* Product Cards */}
                <div className="col-span-2 grid grid-cols-3 gap-2">
                  {["Shirt", "Jacket", "Pants"].map((item) => (
                    <div
                      key={item}
                      className="bg-secondary/50 backdrop-blur-sm rounded-md border border-border/50 p-2 hover:border-primary/50 transition-all"
                    >
                      <div className="aspect-square bg-muted/30 rounded mb-1.5 flex items-center justify-center">
                        <ShoppingBag className="w-7 h-7 text-muted-foreground/50" />
                      </div>
                      <p className="text-[10px] text-center mb-1.5">{item}</p>
                      <Button size="sm" className="w-full bg-primary hover:bg-primary/90 h-7 text-xs">
                        Try On
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Feature 2: AI Shopping Assistant */}
          <Card className="relative overflow-hidden bg-card/50 backdrop-blur-xl border-border/50 p-8 group hover:border-primary/50 transition-all duration-300 h-[600px] flex flex-col">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <Badge className="mb-2 bg-chart-2/10 text-chart-2 border-chart-2/20">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Context-Aware AI
                </Badge>
                <h3 className="text-xl font-semibold mb-1 text-balance">Your Brand-Trained Style Advisor</h3>
                <p className="text-xs text-muted-foreground text-balance">
                  First context-aware chatbot that actually understands your inventory.
                </p>
              </div>

              <div className="flex-1 flex flex-col gap-2 min-h-0">
                {/* User Question */}
                <div className="flex gap-2 justify-end">
                  <div className="bg-primary/20 backdrop-blur-sm rounded-lg rounded-tr-none border border-primary/30 p-2 max-w-[75%]">
                    <p className="text-xs text-foreground/90">
                      I need something comfortable for summer. What do you suggest?
                    </p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-muted/50 flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-primary/30" />
                  </div>
                </div>

                {/* Bot Answer with Product Cards */}
                <div className="flex gap-2 flex-1 min-h-0">
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 bg-secondary/50 backdrop-blur-sm rounded-lg rounded-tl-none border border-border/50 p-3 flex flex-col min-h-0">
                    <p className="text-xs text-foreground/90 mb-3">
                      Perfect! Our linen collection is ideal for summer. Here are my top picks:
                    </p>

                    {/* Product Recommendation Cards */}
                    <div className="grid grid-cols-3 gap-2 flex-1">
                      {[
                        { name: "Linen Shirt", price: 32, color: "Sky Blue" },
                        { name: "Cotton Shorts", price: 28, color: "Khaki" },
                        { name: "Canvas Sneakers", price: 45, color: "White" },
                      ].map((product) => (
                        <div
                          key={product.name}
                          className="bg-background/50 backdrop-blur-sm rounded-lg border border-border/40 p-2 hover:border-primary/50 transition-all hover:scale-105 flex flex-col"
                        >
                          <div className="aspect-square bg-muted/40 rounded-md mb-1.5 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-chart-2/10" />
                            <ShoppingBag className="w-7 h-7 text-muted-foreground/50 relative z-10" />
                          </div>
                          <p className="text-[10px] font-semibold mb-0.5 truncate">{product.name}</p>
                          <p className="text-[9px] text-muted-foreground mb-1">{product.color}</p>
                          <p className="text-xs text-primary font-bold">${product.price}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Input Bar */}
                <div className="bg-secondary/50 backdrop-blur-sm rounded-lg border border-border/50 p-2 flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground flex-1">Ask anything...</span>
                  <Zap className="w-3.5 h-3.5 text-primary" />
                </div>
              </div>
            </div>
          </Card>

          {/* Feature 3: Smart Recommendations Engine */}
          <Card className="relative overflow-hidden bg-card/50 backdrop-blur-xl border-border/50 p-8 group hover:border-primary/50 transition-all duration-300 h-[600px] flex flex-col">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <Badge className="mb-2 bg-chart-3/10 text-chart-3 border-chart-3/20">
                  <Target className="w-3 h-3 mr-1" />
                  Smart Pairing
                </Badge>
                <h3 className="text-xl font-semibold mb-1 text-balance">Outfit Intelligence Built In</h3>
                <p className="text-xs text-muted-foreground text-balance">
                  Complementary pairings & fit guidance powered by your catalog data.
                </p>
              </div>

              <div className="flex-1 flex flex-col gap-2 min-h-0">
                {/* User Question */}
                <div className="flex gap-2 justify-end">
                  <div className="bg-primary/20 backdrop-blur-sm rounded-lg rounded-tr-none border border-primary/30 p-2 max-w-[75%]">
                    <p className="text-xs text-foreground/90">What goes well with this blue dress shirt?</p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-muted/50 flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-primary/30" />
                  </div>
                </div>

                {/* Bot Answer with Pairing Cards */}
                <div className="flex gap-2 flex-1 min-h-0">
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 bg-secondary/50 backdrop-blur-sm rounded-lg rounded-tl-none border border-border/50 p-3 flex flex-col min-h-0">
                    <p className="text-xs text-foreground/90 mb-3">
                      Great choice! Here are perfect pairings based on color harmony and style:
                    </p>

                    {/* Pairing Product Cards */}
                    <div className="space-y-2 flex-1 overflow-auto">
                      {[
                        { name: "Grey Chinos", price: 54, match: 95, tag: "Color Harmony" },
                        { name: "Leather Belt", price: 28, match: 92, tag: "Size Match" },
                        { name: "Oxford Shoes", price: 68, match: 88, tag: "Style Match" },
                      ].map((item) => (
                        <div
                          key={item.name}
                          className="bg-background/50 backdrop-blur-sm rounded-lg border border-border/40 p-2 flex items-center gap-2 hover:border-primary/50 transition-all"
                        >
                          <div className="w-14 h-14 bg-muted/40 rounded-md flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-chart-3/10 to-primary/10" />
                            <ShoppingBag className="w-6 h-6 text-muted-foreground/50 relative z-10" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold mb-0.5">{item.name}</p>
                            <div className="flex items-center gap-1.5 mb-0.5">
                              <Badge className="h-4 text-[9px] bg-primary/10 text-primary border-primary/20">
                                {item.tag}
                              </Badge>
                              <span className="text-[10px] text-muted-foreground font-medium text-chart-2">
                                {item.match}% Match
                              </span>
                            </div>
                            <p className="text-xs text-primary font-bold">${item.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Input Bar */}
                <div className="bg-secondary/50 backdrop-blur-sm rounded-lg border border-border/50 p-2 flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground flex-1">Ask for more pairings...</span>
                  <Zap className="w-3.5 h-3.5 text-primary" />
                </div>
              </div>
            </div>
          </Card>

          {/* Feature 4: Personal Stylist & Budget-Aware */}
          <Card className="relative overflow-hidden bg-card/50 backdrop-blur-xl border-border/50 p-8 group hover:border-primary/50 transition-all duration-300 h-[600px] flex flex-col">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <Badge className="mb-2 bg-chart-4/10 text-chart-4 border-chart-4/20">
                  <DollarSign className="w-3 h-3 mr-1" />
                  Budget-Aware
                </Badge>
                <h3 className="text-xl font-semibold mb-1 text-balance">Your Personal Shopping Assistant</h3>
                <p className="text-xs text-muted-foreground text-balance">
                  Ask complex questions. Get complete, budget-aware outfit solutions.
                </p>
              </div>

              <div className="flex-1 flex flex-col gap-2 min-h-0">
                {/* User Question */}
                <div className="flex gap-2 justify-end">
                  <div className="bg-primary/20 backdrop-blur-sm rounded-lg rounded-tr-none border border-primary/30 p-2 max-w-[80%]">
                    <p className="text-xs text-foreground/90 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      Interview outfit under £200? Prefer blue tones
                    </p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-muted/50 flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-primary/30" />
                  </div>
                </div>

                {/* Bot Answer with Complete Outfit */}
                <div className="flex gap-2 flex-1 min-h-0">
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 bg-secondary/50 backdrop-blur-sm rounded-lg rounded-tl-none border border-border/50 p-3 flex flex-col min-h-0">
                    <p className="text-xs text-foreground/90 mb-3">
                      Perfect! Here's a complete professional outfit within your budget:
                    </p>

                    {/* Outfit Product Grid */}
                    <div className="grid grid-cols-4 gap-2 mb-3">
                      {[
                        { name: "Navy Blazer", price: 89 },
                        { name: "Blue Shirt", price: 32 },
                        { name: "Grey Pants", price: 45 },
                        { name: "Oxfords", price: 34 },
                      ].map((item) => (
                        <div
                          key={item.name}
                          className="bg-background/50 backdrop-blur-sm rounded-lg border border-border/40 p-1.5 hover:border-primary/50 transition-all hover:scale-105 flex flex-col"
                        >
                          <div className="aspect-square bg-muted/40 rounded-md mb-1.5 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-chart-4/10 to-primary/10" />
                            <ShoppingBag className="w-5 h-5 text-muted-foreground/50 relative z-10" />
                          </div>
                          <p className="text-[10px] font-semibold mb-0.5 truncate">{item.name}</p>
                          <p className="text-xs text-primary font-bold">£{item.price}</p>
                        </div>
                      ))}
                    </div>

                    {/* Budget Summary */}
                    <div className="bg-gradient-to-r from-primary/10 to-chart-2/10 backdrop-blur-sm rounded-lg border border-primary/30 p-2.5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs font-bold">Total: £200 / £200</p>
                          <p className="text-[10px] text-muted-foreground">Perfect match for your budget!</p>
                        </div>
                      </div>
                      <Button size="sm" className="bg-primary hover:bg-primary/90 h-7 text-xs">
                        Try All
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Input Bar */}
                <div className="bg-secondary/50 backdrop-blur-sm rounded-lg border border-border/50 p-2 flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground flex-1">Ask for different budget...</span>
                  <Zap className="w-3.5 h-3.5 text-primary" />
                </div>
              </div>
            </div>
          </Card>

          {/* Feature 5: Multi-Category Intelligence */}
          <Card className="relative overflow-hidden bg-card/50 backdrop-blur-xl border-border/50 p-8 group hover:border-primary/50 transition-all duration-300 h-[600px] flex flex-col">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <Badge className="mb-2 bg-chart-5/10 text-chart-5 border-chart-5/20">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Universal Platform
                </Badge>
                <h3 className="text-xl font-semibold mb-1 text-balance">15+ Categories. 1000+ Products. One Platform</h3>
                <p className="text-xs text-muted-foreground text-balance">
                  Virtual try-on, image generation & AI recommendations across all categories.
                </p>
              </div>

              <div className="flex-1 relative flex items-center justify-center min-h-0 mb-4">
                {/* Center Logo Circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary/30 to-chart-2/30 backdrop-blur-sm border-2 border-primary/50 flex items-center justify-center z-10 shadow-lg shadow-primary/20">
                    <Sparkles className="w-12 h-12 text-primary" />
                  </div>
                </div>

                {/* Category Circles with Connections */}
                {[
                  { icon: Glasses, label: "Eyewear", angle: 0, color: "text-chart-2" },
                  { icon: Shirt, label: "Clothing", angle: 60, color: "text-chart-3" },
                  { icon: Watch, label: "Accessories", angle: 120, color: "text-chart-4" },
                  { icon: Gem, label: "Jewelry", angle: 180, color: "text-chart-5" },
                  { icon: Wallet, label: "Handbags", angle: 240, color: "text-primary" },
                  { icon: ShoppingBag, label: "Footwear", angle: 300, color: "text-chart-2" },
                ].map((category) => {
                  const radius = 120
                  const x = Math.cos((category.angle * Math.PI) / 180) * radius
                  const y = Math.sin((category.angle * Math.PI) / 180) * radius

                  return (
                    <div key={category.label}>
                      {/* Connection Line */}
                      <svg className="absolute inset-0 pointer-events-none" style={{ width: "100%", height: "100%" }}>
                        <line
                          x1="50%"
                          y1="50%"
                          x2={`calc(50% + ${x}px)`}
                          y2={`calc(50% + ${y}px)`}
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className="text-primary/20"
                          strokeDasharray="6 4"
                        />
                      </svg>

                      {/* Category Circle */}
                      <div
                        className="absolute"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <div className="w-18 h-18 rounded-full bg-secondary/80 backdrop-blur-sm border-2 border-border/50 flex flex-col items-center justify-center hover:scale-110 hover:border-primary/50 transition-all cursor-pointer p-2">
                          <category.icon className={`w-6 h-6 ${category.color} mb-1`} />
                          <p className="text-[10px] text-foreground/80 font-medium text-center leading-tight">
                            {category.label}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Feature Support Tags */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "Virtual Try-On", icon: Upload },
                  { label: "Image Generation", icon: Sparkles },
                  { label: "AI Chatbot", icon: MessageSquare },
                ].map((feature) => (
                  <div
                    key={feature.label}
                    className="bg-secondary/50 backdrop-blur-sm rounded-lg border border-border/50 p-3 text-center hover:border-primary/50 transition-all"
                  >
                    <feature.icon className="w-5 h-5 text-primary mx-auto mb-1.5" />
                    <Check className="w-3 h-3 text-chart-2 mx-auto mb-1" />
                    <p className="text-[10px] text-foreground/90 font-medium leading-tight">{feature.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Feature 6: Analytics & Insights Dashboard */}
          <Card className="relative overflow-hidden bg-card/50 backdrop-blur-xl border-border/50 p-8 group hover:border-primary/50 transition-all duration-300 h-[600px] flex flex-col">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
                  <BarChart3 className="w-3 h-3 mr-1" />
                  Real-Time Analytics
                </Badge>
                <h3 className="text-xl font-semibold mb-1 text-balance">Insights That Move The Needle</h3>
                <p className="text-xs text-muted-foreground text-balance">
                  Track try-ons, conversions, and preferences. Know what's working.
                </p>
              </div>

              {/* Dashboard Illustration */}
              <div className="flex-1 space-y-3 min-h-0">
                {/* Metric Cards */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Try-Ons", value: "2,847", change: "+23%", icon: TrendingUp },
                    { label: "Conv. Rate", value: "34%", change: "vs 12%", icon: Target },
                    { label: "Top Item", value: "Denim", change: "487", icon: Award },
                  ].map((metric) => (
                    <div
                      key={metric.label}
                      className="bg-secondary/50 backdrop-blur-sm rounded-lg border border-border/50 p-3 hover:border-primary/50 transition-all"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <metric.icon className="w-4 h-4 text-primary" />
                        <Badge className="h-4 text-[9px] bg-chart-2/10 text-chart-2 border-chart-2/20">
                          {metric.change}
                        </Badge>
                      </div>
                      <p className="text-xl font-bold mb-0.5">{metric.value}</p>
                      <p className="text-[10px] text-muted-foreground">{metric.label}</p>
                    </div>
                  ))}
                </div>

                {/* Most Tried-On Products Table */}
                <div className="bg-secondary/50 backdrop-blur-sm rounded-lg border border-border/50 p-3 flex-1 min-h-0 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-semibold">Most Tried-On Products</p>
                    <Badge className="h-4 text-[9px] bg-muted text-muted-foreground">Last 7 days</Badge>
                  </div>

                  {/* Table Header */}
                  <div className="grid grid-cols-[1fr_2fr_1fr_1fr] gap-2 pb-2 border-b border-border/30 mb-2">
                    <p className="text-[10px] text-muted-foreground font-medium">Product</p>
                    <p className="text-[10px] text-muted-foreground font-medium">Name</p>
                    <p className="text-[10px] text-muted-foreground font-medium text-right">Try-Ons</p>
                    <p className="text-[10px] text-muted-foreground font-medium text-right">Conv. Rate</p>
                  </div>

                  {/* Product Rows */}
                  <div className="space-y-2 flex-1 overflow-auto">
                    {[
                      { name: "Classic Denim Jacket", image: Shirt, tryOns: 487, convRate: 42 },
                      { name: "Aviator Sunglasses", image: Glasses, tryOns: 423, convRate: 38 },
                      { name: "Leather Crossbody Bag", image: Wallet, tryOns: 391, convRate: 35 },
                      { name: "White Canvas Sneakers", image: ShoppingBag, tryOns: 356, convRate: 31 },
                      { name: "Silver Chain Necklace", image: Gem, tryOns: 298, convRate: 29 },
                    ].map((product, index) => (
                      <div
                        key={product.name}
                        className="grid grid-cols-[1fr_2fr_1fr_1fr] gap-2 items-center bg-background/30 rounded-lg p-2 hover:bg-background/50 transition-all"
                      >
                        {/* Product Image */}
                        <div className="w-10 h-10 bg-muted/40 rounded-md flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-chart-2/10" />
                          <product.image className="w-5 h-5 text-muted-foreground/50 relative z-10" />
                        </div>

                        {/* Product Name */}
                        <p className="text-[11px] font-medium truncate">{product.name}</p>

                        {/* Try-Ons Count */}
                        <div className="text-right">
                          <p className="text-xs font-bold text-foreground">{product.tryOns}</p>
                        </div>

                        {/* Conversion Rate */}
                        <div className="text-right">
                          <Badge className="h-5 text-[10px] bg-chart-2/10 text-chart-2 border-chart-2/20 font-bold">
                            {product.convRate}%
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
