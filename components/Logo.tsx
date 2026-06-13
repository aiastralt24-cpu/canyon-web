import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link className="logo-link" href="/" aria-label="Canyon Data Labs home">
      <Image
        src="/images/canyon-data-labs-logo.png"
        alt="Canyon Data Labs"
        width={220}
        height={124}
        priority
      />
    </Link>
  );
}
