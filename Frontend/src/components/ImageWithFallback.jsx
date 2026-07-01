import React from 'react'

export default function ImageWithFallback({ src, alt, className, fallback, ...rest }){
  const fallbackSrc = fallback || 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=60'

  return (
    <img
      src={src}
      alt={alt || ''}
      className={className}
      loading="lazy"
      {...rest}
      onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackSrc }}
    />
  )
}
