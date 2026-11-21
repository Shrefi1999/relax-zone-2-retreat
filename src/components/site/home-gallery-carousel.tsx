
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type GalleryImage = { src: string; alt: string }

export function HomeGalleryCarousel({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const move = (direction: number) => setActiveIndex((current) => (current + direction + images.length) % images.length)

  return <section className="home-gallery" id="apartment-tour" dir="rtl" aria-labelledby="home-gallery-title">
    <header className="home-gallery-heading"><span className="eyebrow">ريلاكس زون · جدة</span><h2 id="home-gallery-title">جولة داخل الشقق</h2><p>اسحب الصور يميناً ويساراً أو استخدم الأسهم لتدويرها.</p></header>
    <div className="home-gallery-track" aria-label="معرض صور الشقق">
      {images.map((image, index) => {
        const position = (index - activeIndex + images.length) % images.length
        return <img key={image.src} className={`home-gallery-image home-gallery-position-${position}`} src={image.src} alt={image.alt} loading={position === 0 ? 'eager' : 'lazy'} />
      })}
    </div>
    <div className="home-gallery-controls"><button type="button" aria-label="الصورة السابقة" onClick={() => move(-1)} className="home-gallery-arrow"><ChevronRight /></button><strong>غرفة النوم · غرفتين وصالة</strong><button type="button" aria-label="الصورة التالية" onClick={() => move(1)} className="home-gallery-arrow"><ChevronLeft /></button></div>
  </section>
}
