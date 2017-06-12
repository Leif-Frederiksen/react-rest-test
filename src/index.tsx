import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { Container } from "./components/Container";
import { Entry } from "./components/Entry";

// var ITEMS = [
//     { Id: 1, Name: "Leif", Date: "kjjlkjl"},
//     { Id: 2, Name: "Ole", Date: "kjjlkjl"},
//     { Id: 3, Name: "Bent", Date: "kjjlkjl"},
//     { Id: 4, Name: "Keld", Date: "kjjlkjl"},
//     { Id: 5, Name: "Yrsa", Date: "today" },
//     { Id: 6, Name: "Bente", Date: "today" }
// ]

ReactDOM.render(
    <Container />,
    document.getElementById("example")
);

// ReactDOM.render(
//     <Hello compiler="TypeScript" framework="React" />,
//     document.getElementById("example")
// );

