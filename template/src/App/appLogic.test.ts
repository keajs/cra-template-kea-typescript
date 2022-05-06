import { expectLogic } from 'kea-test-utils'
import { appLogic } from './appLogic'
import { initKea } from '../initKea'

describe('appLogic', () => {
  beforeEach(() => {
    initKea()
    appLogic.mount()
  })

  test('defaults to 1', () => {
    expectLogic(appLogic).toMatchValues({ speed: 1 })
  })

  test('can go faster, resets at 4 units of pure speed', async () => {
    expectLogic(appLogic, () => {
      appLogic.actions.goFaster()
      appLogic.actions.goFaster()
      appLogic.actions.goFaster()
    }).toMatchValues({ speed: 4 })

    expectLogic(appLogic, () => {
      appLogic.actions.goFaster()
    }).toMatchValues({ speed: 0 })

    expectLogic(appLogic, () => {
      appLogic.actions.goFaster()
    }).toMatchValues({ speed: 1 })
  })
})
