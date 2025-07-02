import {fromMarkdown} from 'mdast-util-from-markdown'
import {visit} from 'unist-util-visit'

const value = `# Pluto

Pluto is a dwarf planet in the Kuiper belt.

## History

### Discovery

In the 1840s, Urbain Le Verrier used Newtonian mechanics to predict the
position of…`

const tree = fromMarkdown(value)

let headings = 0

visit(tree, 'heading', function () {
  headings++
})

console.log(headings) //=> 3
