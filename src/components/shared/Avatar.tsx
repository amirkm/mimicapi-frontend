import { UserCircleIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'

interface AvatarProps {
  imageUrl: string
  altText: string
  onClick?: () => void
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl, altText = '', onClick }) => {
  const [imageError, setImageError] = useState(false)

  const handleError = () => {
    setImageError(true)
  }

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <div className="relative inline-block">
      {!imageError && (
        <img
          className="inline-block w-12 h-12 rounded-full cursor-pointer ring-2 ring-white"
          src={imageUrl}
          alt={altText}
          onError={handleError}
          onClick={handleClick}
        />
      )}

      {imageError && <UserCircleIcon onClick={handleClick} className="w-12 h-12 cursor-pointer stroke-1 stroke-gray-500" />}
    </div>
  )
}

export default Avatar
