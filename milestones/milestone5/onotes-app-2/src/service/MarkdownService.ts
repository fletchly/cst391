import { marked, Renderer } from "marked";
import DOMPurify from "dompurify";

const renderer = new Renderer();
renderer.table = (token) => {
  const header = token.header.map((cell) => `<th>${cell.text}</th>`).join("");
  const body = token.rows.map(
    (row) => `<tr>${row.map((cell) => `<td>${cell.text}</td>`).join("")}</tr>`,
  );

  return `<table class="table">
                <thead>
                    <tr>${header}</tr>
                </thead>
                <tbody>${body}</tbody>
            </table>`;
};

renderer.heading = (heading) => {
  const depth = heading.depth;
  const text = heading.text;

  return `<h${depth} class="markdown">${text}</h${depth}>`;
};

renderer.list = (list) => {
  const ordered = list.ordered;
  console.log(list);
  const items = list.items
    .map((item) => {
      if (item.checked != undefined) {
        return `<li class="flex items-center"><input class="checked:accent-gray-600 pointer-events-none mr-1" type="checkbox" ${item.checked ? "checked" : ""} /><label>${item.text}</label></li>`;
      } else {
        return `<li>${item.text}</li>`;
      }
    })
    .join("");

  if (ordered) return `<ol class="markdown">${items}</ol>`;
  else return `<ul class="markdown">${items}</ul>`;
};

marked.use({
  breaks: true,
  gfm: true,
  renderer: renderer,
});

export class MarkdownService {
  public static parseMd(markdown: string): string {
    return DOMPurify.sanitize(
      marked
        // eslint-disable-next-line no-misleading-character-class
        .parse(markdown.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]+/, ""))
        .toString(),
    );
  }
}
