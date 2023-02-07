import NextLink from 'next/link'
import Router from 'next/router'

export default function Link({ children, ...props }) {
  const handleTransition = (e) => {
    document.startViewTransition(() => {
      Router.push(e.target.href)
    })
  };

  return (
    <NextLink {...props} onClick={handleTransition}>{children}</NextLink>
  )
}