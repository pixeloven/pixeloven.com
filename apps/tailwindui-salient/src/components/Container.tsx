import clsx from 'clsx'

import type { PropsWithChildren, HTMLAttributes } from 'react'

type ButtonProps = HTMLAttributes<HTMLElement>;

export function Container(props: PropsWithChildren<ButtonProps>) {
  const {
    className,
  } = props;
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  )
}
