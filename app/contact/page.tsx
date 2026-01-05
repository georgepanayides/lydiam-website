import { ContactHero } from "@/components/sections/contact/hero";
import { ContactDetails } from "@/components/sections/contact/contact-details";
import { RegulatoryNote } from "@/components/sections/contact/regulatory-note";

export const metadata = {
  title: "Contact Us | Lydiam",
  description: "Get in touch with Lydiam Group. We operate globally with offices in the UK, UAE, and India.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactDetails />
      <RegulatoryNote />
    </main>
  );
}
