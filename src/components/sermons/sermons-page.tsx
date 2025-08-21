'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Calendar,
  User,
  Clock,
  BookOpen,
  Filter,
  Search,
  Grid,
  List,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useLanguageStore } from '@/lib/stores/language-store'
import { getAllSermons, type SermonData } from '@/data/sermons-data'

export function SermonsPage() {
  const { currentLanguage } = useLanguageStore()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSeries, setSelectedSeries] = useState<string>('all')
  const [selectedSpeaker, setSelectedSpeaker] = useState<string>('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const allSermons = getAllSermons()

  const getText = (textObj: { en: string; te: string }) => {
    return textObj[currentLanguage] || textObj.en
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    if (currentLanguage === 'te') {
      return date.toLocaleDateString('te-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    }
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const formatDuration = (minutes?: number) => {
    if (!minutes) return ''
    if (minutes < 60) {
      return `${minutes} ${currentLanguage === 'te' ? 'నిమిషాలు' : 'min'}`
    }
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}m`
  }

  // Get unique series and speakers for filtering
  const uniqueSeries = Array.from(
    new Set(
      allSermons
        .filter(sermon => sermon.series)
        .map(sermon => sermon.series!.en)
    )
  )

  const uniqueSpeakers = Array.from(
    new Set(allSermons.map(sermon => sermon.speaker.en))
  )

  // Filter sermons based on search and filters
  const filteredSermons = allSermons.filter(sermon => {
    const matchesSearch =
      searchTerm === '' ||
      getText(sermon.title).toLowerCase().includes(searchTerm.toLowerCase()) ||
      getText(sermon.description)
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      getText(sermon.speaker).toLowerCase().includes(searchTerm.toLowerCase())

    const matchesSeries =
      selectedSeries === 'all' ||
      (sermon.series && sermon.series.en === selectedSeries)

    const matchesSpeaker =
      selectedSpeaker === 'all' || sermon.speaker.en === selectedSpeaker

    return matchesSearch && matchesSeries && matchesSpeaker
  })

  const pageContent = {
    title: {
      en: 'Our Sermons',
      te: 'మా ప్రబోధలు',
    },
    subtitle: {
      en: "Be inspired by God's Word through powerful messages and teachings",
      te: 'శక్తివంతమైన సందేశాలు మరియు బోధనల ద్వారా దేవుని వాక్యంతో ప్రేరణ పొందండి',
    },
    searchPlaceholder: {
      en: 'Search sermons...',
      te: 'ప్రబోధలను వెతకండి...',
    },
    allSeries: {
      en: 'All Series',
      te: 'అన్ని శ్రేణులు',
    },
    allSpeakers: {
      en: 'All Speakers',
      te: 'అన్ని వక్తలు',
    },
    watchOnYoutube: {
      en: 'Watch on YouTube',
      te: 'YouTube లో చూడండి',
    },
    noResults: {
      en: 'No sermons found matching your criteria.',
      te: 'మీ ప్రమాణాలకు సరిపోలే ప్రబోధలు కనుగొనబడలేదు.',
    },
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100'>
      {/* Header Section */}
      <section className='relative py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden'>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className='relative z-10 container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center max-w-4xl mx-auto'
          >
            <h1 className='text-4xl md:text-6xl font-bold mb-6 leading-tight'>
              {getText(pageContent.title)}
            </h1>
            <p className='text-xl md:text-2xl text-blue-100 leading-relaxed'>
              {getText(pageContent.subtitle)}
            </p>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className='absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl'></div>
        <div className='absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-xl'></div>
      </section>

      {/* Filters and Search */}
      <section className='py-8 bg-white border-b border-gray-200'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col lg:flex-row gap-4 items-center justify-between'>
            {/* Search */}
            <div className='relative flex-1 max-w-md'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
              <Input
                type='text'
                placeholder={getText(pageContent.searchPlaceholder)}
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className='pl-10'
              />
            </div>

            {/* Filters */}
            <div className='flex flex-wrap gap-4 items-center'>
              <Select value={selectedSeries} onValueChange={setSelectedSeries}>
                <SelectTrigger className='w-40'>
                  <SelectValue placeholder={getText(pageContent.allSeries)} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='all'>
                    {getText(pageContent.allSeries)}
                  </SelectItem>
                  {uniqueSeries.map(series => (
                    <SelectItem key={series} value={series}>
                      {series}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedSpeaker}
                onValueChange={setSelectedSpeaker}
              >
                <SelectTrigger className='w-40'>
                  <SelectValue placeholder={getText(pageContent.allSpeakers)} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='all'>
                    {getText(pageContent.allSpeakers)}
                  </SelectItem>
                  {uniqueSpeakers.map(speaker => (
                    <SelectItem key={speaker} value={speaker}>
                      {speaker}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* View Mode Toggle */}
              <div className='flex border rounded-lg p-1 bg-gray-50'>
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size='sm'
                  onClick={() => setViewMode('grid')}
                  className='h-8'
                >
                  <Grid className='w-4 h-4' />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size='sm'
                  onClick={() => setViewMode('list')}
                  className='h-8'
                >
                  <List className='w-4 h-4' />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sermons Grid/List */}
      <section className='py-12 px-4'>
        <div className='container mx-auto max-w-7xl'>
          {filteredSermons.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className='text-center py-16'
            >
              <div className='text-6xl mb-4'>📺</div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                {getText(pageContent.noResults)}
              </h3>
              <Button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedSeries('all')
                  setSelectedSpeaker('all')
                }}
              >
                {currentLanguage === 'te'
                  ? 'ఫిల్టర్లను క్లియర్ చేయండి'
                  : 'Clear Filters'}
              </Button>
            </motion.div>
          ) : (
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                  : 'space-y-6'
              }
            >
              {filteredSermons.map((sermon, index) => (
                <SermonCard
                  key={sermon.id}
                  sermon={sermon}
                  index={index}
                  viewMode={viewMode}
                  currentLanguage={currentLanguage}
                  getText={getText}
                  formatDate={formatDate}
                  formatDuration={formatDuration}
                  watchOnYoutubeText={getText(pageContent.watchOnYoutube)}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

interface SermonCardProps {
  sermon: SermonData
  index: number
  viewMode: 'grid' | 'list'
  currentLanguage: string
  getText: (textObj: { en: string; te: string }) => string
  formatDate: (dateString: string) => string
  formatDuration: (minutes?: number) => string
  watchOnYoutubeText: string
}

function SermonCard({
  sermon,
  index,
  viewMode,
  currentLanguage,
  getText,
  formatDate,
  formatDuration,
  watchOnYoutubeText,
}: SermonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className='group'
    >
      <Card
        className={`h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg overflow-hidden ${
          viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
        }`}
      >
        {/* YouTube Video Embed */}
        <div
          className={`relative bg-gray-900 overflow-hidden ${
            viewMode === 'list' ? 'md:w-96 h-64 md:h-auto' : 'h-64'
          }`}
        >
          <iframe
            src={sermon.youtubeLiveLink}
            title={getText(sermon.title)}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            className='w-full h-full'
            loading='lazy'
          />

          {/* Duration Badge */}
          {sermon.duration && (
            <div className='absolute top-4 right-4'>
              <Badge className='bg-black/70 text-white flex items-center gap-1'>
                <Clock className='w-3 h-3' />
                {formatDuration(sermon.duration)}
              </Badge>
            </div>
          )}

          {/* New Badge */}
          {sermon.isNew && (
            <div className='absolute top-4 left-4'>
              <Badge className='bg-primary text-primary-foreground'>
                {currentLanguage === 'te' ? 'కొత్తది' : 'New'}
              </Badge>
            </div>
          )}

          {/* Series Badge */}
          {sermon.series && (
            <div className='absolute bottom-4 left-4'>
              <Badge
                variant='secondary'
                className='bg-white/90 text-foreground'
              >
                {getText(sermon.series)}
              </Badge>
            </div>
          )}
        </div>

        <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
          <CardHeader className='pb-3'>
            <CardTitle
              className={`font-bold line-clamp-2 mb-3 ${
                viewMode === 'list' ? 'text-xl' : 'text-lg'
              }`}
            >
              {getText(sermon.title)}
            </CardTitle>

            {/* Sermon Meta */}
            <div className='flex flex-wrap items-center gap-4 text-sm text-muted-foreground'>
              <div className='flex items-center gap-1'>
                <User className='w-4 h-4' />
                <span>{getText(sermon.speaker)}</span>
              </div>

              <div className='flex items-center gap-1'>
                <Calendar className='w-4 h-4' />
                <span>{formatDate(sermon.date)}</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className='pt-0'>
            <p
              className={`text-muted-foreground text-sm mb-6 ${
                viewMode === 'list' ? 'line-clamp-2' : 'line-clamp-3'
              }`}
            >
              {getText(sermon.description)}
            </p>

            {/* Action Button */}
            <Button
              size='sm'
              className='w-full'
              onClick={() =>
                window.open(
                  sermon.youtubeLiveLink.replace('/embed/', '/watch?v='),
                  '_blank'
                )
              }
            >
              <BookOpen className='w-4 h-4 mr-2' />
              {watchOnYoutubeText}
            </Button>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  )
}
