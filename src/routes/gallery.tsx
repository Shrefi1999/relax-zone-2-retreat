import { createFileRoute } from '@tanstack/react-router'
import { PageHero } from '@/components/site/page-hero'
import { ApartmentGallery } from '@/components/site/apartment-gallery'
import { apartmentUnits } from '@/components/site/site-data'



function GalleryPage() {
  return <main className="inner-page" dir="rtl">
    <PageHero image={apartmentUnits[0].photos[0].src} eyebrow="ريلاكس زون 2 · جدة" title="شقق مفروشة" highlight="تمنحك راحة البيت" description="اكتشف الوحدات ومرافقها، وشاهد صور كل شقة قبل أن تختار إقامتك في حي الشاطئ." cta="استكشف الشقق" />
    <section className="section-wrap page-content-section gallery-page-content"><div className="section-title"><span className="eyebrow">كل شقة بصورها الخاصة</span><h2>اختر الشقة المناسبة لك</h2><p>مساحات متنوعة، ومرافق واضحة، وصور من كل شقة لتختار إقامتك باطمئنان.</p></div><ApartmentGallery /></section>
    <section className="trust-quote"><span>اختيارك يبدأ بصورة واضحة</span><p>تصفّح المساحة التي تناسبك، ثم تواصل معنا للاستفسار عن التوفر.</p><a className="button-gold" href="/booking">اطلب حجز الشقة</a></section>
  </main>
}

export const Route = createFileRoute('/gallery')({
  head: () => ({ meta: [
    { title: 'الشقق المفروشة | ريلاكس زون 2 جدة' }, { name: 'description', content: 'تعرّف على شقق ريلاكس زون 2 المفروشة، ومرافق كل وحدة، واستكشف صورها قبل الحجز.' },
    { property: 'og:title', content: 'الشقق المفروشة | ريلاكس زون 2 جدة' }, { property: 'og:description', content: 'تعرّف على شقق ريلاكس زون 2 المفروشة، ومرافق كل وحدة، واستكشف صورها قبل الحجز.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
    { property: 'og:image', content: apartmentUnits[0].photos[0].src }, { name: 'twitter:image', content: apartmentUnits[0].photos[0].src },
  ] }),
  component: GalleryPage,
})
