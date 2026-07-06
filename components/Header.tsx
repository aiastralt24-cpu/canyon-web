"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/content";
import { Logo } from "./Logo";
import "./Header.css";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const primaryItems = navItems.filter((item) => item.label !== "Get in Touch");
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: "About Us", href: "/about-us" },
    { label: "Careers", href: "/careers" }
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

  useEffect(() => {
    const updateScrolled = () => {
      setScrolled(window.scrollY > 24);
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrolled);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 981px)");
    const closeDesktopMenu = () => {
      if (mediaQuery.matches) {
        setOpen(false);
      }
    };

    closeDesktopMenu();
    mediaQuery.addEventListener("change", closeDesktopMenu);

    return () => {
      mediaQuery.removeEventListener("change", closeDesktopMenu);
    };
  }, []);

  return (
    <header className={`site-header${scrolled ? " header-scrolled" : ""}`}>
      <div className="header-inner">
        <Logo />

        <nav className="desktop-nav" aria-label="Primary navigation">
          {primaryItems.map((item) => (
            <div className={`nav-group${item.label === "Solutions" ? " nav-group-dropdown" : ""}`} key={item.label}>
              <Link
                className="nav-link"
                href={item.href}
                aria-haspopup={item.label === "Solutions" ? "true" : undefined}
              >
                {item.label}
              </Link>
              {item.label === "Solutions" && item.children ? (
                <div className="nav-dropdown" aria-label="Solutions menu">
                  {item.children.map(([label, href, description]) => (
                    <Link className="nav-dropdown-link" href={href} key={href}>
                      <span>{label}</span>
                      {description ? <small>{description}</small> : null}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="header-actions">
          <Link className="btn primary header-cta" href="/contact#book-demo">
            Contact Us
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
                  <span className="mobile-link-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              ))}
            </div>

            <div className="mobile-menu-lower">
              <div className="mobile-menu-columns" aria-label="Quick links">
                <div>
                  <p>Solutions</p>
                  <Link href="/solutions/canyon-systems" onClick={() => setOpen(false)}>
                    Canyon Systems
                  </Link>
                  <Link href="/solutions/canyon-grid" onClick={() => setOpen(false)}>
                    Canyon Grid
                  </Link>
                  <Link href="/solutions/canyon-edge" onClick={() => setOpen(false)}>
                    Canyon Edge
                  </Link>
                </div>
                <div>
                  <p>Explore</p>
                  <Link href="/about-us#our-approach" onClick={() => setOpen(false)}>
                    Our Approach
                  </Link>
                  <Link href="/about-us#who-we-help" onClick={() => setOpen(false)}>
                    Who We Help
                  </Link>
                  <Link href="/about-us#why-canyon" onClick={() => setOpen(false)}>
                    Why Canyon
                  </Link>
                </div>
                <div>
                  <p>Company</p>
                  <Link href="/about-us" onClick={() => setOpen(false)}>
                    About Canyon
                  </Link>
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Contact
                  </Link>
                </div>
              </div>

              <Link className="mobile-contact-pill" href="/contact#book-demo" onClick={() => setOpen(false)}>
                <span>Contact Us</span>
                <span>Start A Conversation</span>
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
