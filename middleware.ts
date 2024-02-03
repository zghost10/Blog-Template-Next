import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { user } from './services/user';

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ['pt', 'en'],
 
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'pt',
  localeDetection: false,
  localePrefix: "as-needed"
})

const requireAuth: string[] = [
  "/admin"
]

const MiddleWare = async (req: NextRequest) => {
  const url = req.nextUrl.clone()
  const pathname = url.pathname

  if (requireAuth.some((path) => pathname.startsWith(path))) {
    const token = req.cookies.get("CAROSO_TOKEN")
    const url = new URL(`/login`, req.url)
    url.searchParams.set("callbackUrl", encodeURI(req.url))
    
    //check not logged in
    if(token){
      const body = await user.verify(token.value)

      if(body.success && body.username){
        return NextResponse.redirect(`${new URL(url).href}/admin`)
      }
    }
    
    return NextResponse.redirect(url)
  }

  return intlMiddleware(req)
}

export default MiddleWare

export const config = {
  matcher: ['/((?!api|_next|favicon.ico|images|uploads|videos|gifs|.*\\..*).*)']
}