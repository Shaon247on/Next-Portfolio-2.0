import React from 'react'
import Image from 'next/image'

// Intrinsic dimensions of /logo.png — kept here so next/image can reserve the
// correct aspect ratio while the rendered height comes from the size variant.
const LOGO_WIDTH = 2076
const LOGO_HEIGHT = 758

const ShaonLogo = ({
  size = 'md',
  showUnderscore = true,
  className = ''
}: {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showUnderscore?: boolean
  className?: string
}) => {
  // Size configurations — heights mirror the line-height of the text logo the
  // variants used to render, so existing call sites keep their footprint.
  const sizes = {
    sm: {
      logo: 'h-8 md:h-10',
      underscore: 'text-lg md:text-xl',
      spacing: 'space-x-1'
    },
    md: {
      logo: 'h-10 md:h-12',
      underscore: 'text-2xl md:text-3xl',
      spacing: 'space-x-2'
    },
    lg: {
      logo: 'h-12 md:h-14',
      underscore: 'text-3xl md:text-4xl',
      spacing: 'space-x-2'
    },
    xl: {
      logo: 'h-14 md:h-16',
      underscore: 'text-4xl md:text-5xl',
      spacing: 'space-x-3'
    }
  }

  const currentSize = sizes[size]

  return (
    <div className={`inline-flex items-center font-mono font-bold ${currentSize.spacing} ${className}`}>
      {/* Wordmark */}
      <Image
        src="/logo.png"
        alt="Shaon — Full Stack Developer"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        priority
        className={`${currentSize.logo} w-auto object-contain transition-opacity duration-300 hover:opacity-80`}
      />

      {/* Animated underscore cursor */}
      {/* {showUnderscore && (
        <span
          className={`text-purple-500 ${currentSize.underscore} animate-pulse`}
          style={{
            animation: 'blink 1.5s infinite'
          }}
        >
          _
        </span>
      )} */}

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}


export default ShaonLogo;
