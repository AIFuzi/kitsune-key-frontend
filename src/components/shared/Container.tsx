import { cn } from '@/utils'
import { PropsWithChildren } from 'react'

interface ContainerProps {
  className?: string
}

export default function Container({
  children,
  className,
}: PropsWithChildren<ContainerProps>) {
  return <div className={cn('mr-20 ml-20', className)}>{children}</div>
}
