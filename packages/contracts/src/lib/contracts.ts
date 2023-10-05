import { z } from 'zod'
import { initContract } from '@ts-rest/core'

const _c = initContract()

export const c = _c.router({
  getHealthz: {
    method: 'GET',
    path: '/healthz',
    responses: {
      200: z.object({
        ok: z.boolean()
      })
    }
  }
})
