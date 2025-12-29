import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Queep's Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered notetaker desktop application. Learn about data storage, AI processing, and your privacy rights.",
  openGraph: {
    title: "Privacy Policy | Queep",
    description: "Queep's Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered notetaker desktop application.",
    url: "/privacy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Queep",
    description: "Queep's Privacy Policy explains how we collect, use, and safeguard your information.",
  },
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
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
          
          <h1 className="text-4xl font-bold text-brand-text mb-4">Privacy Policy</h1>
          <p className="text-brand-text/60 mb-8">Last updated: January 2025</p>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-brand-text/80">
              <section className="bg-brand-card p-6 rounded-lg border border-brand-gray">
                <h2 className="text-2xl font-semibold text-brand-text mb-4">1. Introduction</h2>
                <p className="mb-4">
                  Queep ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our desktop application and related services.
                </p>
              </section>

              <section className="bg-brand-card p-6 rounded-lg border border-brand-gray">
                <h2 className="text-2xl font-semibold text-brand-text mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-medium text-brand-text mb-3 mt-6">2.1 Information You Provide</h3>
                <p className="mb-4">
                  When you use Queep, you may provide us with:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>Notes and content you create within the application</li>
                  <li>Account information (if you choose to create an account)</li>
                  <li>Preferences and settings</li>
                </ul>

                <h3 className="text-xl font-medium text-brand-text mb-3 mt-6">2.2 Automatically Collected Information</h3>
                <p className="mb-4">
                  Our application may automatically collect certain information, including:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>Usage data and analytics</li>
                  <li>Device information and system specifications</li>
                  <li>Application performance metrics</li>
                </ul>
              </section>

              <section className="bg-brand-card p-6 rounded-lg border border-brand-gray">
                <h2 className="text-2xl font-semibold text-brand-text mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process AI-powered features such as note organization and task generation</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you technical notices and updates</li>
                  <li>Monitor and analyze usage patterns to enhance user experience</li>
                </ul>
              </section>

              <section className="bg-brand-card p-6 rounded-lg border border-brand-gray">
                <h2 className="text-2xl font-semibold text-brand-text mb-4">4. Data Storage and Security</h2>
                <p className="mb-4">
                  By default, all your notes and data are stored locally on your device. We implement appropriate technical and organizational measures to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure.
                </p>
                <p className="mb-4">
                  If you choose to use cloud sync or backup features, your data may be stored on third-party servers. In such cases, the privacy practices of those third-party services will apply.
                </p>
              </section>

              <section className="bg-brand-card p-6 rounded-lg border border-brand-gray">
                <h2 className="text-2xl font-semibold text-brand-text mb-4">5. AI Processing</h2>
                <p className="mb-4">
                  Our AI features may process your note content to provide organization, task generation, and search capabilities. When using local AI models, all processing occurs on your device. If you choose to use cloud-based AI services, your content may be processed on external servers.
                </p>
              </section>

              <section className="bg-brand-card p-6 rounded-lg border border-brand-gray">
                <h2 className="text-2xl font-semibold text-brand-text mb-4">6. Cookies and Tracking Technologies</h2>
                <p className="mb-4">
                  Our desktop application may use cookies and similar tracking technologies to track activity and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </section>

              <section className="bg-brand-card p-6 rounded-lg border border-brand-gray">
                <h2 className="text-2xl font-semibold text-brand-text mb-4">7. Your Rights</h2>
                <p className="mb-4">Depending on your location, you may have the following rights:</p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate data</li>
                  <li>Deletion of your data</li>
                  <li>Objection to processing of your data</li>
                  <li>Data portability</li>
                  <li>Withdrawal of consent</li>
                </ul>
                <p className="mb-4">
                  To exercise these rights, please contact us using the information provided in the Contact section below.
                </p>
              </section>

              <section className="bg-brand-card p-6 rounded-lg border border-brand-gray">
                <h2 className="text-2xl font-semibold text-brand-text mb-4">8. Data Retention</h2>
                <p className="mb-4">
                  We retain your information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. When you delete your account or data, we will delete or anonymize your information, subject to applicable legal requirements.
                </p>
              </section>

              <section className="bg-brand-card p-6 rounded-lg border border-brand-gray">
                <h2 className="text-2xl font-semibold text-brand-text mb-4">9. Third-Party Services</h2>
                <p className="mb-4">
                  Our application may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies.
                </p>
              </section>

              <section className="bg-brand-card p-6 rounded-lg border border-brand-gray">
                <h2 className="text-2xl font-semibold text-brand-text mb-4">10. Children's Privacy</h2>
                <p className="mb-4">
                  Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
                </p>
              </section>

              <section className="bg-brand-card p-6 rounded-lg border border-brand-gray">
                <h2 className="text-2xl font-semibold text-brand-text mb-4">11. Changes to This Privacy Policy</h2>
                <p className="mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section className="bg-brand-card p-6 rounded-lg border border-brand-gray">
                <h2 className="text-2xl font-semibold text-brand-text mb-4">12. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="mb-4">
                  Email: privacy@quicktokeep.com<br />
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

