'use client'

import dynamic from 'next/dynamic'

interface RoomCalendarProps {}

const Calendar = dynamic(
  () => import('@/components/ui/calendar').then(m => m.Calendar),
  { ssr: false },
)
export default function RoomCalendar({}: RoomCalendarProps) {
  return (
    <div className="flex flex-col space-y-3">
      <div>
        <h1 className="text-2xl font-semibold">Select check-in date</h1>
        <h3 className="text-muted-foreground">
          Add your travel dates for exact pricing
        </h3>
      </div>
      <Calendar
        mode="range"
        numberOfMonths={2}
      />
    </div>
  )
}
