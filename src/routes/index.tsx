import { createFileRoute } from '@tanstack/react-router'

import { ArrowLeft, ArrowUpLeft, MapPin, ShieldCheck, Sparkles, Wifi } from 'lucide-react'
import { ApartmentListings } from '@/components/site/apartment-listings'
import { ApartmentPhotoSlideshow } from '@/components/site/apartment-photo-slideshow'
import { HomeGalleryCarousel } from '@/components/site/home-gallery-carousel'
import { BookingRequestForm } from '@/components/site/booking-request-form'
import { FloatingContactActions } from '@/components/site/floating-contact-actions'
import { FaqSection } from '@/components/site/faq-section'
import { NearbyHighlights } from '@/components/site/nearby-highlights'
import { apartmentUnits, googleReviewsUrl } from '@/components/site/site-data'

const photos = [
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1795094316161-l4IPoWWeOXIKRISMCddTOi6BcwD43z.jpg', alt: 'صالة معيشة عصرية بإطلالة واسعة' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1795094311348-ZFgTuMkDgPXJnbSxhEcxc3WETZE6of.jpg', alt: 'غرفة نوم مشرقة بتصميم أنيق' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1795094325890-vouvasex5rtNS2FBjr4n0FGJUNcLPe.jpg', alt: 'سرير مريح بإضاءة دافئة' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1795094320980-QXAgUiv2GLGa0RSff2oXE2jTg7XtWa.jpg', alt: 'جلسة عائلية مريحة' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1795094331211-af2o3eIH5CLIpBg63p4TblEkJvipVh.jpg', alt: 'خزانة ومرآة بتصميم هادئ' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1795094299624-LXBm1xxGRQE60z8g2vvlxomIiN4qPk.jpg', alt: 'غرفة نوم متكاملة' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1795094205402-5irqDu8QoObXqwgAyiDps4CqDgHk0e.jpg', alt: 'صالة مع مطبخ صغير' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1795094306029-IEuXsWuXtxKDhaezCJKTGlW6ZBCwUY.jpg', alt: 'تفاصيل غرفة النوم' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1795094211042-Lok8b6ZpY5BRzLfvnGjrwigskrZHyG.jpg', alt: 'زاوية أخرى من الصالة' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1795094294812-BnLZI1qz1ZH4dgxmWnryWfKrZmcED1.jpg', alt: 'أريكة وتلفاز في غرفة الجلوس' },
]

function getApartmentCoverPhotos(unitNumbers: string[]) {
  return unitNumbers.flatMap((number) => {
    const apartment = apartmentUnits.find((unit) => unit.number === number)
    return apartment?.photos[0] ? [apartment.photos[0]] : []
  })
}

const heroApartmentPhotos = getApartmentCoverPhotos(['10', '2', '5'])
function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <div className="section-title"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>
}

