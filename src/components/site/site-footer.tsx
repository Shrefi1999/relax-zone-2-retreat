import { ArrowUpLeft, MapPin, Phone } from 'lucide-react'
import { blogPosts } from './blog-data'
import { logoUrl, mapUrl, phoneNumber, tiktokUrl } from './site-data'

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-brand-block">
        <a className="brand" href="/" aria-label="ريلاكس زون 2 - الرئيسية"><img className="brand-logo footer-logo" src={logoUrl} alt="شعار ريلاكس زون 2" /></a>
        <p>ضيافة صادقة، وتفاصيل تجعل إقامتك أجمل.</p>
      </div>
      <nav className="footer-nav" aria-label="روابط سريعة في التذييل"><a href="/">الرئيسية</a><a href="/gallery">الشقق</a><a href="/about">من نحن</a><a href="/location">الموقع</a><a className="footer-book-link" href="/booking">احجز الآن <ArrowUpLeft className="footer-book-icon" size={15} aria-hidden="true" /></a><a href="/blog">المدونة</a></nav>
      <section className="footer-blog" aria-labelledby="footer-blog-title"><div className="footer-blog-heading"><div><span className="footer-blog-kicker">من مدونة ريلاكس زون</span><h2 id="footer-blog-title">أفكار لإقامة أجمل</h2></div><a href="/blog">كل المقالات <ArrowUpLeft size={15} /></a></div><div className="footer-blog-list">{blogPosts.map((post) => <a className="footer-blog-card" href={`/blog#${post.id}`} key={post.id}><img src={post.image} alt={post.title} loading="lazy" /><span className="footer-blog-card-copy"><small>{post.category}</small><strong>{post.title}</strong><span>اقرأ المقال <ArrowUpLeft size={13} /></span></span></a>)}</div></section>
      <div className="footer-info-grid">
        <a className="footer-info-card footer-location-card" href={mapUrl} target="_blank" rel="noreferrer">
          <span className="footer-info-icon"><MapPin size={20} /></span>
          <span className="footer-info-copy"><small>عنواننا في جدة</small><strong>حي الشاطئ — موقع يقرّبك من كل شيء</strong></span>
          <ArrowUpLeft className="footer-info-arrow" size={17} />
        </a>
        <a className="footer-info-card footer-phone-card" href={`tel:+${phoneNumber}`}>
          <span className="footer-info-icon"><Phone size={20} /></span>
          <span className="footer-info-copy"><small>للحجز والاستفسار</small><strong dir="ltr">+966 56 092 0209</strong></span>
          <ArrowUpLeft className="footer-info-arrow" size={17} />
        </a>
        <a className="footer-info-card footer-social-card" href={tiktokUrl} target="_blank" rel="noreferrer">
          <span className="footer-social-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M19.6 7.2a6.8 6.8 0 0 1-4.3-1.5v8.1a6.2 6.2 0 1 1-5.4-6.1v3.4a2.8 2.8 0 1 0 2 2.7V2h3.5c.2 2.1 1.8 3.8 4.2 4.1v1.1Z" fill="currentColor" /></svg></span>
          <span className="footer-info-copy"><small>تابعنا على TikTok</small><strong>شاهد الأجواء والعروض الجديدة</strong></span>
          <ArrowUpLeft className="footer-info-arrow" size={17} />
        </a>
      </div>
      <div className="footer-socials" aria-label="حسابات التواصل"><span className="footer-socials-title">تابعنا وتواصل معنا</span><a className="footer-social-link footer-social-tiktok" href={tiktokUrl} target="_blank" rel="noreferrer" aria-label="تابع ريلاكس زون 2 على تيك توك"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.6 7.2a6.8 6.8 0 0 1-4.3-1.5v8.1a6.2 6.2 0 1 1-5.4-6.1v3.4a2.8 2.8 0 1 0 2 2.7V2h3.5c.2 2.1 1.8 3.8 4.2 4.1v1.1Z" fill="currentColor" /></svg><span>TikTok</span></a><a className="footer-social-link footer-social-whatsapp" href="https://wa.me/966560920209" target="_blank" rel="noreferrer" aria-label="تواصل مع ريلاكس زون 2 على واتساب"><svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.04 3C8.88 3 3.06 8.75 3.06 15.83c0 2.26.6 4.47 1.75 6.4L3 29l6.99-1.82a13.1 13.1 0 0 0 6.05 1.47h.01c7.16 0 12.98-5.76 12.98-12.83A12.7 12.7 0 0 0 25.2 6.7 12.95 12.95 0 0 0 16.04 3Zm.01 23.48c-1.9 0-3.76-.5-5.38-1.45l-.39-.23-4.14 1.08 1.1-4.01-.26-.41a10.5 10.5 0 0 1-1.63-5.63c0-5.85 4.8-10.6 10.7-10.6 2.85 0 5.53 1.1 7.54 3.1a10.48 10.48 0 0 1 3.13 7.5c0 5.86-4.8 10.62-10.67 10.62Z" /></svg><span>WhatsApp</span></a><span className="footer-social-mark footer-social-facebook" role="img" aria-label="Facebook"><img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/facebook/default.svg" alt="" /><span>Facebook</span></span><span className="footer-social-mark footer-social-x" role="img" aria-label="X، تويتر سابقاً"><img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/x/default.svg" alt="" /><span>X</span></span><span className="footer-social-mark footer-social-snapchat" role="img" aria-label="Snapchat"><img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/snapchat/default.svg" alt="" /><span>Snapchat</span></span><span className="footer-social-mark footer-social-instagram" role="img" aria-label="Instagram"><img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/instagram/default.svg" alt="" /><span>Instagram</span></span></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} ريلاكس زون 2. جميع الحقوق محفوظة.</span><span>إقامتك المريحة في جدة</span></div>
    </footer>
  )
}
