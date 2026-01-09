import { Flag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'

interface RoomSelectDateCardProps {}

export default function RoomSelectDateCard({}: RoomSelectDateCardProps) {
  return (
    <div className="sticky top-30 flex w-1/3 flex-col items-center justify-center space-y-3">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold uppercase">
            Select dates
          </CardTitle>
          <CardDescription>select dates for see prices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex flex-col rounded-lg border">
              <div className="flex">
                <Input
                  type="date"
                  className="border-none"
                />
                <Input
                  type="date"
                  className="border-none"
                />
              </div>
              <Input
                type="number"
                placeholder="Guests count"
                min={1}
                max={999}
                className="border-none"
              />
            </div>
            <Button className="w-full">Book now</Button>
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground flex cursor-pointer items-center gap-x-2 font-semibold">
        <Flag
          size={16}
          className="fill-muted-foreground"
        />
        <h3 className="text-sm underline">Report this listing</h3>
      </div>
    </div>
  )
}
