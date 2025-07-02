/// <reference lib="dom" />
/* eslint-env browser */
/**
 * @import {Nodes, Parents} from 'nlcst'
 */
import {ParseEnglish} from 'parse-english'
import ReactDom from 'react-dom/client'
import React from 'react'
import {visit} from 'unist-util-visit'

const main = document.querySelector('#root')
if (!main) throw new Error('No root element found')
const root = ReactDom.createRoot(main)

const sample = 'The initial text.'
const parser = new ParseEnglish()
const hues = [60, 60, 60, 300, 300, 0, 0, 120, 120, 120, 120, 120, 120, 180]

root.render(React.createElement(Playground))

function Playground() {
  const [text, setText] = React.useState(sample)
  const tree = parser.parse(text)

  return (
    <div className="editor">
      <div className="draw">
        {one(tree)}
        {/* Trailing whitespace in a `textarea` is shown, but not in a `div`
        with `white-space: pre-wrap`.
        Add a `br` to make the last newline explicit. */}
        {/\n[ \t]*$/.test(text) ? <br /> : undefined}
      </div>
      <textarea
        className="write"
        onChange={(event) => setText(event.target.value)}
        rows={text.split('\n').length + 1}
        spellCheck="true"
        value={text}
      />
    </div>
  )
}

/**
 * @param {Parents} node
 * @returns {Array<React.JSX.Element | string>}
 */
function all(node) {
  /** @type {Array<React.JSX.Element | string>} */
  const results = []
  let index = -1

  while (index < node.children.length) {
    const result = one(node.children[index])

    if (Array.isArray(result)) {
      results.push(...result)
    } else {
      results.push(result)
    }
  }

  return results
}

/**
 * @param {Nodes} node
 * @returns {Array<React.JSX.Element | string> | React.JSX.Element | string}
 */
function one(node) {
  const result = 'value' in node ? node.value : all(node)

  if (node.type === 'SentenceNode') {
    let words = 0

    visit(node, 'WordNode', function () {
      words++
    })

    const hue = words < hues.length ? hues[words] : hues.at(-1)

    return (
      <span
        style={{
          backgroundColor: 'hsl(' + [hue, '93%', '70%', 0.5].join(', ') + ')'
        }}
      >
        {result}
      </span>
    )
  }

  return result
}
