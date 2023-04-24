import ExpertiseSubServicesCards from './ExpertiseSubServicesCards';
import classes from './ExpertiseSubServicesSection.module.css';

function ExpertiseSubServicesSection() {
  return (
    <div className='container position-relative'>
        <div className='d-flex flex-column'>
            <header className={classes.expertiseSubServicesSectionHeader}>
                our subservices
            </header>
            <header className={classes.expertiseSubServicesSectionHeaderSub}>
                Digitally Grow Your Brand
            </header>
            <span className={classes.expertiseSubServicesSectionParag}>
                Biz SEO danışmanlığını profesyonel olarak ve 360 derece yapıyoruz. Markanıza zararı olabilecek veya
                <br />
                sürdürülebilir olmayan hiçbir çalışma, Markethinkers’ın uzman danışmanları tarafından size asla önerilmez.
            </span>
        </div>
        <ExpertiseSubServicesCards />
    </div>
  )
}

export default ExpertiseSubServicesSection;