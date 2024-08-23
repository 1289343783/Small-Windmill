import MarkdownIt from "markdown-it";

var config = {
    html: true,
    xhtmlOut: true,
    breaks: true,
    langPrefix: 'lang-',
    linkify: false,
    typographer: true,
    quotes: '“”‘’'
}
let markdownIt = new MarkdownIt(config)

export default markdownIt