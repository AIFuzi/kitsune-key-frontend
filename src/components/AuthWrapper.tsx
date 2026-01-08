import Link from 'next/link'
import { PropsWithChildren } from 'react'

interface AuthWrapperProps {
  heading: string
  switchFormText: string
  switchFormLink: string
  switchFormLinkLabel: string
}

export default function AuthWrapper({
  children,
  switchFormText,
  heading,
  switchFormLink,
  switchFormLinkLabel,
}: PropsWithChildren<AuthWrapperProps>) {
  return (
    <div className="flex h-full w-full -translate-y-20 flex-col items-center justify-center">
      <div className="w-2/5 space-y-6 rounded-lg border p-5 shadow-2xl">
        <h1 className="mt-3 text-center text-4xl font-bold">{heading}</h1>
        {children}
        <div className="flex items-center justify-center gap-x-1">
          <span>{switchFormText}</span>
          <Link
            className="text-primary font-bold underline"
            href={`${switchFormLink}`}
          >
            {switchFormLinkLabel}
          </Link>
        </div>
      </div>
    </div>
  )
}
