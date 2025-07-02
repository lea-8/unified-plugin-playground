import {fromMarkdown} from 'mdast-util-from-markdown'
import {visit} from 'unist-util-visit'

const value = `
+ a 

+ spread

+ list

- non-spread
-list`

const tree = fromMarkdown(value)

let lists = 0

visit(tree, 'list', function () {
  lists++
})

console.log(lists)
