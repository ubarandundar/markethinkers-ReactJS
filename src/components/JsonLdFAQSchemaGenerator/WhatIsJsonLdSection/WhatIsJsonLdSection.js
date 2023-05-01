import classes from './WhatIsJsonLdSection.module.css';

import WhatIsJsonLdSectionImage from '../../../assets/1820.png';

function WhatIsJsonLdSection() {
    return (
        <>
            <div>
                <header className={classes.whatIsJsonLdSectionHeader}>
                    What is json-ld FAQ schema
                    <br />
                    generator
                </header>
                <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-6'>
                        <img className='img-fluid' src={WhatIsJsonLdSectionImage} alt='WhatIsJsonLdSectionImage' />
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-6 d-flex align-items-center'>
                        <div className={classes.whatIsJsonLdSectionParag}>
                            As websites become more advanced and brands and businesses look to use their online platforms to provide their customers with more information, it is important to understand the best ways to improve your SEO and the overall user experience.
                            <br />
                            <br />
                            When it comes to bettering how users are able to interact with your webpage and your business as a whole, many websites are looking to include pages that hold a set of frequently asked questions (FAQs) that can help users and potential customers with questions that they may have.
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column'>
                    <div className={classes.whatIsJsonLdSectionCard}>
                        <header className={classes.whatIsJsonLdSectionCardHeader}>
                            What is JSON Code and Why Is It Used?
                        </header>
                        <span className={classes.whatIsJsonLdSectionCardParag}>
                            JavaScript Object Notation (JSON code) is a commonly used text format that can help servers and search engines better communicate with one another. A JSON schema code generator will create the code necessary for this interaction and ensure that your server and the search engines it is connecting to are able to communicate effectively.
                        </span>
                    </div>
                    <div className={classes.whatIsJsonLdSectionOtherCard}>
                        <header className={classes.whatIsJsonLdSectionOtherCardHeader}>
                            What are The Benefits of Minified JSON-LD Codes?
                        </header>
                        <span className={classes.whatIsJsonLdSectionOtherCardParag}>
                            These kinds of codes ensure that the content being added does not take up tons of space and slow down your website. If you have a large amount of code with too many instructions, it may take a while for content to be loaded, which can actually end up having negative consequences with regards to your SEO. Using these kinds of compressed codes ensures that this does not happen, which is why we recommend to our clients that these codes be used.
                        </span>
                    </div>
                </div>
                <div className='row'>
                    <header className={classes.whatIsJsonLdSectionLoremHeader}>
                        lorem ipsum dolor
                    </header>
                    <div className={classes.whatIsJsonLdSectionLoremParag}>
                        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        <br />
                        aliqua. Ut enim ad minim veniam, exercitation ullamco labor aliquip ea commodo consequat.
                    </div>
                </div>
                <div style={{marginBottom: '120px'}} className='row'>
                    <div className='col-sm-12 col-md-4 col-lg-4'>
                        <div className={classes.whatIsJsonLdSectionLoremCardBody}>
                            <header className={classes.whatIsJsonLdSectionLoremCardHeader}>
                                Lorem İpsum
                            </header>
                            <span className={classes.whatIsJsonLdSectionLoremCardParag}>
                                We are ready to grow your business digitally with our expertise and experienced team in SEO services and copywriting.
                            </span>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-4 col-lg-4'>
                        <div className={classes.whatIsJsonLdSectionLoremCardBody}>
                            <header className={classes.whatIsJsonLdSectionLoremCardHeader}>
                                Lorem İpsum
                            </header>
                            <span className={classes.whatIsJsonLdSectionLoremCardParag}>
                                We are ready to grow your business digitally with our expertise and experienced team in SEO services and copywriting.
                            </span>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-4 col-lg-4'>
                        <div className={classes.whatIsJsonLdSectionLoremCardBody}>
                            <header className={classes.whatIsJsonLdSectionLoremCardHeader}>
                                Lorem İpsum
                            </header>
                            <span className={classes.whatIsJsonLdSectionLoremCardParag}>
                                We are ready to grow your business digitally with our expertise and experienced team in SEO services and copywriting.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
      )
    }
export default WhatIsJsonLdSection;