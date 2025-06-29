import rehypeDocument from 'rehype-document'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkToc from 'remark-toc'
import {read, write} from 'to-vfile'
import {unified} from 'unified'
import {reporter} from 'vfile-reporter'

const file = await read('example.md')

await unified()
  .use(remarkParse)
  .use(remarkToc)
  .use(remarkRehype)
  .use(rehypeSlug)
  .use(rehypeDocument, {title: 'Pluto'})
  .use(rehypeStringify)
  .process(file)

console.error(reporter(file))
file.extname = '.html'
await write(file)
