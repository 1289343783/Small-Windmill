import "./index.less";
import 'highlight.js/styles/atom-one-dark.css'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import vbscript from 'highlight.js/lib/languages/vbscript';
import python from 'highlight.js/lib/languages/python';
import matlab from 'highlight.js/lib/languages/matlab';
import csharp from 'highlight.js/lib/languages/csharp';
import json from 'highlight.js/lib/languages/json'
import shell from 'highlight.js/lib/languages/shell';
import vhdl from 'highlight.js/lib/languages/vhdl';
import java from 'highlight.js/lib/languages/java';
import css from 'highlight.js/lib/languages/css';
import xml from 'highlight.js/lib/languages/xml';
import sql from 'highlight.js/lib/languages/sql';
import cpp from 'highlight.js/lib/languages/cpp';
import c from 'highlight.js/lib/languages/c';

hljs.registerLanguage('typescript', javascript);
hljs.registerLanguage('javascript', json);
hljs.registerLanguage('vbscript', vbscript);
hljs.registerLanguage('python', python);
hljs.registerLanguage('matlab', matlab);
hljs.registerLanguage('csharp', csharp);
hljs.registerLanguage('shell', shell);
hljs.registerLanguage('vhdl', vhdl);
hljs.registerLanguage('java', java);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('cpp', cpp);
hljs.registerLanguage('c', c);
hljs.registerLanguage('json', json);

hljs.configure({ignoreUnescapedHTML: true});


/**
 * 高亮代码块
 * @param {Element} element 包含 pre code 代码块的元素
 */
function highlightCode(element: Element) {
    const codeEls = element.querySelectorAll('pre code');
    codeEls.forEach((el: Element) => {
        console.log(el)
        hljs.highlightElement(el as HTMLElement);
    });
}

/**
 * 创建代码块
 * @param {string} selector 包含 pre code 的元素选择器
 */
function buildCodeBlock(selector: string) {
    let elements: any = document.querySelectorAll(selector);
    for (let element of elements) {
        highlightCode(element);
        // buildLineNumber(element);
    }
}

export {buildCodeBlock, highlightCode} ;