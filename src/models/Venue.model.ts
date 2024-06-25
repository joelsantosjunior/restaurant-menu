import { WebSettings } from './WebSettings.model'

export interface Venue {
  id: number
  name: string
  internalName: string
  description: string | null
  liveFlag: number
  demoFlag: number
  address1: string
  address2: string
  address3: string | null
  city: string
  county: string
  postcode: string
  country: string
  timezoneOffset: string
  locale: string
  timeZone: string
  webSettings: WebSettings
  ccy: string
  ccySymbol: string
  currency: string
}
