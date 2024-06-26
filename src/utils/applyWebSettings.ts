import { WebSettings } from '../models/WebSettings.model'

export function applyWebSettings(settings: WebSettings) {
  const root = document.documentElement

  if (settings.primaryColour) {
    root.style.setProperty('--primary-color', settings.primaryColour)
  }

  if (settings.primaryColourHover) {
    root.style.setProperty('--primary-color-hover', settings.primaryColourHover)
  }

  if (settings.navBackgroundColour) {
    root.style.setProperty('--nav-bg-color', settings.navBackgroundColour)
  }
}
