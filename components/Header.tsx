"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/content";
import { Logo } from "./Logo";
import "./Header.css";

export function Header() {
  const [open, setOpen] = useState(false);
  const primaryItems = navItems.filter((item) => item.label !== "Get in Touch");
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: "Use Cases", href: "/about-us#who-we-help" },
    { label: "Platform", href: "/about-us#our-approach" },
    { label: "Book A Demo", href: "/contact#book-demo" }
  ];

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />

        <nav className="desktop-nav" aria-label="Primary navigation">
          {primaryItems.map((item) => (
            <div className="nav-group" key={item.label}>
              <Link className="nav-link" href={item.href}>
                {item.label === "About Us" ? "About" : item.label}
              </Link>
            </div>
          ))}
        </nav>

        <div className="header-actions">
          <Link className="btn primary header-cta" href="/contact#book-demo">
            Book a Demo
          </Link>

          <button
            className="menu-toggle"
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Open site menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {open ? (
        <div className="mobile-menu-shell" id="mobile-menu">
          <button className="mobile-menu-scrim" type="button" aria-label="Close menu" onClick={() => setOpen(false)} />
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <div className="mobile-menu-top">
              <button className="mobile-close" type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
                <span />
                <span />
              </button>
              <Logo />
            </div>

            <div className="mobile-link-list">
              {menuItems.map((item) => (
                <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>
                  <span>{item.label}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>

            <div className="mobile-menu-columns" aria-label="Quick links">
              <div>
                <p>Solutions</p>
                <Link href="/solutions/canyon-edge" onClick={() => setOpen(false)}>
                  Canyon Edge
                </Link>
                <Link href="/solutions/canyon-grid" onClick={() => setOpen(false)}>
                  Canyon Grid
                </Link>
                <Link href="/solutions/canyon-systems" onClick={() => setOpen(false)}>
                  Canyon Systems
                </Link>
              </div>
              <div>
                <p>Use Cases</p>
                <Link href="/about-us#who-we-help" onClick={() => setOpen(false)}>
                  Operational Intelligence
                </Link>
                <Link href="/resources/insights" onClick={() => setOpen(false)}>
                  Executive Dashboards
                </Link>
                <Link href="/solutions" onClick={() => setOpen(false)}>
                  Decision Intelligence
                </Link>
              </div>
              <div>
                <p>Company</p>
                <Link href="/about-us" onClick={() => setOpen(false)}>
                  Customers
                </Link>
                <Link href="/resources" onClick={() => setOpen(false)}>
                  How Canyon Works
                </Link>
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Contact
                </Link>
              </div>
            </div>

            <Link className="mobile-contact-pill" href="/contact" onClick={() => setOpen(false)}>
              <span>Enterprise Intelligence Systems</span>
              <span>Start A Conversation</span>
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
