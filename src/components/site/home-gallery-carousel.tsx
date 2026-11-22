
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

type GalleryImage = { src: string; alt: string }

export function HomeGalleryCarousel({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const pointerStart = useRef<number | null>(null)
  const move = (direction: number) => setActiveIndex((current) => (current + direction + images.length) % images.length)

  return <section className="home-gallery" id="apartment-tour" dir="rtl" aria-labelledby="home-gallery-title">
    <header className="home-gallery-heading"><span className="eyebrow">ريلاكس زون · جدة</span><h2 id="home-gallery-title">جولة داخل الشقق</h2><p>مساحات حقيقية، وتفاصيل تمنح إقامتك راحة أكبر.</p></header>
    <div className="home-gallery-track" aria-label="معرض صور الشقق" onPointerDown={(event) => { pointerStart.current = event.clientX }} onPointerCancel={() => { pointerStart.current = null }} onPointerUp={(event) => {
      if (pointerStart.current !== null && Math.abs(event.clientX - pointerStart.current) > 40) move(event.clientX > pointerStart.current ? -1 : 1)
      pointerStart.current = null
    }}>
      {images.map((image, index) => {
        const position = (index - activeIndex + images.length) % images.length
        return <img key={image.src} className={`home-gallery-image home-gallery-position-${position}`} src={image.src} alt={image.alt} draggable={false} loading={position === 0 ? 'eager' : 'lazy'} />
      })}
    </div>
    <div className="home-gallery-controls"><Button variant="ghost" size="icon" aria-label="الصورة السابقة" title="الصورة السابقة" onClick={() => move(-1)} className="home-gallery-arrow"><ChevronRight /></Button><strong aria-live="polite">{images[activeIndex]?.alt}</strong><Button variant="ghost" size="icon" aria-label="الصورة التالية" title="الصورة التالية" onClick={() => move(1)} className="home-gallery-arrow"><ChevronLeft /></Button></div>
  </section>
}
