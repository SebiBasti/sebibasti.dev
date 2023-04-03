import {useRouter} from 'next/router'

export const useCanonicalUrl = (url: string) => {
  const router = useRouter()
  return (
    url + (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0]
}
// source: https://rishimohan.me/blog/nextjs-canonical-tag
