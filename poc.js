// import jsdom from "https://dev.jspm.io/jsdom";

// const dom = new jsdom.JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
// const window = dom.window;
// const document = window.document;

// console.log(document.querySelector("p").textContent); // "Hello world"

import { readLines } from "https://deno.land/std/io/bufio.ts";

class Process {
  static login = false;
}

const log = console.log;

if (import.meta.main) {
  log("Welcome to the class scraper!");
  log("Type your username below, please...")
  // const u = await readLines(Deno.stdin);
  for await (let line of readLines(Deno.stdin)) {
    console.log(line);
  }
  // log(u)
}