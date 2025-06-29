import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'

const file = await unified()
  .use(remarkParse)
  .use(remarkRehype, {allowDangerousHtml: true}) // Pass raw HTML strings through.
  .use(rehypeStringify, {allowDangerousHtml: true}) // Serialize the raw HTML strings
  .process('*emphasis* and <strong>strong</strong>')

console.log(String(file))