import {assertEquals} from '@std/assert'
import { versionToUrlPathVersion } from './version_to_url_path.ts';

Deno.test('Test versionToPathUrl', async (test) => {
  await test.step({
    name: 'Valid version',
    fn: () => {
      assertEquals(versionToUrlPathVersion('1.21.10'), 'minecraft-java-edition-1-21-10')
    }
  })
})
