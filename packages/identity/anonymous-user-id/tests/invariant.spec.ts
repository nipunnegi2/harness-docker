import { describe, expect, it } from 'vitest'
import { Context } from '@pentest-harness/cordis'
import InvariantRegistry from '@pentest-harness/dsh-invariants'
import * as UserIdInvariant from '@pentest-harness/dsh-anonymous-user-id/invariant'

describe('invariant companion', () => {
  it('registers the package ownership with an empty installer', async () => {
    const ctx = new Context()
    await ctx.plugin(InvariantRegistry, { enabled: true })
    await expect(ctx.plugin(UserIdInvariant).await()).resolves.toBeDefined()
  })
})
