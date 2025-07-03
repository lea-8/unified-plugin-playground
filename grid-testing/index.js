import fs from 'node:fs/promises'
import {SKIP, visit} from 'unist-util-visit'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {read} from 'to-vfile'
import {unified} from 'unified'

const document = await fs.readFile('index.md', 'utf8')
const tree = unified().use(remarkParse).parse(document)

visit(tree, function (node, index, parent) {
  // console.log(node)

  if (node.type === 'heading') {
    console.log(node)
    console.log(index)
    console.log("parent", parent)

    parent.children.splice(index, 1, ...node.children)

    console.log("parent children", parent.children)

    return [SKIP, index]
  }

  // if (node.type === 'list' && node.spread === true) {
  //   // console.log(node)
    
  //   // Do not traverse `node`, continue at the node *now* at `index`.
  //   // console.log(parent.children)

  //   collectChildren(node, parent)

  //   parent.children.splice(index, 1, ...node.children)

  //   // console.log(parent.children)

  //   return [SKIP, index]
  //   }
  }
)

// function collectChildren(currNode, parentNode) {
  // visit(tree, function (node, index, parent) {
  //   // console.log(node)
  //   // console.log(index)
  //   // console.log("parent", parent)
  //   // console.log(ancestors)
  //   if (node.type === 'listItem') {
  //     parent.children.splice(index, 1, ...node.children)

  //     console.log(parent.children)

  //     return [SKIP, index]
  //   }
  // })
// }

const file = await unified()
  .use(remarkParse)
  .use(remarkRehype, {allowDangerousHtml: true})
  .use(rehypeRaw)
  .use(rehypeDocument, {title: '🙌'})
  .use(rehypeFormat)
  .use(rehypeStringify)
  .process(await read('index.md'))

console.log(String(file))
