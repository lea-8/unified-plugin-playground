import rehypeParse from 'rehype-parse'
import rehypeRemark from 'rehype-remark'
import remarkStringify from 'remark-stringify'
import {unified} from 'unified'

const file = await unified()
  .use(rehypeParse) // Parse HTML to a syntax tree
  .use(rehypeRemark) // Turn HTML syntax tree to markdown syntax tree
  .use(remarkStringify) // Serialize HTML syntax tree
  .process('<em>emphasis</em> and <strong>strong</strong>')

console.log(String(file))