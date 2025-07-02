import fs from 'node:fs/promises'
import rehypeDocument from 'rehype-document'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkToc from 'remark-toc'
import {unified} from 'unified'

const document = await fs.readFile('example.md', 'utf8')

const file = await unified()
  .use(remarkParse)
  .use(remarkToc)
  .use(remarkRehype)
  .use(rehypeSlug)
  .use(rehypeDocument, {title: 'Pluto'})
  .use(rehypeStringify)
  .process(document)

console.log(String(file))
