import SuccessStoriesSection from "./SuccessStoriesSection/SuccessStoriesSection"
import SuccessStoryCard from "./SuccessStroyCard/SuccessStoryCard";

function SuccessStories() {
  return (
    <>
        <SuccessStoriesSection />
        <div className="container pt-5 pb-5">
            <SuccessStoryCard />
        </div>
    </>
  )
}

export default SuccessStories;