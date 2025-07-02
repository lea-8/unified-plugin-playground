import fs from 'node:fs/promises'
import rehypeParse from 'rehype-parse'
import {unified} from 'unified'

import {visit} from 'unist-util-visit'

const document = await fs.readFile('tree.html')

const tree = unified().use(rehypeParse, {fragment: true}).parse(document)

visit(tree, function (node) {
  console.log(node.type)
})

visit(tree, 'element', function (node) {
  console.log(node.tagName)
})

// visit(tree, function (node) {
//   if (node.type === 'element') {
//     console.log(node.tagName)
//   }
// })

visit(tree, ['comment'], function (node) {
  console.log([node.value])
})

visit(tree, function (node) {
  if (node.type === 'comment' || node.type === 'text') {
    console.log([node.value])
  }
})

visit(tree, function (node) {
  if (node.type === 'comment' || node.type === 'text') {
    console.log([node.value])
  }
})
visit(tree, function (node) {
  if (node.type === 'p' || node.type === 'paragraph') {
    console.log('---')
    node.children != undefined
      ? console.log('---', node.children[0].type)
      : console.log('--- skip')
  }
})

console.log(tree)
