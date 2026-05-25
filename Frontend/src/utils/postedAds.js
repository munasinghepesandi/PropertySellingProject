const POSTED_ADS_KEY = 'lanka_property_posted_ads'

export function readPostedAds() {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const stored = window.localStorage.getItem(POSTED_ADS_KEY)
    const parsed = stored ? JSON.parse(stored) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function savePostedAd(ad) {
  if (typeof window === 'undefined') {
    return []
  }

  const nextAd = {
    id: ad.id || `${Date.now()}`,
    title: ad.title || 'New Property',
    area: ad.area || ad.location || 'Sri Lanka',
    price: ad.price || 'Price on request',
    image: ad.image || 'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
    tag: ad.tag || 'New',
    description: ad.description || '',
    createdAt: ad.createdAt || new Date().toISOString(),
  }

  const storedAds = readPostedAds()
  const nextAds = [nextAd, ...storedAds.filter((item) => item.id !== nextAd.id)].slice(0, 12)
  window.localStorage.setItem(POSTED_ADS_KEY, JSON.stringify(nextAds))
  window.dispatchEvent(new Event('storage'))
  return nextAds
}

export function clearPostedAds() {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.removeItem(POSTED_ADS_KEY)
}