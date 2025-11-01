"use client"

import { useEffect, useRef } from "react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"

interface DemoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  calLink?: string
  calNamespace?: string
}

declare global {
  interface Window {
    Cal?: any
  }
}

export function DemoModal({ 
  open, 
  onOpenChange, 
  calLink = "kerrsor/15min",
  calNamespace = "15min"
}: DemoModalProps) {
  const calContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    // Load Cal.com embed script once
    if (typeof window !== "undefined" && !window.Cal?.loaded) {
      const initScript = document.createElement("script")
      initScript.type = "text/javascript"
      initScript.innerHTML = `
        (function (C, A, L) { 
          let p = function (a, ar) { a.q.push(ar); }; 
          let d = C.document; 
          C.Cal = C.Cal || function () { 
            let cal = C.Cal; 
            let ar = arguments; 
            if (!cal.loaded) { 
              cal.ns = {}; 
              cal.q = cal.q || []; 
              d.head.appendChild(d.createElement("script")).src = A; 
              cal.loaded = true; 
            } 
            if (ar[0] === L) { 
              const api = function () { p(api, arguments); }; 
              const namespace = ar[1]; 
              api.q = api.q || []; 
              if(typeof namespace === "string"){
                cal.ns[namespace] = cal.ns[namespace] || api;
                p(cal.ns[namespace], ar);
                p(cal, ["initNamespace", namespace]);
              } else p(cal, ar); 
              return;
            } 
            p(cal, ar); 
          }; 
        })(window, "https://app.cal.com/embed/embed.js", "init");
      `
      document.head.appendChild(initScript)
    }

    // Wait a bit for script to load, then render inline calendar
    const timer = setTimeout(() => {
      if (window.Cal && calContainerRef.current) {
        // Initialize Cal
        window.Cal("init", calNamespace, { origin: "https://app.cal.com" })
        
        // Configure UI
        window.Cal.ns?.[calNamespace]?.("ui", {
          hideEventTypeDetails: false,
          layout: "month_view"
        })
        
        // Render inline calendar in the container
        window.Cal.ns?.[calNamespace]?.("inline", {
          elementOrSelector: calContainerRef.current,
          calLink: calLink,
          layout: "month_view"
        })
      }
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [open, calLink, calNamespace])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px] max-h-[90vh] p-0 overflow-hidden">
        <DialogTitle className="sr-only">Schedule a Demo</DialogTitle>
        <div 
          ref={calContainerRef}
          className="w-full h-[calc(90vh-80px)] min-h-[600px]"
        />
      </DialogContent>
    </Dialog>
  )
}

