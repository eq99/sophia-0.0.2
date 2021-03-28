import CourseCard from "../../components/course-card";

export default function HomeComputer() {
  const courses = [
    {
      id: 0,
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      cover_url:
        "https://robocrop.realpython.net/?url=https%3A//files.realpython.com/media/Python-3-Installation--Setup-Guide_Watermarked.b4f57a4e558b.jpg&w=480&sig=649d566981e113ee728af1a34a3b09787bad1807",
    },
    {
      id: 1,
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      cover_url:
        "https://robocrop.realpython.net/?url=https%3A//files.realpython.com/media/Python-Basics-Chapter-on-Web-Scraping_Watermarked.ad1bb89e800b.jpg&w=480&sig=ff0f74a9ce84f25d056383d0f01a64662cf87a90",
    },
    {
      id: 2,
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      cover_url:
        "https://robocrop.realpython.net/?url=https%3A//files.realpython.com/media/Python-Basics-Chapter-on-Web-Scraping_Watermarked.ad1bb89e800b.jpg&w=480&sig=ff0f74a9ce84f25d056383d0f01a64662cf87a90",
    },
    {
      id: 3,
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      cover_url:
        "https://robocrop.realpython.net/?url=https%3A//files.realpython.com/media/A-Community-Interview_Beige.0de9df3b2fae.jpg&w=480&sig=065b62cc47280cb18697b930437ac8a5409841d5",
    },
  ];

  const courseCards = courses.map((course) => (
    <CourseCard key={course.id} course={course}></CourseCard>
  ));

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="row">{courseCards}</div>
        </div>
      </div>
    </div>
  );
}
