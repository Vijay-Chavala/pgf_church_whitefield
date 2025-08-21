// Simple image check script for hero banner images
// Run this in browser console to verify all images load properly

const heroImages = [
  '/images/hero/IMG_3326.JPEG',
  '/images/hero/IMG_3327.JPEG',
  '/images/hero/IMG_3328.JPEG',
  '/images/hero/IMG_3329.JPEG',
  '/images/hero/IMG_3330.JPEG',
  '/images/hero/IMG_3331.JPEG',
  '/images/hero/IMG_3332.JPEG',
  '/images/hero/IMG_3333.JPEG',
  '/images/hero/IMG_3335.JPEG',
  '/images/hero/church-worship.jpg',
]

console.log('🔍 Checking hero banner images...')

heroImages.forEach((imagePath, index) => {
  const img = new Image()
  img.onload = () => {
    console.log(`✅ Image ${index + 1}/10 loaded successfully: ${imagePath}`)
  }
  img.onerror = () => {
    console.error(`❌ Failed to load image ${index + 1}/10: ${imagePath}`)
  }
  img.src = imagePath
})

setTimeout(() => {
  console.log('Image loading check completed!')
}, 3000)
