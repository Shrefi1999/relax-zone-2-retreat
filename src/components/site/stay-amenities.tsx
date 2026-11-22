import { Accessibility, BedDouble, CookingPot, KeyRound, MapPin, MessageCircle, Sparkles, Wifi } from 'lucide-react'

const amenities = [
  { icon: CookingPot, title: 'مطبخ مجهّز بالكامل', description: 'مطبخ وأجهزة للاستخدام اليومي، مع غسالة وثلاجة وميكروويف في الشقق عدا الاستديو.' },
  { icon: BedDouble, title: 'أثاث متكامل', description: 'غرف نوم مريحة ومساحات جلوس مفروشة، بتفاصيل تجعل إقامتك أقرب إلى البيت.' },
  { icon: Wifi, title: 'إنترنت سريع', description: 'واي فاي مجاني في جميع الشقق، لتبقى على اتصال طوال إقامتك.' },
  { icon: Sparkles, title: 'نظافة منتظمة', description: 'تنظيف أسبوعي وتبديل المفروشات بانتظام، لإقامة تستمتع بكل تفاصيلها.' },
  { icon: KeyRound, title: 'دخول ذاتي', description: 'كود لباب الشقة أو استلام المفتاح من الاستقبال، لبداية إقامة مريحة.' },
  { icon: MapPin, title: 'موقع مناسب', description: 'في حي الشاطئ بجدة، بالقرب من الخدمات والمطاعم ووجهات المدينة.' },
  { icon: Accessibility, title: 'راحة في الوصول', description: 'مصعد يخدم جميع الأدوار لراحة كبار السن وضيوفنا ذوي الهمم.' },
  { icon: MessageCircle, title: 'دعم مباشر', description: 'نتواصل معك عبر واتساب طوال أيام الأسبوع للاهتمام باحتياجات إقامتك.' },
]

export function StayAmenities() {
  return <section className="stay-amenities" aria-labelledby="stay-amenities-title">
    <div className="section-wrap">
      <header className="section-title amenities-heading"><span className="eyebrow">تفاصيل تصنع الراحة</span><h2 id="stay-amenities-title">ماذا تجد في <bdi>Relax Zone2</bdi></h2><p>التفاصيل التي تجعل الإقامة مريحة من أول ليلة.</p></header>
      <div className="stay-amenities-grid">{amenities.map(({ icon: Icon, title, description }) => <article className="stay-amenity" key={title}>
        <Icon size={24} strokeWidth={1.5} aria-hidden="true" /><div><h3>{title}</h3><p>{description}</p></div>
      </article>)}</div>
    </div>
  </section>
}