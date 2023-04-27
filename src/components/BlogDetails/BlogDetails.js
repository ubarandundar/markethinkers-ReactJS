import BlogDetailsBar from "./BlogDetailsBar/BlogDetailsBar";
import BlogDetailsCarouselSection from "./BlogDetailsCarouselSection/BlogDetailsCarouselSection";
import BlogDetailsIntro from "./BlogDetailsIntro/BlogDetailsIntro";
import BlogDetailsSection from "./BlogDetailsSection/BlogDetailsSection";

function BlogDetails() {
  return (
    <>
        <BlogDetailsIntro />
        <BlogDetailsSection />
        <BlogDetailsBar />
        <BlogDetailsCarouselSection />
    </>
  )
}

export default BlogDetails;