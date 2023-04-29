import SERPPreviewToolCard from "./SERPPreviewToolCard/SERPPreviewToolCard";
import SERPPreviewToolIntro from "./SERPPreviewToolIntro/SERPPreviewToolIntro";

function SERPPreviewTool() {
  return (
    <div className="container">
        <SERPPreviewToolIntro />
        <SERPPreviewToolCard />
    </div>
  )
}

export default SERPPreviewTool;