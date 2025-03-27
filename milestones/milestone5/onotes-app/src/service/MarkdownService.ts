import {marked, Renderer} from "marked";
import DOMPurify from 'dompurify';

const renderer = new Renderer();
renderer.table = (token) => {
    const header = token.header.map(cell => `<th>${cell.text}</th>`).join('');
    const body = token.rows.map(row => `<tr>${row.map(cell => `<td>${cell.text}</td>`).join('')}</tr>`)

    return `<table class="table">
                <thead>
                    <tr>${header}</tr>
                </thead>
                <tbody>${body}</tbody>
            </table>`;
};

marked.use({
    gfm: true,
    renderer: renderer
});

export class MarkdownService {
    public static parseMd(markdown: string): string {
        // eslint-disable-next-line no-misleading-character-class
        return DOMPurify.sanitize(marked.parse(markdown.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]+/, "")).toString());
    }
}