import { useRouter } from "next/router";
import Layout from "../../../components/layout";
import { join } from "path";
import { readdir } from "fs/promises";

export default function Course({ chapters }) {
  const { courseId } = useRouter().query;

  const chapterItems = chapters.map((chapter) => (
    <li className="list-group-item ">
      <a
        href={`/course/${courseId}/chapter/${chapter}`}
        className="d-flex justify-content-around align-items-center"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{chapter}</div>
        </div>
        <small>read: 10,000</small>
        <small>updated: 2021/03/26</small>
      </a>
    </li>
  ));

  return (
    <Layout>
      <div className="row py-4">
        <div className="col-8">
          <ol className="list-group list-group-numbered list-group-flush">
            {chapterItems}
          </ol>
        </div>
      </div>
    </Layout>
  );
}

// see https://nextjs.org/docs/basic-features/data-fetching

export async function getStaticPaths() {
  const courses = ["computer"];

  const paths = courses.map((course) => ({
    params: { courseId: course },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const courseDir = join(process.cwd(), `_posts/${params.courseId}`);
  const chapters = await readdir(courseDir);

  if (!chapters) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { chapters },
  };
}
