import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-page py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand column */}
        <div className="flex flex-col gap-y-4">
          <div className="bg-white rounded-xl p-2 inline-block w-fit">
            <Image
              src="/logo/logo.webp"
              width={1000}
              height={1000}
              className="w-28"
              alt="Prospera logo"
            />
          </div>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
            Helping Indian high-schoolers choose the right career path — with clarity, confidence, and expert guidance.
          </p>
        </div>

        {/* Quick links column */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            {[
              { label: "Explore Careers", href: "/explore" },
              { label: "Showcase", href: "/showcase" },
              { label: "Services", href: "/#services" },
              { label: "Process", href: "/#process" },
              { label: "Guarantees", href: "/#guarentees" },
              { label: "Resource Portal", href: "/explore/resource" },
            ].map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="text-slate-400 hover:text-brand-400 transition-colors duration-200">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-x-2.5 text-slate-400">
              <Phone size={15} className="text-brand-400 flex-shrink-0" />
              <a href="tel:8534982098" className="hover:text-brand-400 transition-colors">853-498-2098</a>
            </li>
            <li className="flex items-center gap-x-2.5 text-slate-400">
              <Mail size={15} className="text-brand-400 flex-shrink-0" />
              <a href="mailto:admin@prospera_career.in" className="hover:text-brand-400 transition-colors">
                admin@prospera_career.in
              </a>
            </li>
            <li className="flex items-center gap-x-2.5 text-slate-400">
              <MessageCircle size={15} className="text-brand-400 flex-shrink-0" />
              <Link href="/meeting" className="hover:text-brand-400 transition-colors">
                Chat with our counsellor
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container-page py-4 flex flex-col md:flex-row items-center justify-between gap-y-2 text-xs text-slate-500">
          <span>© 2024 Prospera. All Rights Reserved.</span>
          <Link href="/" className="hover:text-brand-400 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
