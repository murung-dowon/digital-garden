const { parse } = require("node-html-parser");

function userMarkdownSetup(md) {
  // The md parameter stands for the markdown-it instance used throughout the site generator.
  // Feel free to add any plugin you want here instead of /.eleventy.js
}

function userEleventySetup(eleventyConfig) {
  // Extended checkboxes transform (Minimal theme style)
  eleventyConfig.addTransform("extended-checkboxes", function (str) {
    if (
      !this.page ||
      !this.page.inputPath ||
      !this.page.inputPath.endsWith(".md")
    ) {
      return str;
    }
    const parsed = parse(str);
    const listItems = parsed.querySelectorAll("li");
    for (const item of listItems) {
      const text = item.innerHTML;
      const match =
        text.match(/^\s*\[([\/><!?\*\"lbiSIpckfwud\-])\]\s*/) ||
        text.match(/^\s*\[(&gt;)\]\s*/) ||
        text.match(/^\s*\[(&lt;)\]\s*/);
      if (match) {
        let checkboxChar = match[1];
        if (checkboxChar === "&gt;") checkboxChar = ">";
        if (checkboxChar === "&lt;") checkboxChar = "<";
        item.setAttribute("data-task", checkboxChar);
        item.classList.add("task-list-item");
        item.innerHTML = text.replace(
          /^\s*\[(?:[\/><!?\*\"lbiSIpckfwud\-]|&gt;|&lt;)\]\s*/,
          ""
        );
      }
    }
    return str && parsed.innerHTML;
  });
}

exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;
