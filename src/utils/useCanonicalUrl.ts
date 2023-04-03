import { useRouter } from 'next/router'

export const useCanonicalUrl = () => {
  const router = useRouter()
  const canonicalUrl = (
    `https://www.sebibasti.dev` + (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0]
  return canonicalUrl
}
// source: https://rishimohan.me/blog/nextjs-canonical-tag
