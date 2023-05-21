import classes from './SuccessStoryCards.module.css';
import SuccessStoryCard from "./SuccessStoryCard";
import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';

function SuccessStoryCards() {
  return (
    <div className={`container ps-5 pe-5 ${classes.successStoryCardWrapper}`}>
        <div className="row">
            <SuccessStoryCard />
            <SuccessStoryCard changeLogo={true} changeRate={true} changeBackgroundColor={true} changeDistance={true} changeDistanceLogo={true} />
            <SuccessStoryCard />
            <SuccessStoryCard changeLogo={true} changeRate={true} changeBackgroundColor={true} changeDistance={true} changeDistanceLogo={true} />
            <SuccessStoryCard />
            <SuccessStoryCard changeLogo={true} changeRate={true} changeBackgroundColor={true} changeDistance={true} changeDistanceLogo={true} />
            <SuccessStoryCard />
            <SuccessStoryCard changeLogo={true} changeRate={true} changeBackgroundColor={true} changeDistance={true} changeDistanceLogo={true} />
            <SuccessStoryCard />
            <SuccessStoryCard changeLogo={true} changeRate={true} changeBackgroundColor={true} changeDistance={true} changeDistanceLogo={true} />
            <SuccessStoryCard />
            <SuccessStoryCard changeLogo={true} changeRate={true} changeBackgroundColor={true} changeDistance={true} changeDistanceLogo={true} />
            <SuccessStoryCard />
            <SuccessStoryCard changeLogo={true} changeRate={true} changeBackgroundColor={true} changeDistance={true} changeDistanceLogo={true} />
            <SuccessStoryCard />
            <SuccessStoryCard changeLogo={true} changeRate={true} changeBackgroundColor={true} changeDistance={true} changeDistanceLogo={true} />
            <SuccessStoryCard />
            <SuccessStoryCard changeLogo={true} changeRate={true} changeBackgroundColor={true} changeDistance={true} changeDistanceLogo={true} />
        </div>
    </div>  
  )
}

export default SuccessStoryCards;