import { ArrowUpLeft } from 'lucide-react'

export function PageHero({ image, eyebrow, title, highlight, description, cta, href = '/booking', imageHref }: { image: string; eyebrow: string; title: string; highlight: string; description: string; cta?: string; href?: string; imageHref?: string }) {
  const heroImage = <img className="page-hero-image" src={image} alt={`${eyebrow} — ${title} ${highlight}`} fetchPriority="high" />

  return (
    <section className="page-hero">
      {imageHref ? <a className="blog-image-link page-hero-image-link" href={imageHref} aria-label={`افتح المقال: ${title} ${highlight}`}>{heroImage}</a> : heroImage}
      <div className="page-hero-content"><span className="eyebrow">{eyebrow}</span><h1>{title}<br /><em>{highlight}</em></h1><p>{description}</p>{cta && <a className="button-gold" href={href} target={href.startsWith('https://') ? '_blank' : undefined} rel={href.startsWith('https://') ? 'noreferrer' : undefined}>{cta}<ArrowUpLeft size={17} /></a>}</div>
    </section>
  )
}
