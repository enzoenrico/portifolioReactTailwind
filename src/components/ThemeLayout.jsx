import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'

const sunIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='black'
    className='h-6 w-6'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773-1.591-1.591M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0z'
    />
  </svg>
)

const moonIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='white'
    className='h-6 w-6'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998z'
    />
  </svg>
)

const docIconDark = (
  <svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 384 512' className='h-6 w-6'>
    <path d='M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z' />
  </svg>
)

const docIconLight = (
  <svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 384 512' className='h-6 w-6' fill='white'>
    <path d='M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z' />
  </svg>
)

const ThemeLayout = () => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(prefersDark ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    if (!theme) return
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className='bg-white text-stone-900 transition-colors duration-300 dark:bg-stone-900 dark:text-white min-h-screen font-inter'>
      <button
        type='button'
        onClick={handleThemeSwitch}
        className='fixed right-10 top-4 z-50 rounded-md bg-pink-500 p-2 text-lg transition duration-300 hover:bg-pink-600 dark:bg-orange-300 dark:hover:bg-orange-400'
        aria-label='Toggle theme'
      >
        {theme === 'dark' ? sunIcon : moonIcon}
      </button>

      <a href='assets/cv.pdf' target='_blank' rel='noreferrer'>
        <button
          type='button'
          className='fixed right-10 top-20 z-50 rounded-md bg-pink-500 p-2 text-lg transition duration-300 hover:bg-pink-600 dark:bg-orange-300 dark:hover:bg-orange-400'
          aria-label='Download CV'
        >
          {theme === 'dark' ? docIconDark : docIconLight}
        </button>
      </a>

      <div className='mx-auto flex min-h-screen w-full flex-col'>
        <Outlet />
      </div>
    </div>
  )
}

export default ThemeLayout
