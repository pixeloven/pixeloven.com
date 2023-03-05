import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  LabelHTMLAttributes,
  PropsWithChildren,
} from 'react'

import clsx from 'clsx'

const formClasses =
  'block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm'

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>

function Label(props: PropsWithChildren<LabelProps>) {
  const { id, children } = props
  return (
    <label
      htmlFor={id}
      className="mb-3 block text-sm font-medium text-gray-700"
    >
      {children}
    </label>
  )
}

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export function TextField(props: TextFieldProps) {
  const { id, label, type = 'text', className = '' } = props
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  )
}

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
}

export function SelectField(props: SelectFieldProps) {
  const { id, label, className = '' } = props
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select id={id} {...props} className={clsx(formClasses, 'pr-8')} />
    </div>
  )
}
