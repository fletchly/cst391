import { marked } from "marked";
import DOMPurify from 'dompurify';

marked.use({
    gfm: true,
});

export class MarkdownService {
    public static parse(markdown: string): string {
        // eslint-disable-next-line no-misleading-character-class
        return DOMPurify.sanitize(marked.parse(markdown.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]+/, "")).toString());
    }
}