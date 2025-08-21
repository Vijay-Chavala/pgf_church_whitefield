'use client'

import { useMemo, useCallback } from 'react'
import { useLanguageStore } from '@/lib/stores/language-store'
import { churchSettings } from '@/data/church-data'
import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react'

type PlatformKey = 'facebook' | 'instagram' | 'youtube' | 'whatsapp'

interface PlatformConfig {
  key: PlatformKey
  label: { en: string; te: string }
  url: string
  icon: React.ComponentType<{ className?: string }>
  bg: string
}

function getWhatsappUrl(raw?: string) {
  if (!raw) return ''
  const digits = raw.replace(/[^0-9]/g, '')
  return digits ? `https://wa.me/${digits}` : ''
}

export function SocialRadialMenu() {
  const { currentLanguage } = useLanguageStore()

  const platforms = useMemo<PlatformConfig[]>(() => {
    const list: PlatformConfig[] = []
    const entries: Array<
      [
        PlatformKey,
        string | undefined,
        PlatformConfig['icon'],
        string,
        { en: string; te: string },
      ]
    > = [
      [
        'facebook',
        churchSettings.socialMedia?.facebook,
        Facebook,
        'bg-blue-600 hover:bg-blue-700',
        { en: 'Facebook', te: 'ఫేస్‌బుక్' },
      ],
      [
        'instagram',
        churchSettings.socialMedia?.instagram,
        Instagram,
        'bg-gradient-to-tr from-pink-500 via-purple-500 to-orange-500 hover:from-pink-600 hover:via-purple-600 hover:to-orange-600',
        { en: 'Instagram', te: 'ఇన్‌స్టాగ్రామ్' },
      ],
      [
        'youtube',
        churchSettings.socialMedia?.youtube,
        Youtube,
        'bg-red-600 hover:bg-red-700',
        { en: 'YouTube', te: 'యూట్యూబ్' },
      ],
      [
        'whatsapp',
        getWhatsappUrl(churchSettings.socialMedia?.whatsapp),
        MessageCircle,
        'bg-green-600 hover:bg-green-700',
        { en: 'WhatsApp', te: 'వాట్సాప్' },
      ],
    ]

    entries.forEach(([key, url, icon, bg, label]) => {
      if (url && url.trim() !== '') {
        list.push({ key, url, icon, bg, label })
      }
    })
    return list
  }, [])

  const openUrl = useCallback((url: string) => {
    if (!url) return
    window.open(url, '_blank', 'noopener,noreferrer')
  }, [])

  // Static vertical stack configuration
  const itemGap = 12 // vertical spacing between items

  const total = platforms.length
  if (total === 0) return null

  const containerPadding = 8
  const buttonSize = 48
  const containerHeight =
    total * buttonSize + (total - 1) * itemGap + containerPadding * 2

  return (
    <div className='fixed right-5 top-1/2 -translate-y-1/2 z-50'>
      <div className='relative' style={{ width: 64 }}>
        {/* Glass container behind icons */}
        <div
          style={{ height: `${containerHeight}px` }}
          className='absolute top-1/2 right-0 -translate-y-1/2 w-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl'
        />

        {/* Social icons */}
        {platforms.map((pf, i) => {
          const y =
            -containerHeight / 2 +
            containerPadding +
            buttonSize / 2 +
            i * (buttonSize + itemGap)
          const Icon = pf.icon

          return (
            <div
              key={pf.key}
              className='absolute top-1/2 right-2 -translate-y-1/2 z-10'
              style={{ transform: `translateY(${y}px)` }}
            >
              <div className='relative group'>
                <button
                  onClick={() => openUrl(pf.url)}
                  aria-label={
                    currentLanguage === 'te' ? pf.label.te : pf.label.en
                  }
                  className={`h-12 w-12 rounded-full text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-white/60 ${pf.bg}`}
                >
                  <Icon className='h-6 w-6 mx-auto' />
                </button>

                {/* Hover details card with link, positioned to the left of the icon */}
                <div className='absolute right-full mr-3 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-150'>
                  <div className='px-3 py-2 rounded-xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border border-black/5 shadow-lg min-w-[140px]'>
                    <div className='text-xs font-semibold text-gray-900 dark:text-white mb-1'>
                      {currentLanguage === 'te' ? pf.label.te : pf.label.en}
                    </div>
                    <a
                      href={pf.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-[11px] font-medium text-blue-600 hover:underline'
                    >
                      {currentLanguage === 'te'
                        ? 'లింక్ ఓపెన్ చేయండి'
                        : 'Open link'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
