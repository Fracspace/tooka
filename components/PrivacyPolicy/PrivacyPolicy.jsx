export default function PrivacyPolicy() {
  return (
    <section className="bg-[#FAF8F6] py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-14">
          <h1 className="text-4xl font-bold text-[#A86A18] md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-3 text-sm text-gray-500">Last Updated: 23-06-2026</p>
        </div>

        {/* Intro */}
        <div className="mb-12">
          <p className="leading-8 text-gray-600">
            At <strong>Tooka</strong>, we respect your privacy and are committed
            to protecting your personal information.
          </p>
        </div>

        <div className="space-y-12">
          <PolicySection
            title="1. Information We Collect"
            content={
              <>
                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-semibold text-[#A86A18]">
                    Information You Provide
                  </h3>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Booking details</li>
                    <li>Payment information</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-semibold text-[#A86A18]">
                    Information Automatically Collected
                  </h3>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Device information</li>
                    <li>Browser information</li>
                    <li>IP address</li>
                    <li>Usage analytics</li>
                    <li>Cookies</li>
                  </ul>
                </div>
              </>
            }
          />

          <PolicySection
            title="2. How We Use Information"
            content={
              <ul className="list-disc pl-6 space-y-2">
                <li>Process bookings</li>
                <li>Communicate confirmations and updates</li>
                <li>Improve platform performance</li>
                <li>Prevent fraud</li>
                <li>Provide customer support</li>
                <li>Send promotional offers (with consent)</li>
              </ul>
            }
          />

          <PolicySection
            title="3. Sharing of Information"
            content={
              <>
                <p className="mb-4">We may share information with:</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Spa partners for booking fulfillment</li>
                  <li>Payment service providers</li>
                  <li>Analytics providers</li>
                  <li>Legal authorities when required by law</li>
                </ul>

                <p className="mt-4 font-medium">
                  We do not sell personal information.
                </p>
              </>
            }
          />

          <PolicySection
            title="4. Data Security"
            content={
              <p>
                We implement reasonable technical and organizational measures to
                protect user information from unauthorized access, disclosure,
                or misuse.
              </p>
            }
          />

          <PolicySection
            title="5. Cookies"
            content={
              <>
                <p>
                  We use cookies and similar technologies to improve user
                  experience and analyze platform performance.
                </p>

                <p className="mt-4">
                  Users may manage cookie preferences through browser settings.
                </p>
              </>
            }
          />

          <PolicySection
            title="6. User Rights"
            content={
              <ul className="list-disc pl-6 space-y-2">
                <li>Access to personal data</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of eligible information</li>
                <li>Withdrawal of marketing consent</li>
              </ul>
            }
          />

          <PolicySection
            title="7. Data Retention"
            content={
              <p>
                We retain information only as long as necessary for business,
                legal, regulatory, and operational purposes.
              </p>
            }
          />

          <PolicySection
            title="8. Third-Party Links"
            content={
              <p>
                The Platform may contain links to third-party websites. We are
                not responsible for their privacy practices.
              </p>
            }
          />

          <PolicySection
            title="9. Children's Privacy"
            content={
              <p>
                Our services are not intended for children under 18 years of
                age.
              </p>
            }
          />

          <PolicySection
            title="10. Policy Updates"
            content={
              <p>
                We may update this Privacy Policy periodically. Updates will be
                posted on this page.
              </p>
            }
          />

          <PolicySection
            title="11. Contact Us"
            content={
              <>
                <p>For privacy-related questions:</p>

                <p className="mt-4 font-medium text-[#A86A18]">
                  hello@tooka.com
                </p>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}

function PolicySection({ title, content }) {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold text-[#A86A18]">{title}</h2>

      <div className="space-y-4 leading-8 text-gray-600">{content}</div>
    </div>
  );
}
