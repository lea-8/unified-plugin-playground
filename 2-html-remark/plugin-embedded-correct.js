import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import {unified} from 'unified'

const file = await unified()
  .use(remarkParse)
  .use(remarkRehype, {allowDangerousHtml: true})
  .use(rehypeRaw) // *Parse* the raw HTML strings embedded in the tree
  .use(rehypeSanitize)
  .use(rehypeStringify)
  .process('*emphasis* and <strong>strong</strong>')

console.log(String(file))
