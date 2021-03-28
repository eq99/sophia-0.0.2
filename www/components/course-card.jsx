import Image from "next/image";
import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <>
      <Link href={`/course/${course.id}`}>
        <a className="card col p-0 mx-2">
          <Image
            src={course.cover_url}
            className="card-img-top"
            width={100}
            height={200}
          ></Image>
          <div className="card-body">
            <p className="card-text">{course.title}</p>
          </div>
        </a>
      </Link>
    </>
  );
}
