/**
 * Comprehensive image preloading utility
 * Preloads all images from all sections for smooth scrolling experience
 */

// All product category images (from hero section)
const productCategoryImages = [
  // Handbag
  "/Product_images/Handbag before 1.png",
  "/Product_images/Handbag after.png",
  "/Product_images/Handbag user.jpg",
  // Eyewear (Glasses)
  "/Product_images/Glasses before.png",
  "/Product_images/Glasses after.png",
  "/Product_images/Glasses user.webp",
  // Jewelry (Chain)
  "/Product_images/Chain before.webp",
  "/Product_images/Chain after.png",
  "/Product_images/chain user.png",
  // Clothing
  "/Product_images/Clothing before.jpg",
  "/Product_images/Clothing after.jpg",
  "/Product_images/Clothing user.png",
  // Hats
  "/Product_images/Hat before.jpg",
  "/Product_images/Hat after.png",
  "/Product_images/Hat user.webp",
  // Shoes
  "/Product_images/Shoes before.png",
  "/Product_images/Shoes after.png",
  "/Product_images/Shoes user.png",
]

// Images from features grid section
const featuresGridImages = [
  "/Product_images/Clothing user.png",
  "/Product_images/Clothing after.jpg",
  "/Product_images/blue shirt.jpg",
  "/Product_images/Clothing before.jpg",
  "/Product_images/pants.jpg",
  "/Product_images/navy blazer.jpg",
  "/Product_images/grey apnts.jpg",
  "/Product_images/tie.jpg",
]

// Images from hero chat section
const heroChatImages = [
  "/Product_images/navy blazer.jpg",
  "/Product_images/blue shirt.jpg",
  "/Product_images/grey apnts.jpg",
  "/Product_images/shoes.jpg",
]

// Other assets
const otherAssets = [
  "/Stylr_icon.png",
]

// Combine all images (remove duplicates)
const allImages = [
  ...new Set([
    ...productCategoryImages,
    ...featuresGridImages,
    ...heroChatImages,
    ...otherAssets,
  ]),
]

/**
 * Preload a single image
 */
function preloadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    // Skip if already cached
    const img = new window.Image()
    
    img.onload = () => resolve()
    img.onerror = () => {
      // Resolve even on error to not block other images
      console.warn(`Failed to preload image: ${src}`)
      resolve()
    }
    
    // Set src to start loading
    img.src = src
  })
}

/**
 * Preload all images efficiently
 * Uses requestIdleCallback for non-blocking preloading
 */
export function preloadAllImages(): void {
  // Use requestIdleCallback if available, otherwise use setTimeout
  const schedulePreload = (callback: () => void) => {
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      requestIdleCallback(callback, { timeout: 2000 })
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(callback, 100)
    }
  }

  // Start preloading in batches to avoid overwhelming the browser
  const batchSize = 6 // Load 6 images at a time
  let currentIndex = 0

  const loadBatch = () => {
    const batch = allImages.slice(currentIndex, currentIndex + batchSize)
    
    if (batch.length === 0) {
      return // All images loaded
    }

    // Load batch in parallel
    Promise.all(batch.map(preloadImage)).then(() => {
      currentIndex += batchSize
      
      // Schedule next batch
      if (currentIndex < allImages.length) {
        schedulePreload(loadBatch)
      }
    })
  }

  // Start preloading after initial render
  schedulePreload(loadBatch)
}

/**
 * Preload critical images immediately (above-the-fold content)
 */
export function preloadCriticalImages(): void {
  const criticalImages = [
    "/Product_images/Clothing before.jpg",
    "/Product_images/Clothing after.jpg",
    "/Product_images/Clothing user.png",
    "/Stylr_icon.png",
  ]

  // Load critical images immediately
  criticalImages.forEach(preloadImage)
}
