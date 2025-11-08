"use client"

import { useState, useEffect } from "react"

interface GoogleFormEmbedProps {
  formUrl: string
  title?: string
  height?: number
  className?: string
}

export function GoogleFormEmbed({
  formUrl,
  title = "Google Form",
  height = 1000,
  className = "",
}: GoogleFormEmbedProps) {
  const [iframeHeight, setIframeHeight] = useState(height)
  const [isMounted, setIsMounted] = useState(false)

  // Make sure we only render the iframe on the client side
  useEffect(() => {
    setIsMounted(true)

    // Adjust height for mobile devices
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIframeHeight(height * 0.8)
      } else {
        setIframeHeight(height)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [height])

  // Convert regular Google Form URL to embedded URL if needed
  const getEmbedUrl = (url: string) => {
    // If it's already an embedded URL, return it
    if (url.includes("/viewform?embedded=true")) {
      return url
    }

    // If it's a regular Google Form URL, convert it to embedded URL
    if (url.includes("/viewform")) {
      return url.replace("/viewform", "/viewform?embedded=true")
    }

    // If it's a shortened URL or other format, just append the embedded parameter
    return `${url}${url.includes("?") ? "&" : "?"}embedded=true`
  }

  const embedUrl = getEmbedUrl(formUrl)

  if (!isMounted) {
    return <div className={`h-${height / 4} bg-green-50 animate-pulse rounded-lg ${className}`} />
  }

  return (
    <div className={`w-full overflow-hidden rounded-lg border border-green-200 bg-white shadow-sm ${className}`}>
      <iframe
        src={embedUrl}
        title={title}
        width="100%"
        height={iframeHeight}
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        className="mx-auto"
      >
        Loading form...
      </iframe>
    </div>
  )
}
