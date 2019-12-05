import "./styles.css";
import { run } from "@cycle/run";
import { makeDOMDriver, div } from "@cycle/dom";
import xs from "xstream";

const model = (actions) => {

}

const view = (state$) => {

}

const intend = (domSource) => {

}

const main = sources => {
  const vnode$ = xs.of(div('Hello world'))

  return {
    DOM: vnode$
  }
};

const drivers = {
  DOM: makeDOMDriver("#app")
};

run(main, drivers);
