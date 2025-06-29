/**
 * Transform a `tree` in mdast to nlcst.
 *
 * > 👉 **Note**: `tree` must have positional info and `file` must be a `VFile`
 * > corresponding to `tree`.
 *
 * @param {MdastNodes} tree
 *   mdast tree to transform.
 * @param {VFile} file
 *   Virtual file.
 * @param {ParserConstructor | ParserInstance} Parser
 *   Parser to use.
 * @param {Options | null | undefined} [options]
 *   Configuration (optional).
 * @returns {NlcstRoot}
 *   nlcst tree.
 */
export function toNlcst(tree: MdastNodes, file: VFile, Parser: ParserConstructor | ParserInstance, options?: Options | null | undefined): NlcstRoot;
export type MdastNodes = import('mdast').Nodes;
export type MdastParents = import('mdast').Parents;
export type NlcstParagraph = import('nlcst').Paragraph;
export type NlcstParents = import('nlcst').Parents;
export type NlcstRoot = import('nlcst').Root;
export type NlcstRootContent = import('nlcst').RootContent;
export type NlcstSentence = import('nlcst').Sentence;
export type NlcstSentenceContent = import('nlcst').SentenceContent;
export type NlcstWhiteSpace = import('nlcst').WhiteSpace;
export type Point = import('unist').Point;
export type VFile = import('vfile').VFile;
export type Location = import('vfile-location').Location;
/**
 * nlcst parser.
 *
 * For example, `parse-dutch`, `parse-english`, or `parse-latin`.
 */
export type ParserInstance = {
    tokenizeSentencePlugins: Array<(node: NlcstSentence) => undefined | void>;
    tokenizeParagraphPlugins: Array<(node: NlcstParagraph) => undefined | void>;
    tokenizeRootPlugins: Array<(node: NlcstRoot) => undefined | void>;
    parse(value: string | null | undefined): NlcstRoot;
    tokenize(value: string | null | undefined): Array<NlcstSentenceContent>;
};
/**
 * Create a new parser.
 */
export type ParserConstructor = new () => ParserInstance;
/**
 * Configuration.
 */
export type Options = {
    /**
     * List of mdast node types to ignore (optional).
     *
     * The types `'table'`, `'tableRow'`, and `'tableCell'` are always ignored.
     */
    ignore?: Array<string> | null | undefined;
    /**
     * List of mdast node types to mark as `source` (optional).
     *
     * The type `'inlineCode'` is always marked as source.
     */
    source?: Array<string> | null | undefined;
};
/**
 * Info passed around.
 */
export type State = {
    /**
     *   Whole document.
     */
    doc: string;
    /**
     *   List of mdast node types to ignore.
     */
    ignore: Array<string>;
    /**
     *   Location info.
     */
    place: Location;
    /**
     *   Parser.
     */
    parser: ParserInstance;
    /**
     *   List of mdast node types to mark as source.
     */
    source: Array<string>;
};
//# sourceMappingURL=index.d.ts.map