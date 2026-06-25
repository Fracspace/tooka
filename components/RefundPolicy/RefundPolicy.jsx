import React from "react";

import { CalendarDays } from "lucide-react";

function RefundPolicy() {
  return (
    <div>
      <main className="min-h-screen bg-[#faf8f6] py-12 px-4">
        <div className="mx-auto max-w-4xl rounded-3xl border border-[#e5ddd4] bg-white p-6 md:p-12 shadow-sm">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-[#8b5a17]">
            Cancellation and Refund Policy
          </h1>

          <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
            <CalendarDays size={16} />
            <span>Last Updated: June 25, 2026</span>
          </div>

          <div className="my-8 border-t border-gray-200" />

          {/* Notice Box */}
          <div className="rounded-xl border border-[#f3dfaa] bg-[#fff8e7] p-5 text-sm italic text-gray-700">
            At Tooka, we strive to provide the most seamless wellness
            experience. Please note that while Tooka facilitates bookings,
            specific cancellation and refund policies may vary slightly based on
            our individual spa partner agreements.
          </div>

          {/* Content */}
          <div className="mt-10 space-y-10 text-gray-700">
            {/* Section 1 */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-[#8b5a17]">
                1. Introduction
              </h2>

              <p className="leading-8">
                This Cancellation and Refund Policy governs the way you can
                cancel bookings made through the Tooka platform and the
                conditions under which refunds are issued. Our platform connects
                you with various high-end wellness providers, and while we
                maintain a standard of excellence, the primary responsibility
                for service delivery lies with the spa partners.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-[#8b5a17]">
                2. Cancellation Window
              </h2>

              <p className="mb-4 leading-8">
                To ensure our partners can manage their schedules effectively
                and provide the best service to all clients, we require a
                standard
                <strong> 24-hour notice </strong>
                for all cancellations.
              </p>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  Cancellations made more than 24 hours before the scheduled
                  appointment time will incur no penalty.
                </li>

                <li>
                  For specialized group packages or premium spa retreats, a
                  48-hour or 72-hour notice may be required. This will be
                  clearly stated on the booking confirmation page.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-[#8b5a17]">
                3. Refund Eligibility
              </h2>

              <p className="mb-4 leading-8">
                Refunds are processed based on the timing of your cancellation
                request and the nature of the service booked. You are eligible
                for a full refund if:
              </p>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  The cancellation is made within the permitted window (24+
                  hours).
                </li>

                <li>
                  The spa partner is unable to fulfill the appointment due to
                  unforeseen circumstances.
                </li>

                <li>
                  A documented medical emergency prevents you from attending
                  (subject to partner approval).
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-[#8b5a17]">
                4. Non-Refundable Items
              </h2>

              <p className="mb-4 leading-8">
                In order to protect our partners&apos; livelihood and operating
                costs, the following scenarios are generally ineligible for
                refunds:
              </p>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Late Cancellations:</strong> Any cancellation made
                  less than 24 hours before the appointment.
                </li>

                <li>
                  <strong>No-Shows:</strong> Failure to arrive at the spa within
                  15 minutes of the scheduled start time without prior notice.
                </li>

                <li>
                  <strong>Partial Services:</strong> If you choose to leave a
                  session early or opt-out of certain components of a pre-paid
                  package.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-[#8b5a17]">
                5. Processing Time
              </h2>

              <p className="leading-8">
                Once a refund is approved by our support team, the funds are
                released immediately from our end. However, the time it takes
                for the credit to appear on your statement depends on your
                financial institution.
              </p>

              <div className="mt-5 rounded-xl border border-[#f3dfaa] bg-[#fff8e7] p-5">
                <h3 className="font-semibold text-[#8b5a17]">
                  Standard Processing Window
                </h3>

                <p className="mt-2 text-gray-700">
                  Please allow <strong>5-7 business days</strong> for the refund
                  to be processed by your bank and reflected in your account
                  balance.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-[#8b5a17]">
                6. Contact Information
              </h2>

              <p className="leading-8">
                We are here to help resolve any disputes or issues regarding
                your wellness journey. If you feel a refund has been unfairly
                denied or if you have questions regarding a specific spa&apos;s
                policy, please reach out to our dedicated support team.
              </p>

              <div className="mt-5 rounded-xl border border-gray-200 bg-gray-50 p-5">
                <p className="font-medium">Email:</p>
                <a
                  href="mailto:support@tooka.com"
                  className="text-[#8b5a17] hover:underline"
                >
                  hello@tooka.com
                </a>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-12 border-t border-gray-200 pt-6">
            <p className="text-sm italic text-gray-500">
              Tooka Wellness reserves the right to modify this policy at any
              time. Significant changes will be communicated via email or
              platform notifications.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RefundPolicy;
