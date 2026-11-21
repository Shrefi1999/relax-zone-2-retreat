
import { useState } from 'react'
import { ArrowLeft, Bath, BedDouble, ChevronDown, ChevronLeft, ChevronRight, Coffee, Images, Sofa, Sun } from 'lucide-react'
import { apartmentUnits } from './site-data'

type ApartmentUnit = (typeof apartmentUnits)[number]

function ApartmentCard({ unit, compact }: { unit: ApartmentUnit; compact: boolean }) {
  const [selectedPhoto, setSelectedPhoto] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const photo = unit.photos[selectedPhoto]
  const lightboxGroup = `apartment-${unit.number}`
  const visiblePhotos = compact ? unit.photos.slice(0, 3) : unit.photos

  const movePhoto = (direction: number) => {
    setSelectedPhoto((current) => (current + direction + unit.photos.length) % unit.photos.length)
  }

  return <article className={`unit-card ${expanded ? 'is-expanded' : ''}`} id={`unit-${unit.number}`} aria-labelledby={`unit-title-${unit.number}`}>
    <div className="unit-card-cover">
      <img src={photo.src} alt={photo.alt} data-lightbox-group={lightboxGroup} loading="lazy" />
      <div className="unit-cover-shade" />
      <div className="unit-cover-top"><span className="unit-kicker">إقامة مفروشة في جدة</span><span className="unit-photo-count"><Images size={15} /> {unit.photos.length} صور</span></div>
      <div className="unit-cover-bottom"><h3 id={`unit-title-${unit.number}`}>{unit.title}</h3><ul className="unit-feature-preview" aria-label={`مرافق ${unit.title}`}>{unit.features.slice(0, 3).map((feature) => <li key={feature}>{feature}</li>)}</ul></div>
      <span className="unit-photo-counter">{String(selectedPhoto + 1).padStart(2, '0')} <i>/</i> {String(unit.photos.length).padStart(2, '0')}</span>
      {unit.photos.length > 1 && <div className="unit-cover-arrows"><button type="button" aria-label={`الصورة السابقة من ${unit.title}`} onClick={() => movePhoto(-1)}><ChevronRight size={18} /></button><button type="button" aria-label={`الصورة التالية من ${unit.title}`} onClick={() => movePhoto(1)}><ChevronLeft size={18} /></button></div>}
      <button className="unit-expand-toggle" type="button" aria-expanded={expanded} aria-controls={`unit-details-${unit.number}`} onClick={() => setExpanded((value) => !value)}>{expanded ? 'إخفاء التفاصيل' : 'اكتشف الوحدة'} <ChevronLeft size={16} /></button>
    </div>
    <div className="unit-card-content" id={`unit-details-${unit.number}`}>
      <ul className="unit-features" aria-label={`مرافق ${unit.title}`}>{unit.features.map((feature) => {
        const Icon = feature.includes('نوم') || feature.includes('غرفة') ? BedDouble : feature.includes('صالة') || feature.includes('جلسة') ? Sofa : feature.includes('مطبخ') ? Coffee : feature.includes('حمام') ? Bath : Sun
        return <li key={feature}><Icon size={16} /> {feature}</li>
      })}</ul>
      <div className="unit-thumbnail-rail" role="group" aria-label={`اختر صورة من ${unit.title}`}>
        {visiblePhotos.map((thumbnail, index) => <button className={`unit-thumbnail ${selectedPhoto === index ? 'active' : ''}`} key={thumbnail.src} type="button" aria-label={`عرض ${thumbnail.alt}`} aria-pressed={selectedPhoto === index} onClick={() => setSelectedPhoto(index)}><img src={thumbnail.src} alt="" loading="lazy" /></button>)}
        {compact && visiblePhotos.length < unit.photos.length && <a className="unit-thumbnail-more" href={`/gallery#unit-${unit.number}`} aria-label={`عرض جميع صور ${unit.title}`}><Images size={18} /><strong>+{unit.photos.length - visiblePhotos.length}</strong><small>صور أخرى</small></a>}
      </div>
      <div className="unit-card-footer"><span>{compact ? 'تفاصيل الوحدة ومعرضها الكامل' : 'تصفّح صور الوحدة قبل الحجز'}</span><a href={compact ? `/gallery#unit-${unit.number}` : `/booking?unit=${unit.number}`} aria-label={compact ? `شاهد صور ${unit.title}` : `اطلب حجز ${unit.title}`}>{compact ? 'كل الصور' : 'اطلب حجز هذه الوحدة'} <ArrowLeft size={16} /></a></div>
    </div>
  </article>
}

export function ApartmentListings({ compact = false }: { compact?: boolean }) {
  const [showAllMobile, setShowAllMobile] = useState(false)
  const sortedUnits = [...apartmentUnits].sort((first, second) => Number(first.number) - Number(second.number))

  return <>
    <div className={`apartment-listings ${compact ? 'compact-listings' : 'full-listings'} ${showAllMobile ? 'show-all-mobile' : ''}`}>
      {sortedUnits.map((unit) => <ApartmentCard key={unit.number} unit={unit} compact={compact} />)}
    </div>
    {compact && <button className="apartments-show-more" type="button" aria-expanded={showAllMobile} onClick={() => setShowAllMobile((visible) => !visible)}>{showAllMobile ? 'عرض شقق أقل' : 'شاهد المزيد من الشقق'} <ChevronDown size={18} aria-hidden="true" /></button>}
  </>
}
