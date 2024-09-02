import { DialogCardProps } from '@/@types/components-types'

import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'

export function DialogCard({
  title,
  description,
  buttonTitle,
  variant = 'outline',
}: DialogCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant} className="m-2">
          {buttonTitle}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl">{title}</DialogTitle>
          <DialogDescription className="text-justify">
            {description}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
