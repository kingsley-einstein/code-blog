import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import renderers from "./renderers";

const Markdown = props => (
 <ReactMarkdown plugins={[gfm]} renderers={renderers} {...props} />
);

export default Markdown;
