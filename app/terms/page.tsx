import { TermsContent } from "@/components/sections/legal/terms-content";

export const metadata = {
  title: "Terms of Service | Lydiam",
  description: "Terms of Service for Lydiam Group. Read our terms and conditions for using our services.",
};

export default function TermsPage() {
  return (
    <main className="pt-20">
      <TermsContent />
    </main>
  );
}
