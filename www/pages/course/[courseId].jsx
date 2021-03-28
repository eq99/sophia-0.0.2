import { useRouter } from "next/router";
export default function Course() {
  const { courseId } = useRouter().query;

  const chapters = [
    {
      id: 0,
      title: "如何超过大多数人",
      description:
        "当你看到这篇文章的标题，你一定对这篇文章产生了巨大的兴趣，因为你的潜意识在告诉你，这是一本人生的“武林秘籍”，而且还是左耳朵写的，一定有干货满满，只要读完，一定可以练就神功并找到超过大多数人的快车道和捷径……",
      update_time: "2021/03/26",
    },
    {
      id: 1,
      title: "如何超过大多数人",
      description:
        "当你看到这篇文章的标题，你一定对这篇文章产生了巨大的兴趣，因为你的潜意识在告诉你，这是一本人生的“武林秘籍”，而且还是左耳朵写的，一定有干货满满，只要读完，一定可以练就神功并找到超过大多数人的快车道和捷径……",
      update_time: "2021/03/26",
    },
    {
      id: 2,
      title: "如何超过大多数人",
      description:
        "当你看到这篇文章的标题，你一定对这篇文章产生了巨大的兴趣，因为你的潜意识在告诉你，这是一本人生的“武林秘籍”，而且还是左耳朵写的，一定有干货满满，只要读完，一定可以练就神功并找到超过大多数人的快车道和捷径……",
      update_time: "2021/03/26",
    },
    {
      id: 3,
      title: "如何超过大多数人",
      description:
        "当你看到这篇文章的标题，你一定对这篇文章产生了巨大的兴趣，因为你的潜意识在告诉你，这是一本人生的“武林秘籍”，而且还是左耳朵写的，一定有干货满满，只要读完，一定可以练就神功并找到超过大多数人的快车道和捷径……",
      update_time: "2021/03/26",
    },
    {
      id: 4,
      title: "如何超过大多数人",
      description:
        "当你看到这篇文章的标题，你一定对这篇文章产生了巨大的兴趣，因为你的潜意识在告诉你，这是一本人生的“武林秘籍”，而且还是左耳朵写的，一定有干货满满，只要读完，一定可以练就神功并找到超过大多数人的快车道和捷径……",
      update_time: "2021/03/26",
    },
    {
      id: 5,
      title: "如何超过大多数人",
      description:
        "当你看到这篇文章的标题，你一定对这篇文章产生了巨大的兴趣，因为你的潜意识在告诉你，这是一本人生的“武林秘籍”，而且还是左耳朵写的，一定有干货满满，只要读完，一定可以练就神功并找到超过大多数人的快车道和捷径……",
      update_time: "2021/03/26",
    },
  ];

  const chapterItems = chapters.map((chapter) => (
    <li className="list-group-item ">
      <a href={`/chapter/${chapter.id}`} className="d-flex justify-content-around align-items-center">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{chapter.title}</div>
        </div>
        <small>read: 10,000</small>
        <small>updated: 2021/03/26</small>
      </a>
    </li>
  ));

  return (
    <div className="row">
      <div className="col-8">
        <ol className="list-group list-group-numbered list-group-flush">
          {chapterItems}
        </ol>
      </div>
    </div>
  );
}
