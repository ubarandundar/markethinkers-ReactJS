import classes from './WhatIsSEOSection.module.css';

import WhatIsSEOSectionBackImg from '../../../assets/Path 16728-3.png';

function WhatIsSEOSection() {
  return (
    <div className='container'>
        <img className={classes.whatIsSEOSectionBackImg} src={WhatIsSEOSectionBackImg} />
        <div className='row position-relative'>
            <div className='col-sm-12 col-md-6 col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                <div className={classes.whatIsSEOSectionHeader}>
                    What is SEO?
                </div>
                <button className={classes.whatIsSEOSectionButton}>
                    Apply Now
                </button>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-6'>
                <div className={classes.whatIsSEOSectionParag}>
                    As the internet and search engines become more popular marketing tools, it is becoming increasingly important for businesses to promote themselves on these channels. Knowing how to promote your business on search engines is vital for success, and there are various ways that this can be done. SEO stands for “Search Engine Optimization” and it is the process of optimising a website or web page to improve its ranking in search engine results pages (SERPs). This is done by making changes to the website’s content, structure, and other elements to make it more attractive to search engines and users.
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhatIsSEOSection;