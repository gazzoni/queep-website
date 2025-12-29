import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-brand-background">
      <Header />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="text-brand-green hover:text-brand-text mb-8 inline-block transition-colors"
          >
            ← Back to home
          </Link>
          
          <h1 className="text-4xl font-bold text-brand-text mb-4">Terms of Service</h1>
          <p className="text-brand-text/60 mb-8">Last updated: January 2025</p>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-brand-text/80">
              <section className="bg-brand-card p-6 rounded-lg border border-brand-gray">
                <h2 className="text-2xl font-semibold text-brand-text mb-4">1. Agreement to Terms</h2>
                <p className="mb-4">
                  By accessing or using Queep ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, then you may not access the Service.
                </p>
              </section>

              <section className="bg-brand-card p-6 rounded-lg border border-brand-gray">
                <h2 className="text-2xl font-semibold text-brand-text mb-4">2. Description of Service</h2>
                <p className="mb-4">
                  Queep is a desktop application that provides AI-powered note-taking, organization, task generation, and search capabilities. The Service includes both free and paid features as described in our pricing plans.
                </p>
              </section>

              <section className="bg-brand-card p-6 rounded-lg border border-brand-gray">
                <h2 className="text-2xl font-semibold text-brand-text mb-4">3. License Grant</h2>
                <h3 className="text-xl font-medium text-brand-text mb-3 mt-6">3.1 Free License</h3>
                <p className="mb-4">
                  Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the free version of Queep for your personal or commercial use.
                </p>

                <h3 className="text-xl font-medium text-brand-text mb-3 mt-6">3.2 Pro License</h3>
                <p className="mb-4">
                  If you purchase a Pro license, you are granted a license to use the Pro features according to the terms of your purchase (monthly, annual, or lifetime). Pro licenses may be used on multiple devices owned by you.
                </p>
              </section>

              <section className="bg-brand-card p-6 rounded-lg border border-brand-gray">
                <h2 className="text-2xl font-semibold text-brand-text mb-4">4. User Obligations</h2>
                <p className="mb-4">You agree to:</p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>Use the Service only for lawful purposes and in accordance with these Terms</li>
                  <li>Not attempt to reverse engineer, decompile, or disassemble the software</li>
                  <li>Not remove, alter, or obscure any proprietary notices</li>
                  <li>Not use the Service to transmit any malicious code or harmful content</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
              </section>

              <section className="bg-brand-card p-6 rounded-lg border border-brand-gray">
                <h2 className="text-2xl font-semibold text-brand-text mb-4">5. Intellectual Property Rights</h2>
                <p className="mb-4">
                  The Service and its original content, features, and functionality are owned by Queep and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <p className="mb-4">
                  You retain ownership of any content you create using the Service. By using the Service, you grant us a limited license to use, store, and process your content solely for the purpose of providing and improving the Service.
                </p>
              </section>

              <section className="bg-brand-card p-6 rounded-lg border border-brand-gray">
                <h2 className="text-2xl font-semibold text-brand-text mb-4">6. Payment Terms</h2>
                <h3 className="text-xl font-medium text-brand-text mb-3 mt-6">6.1 Subscription Plans</h3>
                <p className="mb-4">
                  Pro subscriptions are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by law or as stated in our refund policy.
                </p>

                <h3 className="text-xl font-medium text-brand-text mb-3 mt-6">6.2 Lifetime License</h3>
                <p className="mb-4">
                  Lifetime licenses grant you access to Pro features for the lifetime of the product. This does not include future major version releases, which may require a separate purchase.
                </p>

                <h3 className="text-xl font-medium text-brand-text mb-3 mt-6">6.3 Refunds</h3>
                <p className="mb-4">
                  We offer a 30-day money-back guarantee for all paid plans. Refund requests must be submitted within 30 days of purchase.
                </p>
              </section>

              <section className="bg-brand-card p-6 rounded-lg border border-brand-gray">
                <h2 className="text-2xl font-semibold text-brand-text mb-4">7. AI Features and Limitations</h2>
                <p className="mb-4">
                  Our AI-powered features, including note organization, task generation, and search, are provided "as is" and may not always be accurate or complete. You are responsible for reviewing and verifying any AI-generated content.
                </p>
              </section>

              <section className="bg-brand-card p-6 rounded-lg border border-brand-gray">
                <h2 className="text-2xl font-semibold text-brand-text mb-4">8. Data and Privacy</h2>
                <p className="mb-4">
                  Your use of the Service is also governed by our Privacy Policy. By using the Service, you consent to the collection and use of information in accordance with our Privacy Policy.
                </p>
              </section>

              <section className="bg-brand-card p-6 rounded-lg border border-brand-gray">
                <h2 className="text-2xl font-semibold text-brand-text mb-4">9. Limitation of Liability</h2>
                <p className="mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, QUEEP SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                </p>
                <p className="mb-4">
                  IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRIOR TO THE ACTION GIVING RISE TO THE LIABILITY.
                </p>
              </section>

              <section className="bg-brand-card p-6 rounded-lg border border-brand-gray">
                <h2 className="text-2xl font-semibold text-brand-text mb-4">10. Disclaimer of Warranties</h2>
                <p className="mb-4">
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                </p>
              </section>

              <section className="bg-brand-card p-6 rounded-lg border border-brand-gray">
                <h2 className="text-2xl font-semibold text-brand-text mb-4">11. Termination</h2>
                <p className="mb-4">
                  We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Service will cease immediately.
                </p>
                <p className="mb-4">
                  You may terminate your account at any time by deleting the application and any associated data.
                </p>
              </section>

              <section className="bg-brand-card p-6 rounded-lg border border-brand-gray">
                <h2 className="text-2xl font-semibold text-brand-text mb-4">12. Changes to Terms</h2>
                <p className="mb-4">
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
              </section>

              <section className="bg-brand-card p-6 rounded-lg border border-brand-gray">
                <h2 className="text-2xl font-semibold text-brand-text mb-4">13. Governing Law</h2>
                <p className="mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Queep operates, without regard to its conflict of law provisions.
                </p>
              </section>

              <section className="bg-brand-card p-6 rounded-lg border border-brand-gray">
                <h2 className="text-2xl font-semibold text-brand-text mb-4">14. Contact Information</h2>
                <p className="mb-4">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p className="mb-4">
                  Email: legal@quicktokeep.com<br />
                  Website: https://quicktokeep.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

