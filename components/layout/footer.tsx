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
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  };

  return (
    <footer className="bg-white dark:bg-dark-900 text-gray-900 dark:text-white pt-20 pb-12 border-t border-gray-100 dark:border-dark-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand Column - Takes up 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="inline-block group">
              <span className="font-organetto text-3xl font-bold tracking-tighter text-dark-900 dark:text-white group-hover:text-primary-500 transition-colors">
                LYDIAM
              </span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-sm font-medium">
              A financial operating system for global clients. One onboarding, one platform, one relationship.
            </p>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col space-y-6">
              <h3 className="font-organetto text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                {category}
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer Section - More muted and smaller */}
        <div className="border-t border-gray-100 dark:border-dark-800 pt-12 space-y-6 text-[11px] leading-relaxed text-gray-400 dark:text-gray-600">
          <p>
            Lydiam Group’s payment and foreign currency exchange services are provided by Global Currency Exchange Network Ltd T/A GC Partners. Global Currency Exchange Network Ltd is authorised by the FCA under the Payment Services Regulations, 2017 (FRN: 504346). Registered as a Money Services Business, regulated by HM Revenue & Customs (“HMRC”) under the Money Laundering Regulations 2017. (Registration number is 12137189). Registered in England and Wales. Company number 04675786. Registered Office 3rd Floor 100 New Bond Street, London, England, W1S 1SP.
          </p>
          <p>
            Lydiam Group’s digital asset services are provided by LYDIAM GROUP SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ, a company registered in Poland. LYDIAM GROUP is registered in the Register of Activities in the Field of Virtual Currencies maintained by the Director of the Tax Administration Chamber in Katowice, under registration number RDWW – 1486 and certificate number 2401-CKRDST.4225.682.2024. AHEADS complies with applicable Anti-Money Laundering and Counter-Terrorist Financing regulations and operates under the transitional provisions of the MiCA Regulation (EU 2023/1114).
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-dark-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-400 dark:text-gray-500">
          <p>© {currentYear} Lydiam. All rights reserved.</p>
          <div className="flex gap-6">
            {/* Social links could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
};
