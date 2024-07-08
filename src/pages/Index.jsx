import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const featuredCourses = [
  {
    id: 1,
    title: "React for Beginners",
    description: "Learn the basics of React.",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Deep dive into JavaScript.",
    image: "/placeholder.svg",
  },
  // Add more featured courses as needed
];

const Index = () => {
  return (
    <div>
      <section className="hero bg-gray-200 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Code Academy</h1>
        <p className="text-xl mb-6">Learn to code from the best instructors.</p>
        <Button as={Link} to="/courses" className="text-lg">
          Browse Courses
        </Button>
      </section>
      <section className="featured-courses py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Courses</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredCourses.map((course) => (
            <Card key={course.id}>
              <img
                src={course.image}
                alt={course.title}
                className="mx-auto object-cover w-full h-[200px]"
              />
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{course.description}</p>
                <Link to={`/courses/${course.id}`} className="text-blue-500">
                  View Details
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
