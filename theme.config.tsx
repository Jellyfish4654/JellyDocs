import React from 'react'
import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'
import { useMDXComponents as getMDXComponents } from './mdx-components'

export default {
  useMDXComponents: getMDXComponents
}

const config: DocsThemeConfig = {
  logo: <span>JellyDocs</span>,
  docsRepositoryBase: 'https://github.com/Jellyfish4654/JellyDocs/tree/main/JellyDocs',
  footer: {
    text: ' ',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – JellyDocs'
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://jellyfishbbhs.com/JellyDocs' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'JellyDocs'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'JellyDocs: The Ultimate Guide to Navigating the Sea of Knowledge'}
        />
      </>
    )
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  toc: {
    float: true,
    backToTop: true,
  },
}

export default config
