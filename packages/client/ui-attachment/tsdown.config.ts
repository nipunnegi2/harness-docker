import { clientBundle } from '../tsdown.client.ts'

export default clientBundle(
  '@pentest-harness/dsh-client-ui-attachment',
  ['lib/types/index.js', 'lib/types/invariant.js'],
)
