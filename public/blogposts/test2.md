Second Blog post

```tsx
import { JetBrains_Mono } from 'next/font/google'

import { importAll } from '@/utils'
import Markdown from 'react-markdown'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import remarkGfm from 'remark-gfm'

import blogStyles from '@/styles/blog.module.scss'

const jetbrainsMono = JetBrains_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--jetbrains-mono'
})

const blogPosts = importAll<String>(
  require.context('~/blogposts', false, /\.md$/)
)

export default function Blog() {
  return (
    <main className={blogStyles.container}>
      {blogPosts.map((post, index) => {
        return (
          <article key={index}>
            <Markdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ node, inline, className, children, style, ...props }) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={materialDark}
                      className={jetbrainsMono.variable}
                      showLineNumbers={true}
                      wrapLongLines={true}
                      lineNumberStyle={{
                        minWidth: '3.25em'
                      }}
                      customStyle={{
                        background: 'var(--medium-black)',
                        boxShadow: '0 0 1px var(--grey);',
                        padding: '0.25rem 0'
                      }}
                      codeTagProps={{
                        style: {
                          background: 'var(--medium-black)',
                          fontFamily: 'var(--jetbrains-mono)'
                        }
                      }}
                      language={match[1]}
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className}>{children}</code>
                  )
                }
              }}
            >
              {`${post}`}
            </Markdown>
          </article>
        )
      })}
    </main>
  )
}
```