function Home() {
  return (
    <main className="home-main" dir="rtl">

      <section className="home-hero" id="home" aria-labelledby="home-title">
        <ApartmentPhotoSlideshow images={heroApartmentPhotos} className="home-hero-slideshow" label="لقطات من الشقق" priority />
        <div className="home-hero-shade" />
        <div className="home-hero-content">
          <div className="home-hero-copy"><span className="eyebrow">ريلاكس زون 2 · جدة</span><h1 id="home-title">إقامتك القادمة<br /><em>تبدأ براحة</em></h1><p>شقق مفروشة تمنحك مساحة أوسع وراحة أقرب، في قلب جدة.</p></div>
          <BookingRequestForm />
        </div>
      </section>

      <section className="trust-strip" aria-label="مزايا الإقامة"><div><span className="trust-icon"><ShieldCheck /></span><span><b>خصوصية وراحة</b><small>لك ولعائلتك</small></span></div><i /><div><span className="trust-icon"><Sparkles /></span><span><b>عناية بالتفاصيل</b><small>إقامة تليق بك</small></span></div><i /><div><span className="trust-icon"><MapPin /></span><span><b>موقع استراتيجي</b><small>قريب من كل ما تحتاج</small></span></div><i /><div><span className="trust-icon"><Wifi /></span><span><b>خدمات متكاملة</b><small>راحة بلا انقطاع</small></span></div></section>

      <HomeGalleryCarousel images={heroApartmentPhotos} />

      <section className="apartments-section" id="gallery"><div className="section-wrap"><SectionTitle eyebrow="مساحات مختارة بعناية" title="اختر الشقة التي تناسب إقامتك" text="شقق مستقلة، لكل واحدة تفاصيلها وصورها الخاصة — لتختار وأنت مطمئن." /><ApartmentListings compact /><div className="apartment-catalog-footer"><span>لكل شقة معرض مستقل يضم صورها كاملة</span><a className="text-link" href="/gallery">استكشف الشقق والصور <ArrowLeft size={16} /></a></div></div></section>

      <NearbyHighlights />

      <section className="customer-reviews" aria-labelledby="reviews-title"><img className="reviews-background" src={photos[0].src} alt="أجواء صالة ريلاكس زون 2" loading="lazy" /><div className="reviews-shade" /><div className="reviews-content"><div className="reviews-heading"><span className="eyebrow">تجارب ضيوفنا</span><h2 id="reviews-title">إقامات يرويها <em>ضيوفنا</em></h2><p>نعتز بكل تجربة، ونسعى دائماً لأن تكون إقامتك القادمة أجمل.</p></div><div className="review-grid"><article className="review-card review-card-native"><div className="review-card-top"><span className="review-source"><img className="review-google-mark" src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/google/default.svg" alt="" />Google</span><span className="review-stars" role="img" aria-label="5 من 5 نجوم"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2.8 2.8 5.68 6.27.91-4.54 4.42 1.07 6.24L12 17.1 6.4 20.05l1.07-6.24-4.54-4.42 6.27-.91L12 2.8Z" /></svg><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2.8 2.8 5.68 6.27.91-4.54 4.42 1.07 6.24L12 17.1 6.4 20.05l1.07-6.24-4.54-4.42 6.27-.91L12 2.8Z" /></svg><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2.8 2.8 5.68 6.27.91-4.54 4.42 1.07 6.24L12 17.1 6.4 20.05l1.07-6.24-4.54-4.42 6.27-.91L12 2.8Z" /></svg><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2.8 2.8 5.68 6.27.91-4.54 4.42 1.07 6.24L12 17.1 6.4 20.05l1.07-6.24-4.54-4.42 6.27-.91L12 2.8Z" /></svg><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2.8 2.8 5.68 6.27.91-4.54 4.42 1.07 6.24L12 17.1 6.4 20.05l1.07-6.24-4.54-4.42 6.27-.91L12 2.8Z" /></svg></span></div><blockquote>«شقق رائعة ونظيفة وموقع استراتيجي من البحر»</blockquote><div className="review-author"><span className="review-avatar">هـ</span><span><strong>هدى الزهراني</strong><small>32 مراجعة · جدة</small></span></div></article><article className="review-card review-card-native"><div className="review-card-top"><span className="review-source"><img className="review-google-mark" src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/google/default.svg" alt="" />Google</span><span className="review-stars" role="img" aria-label="5 من 5 نجوم"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2.8 2.8 5.68 6.27.91-4.54 4.42 1.07 6.24L12 17.1 6.4 20.05l1.07-6.24-4.54-4.42 6.27-.91L12 2.8Z" /></svg><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2.8 2.8 5.68 6.27.91-4.54 4.42 1.07 6.24L12 17.1 6.4 20.05l1.07-6.24-4.54-4.42 6.27-.91L12 2.8Z" /></svg><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2.8 2.8 5.68 6.27.91-4.54 4.42 1.07 6.24L12 17.1 6.4 20.05l1.07-6.24-4.54-4.42 6.27-.91L12 2.8Z" /></svg><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2.8 2.8 5.68 6.27.91-4.54 4.42 1.07 6.24L12 17.1 6.4 20.05l1.07-6.24-4.54-4.42 6.27-.91L12 2.8Z" /></svg><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2.8 2.8 5.68 6.27.91-4.54 4.42 1.07 6.24L12 17.1 6.4 20.05l1.07-6.24-4.54-4.42 6.27-.91L12 2.8Z" /></svg></span></div><blockquote>«نظيفة جداً جداً، الله يبارك»</blockquote><div className="review-author"><span className="review-avatar">S</span><span><strong>Sami Aa</strong><small>مرشد محلي · 27 مراجعة</small></span></div></article><article className="review-card review-card-native"><div className="review-card-top"><span className="review-source"><img className="review-google-mark" src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/google/default.svg" alt="" />Google</span><span className="review-stars" role="img" aria-label="5 من 5 نجوم"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2.8 2.8 5.68 6.27.91-4.54 4.42 1.07 6.24L12 17.1 6.4 20.05l1.07-6.24-4.54-4.42 6.27-.91L12 2.8Z" /></svg><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2.8 2.8 5.68 6.27.91-4.54 4.42 1.07 6.24L12 17.1 6.4 20.05l1.07-6.24-4.54-4.42 6.27-.91L12 2.8Z" /></svg><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2.8 2.8 5.68 6.27.91-4.54 4.42 1.07 6.24L12 17.1 6.4 20.05l1.07-6.24-4.54-4.42 6.27-.91L12 2.8Z" /></svg><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2.8 2.8 5.68 6.27.91-4.54 4.42 1.07 6.24L12 17.1 6.4 20.05l1.07-6.24-4.54-4.42 6.27-.91L12 2.8Z" /></svg><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2.8 2.8 5.68 6.27.91-4.54 4.42 1.07 6.24L12 17.1 6.4 20.05l1.07-6.24-4.54-4.42 6.27-.91L12 2.8Z" /></svg></span></div><blockquote>«ما شاء الله تبارك الله، شقة حلوة مرة»</blockquote><div className="review-author"><span className="review-avatar">م</span><span><strong>محمد 2030</strong><small>مرشد محلي · 134 مراجعة</small></span></div></article></div><a className="google-reviews-cta" href={googleReviewsUrl} target="_blank" rel="noreferrer"><span className="google-review-icon" aria-hidden="true"><svg viewBox="0 0 48 48"><path fill="#4285F4" d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5h6.6c3.9-3.6 6.1-8.8 6.1-14.9Z"/><path fill="#34A853" d="M24 44c5.5 0 10.1-1.8 13.5-4.8l-6.6-5c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.2A20 20 0 0 0 24 44Z"/><path fill="#FBBC05" d="M12.6 27.8a12 12 0 0 1 0-7.6V15H5.8a20 20 0 0 0 0 18Z"/><path fill="#EA4335" d="M24 11.8c3 0 5.7 1 7.8 3.1l5.8-5.8A19.5 19.5 0 0 0 24 4 20 20 0 0 0 5.8 15l6.8 5.2c1.6-4.8 6.1-8.4 11.4-8.4Z"/></svg></span><span className="google-review-copy"><strong>اكتشف تقييمنا على خرائط Google</strong><small>اطّلع على آراء الضيوف وتفاصيل الموقع وتقييمنا بكل شفافية.</small></span><span className="google-review-action">عرض التقييمات <ArrowUpLeft size={16} /></span></a><div className="reviews-footer-note"><span /> شكراً لضيوفنا على ثقتهم <span /></div></div></section>


      <FaqSection />

      <FloatingContactActions />
    </main>
  )
}

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'ريلاكس زون 2 | شقق مفروشة فاخرة في جدة' }, { name: 'description', content: 'استعرض شقق ريلاكس زون 2 المفروشة في جدة، وتعرّف على شقة 14 ومرافق كل وحدة، ثم اطلب حجزك اليومي أو الشهري عبر واتساب.' },
    { property: 'og:title', content: 'ريلاكس زون 2 | شقق مفروشة فاخرة في جدة' }, { property: 'og:description', content: 'استعرض شقق ريلاكس زون 2 المفروشة في جدة، وتعرّف على شقة 14 ومرافق كل وحدة، ثم اطلب حجزك اليومي أو الشهري عبر واتساب.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Home,
})
