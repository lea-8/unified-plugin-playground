/**
 * @import {Root} from 'mdast'
 */

import {nameToEmoji} from 'gemoji'
import {findAndReplace} from 'mdast-util-find-and-replace'

/**
 * Turn gemoji shortcodes (`:+1:`) into emoji (`👍`).
 *
 * @returns
 *   Transform.
 */
export default function remarkGemoji() {
  /**
   * @param {string} _
   * @param {string} $1
   * @return {string | false}
   */
  return function (tree) {
    findAndReplace(tree, [
      /:(\+1|[-\w]+):/g,
      /**
       * @param {string} _
       * @param {string} $1
       * @return {undefined}
       */
      function (_, $1) {
        return Object.hasOwn(nameToEmoji, $1) ? nameToEmoji[$1] : false
      }
    ])
  }
}
