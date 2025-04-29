import { useState } from 'react'

function ShareResults({ bmr }) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const text = `My BMR is ${bmr} calories per day. Calculate yours at bmrcalculator.xyz`
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My BMR Result',
          text: text,
          url: 'https://bmrcalculator.xyz'
        })
      } catch (err) {
        copyToClipboard(text)
      }
    } else {
      copyToClipboard(text)
    }
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleShare}
      className="w-full mt-4 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      {copied ? '✓ Copied!' : 'Share Results'}
    </button>
  )
}

export default ShareResults 