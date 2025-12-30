import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: "Home", href: "/" },
      { name: "Vision", href: "/about" },
      { name: "Solutions", href: "/solutions" },
      { name: "Impact", href: "/impact" },
      { name: "Contact", href: "/contact" },
    ],
    Services: [
      { name: "Digital Assets", href: "/solutions/crypto" },
      { name: "Corporate FX", href: "/solutions/fx" },
      { name: "Private FX", href: "/solutions/private" },
      { name: "Partnership", href: "/about/partners" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/legal/privacy" },
      { name: "Terms of Service", href: "/legal/terms" },
    ],
  };

  return (
    <footer className="bg-dark-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-organetto text-2xl font-bold tracking-tighter">
                LYDIAM
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              A financial operating system for global clients. One onboarding, one platform, one relationship.
            </p>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-organetto text-sm font-bold mb-6 text-primary-500 uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer Section */}
        <div className="border-t border-gray-800 pt-8 space-y-4 text-xs text-gray-500">
          <p>
            Lydiam Group’s payment and foreign currency exchange services are provided by Global Currency Exchange Network Ltd T/A GC Partners. Global Currency Exchange Network Ltd is authorised by the FCA under the Payment Services Regulations, 2017 (FRN: 504346). Registered as a Money Services Business, regulated by HM Revenue & Customs (“HMRC”) under the Money Laundering Regulations 2017. (Registration number is 12137189). Registered in England and Wales. Company number 04675786. Registered Office 3rd Floor 100 New Bond Street, London, England, W1S 1SP.
          </p>
          <p>
            Lydiam Group’s digital asset services are provided by LYDIAM GROUP SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ, a company registered in Poland. LYDIAM GROUP is registered in the Register of Activities in the Field of Virtual Currencies maintained by the Director of the Tax Administration Chamber in Katowice, under registration number RDWW – 1486 and certificate number 2401-CKRDST.4225.682.2024. AHEADS complies with applicable Anti-Money Laundering and Counter-Terrorist Financing regulations and operates under the transitional provisions of the MiCA Regulation (EU 2023/1114).
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} Lydiam. All rights reserved.</p>
          <div className="flex gap-6">
            {/* Social links could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
};
