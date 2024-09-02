import { MotionProps } from 'framer-motion'
import { ComponentProps, ReactNode } from 'react'

import { DataContentTypes } from './data-types'

export interface CardEducationConceptsProps {
  id?: string
  title: string
  icon: ReactNode
  children?: ReactNode
}
export interface AnimatedDivProps extends MotionProps {
  children: ReactNode
  className?: string
}
export interface CardPrimaryConceptProps {
  title: string
  description: string
  goingTo: string
  linkLabel?: string
  author?: string
}
export interface DialogCardProps {
  title: string
  description: string
  buttonTitle: string
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
}
export interface DownloadFilePdfButtonProps extends ComponentProps<'a'> {
  downloadUrl: string
  fileName: string
}
export interface PageCardCarouselProps {
  dataContent: Array<DataContentTypes>
  className?: string
  styleTitle?: string
  styleParagraph?: string
}
export interface RedirectButtonProps {
  redirectTo: string
  textPage: string
  className?: string
}
