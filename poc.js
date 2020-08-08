import jsdom from "https://dev.jspm.io/jsdom";

const dom = new jsdom.JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
const window = dom.window;
const document = window.document;

console.log(document.querySelector("p").textContent); // "Hello world"