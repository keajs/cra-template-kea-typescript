import { resetContext } from 'kea'
import { routerPlugin } from 'kea-router'
import { loadersPlugin } from 'kea-loaders'

export function initKea() {
  resetContext({
    plugins: [routerPlugin, loadersPlugin],
  })
}
