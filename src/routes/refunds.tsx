import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { SUPPORT_EMAIL_PLACEHOLDER } from "@/content/site";

export const Route = createFileRoute("/refunds")({
  head: () => ({
    meta: [
      { title: "Refund Policy | Kemuel Matias de Jesus" },
      {
        name: "description",
        content:
          "Refund conditions for online Brazilian Portuguese private lessons, online courses and digital study materials.",
      },
      { property: "og:title", content: "Refund Policy" },
      {
        property: "og:description",
        content: "How refunds work for private online Portuguese lessons and digital courses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/refunds" }],
  }),
  component: Refunds,
});

function Refunds() {
  return (
    <LegalPage
      title="Refund Policy"
      intro="This policy explains when a refund can be requested for private online Portuguese lessons, online courses and digital study materials."
    >
      <section>
        <h2>1. General principle</h2>
        <p>
          All products sold on this website are online services and digital content. Refund requests
          are reviewed individually according to the conditions below. Refund period: [ADD ACTUAL
          REFUND PERIOD].
        </p>
      </section>

      <section>
        <h2>2. Private lessons</h2>
        <ul>
          <li>Lessons cancelled with sufficient advance notice: [ADD CANCELLATION NOTICE POLICY].</li>
          <li>Lessons already delivered: [ADD POLICY FOR COMPLETED LESSONS].</li>
          <li>Missed lessons without notice: [ADD NO-SHOW POLICY].</li>
          <li>
            Lessons cancelled by the teacher are rescheduled at no extra cost, or refunded if no new
            time can be agreed.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Online courses and digital materials</h2>
        <ul>
          <li>Refund window after purchase: [ADD ACTUAL REFUND WINDOW].</li>
          <li>Conditions once course content has been accessed or downloaded: [ADD CONDITIONS].</li>
          <li>
            If a technical problem prevents access and it cannot be resolved, a full refund is issued.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. How to request a refund</h2>
        <p>
          Send a request to {SUPPORT_EMAIL_PLACEHOLDER} with the purchase email, the product name and
          the date of purchase. Requests are answered within [ADD RESPONSE TIME].
        </p>
      </section>

      <section>
        <h2>5. How refunds are paid</h2>
        <p>
          Approved refunds are returned using the original payment method. Processing time depends on
          the payment provider: [ADD EXPECTED PROCESSING TIME]. Any transaction fees deducted: [ADD
          FEE POLICY].
        </p>
      </section>

      <section>
        <h2>6. Non-refundable situations</h2>
        <p>
          Refunds are not available for reasons unrelated to the service delivered, such as lack of
          personal study time or a change of mind after the refund window has passed: [ADD FINAL
          WORDING].
        </p>
      </section>

      <section>
        <h2>7. Questions</h2>
        <p>
          For any doubt about this policy, write to {SUPPORT_EMAIL_PLACEHOLDER} or use the{" "}
          <Link to="/contact" className="underline underline-offset-4">
            contact form
          </Link>
          . These terms should be read together with the{" "}
          <Link to="/terms" className="underline underline-offset-4">
            Terms &amp; Conditions
          </Link>
          .
        </p>
      </section>
    </LegalPage>
  );
}
