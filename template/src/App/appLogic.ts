import { kea, actions, reducers, path } from 'kea'
import type { appLogicType } from './appLogicType'

export const appLogic = kea<appLogicType>([
  path(['App', 'appLogic']),
  actions({
    goFaster: true,
  }),
  reducers({
    speed: [1, { goFaster: (state) => (state + 1) % 5 }],
  }),
])
