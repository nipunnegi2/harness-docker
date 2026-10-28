/**
 * Package-owned invariant companion for `@pentest-harness/dsh-session-checkpoint-policy`.
 * @module @pentest-harness/dsh-session-checkpoint-policy/invariant
 */

/* jscpd:ignore-start */
import type { Context } from '@pentest-harness/cordis'
import type { InvariantInstaller } from '@pentest-harness/dsh-invariants'

const PACKAGE_NAME = '@pentest-harness/dsh-session-checkpoint-policy'

/** Cordis companion plugin name. */
export const name = 'session-checkpoint-policy-invariant'
/** Service required before the companion can reserve package ownership. */
export const inject = ['invariants']

/**
 * No runtime invariant: checkpoint ordering is enforced at the intercepted waterfall and
 * persistence seams; this stateless policy owns no independent mutable relation.
 */
const install: InvariantInstaller = () => {}

/**
 * Register this package's invariant companion.
 * @param ctx - Cordis context carrying the invariant service.
 * @returns the installed registration's disposer after setup succeeds.
 */
export const apply = (ctx: Context): Promise<() => void> =>
  Promise.resolve(ctx.invariants.register(PACKAGE_NAME, install))
/* jscpd:ignore-end */
