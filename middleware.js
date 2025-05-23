import { NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/
const SUPPORTED_LOCALES = ['en', 'fr', 'de', 'it' , 'es', 'vi', 'tw' ]
const DEFAULT_LOCALE = 'en'

export function middleware(req) {
  const { pathname, search, locale } = req.nextUrl
// console.log(locale);



  // Skip static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/api/') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return
  }

  // If locale is 'default', determine what to redirect to
  if (locale === 'default') {
    // Try from cookie
    let detectedLocale = req.cookies.get('NEXT_LOCALE')?.value
// console.log(detectedLocale);

    // If no cookie, use Accept-Language header
    if (!detectedLocale) {
      const acceptLang = req.headers.get('accept-language') || ''
      
      const browserLang = acceptLang.split(',')[0].split('-')[0] // 'en-US' → 'en'



      if (SUPPORTED_LOCALES.includes(browserLang)) {
        detectedLocale = browserLang
      } else {
        detectedLocale = DEFAULT_LOCALE
      }
    }

    const redirectUrl = new URL(`/${detectedLocale}${pathname}${search}`, req.url)
    return NextResponse.redirect(redirectUrl)
  }

  return NextResponse.next()
}
