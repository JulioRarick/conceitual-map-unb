import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'

interface DialogCardProps {
  title: string
  description: string
  buttonTitle: string
}

export function DialogCard({
  title,
  description,
  buttonTitle,
}: DialogCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="m-2">
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
