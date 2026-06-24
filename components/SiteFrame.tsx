import { Footer } from "./Footer";
import { Header } from "./Header";
import { MotionProvider } from "./MotionProvider";

export function SiteFrame({ children, className }: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <div className={["site-shell", className].filter(Boolean).join(" ")}>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <MotionProvider />
    </div>
  );
}
