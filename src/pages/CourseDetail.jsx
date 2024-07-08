import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const courseDetails = {
  1: {
    title: "React for Beginners",
    description: "Learn the basics of React.",
    content: "Course content goes here...",
    instructor: "John Doe",
    reviews: ["Great course!", "Very informative."],
    image: "/placeholder.svg",
  },
  2: {
    title: "Advanced JavaScript",
    description: "Deep dive into JavaScript.",
    content: "Course content goes here...",
    instructor: "Jane Smith",
    reviews: ["Excellent material.", "Highly recommend."],
    image: "/placeholder.svg",
  },
  // Add more course details as needed
};

const CourseDetail = () => {
  const { id } = useParams();
  const course = courseDetails[id];

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Card>
        <img
          src={course.image}
          alt={course.title}
          className="mx-auto object-cover w-full h-[400px]"
        />
        <CardHeader>
          <CardTitle>{course.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{course.description}</p>
          <h2 className="text-xl font-semibold mt-4">Course Content</h2>
          <p>{course.content}</p>
          <h2 className="text-xl font-semibold mt-4">Instructor</h2>
          <p>{course.instructor}</p>
          <h2 className="text-xl font-semibold mt-4">Reviews</h2>
          <ul>
            {course.reviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>
          <Button className="mt-4">Enroll Now</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseDetail;