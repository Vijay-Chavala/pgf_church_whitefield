'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Heart,
  ExternalLink,
  Calendar,
  Users,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'

import { useLanguageStore } from '@/lib/stores/language-store'
import { churchSettings } from '@/data/church-data'
import { cn } from '@/lib/utils'

interface FooterProps {
  className?: string
}

export default function Footer({ className }: FooterProps) {
  const { currentLanguage } = useLanguageStore()
  const currentYear = new Date().getFullYear()

  const getText = (textObj: { en: string; te: string }) => {
    return textObj[currentLanguage] || textObj.en
  }

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://facebook.com/pgfteluguchurch',
      color: 'hover:text-blue-600',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/pgfteluguchurch',
      color: 'hover:text-pink-600',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      href: 'https://youtube.com/@pgfteluguchurch',
      color: 'hover:text-red-600',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com/pgfteluguchurch',
      color: 'hover:text-blue-400',
    },
  ]

  const quickLinks = [
    {
      label: { en: 'Ministries', te: 'పరిచర్యలు' },
      href: '/ministries',
    },
    {
      label: { en: 'Sermons', te: 'ప్రవచనాలు' },
      href: '/sermons',
    },
    {
      label: { en: 'Gallery', te: 'గ్యాలరీ' },
      href: '/gallery',
    },
  ]

  const ministryLinks = [
    {
      label: {
        en: 'Sunday Service & Fellowship',
        te: 'ఆదివారం సేవ మరియు సహవాసం',
      },
      href: '/ministries/sunday-service',
    },
    {
      label: { en: 'Online Prayer Meeting', te: 'ఆన్‌లైన్ ప్రార్థనా సభ' },
      href: '/ministries/online-prayer',
    },
    {
      label: { en: 'Youth Ministry', te: 'యువజన పరిచర్య' },
      href: '/ministries/youth-ministry',
    },
    {
      label: { en: "Women's Ministry", te: 'మహిళల పరిచర్య' },
      href: '/ministries/womens-ministry',
    },
    {
      label: {
        en: 'Sunday School & Kids Ministry',
        te: 'ఆదివారం పాఠశాల & పిల్లల సేవ',
      },
      href: '/ministries/sunday-school',
    },
  ]

  const serviceSchedule = [
    {
      service: { en: 'Sunday Worship', te: 'ఆదివారం ఆరాధన' },
      time: '1st Service: 9:00 AM - 10:30 AM | 2nd Service: 10:30 AM - 12:30 PM',
      day: { en: '', te: '' },
    },
    /**  {
      service: { en: 'Prayer Meeting', te: 'ప్రార్థనా సభ' },
      time: '7:00 PM - 8:30 PM',
      day: { en: 'Every Friday', te: 'ప్రతి శుక్రవారం' },
    },
    {
      service: { en: 'Bible Study', te: 'బైబిల్ అధ్యయనం' },
      time: '7:00 PM - 8:00 PM',
      day: { en: 'Every Wednesday', te: 'ప్రతి బుధవారం' },
    }, **/
  ]

  return (
    <footer
      className={cn('bg-background border-t border-border/40', className)}
    >
      {/* Main Footer Content */}
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Church Info Section */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-3'>
              <div className='relative w-10 h-10 rounded-lg overflow-hidden shadow-lg'>
                <Image
                  src='/PGFLOGO.png'
                  alt='Peniel Gospel Fellowship Logo'
                  fill
                  className='object-contain'
                  sizes='40px'
                />
              </div>
              <div>
                <h3 className='text-lg font-bold text-foreground'>
                  {getText(churchSettings.churchName)}
                </h3>
                <p className='text-xs text-muted-foreground'>
                  {currentLanguage === 'te'
                    ? 'పెనీయేల్ గాస్పెల్ ఫెలోషిప్'
                    : 'Peniel Gospel Fellowship'}
                </p>
              </div>
            </div>

            <p className='text-sm text-muted-foreground leading-relaxed'>
              {currentLanguage === 'te'
                ? 'విశ్వాసం, ఆశ మరియు ప్రేమతో కలిసి ఆరాధించే విశ్వాసుల సజీవ సమాజం. అందరికీ స్వాగతం!'
                : 'A vibrant community of believers worshipping together in faith, hope, and love. Everyone is welcome!'}
            </p>

            {/* Contact Info */}
            <div className='space-y-2'>
              <div className='flex items-start space-x-2 text-sm'>
                <MapPin className='w-4 h-4 text-primary mt-0.5 flex-shrink-0' />
                <div>
                  <p className='text-foreground font-medium'>
                    {currentLanguage === 'te' ? 'చిరునామా' : 'Address'}
                  </p>
                  <p className='text-muted-foreground'>
                    Whitefield, Bangalore, Karnataka 560066
                  </p>
                </div>
              </div>

              <div className='flex items-center space-x-2 text-sm'>
                <Phone className='w-4 h-4 text-primary flex-shrink-0' />
                <div>
                  <p className='text-foreground font-medium'>+91 98765 43210</p>
                </div>
              </div>

              <div className='flex items-center space-x-2 text-sm'>
                <Mail className='w-4 h-4 text-primary flex-shrink-0' />
                <div>
                  <p className='text-foreground font-medium'>
                    info@pgfteluguchurch.org
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-foreground'>
              {currentLanguage === 'te' ? 'త్వరిత లింకులు' : 'Quick Links'}
            </h3>
            <ul className='space-y-2'>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className='text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center space-x-1 group'
                  >
                    <span>{getText(link.label)}</span>
                    <ExternalLink className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity' />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-foreground'>
              {currentLanguage === 'te' ? 'పరిచర్యలు' : 'Ministries'}
            </h3>
            <ul className='space-y-2'>
              {ministryLinks.map((ministry, index) => (
                <li key={index}>
                  <Link
                    href={ministry.href}
                    className='text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center space-x-1 group'
                  >
                    <Users className='w-3 h-3' />
                    <span>{getText(ministry.label)}</span>
                    <ExternalLink className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity' />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Schedule */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-foreground'>
              {currentLanguage === 'te' ? 'సేవా వేళలు' : 'Service Times'}
            </h3>
            <div className='space-y-3'>
              {serviceSchedule.map((schedule, index) => (
                <div
                  key={index}
                  className='bg-muted/50 rounded-lg p-3 space-y-1'
                >
                  <div className='flex items-center space-x-2'>
                    <Calendar className='w-4 h-4 text-primary' />
                    <p className='text-sm font-medium text-foreground'>
                      {getText(schedule.service)}
                    </p>
                  </div>
                  <div className='flex items-center space-x-2 text-xs text-muted-foreground'>
                    <Clock className='w-3 h-3' />
                    <span>{schedule.time}</span>
                  </div>
                  {schedule.day && (
                    <p className='text-xs text-muted-foreground'>
                      {getText(schedule.day)}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Footer */}
      <div className='container mx-auto px-4 py-6'>
        <div className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>
          {/* Copyright */}
          <div className='text-center md:text-left'>
            <p className='text-sm text-muted-foreground'>
              © {currentYear} {getText(churchSettings.churchName)}.
              {currentLanguage === 'te'
                ? ' అన్ని హక్కులు రక్షించబడ్డాయి.'
                : ' All rights reserved.'}
            </p>
          </div>

          {/* Social Links */}
          <div className='flex items-center space-x-1'>
            <span className='text-sm text-muted-foreground mr-2'>
              {currentLanguage === 'te'
                ? 'మాతో కనెక్ట్ అవ్వండి:'
                : 'Connect with us:'}
            </span>
            {socialLinks.map(social => {
              const Icon = social.icon
              return (
                <Button
                  key={social.name}
                  variant='ghost'
                  size='sm'
                  asChild
                  className={cn(
                    'w-8 h-8 p-0 transition-all duration-200 hover:scale-110',
                    social.color
                  )}
                >
                  <a
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <Icon className='w-4 h-4' />
                  </a>
                </Button>
              )
            })}
          </div>
        </div>

        {/* Additional Footer Info */}
        <div className='mt-4 pt-4 border-t border-border/20'>
          <div className='flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 text-xs text-muted-foreground'>
            <div className='flex items-center space-x-4'>
              <Link
                href='/privacy'
                className='hover:text-foreground transition-colors'
              >
                {currentLanguage === 'te' ? 'గోప్యతా విధానం' : 'Privacy Policy'}
              </Link>
              <Separator orientation='vertical' className='h-3' />
              <Link
                href='/terms'
                className='hover:text-foreground transition-colors'
              >
                {currentLanguage === 'te'
                  ? 'వినియోగ నిబంధనలు'
                  : 'Terms of Service'}
              </Link>
              <Separator orientation='vertical' className='h-3' />
              <Link
                href='/sitemap'
                className='hover:text-foreground transition-colors'
              >
                {currentLanguage === 'te' ? 'సైట్ మ్యాప్' : 'Sitemap'}
              </Link>
            </div>

            <div className='flex items-center space-x-2'>
              <Badge variant='outline' className='text-xs'>
                {currentLanguage === 'te'
                  ? 'వెబ్‌సైట్ వెర్షన్ 2.0'
                  : 'Website v2.0'}
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
