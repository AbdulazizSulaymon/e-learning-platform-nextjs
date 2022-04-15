import courses from "../../../data/courses";

export default function handler(req, res) {
  const courseName = req.query.course;

  const course = courses.find((item) => item.slug == courseName);

  res.status(200).json(course);
}
