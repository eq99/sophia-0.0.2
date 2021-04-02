import { join } from "path";
import { readdir, readFile } from "fs/promises";
import { Head } from "next/head";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import emoji from "remark-emoji";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Tex from "@matejmazur/react-katex";
import math from "remark-math";
import "katex/dist/katex.min.css";
import Layout from "../../../../components/layout";

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

export default function Chapter({ content }) {
  return (
    <Layout>
      <div className="container">
        <ReactMarkdown renderers={renderers} plugins={[math, gfm, emoji]}>
          {content}
        </ReactMarkdown>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const courses = ["computer"];

  let paths = [];

  for (const course of courses) {
    const courseDir = join(process.cwd(), `_posts/${course}`);
    const chapters = await readdir(courseDir);
    for (const chapter of chapters) {
      paths.push({ params: { courseId: course, chapterId: chapter } });
    }
  }

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const fileDir = join(
    process.cwd(),
    `_posts/${params.courseId}/${params.chapterId}`
  );
  const content = await readFile(fileDir, "utf8");

  if (!content) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { content },
  };
}
