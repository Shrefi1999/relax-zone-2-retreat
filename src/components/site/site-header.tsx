
import { useState } from 'react'
import { useLocation } from '@tanstack/react-router'
import { ArrowLeft, Menu, X } from 'lucide-react'
import { logoUrl, sitePages } from './site-data'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = useLocation({ select: (l) => l.pathname })

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="ريلاكس زون 2 - الرئيسية"><img className="brand-logo" src={logoUrl} alt="شعار ريلاكس زون 2" /></a>
      <button className="menu-toggle" aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="التنقل الرئيسي">
        {sitePages.map((page) => <a key={page.href} href={page.href} aria-current={pathname === page.href ? 'page' : undefined} onClick={() => setOpen(false)}>{page.label}</a>)}
        <a className="nav-book" href="/booking" onClick={() => setOpen(false)}>احجز إقامتك <ArrowLeft size={16} /></a>
      </nav>
    </header>
  )
}
