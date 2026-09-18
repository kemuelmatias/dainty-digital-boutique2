import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { SUPPORT_EMAIL_PLACEHOLDER, TEACHER_NAME } from "@/content/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Kemuel Matias de Jesus" },
      {
        name: "description",
        content:
          "Terms and conditions for online Brazilian Portuguese private lessons and digital courses taught by Kemuel Matias de Jesus.",
      },
      { property: "og:title", content: "Terms & Conditions" },
      {
        property: "og:description",
        content: "The terms that apply to private online Portuguese lessons and digital courses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro={`These terms apply to all online services offered by ${TEACHER_NAME}: private one-on-one Portuguese lessons and online Portuguese courses.`}
    >
      <section>
        <h2>1. Who provides the service</h2>
        <p>
          The services described on this website are provided by {TEACHER_NAME}, an independent online
          Portuguese teacher. Legal or business name for invoicing: [ADD LEGAL NAME]. Address for
          correspondence: [ADD ADDRESS]. Contact email: {SUPPORT_EMAIL_PLACEHOLDER}.
        </p>
      </section>

      <section>
        <h2>2. Services offered</h2>
        <ul>
          <li>Private one-on-one online Portuguese lessons, adapted to the student's level and goals.</li>
          <li>Online Portuguese courses delivered as digital learning content.</li>
          <li>Digital study materials, where included in a purchased product.</li>
        </ul>
        <p>
          All services are delivered online. No physical product is shipped. Lesson duration, lesson
          platform and course format are stated on the relevant service page.
        </p>
      </section>

      <section>
        <h2>3. Prices and payment</h2>
        <p>
          Prices and currency are stated on each service page: [ADD ACTUAL PRICE] / [ADD CURRENCY].
          Payment is made through the payment method available at checkout: [INSERT PAYMENT LINK].
          Purchase is only complete once payment has been confirmed. Applicable taxes: [ADD TAX
          INFORMATION].
        </p>
      </section>

      <section>
        <h2>4. Access and delivery</h2>
        <p>
          After a confirmed purchase, the student receives the information needed to access the course
          or to schedule the private lesson. Delivery timing and access details: [ADD ACCESS
          INFORMATION]. Course access period: [ADD ACCESS PERIOD].
        </p>
      </section>

      <section>
        <h2>5. Scheduling, rescheduling and no-shows</h2>
        <p>
          Private lessons are scheduled as described on the Private Lessons page: [ADD ACTUAL
          SCHEDULING PROCESS]. Rescheduling notice required: [ADD RESCHEDULING POLICY]. Late arrival
          and missed-lesson rules: [ADD NO-SHOW POLICY].
        </p>
      </section>

      <section>
        <h2>6. Student responsibilities</h2>
        <ul>
          <li>Provide accurate contact information at purchase.</li>
          <li>Have a stable internet connection and a device suitable for online lessons.</li>
          <li>Join lessons at the agreed time and respect the agreed schedule.</li>
          <li>Treat the teacher and all course materials respectfully and lawfully.</li>
        </ul>
      </section>

      <section>
        <h2>7. Intellectual property</h2>
        <p>
          All lesson content, course content and digital materials remain the property of{" "}
          {TEACHER_NAME}. They are licensed for the personal, non-transferable use of the purchasing
          student. Copying, reselling, publishing or sharing the materials is not permitted.
        </p>
      </section>

      <section>
        <h2>8. No guarantee of specific results</h2>
        <p>
          Language learning depends on the student's own study, practice and consistency. No specific
          level, exam result, fluency timeline or outcome is promised.
        </p>
      </section>

      <section>
        <h2>9. Cancellation and refunds</h2>
        <p>
          Refunds are handled according to the Refund Policy published on this website. Refund period
          and conditions: [ADD ACTUAL REFUND POLICY].
        </p>
      </section>

      <section>
        <h2>10. Changes to these terms</h2>
        <p>
          These terms may be updated. The version published on this website at the time of purchase
          applies to that purchase. Last updated: [ADD DATE].
        </p>
      </section>

      <section>
        <h2>11. Governing law and contact</h2>
        <p>
          Governing law and jurisdiction: [ADD COUNTRY / STATE]. For any question about these terms,
          write to {SUPPORT_EMAIL_PLACEHOLDER}.
        </p>
      </section>
    </LegalPage>
  );
}
