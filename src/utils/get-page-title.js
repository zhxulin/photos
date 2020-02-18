import defaultSettings from '@/settings'

const title = defaultSettings.title || '义乌好运'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
