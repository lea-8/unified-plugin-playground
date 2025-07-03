import fs from 'node:fs/promises'
import rehypeParse from 'rehype-parse'
import {unified} from 'unified'
import {visit} from 'unist-util-visit'

const document = await fs.readFile('example.html')

const tree = unified().use(rehypeParse, {fragment: true}).parse(document)

console.log(tree)

visit(tree, function (node) {
  console.log(node.type)
})

console.log(" --- ")

visit(tree, 'element', function (node) {
  console.log(node.tagName)
})

// same as the above...
// visit(tree, function (node) {
//   if (node.type === 'element') {
//     console.log(node.tagName)
//   }
// })

console.log(" --- ")

visit(tree, ['comment', 'text'], function (node) {
  console.log([node.value])
})

console.log(" --- ")

visit(tree, function (node) {
  if (node.type === 'comment' || node.type === 'text')  {
    console.log([node.value])
  }
})
