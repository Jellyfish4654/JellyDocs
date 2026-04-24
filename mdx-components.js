import { withGitHubAlert, Callout, Blockquote } from 'nextra/components'

const AlertBlockquote = withGitHubAlert(
  ({ type, children }) => <Callout type={type}>{children}</Callout>,
  Blockquote
)

export function useMDXComponents(components) {
  return {
    ...components,
    blockquote: AlertBlockquote
  }
}
