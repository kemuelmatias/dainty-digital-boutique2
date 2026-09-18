import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { SUPPORT_EMAIL_PLACEHOLDER, TEACHER_NAME } from "@/content/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Kemuel Matias de Jesus" },
      {
        name: "description",
        content:
          "How Kemuel Matias de Jesus collects, uses and protects the personal information of online Portuguese students.",
      },
      { property: "og:title", content: "Privacy Policy" },
      {
        property: "og:description",
        content: "What information is collected from students and how it is used and protected.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={`This policy explains what personal information ${TEACHER_NAME} collects from students and visitors, why it is collected, and how it is handled.`}
    >
      <section>
        <h2>1. Who is responsible for your data</h2>
        <p>
          {TEACHER_NAME} is responsible for the personal information collected through this website.
          Contact for privacy questions: {SUPPORT_EMAIL_PLACEHOLDER}. Legal name and address for data
          requests: [ADD LEGAL NAME AND ADDRESS].
        </p>
      </section>

      <section>
        <h2>2. Information collected</h2>
        <ul>
          <li>Name and email address, when you use the contact form or purchase a service.</li>
          <li>Message content that you choose to send.</li>
          <li>
            Purchase information processed by the payment provider: [ADD PAYMENT PROVIDER NAME]. Card
            details are never received or stored by the teacher.
          </li>
          <li>
            Scheduling information needed to arrange a lesson (time zone, preferred times, lesson
            platform username).
          </li>
          <li>Basic technical data your browser sends when loading the website.</li>
        </ul>
      </section>

      <section>
        <h2>3. Why the information is used</h2>
        <ul>
          <li>To answer your questions and messages.</li>
          <li>To deliver purchased lessons, courses and digital materials.</li>
          <li>To schedule, confirm and reschedule private lessons.</li>
          <li>To process payments and issue receipts.</li>
          <li>To meet legal, accounting and tax obligations.</li>
        </ul>
        <p>
          Your information is never sold. Marketing emails are only sent if you explicitly ask to
          receive them: [ADD MARKETING/NEWSLETTER POLICY].
        </p>
      </section>

      <section>
        <h2>4. Service providers</h2>
        <p>
          Limited information may be shared with the providers needed to run the service: payment
          processing, the online lesson platform, email delivery and website hosting. Providers in
          use: [ADD LIST OF PROVIDERS].
        </p>
      </section>

      <section>
        <h2>5. How long information is kept</h2>
        <p>
          Contact messages and student records are kept only as long as necessary for the purposes
          above and for legally required record-keeping. Retention period: [ADD RETENTION PERIOD].
        </p>
      </section>

      <section>
        <h2>6. Your rights</h2>
        <p>
          You may request access to your personal information, correction of inaccurate data, deletion
          of your data, or withdrawal of consent, subject to applicable law. To make a request, write
          to {SUPPORT_EMAIL_PLACEHOLDER}. Response time for requests: [ADD RESPONSE TIME].
        </p>
      </section>

      <section>
        <h2>7. Cookies and analytics</h2>
        <p>
          This website uses only the technical storage needed for the site to function. Analytics or
          tracking tools in use: [ADD ANALYTICS TOOLS, OR STATE "NONE"].
        </p>
      </section>

      <section>
        <h2>8. Children</h2>
        <p>
          Lessons for students under the age of legal majority require the consent and involvement of
          a parent or guardian. Minimum age policy: [ADD MINIMUM AGE POLICY].
        </p>
      </section>

      <section>
        <h2>9. Security and changes</h2>
        <p>
          Reasonable measures are taken to protect your information, though no online service can be
          guaranteed fully secure. This policy may be updated; the version published here applies.
          Last updated: [ADD DATE].
        </p>
      </section>
    </LegalPage>
  );
}
