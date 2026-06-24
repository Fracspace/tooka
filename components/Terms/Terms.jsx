import React from "react";

export default function Terms() {
  return (
    <section className="bg-[#FAF8F6] py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-14">
          <h1 className="text-4xl font-bold text-[#A86A18] md:text-5xl">
            Terms and Conditions
          </h1>

          <p className="mt-3 text-sm text-gray-500">Last Updated: [DATE]</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 space-y-5 text-gray-600 leading-8">
          <p>
            Welcome to <strong>Tooka</strong> ("Platform", "we", "our", "us").
          </p>

          <p>
            By accessing or using our website, mobile application, or services,
            you agree to these Terms and Conditions.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          <TermSection
            title="1. Platform Services"
            content={
              <>
                <p>
                  We provide an online marketplace that allows users to
                  discover, compare, and book wellness and spa services offered
                  by independent third-party spa partners.
                </p>

                <p className="mt-4">
                  We do not directly provide spa, massage, wellness, or
                  therapeutic services.
                </p>
              </>
            }
          />

          <TermSection
            title="2. User Eligibility"
            content={
              <p>
                You must be at least 18 years old or have legal
                parental/guardian consent to use the Platform.
              </p>
            }
          />

          <TermSection
            title="3. Booking and Payments"
            content={
              <ul className="list-disc space-y-2 pl-6">
                <li>Bookings are subject to spa availability.</li>
                <li>Prices displayed are determined by spa partners.</li>
                <li>
                  Payment methods may include online payment and pay-at-spa
                  options.
                </li>
                <li>
                  Booking confirmation is subject to successful payment where
                  applicable.
                </li>
              </ul>
            }
          />

          <TermSection
            title="4. Cancellations and Refunds"
            content={
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Cancellation and refund policies may vary between spa
                  partners.
                </li>
                <li>
                  Applicable policies will be displayed before booking
                  confirmation.
                </li>
                <li>
                  Refund processing timelines depend on payment providers and
                  banks.
                </li>
              </ul>
            }
          />

          <TermSection
            title="5. Spa Partner Responsibilities"
            content={
              <>
                <p className="mb-4">Spa partners are solely responsible for:</p>

                <ul className="list-disc space-y-2 pl-6">
                  <li>Service quality</li>
                  <li>Staff conduct</li>
                  <li>Health and safety compliance</li>
                  <li>Service descriptions and pricing</li>
                  <li>Customer satisfaction</li>
                </ul>

                <p className="mt-4">
                  The Platform acts only as an intermediary.
                </p>
              </>
            }
          />

          <TermSection
            title="6. User Conduct"
            content={
              <>
                <p className="mb-4">Users agree not to:</p>

                <ul className="list-disc space-y-2 pl-6">
                  <li>Provide false information.</li>
                  <li>Abuse or harass spa staff.</li>
                  <li>Engage in fraudulent activities.</li>
                  <li>Interfere with platform operations.</li>
                </ul>
              </>
            }
          />

          <TermSection
            title="7. Reviews and Ratings"
            content={
              <>
                <p>Users may submit reviews based on genuine experiences.</p>

                <p className="mt-4">
                  We reserve the right to remove reviews that are abusive,
                  misleading, offensive, defamatory, or fraudulent.
                </p>
              </>
            }
          />

          <TermSection
            title="8. Limitation of Liability"
            content={
              <>
                <p className="mb-4">The Platform shall not be liable for:</p>

                <ul className="list-disc space-y-2 pl-6">
                  <li>Injuries occurring during spa services.</li>
                  <li>Service dissatisfaction.</li>
                  <li>Disputes between users and spa partners.</li>
                  <li>Losses arising from third-party actions.</li>
                </ul>
              </>
            }
          />

          <TermSection
            title="9. Intellectual Property"
            content={
              <p>
                All content, trademarks, logos, designs, and platform materials
                remain the property of the Platform or respective owners.
              </p>
            }
          />

          <TermSection
            title="10. Changes to Terms"
            content={
              <p>
                We may modify these Terms at any time. Continued use of the
                Platform constitutes acceptance of revised Terms.
              </p>
            }
          />

          <TermSection
            title="11. Governing Law"
            content={<p>These Terms shall be governed by the laws of India.</p>}
          />

          <TermSection
            title="12. Contact Us"
            content={
              <>
                <p>For questions regarding these Terms, contact us at:</p>

                <p className="mt-4 font-medium text-[#A86A18]">
                  Email: hello@tooka.com
                </p>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}

function TermSection({ title, content }) {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold text-[#A86A18]">{title}</h2>

      <div className="space-y-4 leading-8 text-gray-600">{content}</div>
    </div>
  );
}
