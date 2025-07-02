import rehypeMinifyWhitespace from 'rehype-minify-whitespace'
import rehypeParse from 'rehype-parse'
import rehypePresetMinify from 'rehype-preset-minify'
import rehypeStringify from 'rehype-stringify'
import {read} from 'to-vfile'
import {unified} from 'unified'

const file = await read('example.html')

await unified()
  .use(rehypeParse)
  .use(rehypePresetMinify)
  .use(rehypeMinifyWhitespace, {newlines: true})
  .use(rehypeStringify)
  .process(file)

console.log(String(file))
