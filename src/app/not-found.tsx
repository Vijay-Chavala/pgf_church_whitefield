'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 p-4'>
      <div className='text-center space-y-6 max-w-md'>
        <div className='text-8xl font-bold text-blue-600'>404</div>

        <div className='space-y-2'>
          <h1 className='text-2xl font-bold text-gray-900'>Page Not Found</h1>
          <p className='text-gray-600'>
            The page you are looking for does not exist or has been moved.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row gap-3 justify-center'>
          <Link
            href='/'
            className='inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'
          >
            <div className='flex items-center'>
              <svg
                className='w-4 h-4 mr-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg>
              Go Home
            </div>
          </Link>

          <button
            onClick={() => window.history.back()}
            className='inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors'
          >
            <svg
              className='w-4 h-4 mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 19l-7-7m0 0l7-7m-7 7h18'
              />
            </svg>
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}
