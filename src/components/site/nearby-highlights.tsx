import { ArrowUpLeft, MapPin } from 'lucide-react'

const nearbyGroups = [
  { title: 'مساجد على بُعد مشي', places: [['مسجد الخيرات', '200 م'], ['مسجد التوحيد', '300 م']] },
  { title: 'سوبرماركت وبقالة', places: [['دكان', '350 م'], ['أسواق البشية', '500 م'], ['تموينات الغربية المتحدة', '550 م'], ['الدانوب', '1 كم']] },
  { title: 'صيدليات', places: [['صيدلية النهدي', '250 م'], ['صيدلية الدواء', '350 م'], ['صيدلية ديار الشاطئ', '850 م']] },
  { title: 'محطات بنزين', places: [['محطة نفط', '250 م'], ['محطة النهضة', '650 م']] },
  { title: 'مطاعم', places: [['مطبخ همام: سليق وأكلات شعبية', '200 م'], ['مطعم وشواية الشاطئ: دجاج مشوي', '500 م'], ['كاس جبن: مطور وسندويتشات', '500 م'], ['ماكدونالدز: وجبات سريعة', '550 م'], ['مطعم شرقي: أكلات مصرية', '750 م'], ['مطعم السدة: مندي وأكلات عربية', '1.2 كم'], ['BYB: برجر وريسوتو', '1.4 كم']] },
  { title: 'أسواق ومولات', places: [['هيرا بلازا سنتر', '1.6 كم'], ['ريد سي مول', '2.2 كم'], ['سبيس مول', '2.5 كم'], ['سلطان مول', '2.6 كم'], ['حراء مول (ذهب ومجوهرات)', '3.2 كم']] },
  { title: 'ترفيه وحدائق', places: [["حديقة May’s Park", '400 م'], ['حديقة التقوى', '1.4 كم'], ['جامب أب JUMP UP (ألعاب أطفال)', '1.4 كم'], ['سينما فوكس، ريد سي مول', '2 كم'], ['أدفنتورا، ألعاب أطفال في ريد سي مول', '2.1 كم'], ['سينما حي', '2.4 كم'], ['آيس لاند: تزلج وبولينج وألعاب', '2.8 كم']] },
]

export function NearbyHighlights() {
  return <section className="destination-section nearby-home" id="nearby" aria-labelledby="nearby-title">
    <div className="nearby-content section-wrap"><div className="nearby-heading"><span className="eyebrow">المدينة حولك</span><h3 id="nearby-title">كل ما تحتاجه <em>بالقرب منك</em></h3><p>أوقات ومسافات تقريبية من موقعنا في حي الشاطئ.</p></div><div className="nearby-grid">{nearbyGroups.map((group) => <article className="nearby-card" key={group.title}><h4>{group.title}</h4><ul>{group.places.map(([place, distance]) => <li key={place}><span>{place}</span><b>{distance}</b></li>)}</ul></article>)}</div></div>
  </section>
}

export function DestinationSection() {
  return <section className="destination-section destination-home" id="location" aria-labelledby="destination-title">
    <div className="destination-intro section-wrap">
      <div className="destination-photo"><img src="/relax-zone-building.jpg" alt="واجهة مبنى ريلاكس زون 2 في حي الشاطئ بجدة" loading="lazy" /><span><MapPin size={15} /> حي الشاطئ، جدة</span></div>
      <div className="destination-copy"><span className="eyebrow">ضيافة تعكس جودة المكان</span><h2 id="destination-title">مكان يقرّبك<br /><em>من كل ما تحب</em></h2><p>استمتع بإقامة هادئة في ريلاكس زون 2، حيث تلتقي الضيافة المدروسة بموقع يسهّل وصولك إلى احتياجاتك ووجهاتك المفضلة في جدة.</p><a className="button-gold" href="https://maps.app.goo.gl/KU9PTeQdfjXcQn9G8?g_st=ac" target="_blank" rel="noreferrer">افتح الموقع على الخريطة <ArrowUpLeft size={17} /></a><div className="destination-map"><iframe title="موقع ريلاكس زون 2 في حي الشاطئ بجدة" src="https://maps.google.com/maps?q=Jeddah%20Al%20Shati%20District&t=&z=13&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></div>
    </div>
  </section>
}
