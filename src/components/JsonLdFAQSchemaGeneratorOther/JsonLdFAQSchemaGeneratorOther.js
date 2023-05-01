import JsonLdIntro from "../JsonLdFAQSchemaGenerator/JsonLdIntro/JsonLdIntro";
import JsonLdOtherSections from "../JsonLdFAQSchemaGenerator/JsonLdOtherSections/JsonLdOtherSections";
import WhatIsJsonLdSection from "../JsonLdFAQSchemaGenerator/WhatIsJsonLdSection/WhatIsJsonLdSection";
import JsonLdCardOther from "./JsonLdCardOther/JsonLdCardOther";


function JsonLdFAQSchemaGeneratorOther() {
  return (
    <div className="container">
      <JsonLdIntro />
      <JsonLdCardOther />
      <WhatIsJsonLdSection />
      <JsonLdOtherSections />
    </div>
  )
}

export default JsonLdFAQSchemaGeneratorOther;