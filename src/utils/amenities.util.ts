import {
  AlarmSmoke,
  ArrowDownUp,
  BookKey,
  Cctv,
  CircleQuestionMark,
  Helicopter,
  LucideIcon,
  Snowflake,
  SoapDispenserDroplet,
  TvIcon,
  WashingMachine,
  Wifi,
} from 'lucide-react'

export function getIconByAmenitiesType(amenitiesType: string): LucideIcon {
  switch (amenitiesType) {
    case 'wifi':
      return Wifi
    case 'elevator':
      return ArrowDownUp
    case 'code_panel':
      return BookKey
    case 'air_conditioning':
      return Snowflake
    case 'tv':
      return TvIcon
    case 'cctv':
      return Cctv
    case 'smoke_alarm':
      return AlarmSmoke
    case 'washing':
      return WashingMachine
    case 'shampoo':
      return SoapDispenserDroplet
    case 'helicopter':
      return Helicopter
    default:
      return CircleQuestionMark
  }
}
