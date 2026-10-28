import { describe, expect, it } from 'vitest'
import { Context } from '@pentest-harness/cordis'
import * as PrimitivesInvariant from '@pentest-harness/dsh-client-ui-primitives/invariant'
import InvariantRegistry from '@pentest-harness/dsh-invariants'

describe('invariant companion', () => {
  it('registers under the package name with an empty installer', async () => {
    const ctx = new Context()
    await ctx.plugin(InvariantRegistry, { enabled: true })
    await expect(ctx.plugin(PrimitivesInvariant).await()).resolves.toBeDefined()
  })
})
