import { createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, HeartHandshake, MapPin, ShieldCheck, Sparkles } from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { apartmentUnits } from '@/components/site/site-data'



const values = [
  { icon: HeartHandshake, title: 'ضيافة باهتمام', text: 'نحرص على تواصل واضح وتجربة ترحيب مريحة من أول استفسار.' },
  { icon: Sparkles, title: 'عناية بالتفاصيل', text: 'مساحات مرتبة ومفروشة بعناية لتناسب احتياجات إقامتك.' },
  { icon: ShieldCheck, title: 'خصوصية وراحة', text: 'نقدّر حاجتك لمساحة هادئة تشعر فيها بالاطمئنان.' },
  { icon: MapPin, title: 'في حي الشاطئ', text: 'عنواننا في جدة، مع معلومات وصول واضحة قبل زيارتك.' },
]

function AboutPage() {
  return <main className="inner-page" dir="rtl">
    <PageHero image="/relax-zone-building.jpg" eyebrow="من نحن · ريلاكس زون 2" title="ضيافة تبدأ" highlight="من اهتمامنا بك" description="شقق مفروشة في حي الشاطئ بجدة، نجهزها لتكون مساحة مريحة لرحلتك، ونعتني بالتفاصيل التي تجعل الإقامة أسهل." cta="استكشف شققنا" href="/gallery" />
    <section className="section-wrap about-page-intro"><div className="about-page-image"><img src={apartmentUnits.find((unit) => unit.number === '19')?.photos[1].src ?? apartmentUnits[0].photos[1].src} alt="صالة مريحة في إحدى شقق ريلاكس زون 2" loading="lazy" /></div><div className="about-page-copy"><span className="eyebrow">حكايتنا في جدة</span><h2>مكان يجمع بين <em>الراحة والاهتمام</em></h2><p>ريلاكس زون 2 للشقق المفروشة هي وجهة إقامة في حي الشاطئ. نؤمن أن التجربة الجيدة تبدأ من وضوح التفاصيل: صور تعرّفك على كل وحدة، معلومات تساعدك على الاختيار، وتواصل مباشر عند طلب الحجز.</p><p>سواء كانت زيارتك قصيرة أو امتدت لأيام، نريد أن تجد مساحة مرتبة ومريحة تعود إليها بعد يومك في جدة.</p><div className="about-page-actions"><a className="button-gold" href="/gallery">تعرّف على الشقق <ArrowLeft size={16} /></a><a className="text-link" href="/location">اعرف موقعنا <ArrowLeft size={16} /></a></div></div></section>
    <section className="about-values-section"><div className="section-wrap"><div className="section-title"><span className="eyebrow">ما نحرص عليه</span><h2>تجربة ضيافة بتفاصيل واضحة</h2><p>قيم بسيطة توجّه طريقة تجهيزنا للشقق والتواصل مع ضيوفنا.</p></div><div className="about-values-grid">{values.map(({ icon: Icon, title, text }) => <article className="about-value-card" key={title}><span><Icon size={21} /></span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="trust-quote"><span>مساحتك القادمة في جدة</span><p>اكتشف الوحدات، اختر ما يناسب إقامتك، ودعنا نساعدك في تفاصيل الحجز.</p><a className="button-gold" href="/booking">ابدأ طلب الحجز</a></section>
  </main>
}

export const Route = createFileRoute('/about')({
  head: () => ({ meta: [
    { title: 'من نحن | ريلاكس زون 2 للشقق المفروشة في جدة' }, { name: 'description', content: 'تعرّف على ريلاكس زون 2 وفلسفتنا في الضيافة والراحة والخصوصية في حي الشاطئ بجدة.' },
    { property: 'og:title', content: 'من نحن | ريلاكس زون 2 للشقق المفروشة في جدة' }, { property: 'og:description', content: 'تعرّف على ريلاكس زون 2 وفلسفتنا في الضيافة والراحة والخصوصية في حي الشاطئ بجدة.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: AboutPage,
})
