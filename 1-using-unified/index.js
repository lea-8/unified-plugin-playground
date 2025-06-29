// import fs from 'node:fs/promises'
import rehypeDocument from 'rehype-document'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkRetext from 'remark-retext'
import remarkToc from 'remark-toc'
import retextEnglish from 'retext-english'
import retextIndefiniteArticle from 'retext-indefinite-article'
import rehypeFormat from 'rehype-format'
import {read, write} from 'to-vfile'
import {unified} from 'unified'
import {reporter} from 'vfile-reporter'

// const document = await fs.readFile('example.md', 'utf8')
const file = await read('example.md')

// const file = await unified()
await unified()
  .use(remarkParse)
  // @ts-expect-error: fine.
  .use(remarkRetext, unified().use(retextEnglish).use(retextIndefiniteArticle))
  .use(remarkToc)
  .use(remarkRehype)
  .use(rehypeSlug)
  .use(rehypeDocument, {title: "Pluto"})
  .use(rehypeFormat)
  .use(rehypeStringify)
  // .process(document)
  .process(file)

// console.log(String(file))
console.error(reporter(file))
file.extname = '.html'
await write(file)