import Link from 'next/link'
import type { LinkProps } from 'next/link'

import type { PropsWithChildren } from 'react'

export function NavLink(props: PropsWithChildren<LinkProps>) {
  const { href, children } = props
  return (
    <Link
      href={href}
      className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
    >
      {children}
    </Link>
  )
}
