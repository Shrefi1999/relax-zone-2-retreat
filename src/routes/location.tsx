import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpLeft, CarFront, MapPin, Navigation, Phone } from 'lucide-react'


import { PageHero } from '@/components/site/page-hero'
import { apartmentPhotos, mapUrl } from '@/components/site/site-data'

const nearby = [
  { icon: MapPin, title: 'حي الشاطئ', text: 'موقع مميز شمال جدة' },
  { icon: Navigation, title: 'واجهة جدة البحرية', text: 'قريبة من وجهات التنزه' },
  { icon: CarFront, title: 'سهولة الوصول', text: 'تنقّل مريح إلى مرافق المدينة' },
]

function LocationPage() {
  return <main className="inner-page" dir="rtl">
    <PageHero image={apartmentPhotos[6].src} eyebrow="موقع مميز في جدة" title="قريب من" highlight="كل ما يهمك" description="اكتشف موقع ريلاكس زون 2 في حي الشاطئ، وجهّز زيارتك لمدينة جدة بكل راحة." cta="افتح الموقع على الخريطة" href={mapUrl} />
    <section className="section-wrap location-page-section"><div className="section-title"><span className="eyebrow">جدة بين يديك</span><h2>عنوان الراحة في حي الشاطئ</h2><p>نقطة انطلاق هادئة لاستكشاف المدينة — التفاصيل الدقيقة للموقع عبر الخريطة.</p></div><div className="location-page-grid"><div className="location-details">{nearby.map(({ icon: Icon, title, text }) => <article key={title}><Icon /><span><b>{title}</b><small>{text}</small></span></article>)}<a className="button-gold" href={mapUrl} target="_blank" rel="noreferrer">الاتجاهات على خرائط Google <ArrowUpLeft size={17} /></a><a className="location-phone" href="tel:+966560920209"><Phone size={17} /> استفسر عن الوصول: <b dir="ltr">+966 56 092 0209</b></a></div><div className="map-frame location-map"><iframe title="خريطة موقع ريلاكس زون 2 في حي الشاطئ بجدة" src="https://maps.google.com/maps?q=Jeddah%20Al%20Shati%20District&t=&z=13&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><a href={mapUrl} target="_blank" rel="noreferrer">الموقع الدقيق <ArrowUpLeft size={15} /></a></div></div></section>
    <section className="trust-quote"><span>تبدأ الإقامة الجميلة من اختيار المكان</span><p>ننتظرك في حي الشاطئ — ريلاكس زون 2، جدة.</p><a className="button-gold" href="/booking">تحقق من التوفر</a></section>
  </main>
}

export const Route = createFileRoute('/location')({
  head: () => ({ meta: [
    { title: 'موقعنا | ريلاكس زون 2 جدة' }, { name: 'description', content: 'اعثر على ريلاكس زون 2 في حي الشاطئ بجدة وافتح الاتجاهات عبر خرائط Google.' },
    { property: 'og:title', content: 'موقعنا | ريلاكس زون 2 جدة' }, { property: 'og:description', content: 'اعثر على ريلاكس زون 2 في حي الشاطئ بجدة وافتح الاتجاهات عبر خرائط Google.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
    { property: 'og:image', content: apartmentPhotos[6].src }, { name: 'twitter:image', content: apartmentPhotos[6].src },
  ] }),
  component: LocationPage,
})
