import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service — PitstopIQ",
  description:
    "The terms that govern use of the PitstopIQ vehicle service center management platform by subscribing service centers in Sri Lanka.",
  alternates: { canonical: "https://pitstopiq.com/terms" },
};

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="July 17, 2026"
      intro="These Terms of Service (“Terms”) govern your use of PitstopIQ, a vehicle service center management platform operated by Lumora Ventures PVT Ltd. By subscribing to or using PitstopIQ, you agree to these Terms."
      sections={[
        {
          heading: "The Service",
          body: [
            "PitstopIQ is a web-based platform that helps vehicle service centers manage customers, vehicles, service job cards, inventory, invoices, and reports, and sends automatic SMS notifications and reminders to their customers. The platform works in any modern smartphone or desktop browser; no app download is required.",
          ],
        },
        {
          heading: "Accounts & Onboarding",
          body: [
            "Accounts are set up by our team after you contact us on WhatsApp and complete payment. You are responsible for keeping your login credentials secure and for all activity under your account, including staff accounts you create. You must provide accurate business information during onboarding.",
          ],
        },
        {
          heading: "Subscriptions & Payment",
          body: [
            "PitstopIQ is billed monthly in Sri Lankan Rupees, in advance. There is no setup fee and no long-term contract; you may cancel at any time and your access continues until the end of the paid period. Prices for the Basic and Pro plans are listed on our website and may change with prior notice — existing subscribers will be notified before any price change applies to them.",
          ],
        },
        {
          heading: "SMS Quotas & Fair Use",
          body: [
            "Each plan includes a monthly SMS quota (200 SMS on Basic, 1,000 SMS on Pro). You will be warned at 80% usage; once the quota is reached, SMS sending pauses until the next billing month or an upgrade. SMS delivery uses Dialog Axiata's eSMS platform and reaches all Sri Lankan networks; delivery to a specific handset depends on the mobile network and is not guaranteed by us.",
          ],
        },
        {
          heading: "Your Data & Responsibilities",
          body: [
            "You retain ownership of the data you enter into PitstopIQ. By using the service, you confirm that you have the right to record your customers' contact details and to have service-related SMS sent to them on your behalf. You agree not to use the platform to send spam or unlawful content, attempt to access other centers' data, or interfere with the operation of the service.",
          ],
        },
        {
          heading: "Availability & Support",
          body: [
            "We aim to keep PitstopIQ available at all times but do not guarantee uninterrupted service. Planned maintenance will be communicated where practical. Support is available on WhatsApp, phone, and email during business hours.",
          ],
        },
        {
          heading: "Cancellation & Data Export",
          body: [
            "You can cancel your subscription at any time by contacting us. On Pro plans you can export your data as CSV before closing your account. After account closure, your data is handled as described in our Privacy Policy.",
          ],
        },
        {
          heading: "Limitation of Liability",
          body: [
            "PitstopIQ is provided “as is”. To the maximum extent permitted by law, Lumora Ventures PVT Ltd is not liable for indirect or consequential losses arising from use of the service, including missed reminders or SMS delivery failures caused by mobile networks. Our total liability for any claim is limited to the subscription fees you paid in the three months preceding the claim.",
          ],
        },
        {
          heading: "Changes to These Terms",
          body: [
            "We may update these Terms from time to time. The “Last updated” date at the top shows the latest revision. Continued use of the service after changes take effect constitutes acceptance of the updated Terms.",
          ],
        },
        {
          heading: "Governing Law",
          body: [
            "These Terms are governed by the laws of the Democratic Socialist Republic of Sri Lanka, and any disputes are subject to the jurisdiction of Sri Lankan courts.",
          ],
        },
      ]}
    />
  );
}
