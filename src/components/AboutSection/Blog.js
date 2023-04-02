import classes from './Blog.module.css';
import HangiKrediImg from '../../assets/hk-new-logo-white.png';
import AmazonImg from '../../assets/Amazon logo-coloured.svg';
import ZoomImg from '../../assets/Zoom logo.svg';
import SalesforceImg from '../../assets/Salesforce logo.svg';
import GlossierImg from '../../assets/Glossier logo.svg';
import GoogleImg from '../../assets/Google logo.svg';
import ErhanMutluImg from '../../assets/Image 1.png';
import FikriSabitImg from '../../assets/NoPath.png';
import ForwardArrow from '../../assets/Group 34.svg';
import { useContext, useEffect } from 'react';
import { BlogContext } from '../../store/BlogContextProvider';

const MultiBrandCarouselData = [
    {
        forwardTo: 'www.google.com',
        image: HangiKrediImg,
        explanation: 
        'Öne çıkan özellikleri arasında daima çözüm odaklı olmaları ve hızlı çözümler getirmeleri var. Teknolojiyi ve alanlarındaki trendleri her zaman yakından takip ettiklerinden, ilettiğiniz sorulara en hızlı şekilde cevap alabilirsiniz.',
        profilePicture: ErhanMutluImg,
        nameSurname: 'Erhan Mutlu',
        title: 'Founder & Marketing'
    },
    {
        forwardTo: 'www.google.com',
        image: ZoomImg,
        explanation: 
        'Zoom-Öne çıkan özellikleri arasında daima çözüm odaklı olmaları ve hızlı çözümler getirmeleri var. Teknolojiyi ve alanlarındaki trendleri her zaman yakından takip ettiklerinden, ilettiğiniz sorulara en hızlı şekilde cevap alabilirsiniz.',
        profilePicture: ErhanMutluImg,
        nameSurname: 'Erhan Mutlu-Zoom',
        title: 'Founder & Marketing-Zoom'
    },
    {
        forwardTo: 'www.google.com',
        image: SalesforceImg,
        explanation: 
        'Salesforce-Öne çıkan özellikleri arasında daima çözüm odaklı olmaları ve hızlı çözümler getirmeleri var. Teknolojiyi ve alanlarındaki trendleri her zaman yakından takip ettiklerinden, ilettiğiniz sorulara en hızlı şekilde cevap alabilirsiniz.',
        profilePicture: ErhanMutluImg,
        nameSurname: 'Erhan Mutlu-Salesforce',
        title: 'Founder & Marketing-Salesforce'
    },
    {
        forwardTo: 'www.google.com',
        image: AmazonImg,
        explanation: 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        profilePicture: FikriSabitImg,
        nameSurname: 'Fikri Sabit',
        title: 'Founder & Marketing'
    },
    {
        forwardTo: 'www.google.com',
        image: GlossierImg,
        explanation: 
        'Glossier-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        profilePicture: FikriSabitImg,
        nameSurname: 'Fikri Sabit-Glossier',
        title: 'Founder & Marketing-Glossier'
    },
    {
        forwardTo: 'www.google.com',
        image: GoogleImg,
        explanation: 
        'Google-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        profilePicture: FikriSabitImg,
        nameSurname: 'Fikri Sabit-Google',
        title: 'Founder & Marketing-Google'
    }
]

function Blog (props) {

    const { currentSlideIndex } = useContext(BlogContext);

    // useEffect(() => {
    //     console.log(currentSlideIndex)
    // }, [currentSlideIndex])

    return (
    <div className='container'>
        <a href={MultiBrandCarouselData[currentSlideIndex].forwardTo} className={classes.blogBody}>
            <img className={classes.blogArrow} src={ForwardArrow} alt='Forward_Arrow' />
            <img className={classes.blogBodyBrandImg} src={MultiBrandCarouselData[currentSlideIndex].image} alt='MultiBrandCarouselData_Image' />
            <p className={classes.blogBodyParag}>{MultiBrandCarouselData[currentSlideIndex].explanation}</p>
            <div>
                <div className={classes.blogProfile}>
                        <img className={classes.blogProfileImg} src={MultiBrandCarouselData[currentSlideIndex].profilePicture} alt='MultiBrandCarouselData_profilePicture' />
                        <div>
                            <header className={classes.blogPorfileNameSurname}>{MultiBrandCarouselData[currentSlideIndex].nameSurname}</header>
                            <header className={classes.blogPorfileTtile}>{MultiBrandCarouselData[currentSlideIndex].title}</header>
                        </div>
                </div>
            </div>
        </a>
    </div>
    );
}

export default Blog;