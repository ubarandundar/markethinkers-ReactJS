import classes from './ExpertiseSEOTeamCardsInfo.module.css';

function ExpertiseSEOTeamCardsInfo() {
  const ExpertiseCardInfo = [
    {
        belongsTo: 'On Analiz ve Planlama',
        firstParag: 'Google gibi önde gelen arama motorları, yaptığı yeniliklerle dijital dünyadaki trendleri sürekli günceller. Buna bağlı olarak etkisini büyük oranda kaybetmiş SEO çalışmalarının da zamanla web sitelerinin organik trafik çekmesi noktasında yetersiz kaldığı görülür. SEO danışmanlığının ilk aşaması olan analiz, web sitenizi dezavantajlı duruma düşüren bu gibi hususları belirleme imkânı verir. Ön SEO analizi sırasında gerçekleştirilen işlemler ise şunlardır:',
        secondParag: 'SEO Teknik analizle web sitesinin kullanıcı deneyimi açısından başarısı değerlendirilir. Mobil uyumluluk, SSL, meta açıklaması ve URL gibi detaylara bakılır.Sitede yer alan içeriklerin anahtar kelime, başlık kullanımı ve özgünlük gibi ayrıntılar açısından yeterliliği incelenir.',
        thirdParag: 'Backlinklerin yayınladığı siteler ve linklerin yönlendirdiği sayfa gibi detaylar kontrol edilir. Arama motorlarındaki sıralamada son derece etkili olan sitenin yüklenme hızı test edilir.',
        fourthParag: 'Sayılanların dışında görsellerde URL bölümlerinin ve alt etiketlerin kontrolü gibi daha pek çok unsura bakılır. Elde edilen verilerle çıkarılan raporların ardından web siteniz için en az 3 aylık SEO çalışması hazırlanır. Sitenizin eksikleri doğrultusunda yapılan planlama sayesinde sürecin eksiksiz bir şekilde yürütülmesi mümkün olur.'
    },
    {
      belongsTo: 'Yol Haritasi, Olceklendirme ve SEO Operasyonu',
      firstParag: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Dignissim suspendisse in est ante in nibh mauris.',
      secondParag: 'Penatibus et magnis dis parturient montes nascetur ridiculus mus. Nec feugiat in fermentum posuere urna nec. Aliquet eget sit amet tellus.',
      thirdParag: 'Arcu odio ut sem nulla pharetra diam sit. Molestie a iaculis at erat pellentesque adipiscing commodo elit. Porttitor lacus luctus accumsan tortor posuere ac ut.',
      fourthParag: 'Nisl nisi scelerisque eu ultrices vitae auctor eu. Sit amet luctus venenatis lectus. Eleifend donec pretium vulputate sapien nec sagittis aliquam. Cras sed felis eget velit aliquet sagittis id consectetur purus.',
      fifthParag: 'A condimentum vitae sapien pellentesque habitant morbi. Viverra nibh cras pulvinar mattis. Dui ut ornare lectus sit amet est placerat in egestas. Quis risus sed vulputate odio ut enim blandit.',
      sixthParag: ' Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Faucibus purus in massa tempor nec. Tristique risus nec feugiat in. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus.'
  },
  ]

  return (
    <div className='container'>
        <div className={classes.expertiseSEOTeamCardsInfoBody}>
          <div className='col-sm-12 col-md-6 col-lg-6'>
              {ExpertiseCardInfo[0].firstParag} 
              <br />
              <br />
              {ExpertiseCardInfo[0].secondParag} 
          </div>
          <div className='col-sm-12 col-md-6 col-lg-6'>
              {ExpertiseCardInfo[0].thirdParag}
              <br />
              <br />
              {ExpertiseCardInfo[0].fourthParag}
              <br /> 
              <br /> 
              {ExpertiseCardInfo[0].fifthParag}
              <br /> 
              <br /> 
              {ExpertiseCardInfo[0].sixthParag}
          </div>
        </div>
    </div>
  )
}

export default ExpertiseSEOTeamCardsInfo;