import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { App } from './App'
import { metaFor, routeMeta, notFoundMeta, type RouteMeta } from './content/routes'
import { SITE_URL } from './content/site'

export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  )
}

export { metaFor, routeMeta, notFoundMeta, SITE_URL }
export type { RouteMeta }
