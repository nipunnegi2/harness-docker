import { staticLinked } from '../tsdown.client.ts'

export default staticLinked(
  '@pentest-harness/dsh-client-web',
  ['lib/types/index.js', 'lib/types/invariant.js'],
)
