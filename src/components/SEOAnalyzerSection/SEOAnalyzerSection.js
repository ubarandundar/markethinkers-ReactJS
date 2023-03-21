import classes from './SEOAnalyzerSection.module.css';

import AnalysisImg from '../../assets/analysis.svg';
import CheckerImg from '../../assets/g3435.svg';
import FastInternetImg from '../../assets/Fast Internet.svg';
import AuditReportImg from '../../assets/evidence.svg';
import BlackLinkCheckerImg from '../../assets/layer1.svg';
import SEOAnalyzerLeftImg from '../../assets/Path 16725.svg';
import SEOAnalyzerRightImg from '../../assets/Path 16763.svg';

function SEOAnalyzerSection (props) {
    return (
    <div className='container'>
        <img className={classes.SEOAnalyzerLeftImg} src={SEOAnalyzerLeftImg} alt='SEOAnalyzer_LeftImage' />
        <img className={classes.SEOAnalyzerRightImg} src={SEOAnalyzerRightImg} alt='SEOAnalyzer_RightImage' />
        <div className={classes.SEOAnalyzerSectionBody}>
            <header className={classes.SEOHeader}>SEO Analyzer</header>
            <div className={classes.SEOCard}>
                <div className='col-sm-12 col-md-4 col-lg-4'>
                    <div className={classes.SEOParag}>
                    If you’re struggling to get more visitors to your site, the answer might just lie in this <span className={classes.free}>FREE</span> report!
                    </div>
                </div>
                <div className='col-sm-12 col-md-8 col-lg-8'>
                    <div className={classes.SEOInputDiv}>
                        <input className={classes.SEOInput} type='text' placeholder='Your Website URL' minLength="1" maxLength="50" />
                        <button className={classes.analyzeButton} type='submit'>analyze</button>
                    </div>
                </div>
            </div>

        <div className='container'>
            <div className={classes.SEOSmallCards}>
                <div className={classes.SEOSmallCardsSubSEOAnalysis}>
                    <div className={classes.SEOCardRec}>
                        <img src={AnalysisImg} alt='Analysis_Image' />
                    </div>
                    <div>
                    <header className={classes.SEOSmallHeaders}>SEO Analysis</header>
                    <p className={classes.SEOParagraphs}>
                    If you want more search traffic, 
                
                    all you have to do is follow the 
                    
                    website analysis report.</p>
                    </div>
                </div>
                <div className={classes.SEOSmallCardsSubSEOChecker}>
                    <div className={classes.SEOCardRec}>
                        <img src={CheckerImg} alt='Checker_Image' />
                    </div>
                    <div>
                    <header className={classes.SEOSmallHeaders}>SEO Checker</header>
                    <p className={classes.SEOParagraphs}>
                    Get a complete list of errors that
                    
                    are hindering your site from
                    
                    achieving the top spot on
                   
                    Google.</p>
                    </div>
                </div>
                <div className={classes.SEOSmallCardsSubSiteSpeed}>
                    <div className={classes.SEOCardRec}>
                        <img src={FastInternetImg} alt='FastInternet_Image' />
                    </div>
                    <div>
                    <header className={classes.SEOSmallHeaders}>Site Speed</header>
                    <p className={classes.SEOParagraphs}>
                    Site speed no longer just
                    
                    impacts your conversion rate,
                   
                    but it also affects how high your
                    
                    site can rank in search engines.</p>
                    </div>
                </div>
                </div>

                <div className={classes.SEOSmallCards}>

                <div className={classes.SEOSmallCardsSubSEOEmptyFirst}>
                </div>

                <div className={classes.SEOSmallCardsSubSEOAudit}>
                    <div className={classes.SEOCardRec}>
                        <img src={AuditReportImg} alt='AuditReport_Image' />
                    </div>
                    <div>
                    <header className={classes.SEOSmallHeaders}>SEO Audit Report</header>
                    <p className={classes.SEOParagraphs}>
                    Our SEO Analysis doesn’t just
                   
                    point out errors, but we give you
                  
                    step by step instructions on how
                    
                    you can fix each of them.</p>
                    </div>
                </div>

                <div className={classes.SEOSmallCardsSubBlacklink}>
                    <div className={classes.SEOCardRec}>
                        <img src={BlackLinkCheckerImg} alt='BlackLinkChecker_Image' />
                    </div>
                    <div>
                    <header className={classes.SEOSmallHeaders}>Blacklink Checker</header>
                    <p className={classes.SEOParagraphs}>
                    A website analysis is
                 
                    never complete without analyzing
                   
                    your backlinks.</p>
                    </div>
                </div>

                <div className={classes.SEOSmallCardsSubSEOEmptySecond}>
                </div>

                </div>
            </div>
        </div>
    </div>
    );
}

export default SEOAnalyzerSection;