import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'

interface RoomDescriptionProps {
  description: string
}

export default function RoomDescription({ description }: RoomDescriptionProps) {
  return (
    <div className="space-y-4">
      <div className="line-clamp-3 whitespace-pre-line">{description}</div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className={`${description.length < 150 ? 'hidden' : 'block'}`}
            variant="outline"
          >
            Show more
          </Button>
        </DialogTrigger>
        <DialogContent className="flex h-[70vh] max-h-[70vh] flex-col overflow-hidden">
          <DialogHeader>
            <DialogTitle>Desc</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-full flex-1">
            <div className="p-4 whitespace-pre-line">{description}</div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  )
}
