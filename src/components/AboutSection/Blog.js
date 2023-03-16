import classes from './Blog.module.css';
import HangiKrediImg from '../../assets/hk-new-logo-white.png';
import ErhanMutluImg from '../../assets/Image 1.png';
import ForwardArrow from '../../assets/Group 34.svg';

function Blog (props) {
    return (
    <div className='container'>
        <div className={classes.blogBody}>
             <a className={classes.blogArrow} href='www.google.com'>
                    <img src={ForwardArrow} alt='Forward_Arrow' />
                </a>
            <img className={classes.blogBodyBrandImg} src={HangiKrediImg} alt='HangiKredi_Image' />
            <p className={classes.blogBodyParag}>
                Öne çıkan özellikleri arasında daima çözüm odaklı olmaları ve hızlı çözümler
                 
                 getirmeleri var. Teknolojiyi ve alanlarındaki trendleri her zaman yakından takip
                 
                 ettiklerinden, ilettiğiniz sorulara en hızlı şekilde cevap alabilirsiniz.</p>
                 <div>
                    <div className={classes.blogProfile}>
                        <img className={classes.blogProfileImg} src={ErhanMutluImg} alt='ErhanMutlu_Image' />
                        <div>
                            <header className={classes.blogPorfileNameSurname}>Erhan Mutlu</header>
                            <header className={classes.blogPorfileTtile}>Founder & Marketing</header>
                        </div>
                    </div>
                 </div>
        </div>
    </div>
    );
}

export default Blog;