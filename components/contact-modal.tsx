"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface ContactModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    category: "",
    storeLink: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        const errorMessage = data.details
          ? `${data.error}: ${data.details}`
          : data.error || "Failed to send message"
        throw new Error(errorMessage)
      }

      setIsSubmitting(false)
      setSubmitted(true)

      // Reset form after showing success message
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: "", email: "", company: "", category: "", storeLink: "" })
        onOpenChange(false)
      }, 2000)
    } catch (err) {
      setIsSubmitting(false)
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Request Access</DialogTitle>
          <DialogDescription>
            Register your details below and we'll reach out to book a quick demo and share tailored recommendations based on your needs.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-3 rounded-md border border-border/50 bg-muted/30 p-3 text-left">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Note:</span> Currently, all of our limited onboarding slots are booked. Please complete the form below to request access.
          </p>
        </div>

        {submitted ? (
          <Card className="border-primary/50 bg-primary/10 p-6 text-center">
            <p className="text-sm font-medium text-primary">
              Thank you for requesting access. We are really excited to have you on board. We'll get back to you shortly.
            </p>
          </Card>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Card className="border-red-500/50 bg-red-500/10 p-4 text-center">
                <p className="text-sm font-medium text-red-500">{error}</p>
              </Card>
            )}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-foreground"
              >
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="flex h-9 w-full rounded-md border border-border/50 bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="flex h-9 w-full rounded-md border border-border/50 bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="company"
                className="text-sm font-medium text-foreground"
              >
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                className="flex h-9 w-full rounded-md border border-border/50 bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Your company"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="category"
                className="text-sm font-medium text-foreground"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="flex h-9 w-full rounded-md border border-border/50 bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Choose your category</option>
                <option value="clothing">Clothing</option>
                <option value="fashion-accessories">Fashion Accessories</option>
                <option value="shoes">Shoes</option>
                <option value="jewelry">Jewelry</option>
                <option value="bags">Bags & Handbags</option>
                <option value="eyewear">Eyewear</option>
                <option value="watches">Watches</option>
                <option value="cosmetics">Cosmetics & Beauty</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="storeLink"
                className="text-sm font-medium text-foreground"
              >
                E-commerce Store Link
              </label>
              <input
                id="storeLink"
                name="storeLink"
                type="text"
                value={formData.storeLink}
                onChange={handleChange}
                className="flex h-9 w-full rounded-md border border-border/50 bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="https://yourstore.com or www.yourstore.com"
              />
            </div>

            <DialogFooter className="gap-2 sm:gap-0">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Request Access"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

