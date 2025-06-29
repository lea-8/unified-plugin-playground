// plugins/remark-grid.js
import {visit} from 'unist-util-visit'

// plugins/remark-grid.js
export default function remarkGrid() {
  return (tree) => {
    // const { visit } = require('unist-util-visit');
    const { SKIP } = visit;

    visit(tree, 'root', (node) => {
      const newChildren = [];
      let buffer = [];

      const flushGridBlock = () => {
        if (buffer.length > 0) {
          const gridRows = [];
          let currentRow = [];

          buffer.forEach(line => {
            if (line.trim() === '') {
              if (currentRow.length > 0) {
                gridRows.push(currentRow);
                currentRow = [];
              }
            } else if (line.trim().startsWith('+ ')) {
              currentRow.push(line.trim().slice(2));
            } else {
              // Not a valid grid line, treat it as normal
              if (currentRow.length > 0) {
                gridRows.push(currentRow);
                currentRow = [];
              }
              newChildren.push({
                type: 'paragraph',
                children: [{ type: 'text', value: line }]
              });
            }
          });

          if (currentRow.length > 0) {
            gridRows.push(currentRow);
          }

          if (gridRows.length > 0) {
            newChildren.push({
              type: 'html',
              value: renderGrid(gridRows),
            });
          }
          
          console.log(buffer)
          
          buffer = [];
        }
      };

      for (const child of node.children) {
        if (child.type === 'paragraph' && child.children.length === 1 && child.children[0].type === 'text') {
          const text = child.children[0].value;
          buffer.push(text);
        } else {
          flushGridBlock();
          newChildren.push(child);
        }
      }

      flushGridBlock();
      node.children = newChildren;
    });

    return tree;
  };
}

function renderGrid(rows) {
  return `
    <div class="custom-grid">
      ${rows.map(
        cols => `
        <div class="row">
          ${cols.map(col => `<div class="column">${col}</div>`).join('\n')}
        </div>`
      ).join('\n')}
    </div>
  `;
}
