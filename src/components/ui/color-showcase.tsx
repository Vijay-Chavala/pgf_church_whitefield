'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useThemeStore } from '@/lib/stores/theme-store'
import { Palette, Sun, Moon, Monitor } from 'lucide-react'

export function ColorShowcase() {
  const { theme, toggleTheme } = useThemeStore()

  const colorSamples = [
    {
      name: 'Primary (Forest Green)',
      className: 'bg-primary text-primary-foreground',
      hex: '#598234',
      description: 'Main brand color for buttons and highlights',
    },
    {
      name: 'Secondary (Lime Green)',
      className: 'bg-secondary text-secondary-foreground',
      hex: '#aebd38',
      description: 'Accent color for secondary elements',
    },
    {
      name: 'Slate Blue (Dark)',
      className: 'bg-slate-blue text-white',
      hex: '#364456',
      description: 'Dark blue-gray for text and dark elements',
    },
    {
      name: 'Light Blue',
      className: 'bg-light-blue text-slate-blue',
      hex: '#c8d8ea',
      description: 'Light blue-gray for backgrounds and muted elements',
    },
    {
      name: 'Muted Background',
      className: 'bg-muted text-muted-foreground border border-border',
      hex: 'Various',
      description: 'Muted colors for subtle backgrounds',
    },
  ]

  const gradientSamples = [
    {
      name: 'Primary Gradient',
      className: 'gradient-primary text-white',
      description: 'Forest Green to Lime Green',
    },
    {
      name: 'Secondary Gradient',
      className: 'gradient-secondary text-slate-blue',
      description: 'Medium Blue to Light Blue',
    },
    {
      name: 'Dark Gradient',
      className: 'gradient-dark text-white',
      description: 'Dark Slate to Medium Blue',
    },
  ]

  return (
    <div className='max-w-4xl mx-auto p-6 space-y-8'>
      {/* Header */}
      <div className='text-center space-y-4'>
        <div className='flex items-center justify-center gap-2'>
          <Palette className='h-8 w-8 text-primary' />
          <h1 className='text-3xl font-bold'>New Color Scheme</h1>
        </div>
        <p className='text-muted-foreground'>
          Fresh, modern colors designed for excellent readability and beautiful
          dark mode
        </p>

        {/* Theme Toggle */}
        <div className='flex items-center justify-center gap-2'>
          <Button
            variant='outline'
            size='sm'
            onClick={toggleTheme}
            className='flex items-center gap-2'
          >
            {theme === 'light' && <Sun className='h-4 w-4' />}
            {theme === 'dark' && <Moon className='h-4 w-4' />}
            {theme === 'system' && <Monitor className='h-4 w-4' />}
            {theme.charAt(0).toUpperCase() + theme.slice(1)} Mode
          </Button>
        </div>
      </div>

      {/* Color Palette */}
      <Card>
        <CardHeader>
          <CardTitle>Color Palette</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {colorSamples.map((color, index) => (
              <div key={index} className='space-y-2'>
                <div
                  className={`${color.className} p-6 rounded-lg text-center font-medium`}
                >
                  {color.name}
                </div>
                <div className='text-sm'>
                  <div className='font-mono text-xs text-muted-foreground'>
                    {color.hex}
                  </div>
                  <div className='text-muted-foreground'>
                    {color.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Gradient Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Gradient Examples</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {gradientSamples.map((gradient, index) => (
              <div key={index} className='space-y-2'>
                <div
                  className={`${gradient.className} p-8 rounded-lg text-center font-medium`}
                >
                  {gradient.name}
                </div>
                <div className='text-sm text-muted-foreground text-center'>
                  {gradient.description}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* UI Components Preview */}
      <Card>
        <CardHeader>
          <CardTitle>UI Components Preview</CardTitle>
        </CardHeader>
        <CardContent className='space-y-6'>
          {/* Buttons */}
          <div className='space-y-3'>
            <h3 className='text-lg font-semibold'>Buttons</h3>
            <div className='flex flex-wrap gap-3'>
              <Button>Primary Button</Button>
              <Button variant='secondary'>Secondary Button</Button>
              <Button variant='outline'>Outline Button</Button>
              <Button variant='ghost'>Ghost Button</Button>
              <Button variant='destructive'>Destructive Button</Button>
            </div>
          </div>

          {/* Badges */}
          <div className='space-y-3'>
            <h3 className='text-lg font-semibold'>Badges</h3>
            <div className='flex flex-wrap gap-2'>
              <Badge>Default Badge</Badge>
              <Badge variant='secondary'>Secondary Badge</Badge>
              <Badge variant='outline'>Outline Badge</Badge>
              <Badge variant='destructive'>Destructive Badge</Badge>
            </div>
          </div>

          {/* Cards */}
          <div className='space-y-3'>
            <h3 className='text-lg font-semibold'>Cards</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <Card>
                <CardHeader>
                  <CardTitle>Sample Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground'>
                    This is how cards look with the new color scheme. Notice the
                    subtle borders and shadows.
                  </p>
                </CardContent>
              </Card>
              <Card className='border-primary/20 bg-primary/5'>
                <CardHeader>
                  <CardTitle className='text-primary'>
                    Highlighted Card
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground'>
                    Cards can be highlighted with the primary color for
                    emphasis.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Typography & Text Colors */}
      <Card>
        <CardHeader>
          <CardTitle>Typography</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='space-y-2'>
            <h1 className='text-4xl font-bold'>Heading 1</h1>
            <h2 className='text-3xl font-semibold'>Heading 2</h2>
            <h3 className='text-2xl font-medium'>Heading 3</h3>
            <h4 className='text-xl'>Heading 4</h4>
          </div>
          <div className='space-y-2'>
            <p className='text-foreground'>
              This is regular body text with excellent readability.
            </p>
            <p className='text-muted-foreground'>
              This is muted text for less important information.
            </p>
            <p className='text-primary'>
              This is primary colored text for emphasis.
            </p>
            <p className='text-secondary'>
              This is secondary colored text for accents.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
