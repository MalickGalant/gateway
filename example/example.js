import fs from 'node:fs/promises'
import {compile} from '@mdx-js/mdx'
import remarkGfm from 'remark-gfm'

console.log(
  String(
    await compile(await fs.readFile('example.mdx'), {remarkPlugins: [remarkGfm]})
  )
)
