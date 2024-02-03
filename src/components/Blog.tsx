import dynamic from 'next/dynamic'
import { JetBrains_Mono } from 'next/font/google'

import { MouseEvent } from 'react'

import { importAll } from '@/utils'
import cn from 'classnames'
import Markdown from 'react-markdown'
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import remarkGfm from 'remark-gfm'

import blogStyles from '@/styles/blog.module.scss'

const SyntaxHighlighter = dynamic(() =>
  import('react-syntax-highlighter').then((mod) => mod.Prism)
)

const jetbrainsMono = JetBrains_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--jetbrains-mono'
})

const blogPosts = importAll(
  require.context('~/blogposts', false, /\.md$/)
).reverse()

export default function Blog() {
  return (
    <main className={blogStyles.container}>
      {blogPosts.map((post, index) => {
        return (
          <article key={index}>
            <span className={blogStyles.header}>
              <h2>{post.title}</h2>
              <small>{post.date}</small>
            </span>
            <Markdown
              remarkPlugins={[remarkGfm]}
              // linkTarget="_blank"
              className={blogStyles.content}
              components={{
                code({ node, className, children, style, ...props }) {
                  const match = /language-(\w+)/.exec(className || '')
                  const lines = String(children).split('\n').length
                  return match ? (
                    <SyntaxHighlighter
                      style={materialDark}
                      className={cn(jetbrainsMono.variable, blogStyles.code, {
                        [blogStyles['code-wrapped']]: lines > 15
                      })}
                      onClick={(event: MouseEvent) => {
                        if (event.target instanceof HTMLElement) {
                          event.target.classList.remove(
                            blogStyles['code-wrapped']
                          )
                        }
                      }}
                      showLineNumbers={true}
                      lineNumberStyle={{
                        minWidth: '3.25em'
                      }}
                      language={match[1]}
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code {...props} className={blogStyles['code-inline']}>
                      {children}
                    </code>
                  )
                }
              }}
            >
              {`${post.content}`}
            </Markdown>
          </article>
        )
      })}
    </main>
  )
}
