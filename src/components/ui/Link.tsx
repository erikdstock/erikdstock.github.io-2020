/** @jsxImportSource theme-ui */
import NextLink from "next/link"

interface Props {
  href: string
  external?: boolean
}

/**
 * A general link for the
 */
export const Link: React.FC<Props> = ({ href, external = false, children }) => {
  return external ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      sx={{ variant: "styles.a" }}
    >
      {children}
    </a>
  ) : (
    <NextLink passHref href={href}>
      <a sx={{ variant: "styles.a" }}>{children}</a>
    </NextLink>
  )
}
