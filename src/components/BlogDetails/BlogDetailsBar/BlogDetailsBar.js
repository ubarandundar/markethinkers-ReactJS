import classes from './BlogDetailsBar.module.css';

import FikriSabitImg from '../../../assets/NoPath.png';
import BlogDetailsBarBackImg from '../../../assets/Path 16727-3.svg';

function BlogDetailsBar() {
  return (
    <div className='container position-relative'>
        <img className={`img-fluid ${classes.blogDetailsBarBackImg}`} src={BlogDetailsBarBackImg} alt='BlogDetailsBarBackImg' />
        <div className={classes.blogDetailsBarBody}>
            <div className={`col-3 ${classes.blogDetailsBarProfileBody}`}>
                <img className={classes.blogDetailsBarImg} src={FikriSabitImg} alt='MultiBrandCarouselData_profilePicture' />
                <div className='d-flex flex-column'>
                    <header className={classes.blogDetailsBarNameSurname}>
                        Fikri Sabit
                    </header>
                    <header className={classes.blogDetailsBarProfileTitle}>
                        Copywriter
                    </header>
                </div>
            </div>
            <div className={`col-7 ${classes.blogDetailsBarDetails}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt. Felis imperdiet proin fermentum leo vel orci porta.
            </div>
            <button className='col-2' type='button'>
                other articles
            </button>
        </div>
    </div>
  )
}

export default BlogDetailsBar;