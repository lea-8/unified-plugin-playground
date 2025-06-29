import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'

const file = await unified()
  .use(remarkParse) // Parse markdown content to a syntax tree
  .use(remarkRehype) // Turn markdown syntax tree to HTML syntax tree, ignoring embedded HTML
  .use(rehypeStringify) // Serialize HTML syntax tree
  .process('*emphasis* and **strong**')

console.log(String(file))