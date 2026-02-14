// Event images from assets/Mental health workshop, assets/sip and paint workshop, assets/totebag painting
// Copied to public/images/events/{folder}/
const EVENT_IMAGES = {
  'mental-health-workshop': 'IMG-20250511-WA0035.jpg',
  'sip-and-paint': 'IMG-20250216-WA0052.jpg',
  'tote-bag-painting': 'IMG-20260213-WA0012.jpg',
}

const PLACEHOLDER_HERO = 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200&q=80'

export function getEventImageUrl(imageFolder) {
  const filename = EVENT_IMAGES[imageFolder]
  if (filename) {
    return `/images/events/${imageFolder}/${filename}`
  }
  return PLACEHOLDER_HERO
}

export function getEventPlaceholder(imageFolder) {
  return getEventImageUrl(imageFolder)
}

export function getHeroImageUrl() {
  return '/images/events/mental-health-workshop/IMG-20250216-WA0023.jpg'
}
