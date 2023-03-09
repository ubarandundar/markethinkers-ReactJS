import classes from './SEOAnalyzerSection.module.css';

import AnalysisImg from '../../assets/analysis.svg';
import CheckerImg from '../../assets/g3435.svg';
import FastInternetImg from '../../assets/Fast Internet.svg';
import AuditReportImg from '../../assets/evidence.svg';
import BlackLinkCheckerImg from '../../assets/layer1.svg';

function SEOAnalyzerSection (props) {
    return (
        <div className={classes.SEOAnalyzerSectionBody}>
            <header className={classes.SEOHeader}>SEO Analyzer</header>
            <row className={classes.SEOCard}>
                <div className='col-sm-4'>
                    <p className={classes.SEOParag}>
                    If you’re struggling to get more visitors to your site,
                    <br />
                    the answer might just lie in this <span className={classes.free}>FREE</span> report!
                    </p>
                </div>
                <div className='col-sm-8'>
                    <div className={classes.SEOInputDiv}>
                        <input className={classes.SEOInput} type='text' placeholder='Your Website URL'/>
                    </div>
                </div>
            </row>

        <div className={classes.SEOSmallCards}>
            <div className={classes.SEOSmallCardsSubSEOAnalysis}>
                <div className={classes.SEOCardRec}>
                    <img src={AnalysisImg} alt='Analysis_Image' />
                </div>
                <div>
                <header className={classes.SEOSmallHeaders}>SEO Analysis</header>
                <p className={classes.SEOParagraphs}>If you want more search traffic, 
                <br />
                all you have to do is follow the 
                <br />
                website analysis report.</p>
                </div>
            </div>
            <div className={classes.SEOSmallCardsSubSEOChecker}>
                <div className={classes.SEOCardRec}>
                    <img src={CheckerImg} alt='Checker_Image' />
                </div>
                <div>
                <header className={classes.SEOSmallHeaders}>SEO Checker</header>
                <p className={classes.SEOParagraphs}>Get a complete list of errors that
                <br />
                are hindering your site from
                <br />
                achieving the top spot on
                <br />
                Google.</p>
                </div>
            </div>
            <div className={classes.SEOSmallCardsSubSiteSpeed}>
                <div className={classes.SEOCardRec}>
                     <img src={FastInternetImg} alt='FastInternet_Image' />
                </div>
                <div>
                <header className={classes.SEOSmallHeaders}>Site Speed</header>
                <p className={classes.SEOParagraphs}>Site speed no longer just
                <br />
                impacts your conversion rate,
                <br />
                but it also affects how high your
                <br />
                site can rank in search engines.</p>
                </div>
            </div>
            </div>

            <div className={classes.SEOSmallCards}>
            <div className={classes.SEOSmallCardsSubSEOAudit}>
                <div className={classes.SEOCardRec}>
                    <img src={AuditReportImg} alt='AuditReport_Image' />
                </div>
                <div>
                <header className={classes.SEOSmallHeaders}>SEO Audit Report</header>
                <p className={classes.SEOParagraphs}>Our SEO Analysis doesn’t just
                <br />
                point out errors, but we give you
                <br />
                step by step instructions on how
                <br />
                you can fix each of them.</p>
                </div>
            </div>
            <div className={classes.SEOSmallCardsSubBlacklink}>
                <div className={classes.SEOCardRec}>
                    <img src={BlackLinkCheckerImg} alt='BlackLinkChecker_Image' />
                </div>
                <div>
                <header className={classes.SEOSmallHeaders}>Blacklink Checker</header>
                <p className={classes.SEOParagraphs}>A website analysis is
                <br />
                never complete without analyzing
                <br />
                your backlinks.</p>
                </div>
            </div>
            </div>
            
        </div>
    );
}

export default SEOAnalyzerSection;