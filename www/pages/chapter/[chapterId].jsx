import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Tex from "@matejmazur/react-katex";
import math from "remark-math";
import "katex/dist/katex.min.css"; // `react-katex` does not import the CSS for you

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter
        showLineNumbers
        style={a11yDark}
        language={language}
        children={value}
      />
    );
  },
  inlineMath: ({ value }) => <Tex math={value} />,
  math: ({ value }) => <Tex block math={value} />,
};

export default function Chapter() {
  const { chapterId } = useRouter().query;
  const markdown = String.raw`A paragraph with *emphasis* and **strong importance**.

# hello world

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |

let $f(x)=x^2+y^2$

$$
g(x)=
\begin{cases}
1\\
2
\end{cases}
$$

\`\`\`python
def hello():
  print('world')
\`\`\`

`;
  return (
    <div className="container">
      <ReactMarkdown renderers={renderers} plugins={[math]}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
