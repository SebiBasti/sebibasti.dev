Ever since I finished my bootcamp at [Le Wagon](https://www.lewagon.com) I wanted to start my own blog.
In the beginning I aspired to write everything myself: text editor, database, frontend, etc...
That's how my [blog-api](https://github.com/SebiBasti/blog-api) project came about.

&nbsp;

This project taught me a lot (testing, for example), but as is often the case with side projects,
it got a bit out of hand and I didn't finish it.

&nbsp;

Since then, the idea has popped up in my head every now and then, but I didn't want to include a heavy blog framework.
It should be simple, give me the possibility to write an article at any time with little effort.

&nbsp;

This has now resulted in the following structure:

&nbsp;

## Laoding of blogpost markdown files

I have the following structure in my `Next` project:

```text
public
└── blogposts
    ├── 27_04_2023_16_52_Implementing_react-markdown.md
    ├── 27_04_2023_17_40_Another_blog_post.md
```

The files are named according to the following scheme:  
`DD_MM_YYYY_HH_MM_`
`Title_of_the_blog_post.md`

&nbsp;

To automatically load all the `.md` files, I use the following function:

```typescript
export const importAll = (
  requireContext: __WebpackModuleApi.RequireContext
) => {
  return requireContext
    .keys()
    .filter((key) => key.match(/\.\//))
    .map((element) => {
      const el = element.replace(/\.|\/|md/g, '').split('_')
      return {
        date: `${el[0]}.${el[1]}.${el[2]} -\u00A0${el[3]}:${el[4]}`,
        title: el.slice(5).join(' '),
        content: requireContext(element)
      }
    })
}
```

This function returns an array of objects with the following structure:

```typescript
;[
  {
    date: '27.04.2023 - 16:52',
    title: 'Implementing react-markdown',
    content: '...'
  }
  // ...
]
```

In `Blog.tsx` I can then call the following:

```typescript
const blogPosts = importAll(require.context('~/blogposts', false, /\.md$/))
```

&nbsp;

## Rendering the markdown files

To render the markdown files I use the [react-markdown](https://github.com/remarkjs/react-markdown) package. After reading their documentation,
the documentation of [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter) and many stackoverflow posts, I came up with the following solution:

```tsx
import dynamic from 'next/dynamic'
import { JetBrains_Mono } from 'next/font/google'

import { importAll } from '@/utils'
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

const blogPosts = importAll(require.context('~/blogposts', false, /\.md$/))

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
              className={blogStyles.content}
              components={{
                code({ node, inline, className, children, style, ...props }) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={materialDark}
                      className={jetbrainsMono.variable}
                      showLineNumbers={true}
                      lineNumberStyle={{
                        minWidth: '3.25em'
                      }}
                      customStyle={{
                        background: 'var(--medium-black)',
                        boxShadow: '0 0 1px var(--grey)',
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
                    <code {...props} className={blogStyles.code}>
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
```

This still needs some refactoring, but it works for now.

&nbsp;

Let the blogging begin!
