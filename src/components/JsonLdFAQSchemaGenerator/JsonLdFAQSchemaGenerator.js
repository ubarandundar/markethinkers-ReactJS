import JsonLdCard from "./JsonLdCard/JsonLdCard";
import JsonLdIntro from "./JsonLdIntro/JsonLdIntro";
import JsonLdOtherSections from "./JsonLdOtherSections/JsonLdOtherSections";
import WhatIsJsonLdSection from "./WhatIsJsonLdSection/WhatIsJsonLdSection";

function JsonLdFAQSchemaGenerator() {
  return (
    <div className="container">
        <JsonLdIntro />
        <JsonLdCard />
        <WhatIsJsonLdSection />
        <JsonLdOtherSections />
    </div>
  )
}

export default JsonLdFAQSchemaGenerator;