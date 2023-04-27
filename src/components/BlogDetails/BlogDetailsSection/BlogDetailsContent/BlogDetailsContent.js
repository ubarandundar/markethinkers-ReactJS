import classes from './BlogDetailsContent.module.css';

import TopQuoteImage from '../../../../assets/quote.svg';
import BottomQuoteImage from '../../../../assets/quote (1).svg';
import CoreWebVitalsGraphics from '../../../../assets/Mask Group 26.png';
import SocialMediaItems from '../../../Home/Footer/SocialMediaItems';

function BlogDetailsContent() {
  return (
    <div>
        <header className={classes.blogDetailsContentMainHeader}>
            2023 Guide for Digital Marketers: Recommendations From Top Experts
        </header>
        <div className={classes.blogDetailsContentParag}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis imperdiet proin fermentum leo vel orci porta.
            <br />
            <br />
            Dolor sed viverra ipsum nunc aliquet bibendum enim Markethinkers facilisis gravida. Viverra accumsan in nisl nisi. Sit amet volutpat consequat mauris nunc congue nisi. Ut porttitor leo a diam sollicitudin tempor id eu. Sit amet volutpat consequat mauris nunc congue nisi. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Viverra adipiscing at in tellus integer feugiat scelerisque. Tristique senectus et netus et malesuada fames ac. Quis commodo odio aenean sed. Adipiscing commodo elit at imperdiet dui accumsan. Amet luctus venenatis lectus magna.
        </div>
        <div className={classes.successStoriesTableOfContentsWhiteArea}>
                <ul>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                        Feugiat in ante metus dictum at tempor commodo ullamcorper a. Elit eget gravida cum sociis.
                    </li>
                    <li>
                        Neque ornare aenean euismod elementum. Amet consectetur adipiscing elit ut aliquam purus. In nisl nisi scelerisque eu ultrices vitae.
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                </ul>
        </div>
        <div className={classes.blogDetailsContentParag}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis imperdiet proin fermentum leo vel orci porta.
        </div>
        <div className='row'>
            <div className='col-6'>
                <div className={classes.successStoriesTableOfContentsOtherArea}>
                    <ul>
                    <li>
                        Lorem ipsum dolor sit
                    </li>
                    <li>
                        Lorem ipsum dolor sit
                    </li>
                    <li style={{marginBottom: '-20px'}}>
                        Lorem ipsum dolor sit
                    </li>
                    </ul>
                </div> 
            </div>
            <div className='col-6'>
                <div className={classes.successStoriesTableOfContentsOtherArea}>
                    <ul>
                    <li>
                        Lorem ipsum dolor sit
                    </li>
                    <li>
                        Lorem ipsum dolor sit
                    </li>
                    <li style={{marginBottom: '-20px'}}>
                        Lorem ipsum dolor sit
                    </li>
                    </ul>
                </div>     
            </div>
        </div>
        <div className={classes.successStoriesTableOfContentsPicturedArea}>
        </div>
        <div>
            <div className={classes.successStoriesTableOfContentsHeaderOther}>
                Lorem ipsum dolor sit
            </div>
            <div className={classes.blogDetailsContentParag}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis imperdiet proin fermentum leo vel orci porta.
                <br />
                <br />
                Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Viverra accumsan in nisl nisi. Sit amet volutpat consequat mauris nunc congue nisi. Ut porttitor leo a diam sollicitudin tempor id eu. Sit amet volutpat consequat mauris nunc congue nisi. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Viverra adipiscing at in tellus integer feugiat scelerisque. Tristique senectus et netus et malesuada fames ac. Quis commodo odio aenean sed. Adipiscing commodo elit at imperdiet dui accumsan. Amet luctus venenatis lectus magna.
            </div>
        </div>
        <div>
            <header className={classes.successStoriesTableOfContentsHeaderCore}>
                core web vitals
            </header>
            <div className={classes.successStoriesTableOfContentsCoreBody}>
                <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-6 d-flex flex-column'>
                        <div className={classes.successStoriesTableOfContentsNumber}>
                            + %328,98   
                        </div>
                        <div className={classes.successStoriesTableOfContentsExplanation}>
                            Lorem İpsum Dolor Sit Amet 
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-6 d-flex flex-column'>
                        <div className={classes.successStoriesTableOfContentsNumber}>
                            + %113,31   
                        </div>
                        <div className={classes.successStoriesTableOfContentsExplanation}>
                            Lorem İpsum Dolor Sit Amet 
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-6 d-flex flex-column'>
                        <div className={classes.successStoriesTableOfContentsNumberOther}>
                            + %47,98
                        </div>
                        <div className={classes.successStoriesTableOfContentsExplanation}>
                            Lorem
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-6 d-flex flex-column'>
                        <div className={classes.successStoriesTableOfContentsNumberOther}>
                            + %1708,08
                        </div>
                        <div className={classes.successStoriesTableOfContentsExplanation}>
                            ROI
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <header className={classes.successStoriesTableOfContentsHeaderCore}>
                core web vitals
            </header>
            <img className={classes.successStoriesTableOfContentsHeaderCoreGraphics} src={CoreWebVitalsGraphics} alt='CoreWebVitalsGraphics_Image' />
        </div>
        <div className={classes.successStoriesTableOfContentsBodyOneOther}>
            <div className={classes.successStoriesTableOfContentsHeaderOneOther}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </div>
            <div className={classes.blogDetailsContentParag}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis imperdiet proin fermentum leo vel orci porta.
            </div>
            <ul>
                <li className={classes.successStoriesTableOfContentsParagOther}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li className={classes.successStoriesTableOfContentsParagOtherSub}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li className={classes.successStoriesTableOfContentsParagOtherSub}>
                    Feugiat in ante metus dictum at tempor commodo ullamcorper a. Elit eget gravida cum sociis.
                </li>
                <li className={classes.successStoriesTableOfContentsParagOther}>
                    Neque ornare aenean euismod elementum. Amet consectetur adipiscing elit ut aliquam purus. In nisl nisi scelerisque eu ultrices vitae.
                </li>
                <li className={classes.successStoriesTableOfContentsParagOtherSub}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
            </ul>
        </div>
        <div className='row'>
            <div className='col-sm-12 col-md-12 col-lg-6'>
                <div className={classes.successStoriesContentsBodyWhiteCard}>
                    <header>
                        Lorem ipsum dolor sit
                    </header>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis imperdiet proin fermentum leo vel orci porta.
                    </div>
                </div>
            </div>
            <div className='col-sm-12 col-md-12 col-lg-6'>
                <div className={classes.successStoriesContentsBodyWhiteCard}>
                    <header>
                        Lorem ipsum dolor sit
                    </header>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis imperdiet proin fermentum leo vel orci porta.
                    </div>
                </div>
            </div>
        </div>
        <div className='row' style={{marginBottom: '60px', marginTop: '30px'}}>
            <div className='col-sm-12 col-md-12 col-lg-6'>
                <div className={classes.successStoriesContentsBodyColouredCard}>
                </div>
            </div>
            <div className='col-sm-12 col-md-12 col-lg-6'>
                <div className={classes.successStoriesContentsBodyColouredCard}>
                </div>
            </div>
        </div>
        <div className={classes.successStoriesTableOfContentsBodyOneOther}>
            <div className={classes.successStoriesTableOfContentsHeaderOneOther}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </div>
            <div className={classes.blogDetailsContentParag}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis imperdiet proin fermentum leo vel orci porta.
            </div>
        </div>
        <div className={classes.successStoriesTableOfContentsStatement}>
            <img className={classes.topQuoteImage} src={TopQuoteImage} alt='TopQuoteImage' />
            <img className={classes.bottomQuoteImage} src={BottomQuoteImage} alt='BottomQuoteImage' />
            <div className={classes.successStoriesTableOfContentsStatementParag}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </div>
            <div style={{textAlign: 'center'}} className={classes.successStoriesTableOfContentsHeaderCore}>
                core web vitals
            </div>
        </div>
        <div className={classes.successStoriesTableOfContentsStatementOther}>
            <header>
                Lorem ipsum dolor sit
            </header>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis imperdiet proin fermentum leo vel orci porta.
            </div>
        </div>
        <div className='d-flex flex-column'>
                <div className={classes.successStoriesTableOfContentsSmallFirstCard}>
                    <div className={classes.successStoriesTableOfContentsCardNumber}>
                        1
                    </div>
                    <header className={classes.successStoriesTableOfContentsSmallCardHeader}>
                        Lorem ipsum dolor sit
                    </header>
                    <span className={classes.successStoriesTableOfContentsSmallCardParag}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </span>
                </div>
                <div className={classes.successStoriesTableOfContentsSmallSecondCard}>
                    <div className={classes.successStoriesTableOfContentsCardNumber}>
                        2
                    </div>
                    <header className={classes.successStoriesTableOfContentsSmallCardHeader}>
                        Lorem ipsum dolor sit
                    </header>
                    <span className={classes.successStoriesTableOfContentsSmallCardParag}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </span>
                </div>
                <div className={classes.successStoriesTableOfContentsSmallThirdCard}>
                    <div className={classes.successStoriesTableOfContentsCardNumber}>
                        3
                    </div>
                    <header className={classes.successStoriesTableOfContentsSmallCardHeader}>
                        Lorem ipsum dolor sit
                    </header>
                    <span className={classes.successStoriesTableOfContentsSmallCardParag}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </span>
                </div>
                <div className={classes.successStoriesTableOfContentsSmallFourthCard}>
                    <div className={classes.successStoriesTableOfContentsCardNumber}>
                        4
                    </div>
                    <header className={classes.successStoriesTableOfContentsSmallCardHeader}>
                        Lorem ipsum dolor sit
                    </header>
                    <span className={classes.successStoriesTableOfContentsSmallCardParag}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </span>
                </div>
            </div>
            <div>
                <header className={classes.successStoriesTableOfContentsTableHeader}>
                    Table Title
                </header>
                <div className={classes.successStoriesTableOfContentsTableBody}>
                    <table>
                    <tr>
                        <th style={{textAlign: 'left'}}>Lorem İpsum</th>
                        <th>Lorem İpsum</th>    
                        <th>Lorem İpsum</th>
                        <th>Lorem İpsum</th>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'left'}}>Lorem İpsum Dolor</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'left'}}>Lorem İpsum Sit</td>
                        <td>1234</td>
                        <td>1234</td>
                        <td>1234</td>
                    </tr>      
                    <tr>
                        <td style={{textAlign: 'left'}}>Lorem İpsum Amet</td>
                        <td>123</td>
                        <td>-</td>
                        <td>123</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'left'}}>Lorem İpsum</td>
                        <td>1234</td>
                        <td>1234</td>
                        <td>1234</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'left'}}>Lorem İpsum</td>
                        <td>123</td>
                        <td>-</td>
                        <td>123</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'left'}}>Lorem İpsum</td>
                        <td>12</td>
                        <td>-</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'left'}}>Lorem İpsum</td>
                        <td>123</td>
                        <td>-</td>
                        <td>123</td>
                    </tr>
                    </table>
                </div>
                <caption className={classes.successStoriesTableOfContentsTableDescription}>
                    table description
                </caption>
                <div className='d-flex flex-row'>
                    <div className={classes.blogDetailsContentShareHere}>
                        Share here:
                    </div>
                    <SocialMediaItems changeFacebookBackground={true} />
                </div>
            </div>
    </div>
  )
}

export default BlogDetailsContent;