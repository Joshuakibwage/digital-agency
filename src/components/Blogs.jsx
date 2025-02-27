import Img1 from "../assets/blog/blog1.png"
import Img2 from "../assets/blog/blog2.png"
import Img3 from "../assets/blog/blog3.png"
import BlogCard from "./BlogCard";
import Button from "./Button";

const BlogsData = [
    {
      id: 1,
      image: Img1,
      title: "Realtime analytics",
      description:
        "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible.",
      author: "Someone",
      date: "April 22, 2022",
    },
    {
      id: 2,
      image: Img2,
      title: "Realtime analytics",
      description:
        "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ",
      author: "Someone",
      date: "April 22, 2022",
    },
    {
      id: 3,
      image: Img3,
      title: "Realtime analytics",
      description:
        "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ",
      author: "Someone",
      date: "April 22, 2022",
    },
  ];

const Blogs = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto py-12">
            <h1 className="my-8 border-l-8 border-primary py-2 px-4 text-3xl font-semibold">
                Our Blogs
            </h1>
            {/* Blogs card */}

            <div className="grid grid-cols-1 md:grid-cols-2 px-4 gap-6 lg:grid-cols-3">
            {
                BlogsData.map((blog) => (
                    <BlogCard 
                        key={blog.id}
                        {...blog}
                    />
                ))
            }
            </div>
            <div className="text-center">
                <Button 
                    label="View All Posts"
                    className="bg-primary hover:bg-primary/80 duration-300  rounded-lg transition-colors cursor-pointer 
                    delay-200 ease-in-out px-4 py-2  active:ring-1bg-primary text-white"
                />
            </div>
        </div>
    </section>
  )
}

export default Blogs