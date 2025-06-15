import React from 'react'

const ShaonLogo = ({ 
  size = 'md', 
  showUnderscore = true, 
  className = '' 
}: {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showUnderscore?: boolean
  className?: string
}) => {
  // Size configurations
  const sizes = {
    sm: {
      bracket: 'text-lg md:text-xl',
      name: 'text-base md:text-lg',
      spacing: 'space-x-1'
    },
    md: {
      bracket: 'text-2xl md:text-3xl',
      name: 'text-xl md:text-2xl',
      spacing: 'space-x-2'
    },
    lg: {
      bracket: 'text-3xl md:text-4xl',
      name: 'text-2xl md:text-3xl',
      spacing: 'space-x-2'
    },
    xl: {
      bracket: 'text-4xl md:text-5xl',
      name: 'text-3xl md:text-4xl',
      spacing: 'space-x-3'
    }
  }

  const currentSize = sizes[size]

  return (
    <div className={`inline-flex items-center font-mono font-bold ${currentSize.spacing} ${className}`}>
      {/* Opening bracket */}
      <span className={`text-blue-500 ${currentSize.bracket} transition-colors duration-300 hover:text-blue-400`}>
        &lt;
      </span>
      
      {/* Name */}
      <span className={`text-white ${currentSize.name} font-semibold transition-colors duration-300 hover:text-gray-200 uppercase`}>
        SHAON
      </span>
      
      {/* Closing bracket */}
      <span className={`text-blue-500 ${currentSize.bracket} transition-colors duration-300 hover:text-blue-400`}>
        /&gt;
      </span>
      
      {/* Animated underscore cursor */}
      {showUnderscore && (
        <span 
          className={`text-purple-500 ${currentSize.bracket} animate-pulse`}
          style={{
            animation: 'blink 1.5s infinite'
          }}
        >
          _
        </span>
      )}
      
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