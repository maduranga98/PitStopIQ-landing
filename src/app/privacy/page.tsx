import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy — PitstopIQ",
  description:
    "How PitstopIQ collects, uses, and protects data for vehicle service centers and their customers in Sri Lanka.",
  alternates: { canonical: "https://pitstopiq.com/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="July 17, 2026"
      intro="PitstopIQ is a vehicle service center management platform operated by Lumora Ventures PVT Ltd (“we”, “us”, “our”). This Privacy Policy explains what information we collect, how we use it, and the choices you have. It applies to this website and to the PitstopIQ platform used by subscribing service centers."
      sections={[
        {
          heading: "Information We Collect",
          body: [
            "We collect information in two ways: directly from service centers that subscribe to PitstopIQ, and on their behalf when they record customer and vehicle data in the platform.",
          ],
          list: [
            "Account information: service center name, owner or manager name, phone number, email address, and billing details.",
            "Customer records entered by service centers: customer names, phone numbers, vehicle registration plates, vehicle specifications (make, model, year, oil grade), mileage, and service history.",
            "Operational data: service job cards, inventory records, invoices, and staff accounts created by the service center.",
            "Technical data: basic device and browser information, and language preference stored locally in your browser.",
          ],
        },
        {
          heading: "How We Use Information",
          body: [
            "We use the information we collect to provide and improve the PitstopIQ service.",
          ],
          list: [
            "To operate the platform: tracking vehicles, generating job cards, invoices, and reports for the subscribing service center.",
            "To send SMS messages on behalf of the service center: service completion notifications and mileage-based service reminders, delivered via Dialog Axiata's eSMS platform.",
            "To provide customer support over WhatsApp, phone, or email.",
            "To bill subscriptions and communicate service updates.",
          ],
        },
        {
          heading: "SMS Communications",
          body: [
            "SMS messages are sent to vehicle owners only in connection with services performed at a subscribing service center — for example, a completion notice or a reminder that the next service is due. We do not use these phone numbers for marketing unrelated to the service center, and we do not sell them to third parties.",
            "Vehicle owners who no longer wish to receive reminders can ask their service center to update or remove their record.",
          ],
        },
        {
          heading: "Data Sharing",
          body: [
            "We do not sell personal data. We share data only with service providers necessary to run PitstopIQ — such as SMS delivery (Dialog Axiata eSMS), cloud hosting, and payment processing — and only to the extent required to deliver the service. Each service center can access only its own data (or its own branches on multi-branch plans).",
            "We may disclose information if required by law or to protect our legal rights.",
          ],
        },
        {
          heading: "Data Security & Retention",
          body: [
            "Data is stored on secured cloud infrastructure with access controls, and access within a service center is limited by staff roles (Manager, Technician, Cashier, Receptionist).",
            "We retain data for as long as the service center's subscription is active. After cancellation, data can be exported (CSV export is available on Pro plans) and is deleted from active systems within a reasonable period after account closure, unless we are legally required to keep it.",
          ],
        },
        {
          heading: "Your Rights",
          body: [
            "You may request access to, correction of, or deletion of your personal data. Vehicle owners should direct requests to their service center, which controls the customer records; service centers can contact us directly and we will assist.",
          ],
        },
        {
          heading: "Cookies & Local Storage",
          body: [
            "This website does not use advertising or tracking cookies. We store only your language preference (English, Sinhala, or Tamil) in your browser's local storage so the site remembers your choice.",
          ],
        },
        {
          heading: "Changes to This Policy",
          body: [
            "We may update this Privacy Policy from time to time. The “Last updated” date at the top shows the latest revision. Material changes will be communicated to subscribing service centers.",
          ],
        },
      ]}
    />
  );
}
