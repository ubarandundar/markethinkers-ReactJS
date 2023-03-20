import classes from './Blog.module.css';
import HangiKrediImg from '../../assets/hk-new-logo-white.png';
import AmazonImg from '../../assets/Amazon logo (1).svg';
import ErhanMutluImg from '../../assets/Image 1.png';
import FikriSabitImg from '../../assets/NoPath.png';
import ForwardArrow from '../../assets/Group 34.svg';

function Blog (props) {
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
            image: AmazonImg,
            explanation: 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            profilePicture: FikriSabitImg,
            nameSurname: 'Fikri Sabit',
            title: 'Founder & Marketing'
        }
    ]


    return (
    <div className='container'>
        <a href={MultiBrandCarouselData[0].forwardTo} className={classes.blogBody}>
            <img className={classes.blogArrow} src={ForwardArrow} alt='Forward_Arrow' />
            <img className={classes.blogBodyBrandImg} src={MultiBrandCarouselData[0].image} alt='MultiBrandCarouselData_Image' />
            <p className={classes.blogBodyParag}>{MultiBrandCarouselData[0].explanation}</p>
            <div>
                <div className={classes.blogProfile}>
                        <img className={classes.blogProfileImg} src={MultiBrandCarouselData[0].profilePicture} alt='MultiBrandCarouselData_profilePicture' />
                        <div>
                            <header className={classes.blogPorfileNameSurname}>{MultiBrandCarouselData[0].nameSurname}</header>
                            <header className={classes.blogPorfileTtile}>{MultiBrandCarouselData[0].title}</header>
                        </div>
                </div>
            </div>
        </a>
    </div>
    );
}

export default Blog;