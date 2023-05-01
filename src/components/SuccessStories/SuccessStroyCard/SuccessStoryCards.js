import classes from './SuccessStoryCards.module.css';
import SuccessStoryCard from "./SuccessStoryCard";

function SuccessStoryCards() {
  return (
    <div className={`container ps-5 pe-5 ${classes.successStoryCardWrapper}`}>
        <div className="row pb-4">
            <SuccessStoryCard />
            <SuccessStoryCard changeLogo={true} changeRate={true} changeBackgroundColor={true} changeDistance={true} changeDistanceForHover={true} />
            <SuccessStoryCard />
        </div>
        <div className="row pb-4">
            <SuccessStoryCard changeLogo={true} changeRate={true} changeBackgroundColor={true} changeDistance={true}/>
            <SuccessStoryCard />
            <SuccessStoryCard changeLogo={true} changeRate={true} changeBackgroundColor={true} changeDistance={true}/>
        </div>
        <div className="row pb-4">
            <SuccessStoryCard />
            <SuccessStoryCard changeLogo={true} changeRate={true} changeBackgroundColor={true} changeDistance={true}/>
            <SuccessStoryCard />
        </div>
        <div className="row pb-4">
            <SuccessStoryCard changeLogo={true} changeRate={true} changeBackgroundColor={true} changeDistance={true}/>
            <SuccessStoryCard />
            <SuccessStoryCard changeLogo={true} changeRate={true} changeBackgroundColor={true} changeDistance={true}/>
        </div>
        <div className="row pb-4">
            <SuccessStoryCard />
            <SuccessStoryCard changeLogo={true} changeRate={true} changeBackgroundColor={true} changeDistance={true}/>
            <SuccessStoryCard />
        </div>
        <div className="row">
            <SuccessStoryCard changeLogo={true} changeRate={true} changeBackgroundColor={true} changeDistance={true}/>
            <SuccessStoryCard />
            <SuccessStoryCard changeLogo={true} changeRate={true} changeBackgroundColor={true} changeDistance={true}/>
        </div>
    </div>  
  )
}

export default SuccessStoryCards;