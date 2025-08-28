'use client'

import { useMemo, useCallback, useState } from 'react'
import { useLanguageStore } from '@/lib/stores/language-store'
import { churchSettings } from '@/data/church-data'
import {
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  Share2,
  X,
  Copy,
} from 'lucide-react'

type PlatformKey = 'facebook' | 'instagram' | 'youtube' | 'whatsapp' | 'copy'

interface PlatformConfig {
  key: PlatformKey
  label: { en: string; te: string }
  url: string
  icon: React.ComponentType<{ className?: string }>
  bg: string
  hoverBg: string
  ringColor: string
}

function getWhatsappUrl(raw?: string) {
  if (!raw) return ''
  const digits = raw.replace(/[^0-9]/g, '')
  return digits ? `https://wa.me/${digits}` : ''
}

export function SocialRadialMenu() {
  const { currentLanguage } = useLanguageStore()
  const [isExpanded, setIsExpanded] = useState(false)
  const [showCopySuccess, setShowCopySuccess] = useState(false)

  const platforms = useMemo<PlatformConfig[]>(() => {
    const list: PlatformConfig[] = []
    const entries: Array<
      [
        PlatformKey,
        string | undefined,
        PlatformConfig['icon'],
        string,
        string,
        string,
        { en: string; te: string },
      ]
    > = [
      [
        'facebook',
        churchSettings.socialMedia?.facebook,
        Facebook,
        'bg-gradient-to-br from-blue-500 to-blue-600',
        'hover:from-blue-600 hover:to-blue-700',
        'ring-blue-500/30',
        { en: 'Facebook', te: 'ఫేస్‌బుక్' },
      ],
      [
        'instagram',
        churchSettings.socialMedia?.instagram,
        Instagram,
        'bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500',
        'hover:from-pink-600 hover:via-purple-600 hover:to-orange-600',
        'ring-pink-500/30',
        { en: 'Instagram', te: 'ఇన్‌స్టాగ్రామ్' },
      ],
      [
        'youtube',
        churchSettings.socialMedia?.youtube,
        Youtube,
        'bg-gradient-to-br from-red-500 to-red-600',
        'hover:from-red-600 hover:to-red-700',
        'ring-red-500/30',
        { en: 'YouTube', te: 'యూట్యూబ్' },
      ],
      [
        'whatsapp',
        getWhatsappUrl(churchSettings.socialMedia?.whatsapp),
        MessageCircle,
        'bg-gradient-to-br from-green-500 to-green-600',
        'hover:from-green-600 hover:to-green-700',
        'ring-green-500/30',
        { en: 'WhatsApp', te: 'వాట్సాప్' },
      ],
      [
        'copy',
        'https://pgf-blr.com',
        Copy,
        'bg-gradient-to-br from-gray-500 to-gray-600',
        'hover:from-gray-600 hover:to-gray-700',
        'ring-gray-500/30',
        { en: 'Copy Link', te: 'లింక్ కాపీ చేయండి' },
      ],
    ]

    entries.forEach(([key, url, icon, bg, hoverBg, ringColor, label]) => {
      if (url && url.trim() !== '') {
        list.push({ key, url, icon, bg, hoverBg, ringColor, label })
      }
    })
    return list
  }, [])

  const openUrl = useCallback((url: string, platform: PlatformKey) => {
    if (!url) return

    if (platform === 'copy') {
      // Copy to clipboard
      navigator.clipboard
        .writeText(url)
        .then(() => {
          setShowCopySuccess(true)
          setTimeout(() => setShowCopySuccess(false), 2000) // Hide after 2 seconds
        })
        .catch(err => {
          console.error('Failed to copy link:', err)
        })
    } else {
      // Open in new tab for social media
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }, [])

  if (platforms.length === 0) return null

  const toggleExpanded = () => setIsExpanded(!isExpanded)

  return (
    <>
      {/* Blur overlay when expanded */}
      {isExpanded && (
        <div
          className='fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-all duration-300'
          onClick={toggleExpanded}
        />
      )}

      {/* Social menu container - positioned based on state */}
      <div
        className={`fixed z-50 transition-all duration-500 ease-out ${
          isExpanded
            ? 'right-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
            : 'right-6 top-1/2 -translate-y-1/2'
        }`}
      >
        {/* Main floating action button */}
        <div className='relative'>
          {/* Animated background glow */}
          <div
            className={`absolute inset-0 rounded-full transition-all duration-500 ${
              isExpanded
                ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-2xl scale-200'
                : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-lg scale-100'
            }`}
          />

          {/* Main toggle button */}
          <button
            onClick={toggleExpanded}
            className={`relative h-14 w-14 rounded-full bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-white/20 shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-purple-500/25 ${
              isExpanded ? 'rotate-45 shadow-purple-500/30 scale-110' : ''
            }`}
            aria-label={
              currentLanguage === 'te' ? 'సోషల్ మీడియా' : 'Social Media'
            }
          >
            {isExpanded ? (
              <X className='h-6 w-6 text-white mx-auto' />
            ) : (
              <Share2 className='h-6 w-6 text-white mx-auto' />
            )}
          </button>

          {/* Details section when expanded */}
          {isExpanded && (
            <div className='absolute top-full mt-8 left-1/2 -translate-x-1/2 text-center'>
              <div className='px-8 py-6 rounded-3xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-white/20 shadow-2xl min-w-[320px] max-w-[380px]'>
                <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                  {currentLanguage === 'te'
                    ? 'మమ్మల్ని ఫాలో అవ్వండి'
                    : 'Follow Us On'}
                </h3>
                <p className='text-sm leading-relaxed text-gray-600 dark:text-gray-300 mb-4 px-2'>
                  {currentLanguage === 'te'
                    ? 'మా సోషల్ మీడియా ఛానెల్స్‌లో మమ్మల్ని ఫాలో అవ్వండి మరియు అప్‌డేట్స్‌తో కనెక్ట్‌డ్ ఉండండి'
                    : 'Stay connected with us on our social media channels for updates and inspiration'}
                </p>
              </div>
            </div>
          )}

          {/* Social media platforms */}
          {platforms.map((platform, index) => {
            const angle = (index * 360) / platforms.length
            const radius = isExpanded ? 85 : 0 // Increased radius for center display
            const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius
            const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius

            return (
              <div
                key={platform.key}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out ${
                  isExpanded ? 'pointer-events-auto' : 'pointer-events-none'
                }`}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  opacity: isExpanded ? 1 : 0,
                  scale: isExpanded ? 1 : 0.5,
                }}
              >
                <div className='relative group'>
                  {/* Platform button */}
                  <button
                    onClick={() => openUrl(platform.url, platform.key)}
                    className={`relative h-12 w-12 rounded-full ${platform.bg} ${platform.hoverBg} shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 ${platform.ringColor} transform hover:-translate-y-1`}
                    aria-label={
                      currentLanguage === 'te'
                        ? platform.label.te
                        : platform.label.en
                    }
                  >
                    <platform.icon className='h-6 w-6 text-white mx-auto' />

                    {/* Ripple effect */}
                    <div className='absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300' />
                  </button>
                </div>
              </div>
            )
          })}

          {/* Floating particles effect when expanded */}
          {isExpanded && (
            <>
              <div className='absolute -top-4 -left-4 w-3 h-3 bg-purple-400 rounded-full animate-ping' />
              <div className='absolute -bottom-4 -right-4 w-2.5 h-2.5 bg-pink-400 rounded-full animate-ping delay-300' />
              <div className='absolute top-1/2 -left-6 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-500' />
              <div className='absolute top-1/2 -right-6 w-2 h-2 bg-green-400 rounded-full animate-ping delay-700' />
              <div className='absolute -top-2 right-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping delay-1000' />
              <div className='absolute -bottom-2 left-1/2 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping delay-1200' />
            </>
          )}

          {/* Copy success message */}
          {showCopySuccess && (
            <div className='absolute top-full mt-4 left-1/2 -translate-x-1/2 z-60'>
              <div className='px-4 py-2 rounded-xl bg-green-500/95 backdrop-blur-xl border border-green-400/20 shadow-2xl text-white text-sm font-medium animate-in slide-in-from-top-2 duration-300'>
                {currentLanguage === 'te'
                  ? 'URL కాపీ చేయబడింది!'
                  : 'URL copied successfully!'}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
