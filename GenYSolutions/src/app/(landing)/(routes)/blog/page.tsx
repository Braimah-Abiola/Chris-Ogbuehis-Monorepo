import LandingBlog from "@/components/landing-blog";
import LandingNavWhite from "@/components/landing-nav-white";

const Blog = () => {
  return (
    <div>
      <LandingNavWhite />

      <div className="">
        <LandingBlog />
      </div>
    </div>
  );
};

export default Blog;
