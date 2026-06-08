import Link from "next/link";
import { OliveBranchFriezeFooter } from "@/components/svg/OliveBranchFrieze";
import { business, footerLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-dark text-sand px-[var(--shell-x)] pt-16 sm:pt-24 lg:pt-28 pb-8"
    >
      <OliveBranchFriezeFooter className="mb-12 sm:mb-16" />

      <div className="max-w-[1320px] mx-auto grid gap-10 sm:gap-12 lg:gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] mb-12 sm:mb-16">
        <div>
          <div
            className="text-light text-[clamp(3.2rem,6vw,5rem)] tracking-[-0.01em] leading-[0.95]"
            style={{ fontFamily: "var(--font-brand), 'Brush Script MT', cursive" }}
          >
            {business.name}
          </div>
          <p className="mt-3 text-[0.85rem] text-sand/70 max-w-[22ch] leading-[1.55]">
            Traiteur italien &amp; niçois à Asnières-sur-Seine. De Gênes à Saint-Tropez, une cuisine qui a le goût du Sud — recettes de famille, fait maison depuis 2022.
          </p>
        </div>

        <div>
          <h4 className="kicker text-accent mb-4">Contact</h4>
          <ul className="flex flex-col gap-2 text-[0.92rem] leading-[1.55] text-sand/85">
            <li>
              <a href={business.phoneHref} className="transition-colors hover:text-accent">
                {business.phone}
              </a>
            </li>
            <li>
              <a href={business.emailHref} className="transition-colors hover:text-accent break-all">
                {business.email}
              </a>
            </li>
            <li>
              {business.address.street}
              <br />
              {business.address.zip} {business.address.city}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="kicker text-accent mb-4">Horaires</h4>
          <ul className="flex flex-col gap-2 text-[0.92rem] leading-[1.55] text-sand/85">
            {business.hours.map((h) => (
              <li key={h.label}>
                {h.label} · {h.value}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="kicker text-accent mb-4">La maison</h4>
          <ul className="flex flex-col gap-2 text-[0.92rem] leading-[1.55] text-sand/85">
            {footerLinks.map((link) =>
              link.external ? (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>

      <hr className="max-w-[1320px] mx-auto border-0 h-px bg-sand/15 mb-8" />

      <div className="max-w-[1320px] mx-auto flex flex-wrap items-center justify-between gap-3 text-[0.78rem] text-sand/55">
        <span>© {new Date().getFullYear()} {business.name}. Tous droits réservés.</span>
        <span>
          Site créé par <a href="#" className="transition-colors hover:text-accent">DIGIFLOW</a>
        </span>
      </div>
    </footer>
  );
}
