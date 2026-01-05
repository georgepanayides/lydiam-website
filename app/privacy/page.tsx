import { PrivacyContent } from "@/components/sections/legal/privacy-content";

export const metadata = {
  title: "Privacy Policy | Lydiam",
  description: "Privacy Policy for Lydiam Group. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-20">
      <PrivacyContent />
    </main>
  );
}
