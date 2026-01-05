import { FadeIn } from "@/components/ui/motion";

export const TermsContent = () => {
  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h1 className="font-organetto text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-8">
              Terms of <span className="text-primary-500">Service</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-12 text-lg">
              Last updated: January 2026
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-12 text-gray-600 dark:text-gray-300">
              
              <section>
                <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">1. Agreement to Terms</h2>
                <p>
                  These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;you&quot;) and Lydiam Group (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), concerning your access to and use of the Lydiam website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the &quot;Site&quot;).
                </p>
                <p className="mt-4">
                  You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue use immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">2. Intellectual Property Rights</h2>
                <p>
                  Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &quot;Content&quot;) and the trademarks, service marks, and logos contained therein (the &quot;Marks&quot;) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws.
                </p>
                <p className="mt-4">
                  The Content and the Marks are provided on the Site &quot;AS IS&quot; for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">3. User Representations</h2>
                <p className="mb-4">
                  By using the Site, you represent and warrant that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All registration information you submit will be true, accurate, current, and complete.</li>
                  <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                  <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                  <li>You are not a minor in the jurisdiction in which you reside.</li>
                  <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</li>
                  <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                  <li>Your use of the Site will not violate any applicable law or regulation.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">4. Prohibited Activities</h2>
                <p className="mb-4">
                  You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. As a user of the Site, you agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                  <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
                  <li>Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.</li>
                  <li>Engage in unauthorized framing of or linking to the Site.</li>
                  <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
                  <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">5. Limitation of Liability</h2>
                <p>
                  In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the Site, even if we have been advised of the possibility of such damages.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">6. Governing Law</h2>
                <p>
                  These Terms shall be governed by and defined following the laws of the United Kingdom. Lydiam Group and yourself irrevocably consent that the courts of the United Kingdom shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">7. Contact Us</h2>
                <p>
                  In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                </p>
                <div className="mt-4 p-6 bg-gray-50 dark:bg-dark-800 rounded-lg border border-gray-100 dark:border-dark-700">
                  <p className="font-bold text-dark-900 dark:text-white">Lydiam Group</p>
                  <p className="mt-2">3rd Floor 100 New Bond Street</p>
                  <p>London, England, W1S 1SP</p>
                  <p className="mt-4">
                    <span className="font-semibold">Email:</span> info@lydiam.com
                  </p>
                </div>
              </section>

            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
