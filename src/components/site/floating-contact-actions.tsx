
import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'

export function FloatingContactActions() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('home')
    if (!hero || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(!entry.isIntersecting)
    }, { threshold: 0 })

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return <div className="floating-contact-actions" hidden={!isVisible}>
    <a className="phone-float" href="tel:+966560920209" aria-label="اتصل بنا هاتفياً"><Phone aria-hidden="true" /></a>
    <a className="whatsapp-float" href="https://wa.me/966560920209" target="_blank" rel="noreferrer" aria-label="تواصل معنا عبر واتساب"><svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.04 3C8.88 3 3.06 8.75 3.06 15.83c0 2.26.6 4.47 1.75 6.4L3 29l6.99-1.82a13.1 13.1 0 0 0 6.05 1.47h.01c7.16 0 12.98-5.76 12.98-12.83A12.7 12.7 0 0 0 25.2 6.7 12.95 12.95 0 0 0 16.04 3Zm.01 23.48c-1.9 0-3.76-.5-5.38-1.45l-.39-.23-4.14 1.08 1.1-4.01-.26-.41a10.5 10.5 0 0 1-1.63-5.63c0-5.85 4.8-10.6 10.7-10.6 2.85 0 5.53 1.1 7.54 3.1a10.48 10.48 0 0 1 3.13 7.5c0 5.86-4.8 10.62-10.67 10.62Zm5.87-7.95c-.32-.16-1.9-.93-2.2-1.03-.3-.11-.51-.16-.73.16-.21.32-.83 1.03-1.02 1.24-.19.22-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.84-1.6-1.87-1.79-2.19-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.1-.22.05-.4-.03-.56-.08-.16-.73-1.73-1-2.37-.26-.62-.53-.54-.73-.55l-.62-.01c-.21 0-.56.08-.86.4-.3.33-1.13 1.1-1.13 2.67 0 1.57 1.16 3.08 1.32 3.3.16.22 2.28 3.45 5.52 4.84.77.33 1.37.53 1.84.68.77.24 1.47.2 2.02.12.62-.09 1.9-.77 2.17-1.52.27-.76.27-1.4.19-1.53-.08-.14-.3-.22-.62-.38Z" /></svg></a>
  </div>
}
