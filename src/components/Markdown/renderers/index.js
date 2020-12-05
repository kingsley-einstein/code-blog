import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const renderers = {
 code: ({ language, value }) => (
  <SyntaxHighlighter language={language} style={dracula} children={value} />
 )
};

export default renderers;
