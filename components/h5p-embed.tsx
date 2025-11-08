"use client"

import { useEffect, useRef } from "react"

interface H5PEmbedProps {
  src: string
  title?: string
  width?: number | string
  height?: number | string
  className?: string
}

export function H5PEmbed({ src, title = "H5P Content", width = "100%", height = 500, className = "" }: H5PEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // Load the H5P resizer script
    const script = document.createElement("script")
    script.src = "https://campus.rawdatun.org/h5p/h5plib/v124/joubel/core/js/h5p-resizer.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Clean up the script when component unmounts
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className={`h5p-container ${className}`}>
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        width={width}
        height={height}
        allowFullScreen
        className="h5p-iframe border-0 w-full rounded-lg"
        style={{ border: "none" }}
      ></iframe>
    </div>
  )
}
