import { createFileRoute } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import { blogPosts } from '@/components/site/blog-data'
import { PageHero } from '@/components/site/page-hero'



function BlogPage() {
  return <main className="inner-page" dir="rtl">
    <PageHero image={blogPosts[0].image} imageHref={`/blog#${blogPosts[0].id}`} eyebrow="مدونة ريلاكس زون 2" title="أفكار تساعدك" highlight="على إقامة أجمل" description="نصائح عملية لاختيار الشقة والتخطيط لرحلتك والاستمتاع بتفاصيل الإقامة." cta="استكشف الشقق" href="/gallery" />
    <section className="section-wrap blog-page-section">
      <div className="section-title"><span className="eyebrow">دليلك لإقامة مريحة</span><h2>من مدونتنا</h2><p>محتوى بسيط يساعدك على الاستعداد لرحلتك واختيار المساحة الأنسب.</p></div>
      <div className="blog-article-list">{blogPosts.map((post) => <article className="blog-article" id={post.id} key={post.id}>
        <a className="blog-image-link blog-article-image-link" href={`/blog#${post.id}`} aria-label={`افتح المقال: ${post.title}`}><img src={post.image} alt={post.title} loading="lazy" /></a>
        <div className="blog-article-copy"><span className="eyebrow">{post.category}</span><h2>{post.title}</h2><p className="blog-excerpt">{post.excerpt}</p>{post.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<a className="text-link" href="/booking">خطط لإقامتك <ArrowLeft size={16} /></a></div>
      </article>)}</div>
    </section>
  </main>
}

export const Route = createFileRoute('/blog')({
  head: () => ({ meta: [
    { title: 'مدونة ريلاكس زون 2 | نصائح لإقامة مريحة في جدة' }, { name: 'description', content: 'أفكار ونصائح تساعدك على اختيار الشقة والتخطيط لإقامة أهدأ في جدة.' },
    { property: 'og:title', content: 'مدونة ريلاكس زون 2 | نصائح لإقامة مريحة في جدة' }, { property: 'og:description', content: 'أفكار ونصائح تساعدك على اختيار الشقة والتخطيط لإقامة أهدأ في جدة.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: BlogPage,
})
