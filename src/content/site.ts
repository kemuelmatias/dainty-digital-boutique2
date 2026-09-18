// Central, editable content for the site.

export const TEACHER_NAME = "Kemuel Matias de Jesus";
export const SUPPORT_EMAIL = "produtosmatiasoficial@gmail.com";
/** @deprecated kept for compatibility — use SUPPORT_EMAIL */
export const SUPPORT_EMAIL_PLACEHOLDER = SUPPORT_EMAIL;

export const WHATSAPP_NUMBER = "5591980711681";
export const WHATSAPP_DISPLAY = "+55 91 98071-1681";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  lesson:
    "Hi Kemuel! I'm interested in private Brazilian Portuguese lessons. Could you tell me more about availability and how to get started?",
  courses:
    "Hi Kemuel! I'm interested in your online Brazilian Portuguese courses. Could you send me more details?",
  contact:
    "Hi Kemuel! I found your website and I have a question about learning Brazilian Portuguese with you.",
  course: (title: string, price: string) =>
    `Hi Kemuel! I'm interested in the "${title}" course (${price}). How can I enroll?`,
};

export const BOOK_LESSON_LINK = whatsappLink(WHATSAPP_MESSAGES.lesson);
export const COURSES_WHATSAPP_LINK = whatsappLink(WHATSAPP_MESSAGES.courses);
export const CONTACT_WHATSAPP_LINK = whatsappLink(WHATSAPP_MESSAGES.contact);

export const TAGLINE =
  "Online Brazilian Portuguese lessons and courses for English and Spanish speakers.";

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/private-lessons", label: "Private Lessons" },
  { to: "/courses", label: "Courses" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export const legalItems = [
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/refunds", label: "Refund Policy" },
] as const;

export const lessonTopics = [
  "Conversation practice",
  "Brazilian Portuguese pronunciation",
  "Grammar",
  "Vocabulary",
  "Listening comprehension",
  "Reading and writing",
  "Portuguese for travel",
  "Everyday communication",
];

export const lessonInformation = [
  { label: "Lesson duration", value: "50 minutes (one-on-one, live)" },
  { label: "Single lesson", value: "USD 20" },
  { label: "Package of 5 lessons", value: "USD 90 (USD 18 per lesson)" },
  { label: "Package of 10 lessons", value: "USD 170 (USD 17 per lesson)" },
  { label: "Currency", value: "USD (US dollars)" },
  { label: "Platform", value: "Google Meet or Zoom — link sent before each lesson" },
  {
    label: "Scheduling",
    value: "Send a message on WhatsApp, agree a time together, and receive the confirmation",
  },
  { label: "Delivery method", value: "Online, live one-on-one lesson" },
  { label: "Customer support", value: SUPPORT_EMAIL },
];

export type Course = {
  slug: string;
  title: string;
  description: string;
  level: string;
  format: string;
  includes: string[];
  price: string;
  currency: string;
  access: string;
};

export const courses: Course[] = [
  {
    slug: "portuguese-foundations",
    title: "Portuguese Foundations",
    description:
      "Build a strong foundation in Brazilian Portuguese, including essential vocabulary, grammar, pronunciation, and everyday expressions.",
    level: "Beginner (A1–A2)",
    format: "Self-paced online course — 24 video lessons",
    includes: [
      "24 recorded video lessons (5 modules)",
      "Downloadable PDF workbook and vocabulary lists",
      "Pronunciation audio for every lesson",
      "Practice exercises with answer keys",
    ],
    price: "USD 39",
    currency: "USD",
    access: "Immediate online access after payment · 12 months of access",
  },
  {
    slug: "brazilian-portuguese-conversation",
    title: "Brazilian Portuguese Conversation",
    description:
      "Develop confidence with practical vocabulary and conversation-focused Portuguese lessons.",
    level: "Intermediate (B1–B2)",
    format: "Self-paced online course — 20 conversation lessons",
    includes: [
      "20 conversation-focused video lessons",
      "Real-life dialogues with natural Brazilian speech",
      "Speaking prompts and shadowing audio",
      "Expression and slang reference guide (PDF)",
    ],
    price: "USD 49",
    currency: "USD",
    access: "Immediate online access after payment · 12 months of access",
  },
  {
    slug: "portuguese-for-everyday-life",
    title: "Portuguese for Everyday Life",
    description:
      "Learn useful Portuguese for common situations, communication, travel, and daily interactions.",
    level: "Beginner to intermediate (A2–B1)",
    format: "Self-paced online course — 16 situation-based lessons",
    includes: [
      "16 situation-based video lessons (travel, food, work, health)",
      "Phrasebook PDF with 300+ everyday expressions",
      "Listening practice audio files",
      "Printable review sheets",
    ],
    price: "USD 29",
    currency: "USD",
    access: "Immediate online access after payment · 12 months of access",
  },
  {
    slug: "complete-portuguese-bundle",
    title: "Complete Portuguese Bundle",
    description:
      "All three online courses together, plus one live 50-minute private lesson to review your progress.",
    level: "Beginner to intermediate (A1–B2)",
    format: "Bundle — 60 video lessons + 1 live private lesson",
    includes: [
      "Portuguese Foundations, Conversation and Everyday Life",
      "All PDF workbooks, phrasebooks and audio files",
      "One live 50-minute private lesson",
      "Personalized study plan",
    ],
    price: "USD 60",
    currency: "USD",
    access: "Immediate online access after payment · 12 months of access",
  },
];

export const audiences = [
  { title: "Complete Beginners", text: "Start Portuguese from the basics." },
  {
    title: "English Speakers",
    text: "Learn Brazilian Portuguese with explanations designed for English-speaking students.",
  },
  {
    title: "Spanish Speakers",
    text: "Understand the similarities and differences between Spanish and Portuguese.",
  },
  { title: "Travelers", text: "Build useful Portuguese for trips and everyday situations." },
  {
    title: "Future Brazil Residents",
    text: "Develop practical communication skills for life in Brazil.",
  },
  {
    title: "Conversation Learners",
    text: "Practice speaking and improve everyday communication.",
  },
];

export const steps = [
  {
    title: "Choose Your Learning Option",
    text: "Choose a private lesson or an online course based on your learning goals.",
  },
  {
    title: "Send a Message on WhatsApp",
    text: "Tell me what you want to learn and I reply with the payment link for your option.",
  },
  {
    title: "Receive Your Instructions",
    text: "After payment you receive your course access or your confirmed lesson time and meeting link.",
  },
  {
    title: "Start Learning",
    text: "Begin learning Brazilian Portuguese online from wherever you are.",
  },
];

export const faqs = [
  {
    q: "Do you teach Brazilian Portuguese?",
    a: "Yes. All lessons, courses, and materials focus on Brazilian Portuguese.",
  },
  {
    q: "Are the lessons completely online?",
    a: "Yes. Private lessons, courses, and digital materials are delivered 100% online, so you can learn from anywhere.",
  },
  {
    q: "Do you teach beginners?",
    a: "Yes. Lessons can start from the very basics and are adapted to your current level.",
  },
  {
    q: "Can Spanish speakers learn Portuguese with you?",
    a: "Yes. Lessons for Spanish speakers can focus on the similarities and differences between Spanish and Portuguese.",
  },
  {
    q: "Can English speakers learn Portuguese with you?",
    a: "Yes. Explanations can be given in a way designed for English-speaking students.",
  },
  {
    q: "How do private lessons work?",
    a: "Private lessons are live one-on-one online sessions of 50 minutes, adapted to your level and goals. A single lesson is USD 20, with packages of 5 lessons for USD 90 and 10 lessons for USD 170. Lessons take place on Google Meet or Zoom.",
  },
  {
    q: "How do I schedule a lesson?",
    a: `Send a message on WhatsApp (${WHATSAPP_DISPLAY}) with your time zone and preferred days. We agree on a time, you complete the payment, and you receive the confirmation and meeting link.`,
  },
  {
    q: "How do I access an online course?",
    a: "After your payment is confirmed you receive an email with your course access link. Courses are self-paced and include 12 months of access from the purchase date.",
  },
  {
    q: "What happens after I purchase?",
    a: "Course access is sent to your purchase email, normally within a few minutes and always within 24 hours. For private lessons you receive the confirmed time and the meeting link.",
  },
  {
    q: "What is your refund policy?",
    a: "Courses can be refunded within 7 days of purchase if less than 20% of the content has been accessed. Private lessons can be cancelled or rescheduled free of charge up to 24 hours before the lesson. Full details are on the Refund Policy page.",
  },
  {
    q: "How can I contact Kemuel?",
    a: `You can use the contact form on the Contact page, send a message on WhatsApp (${WHATSAPP_DISPLAY}), or write to ${SUPPORT_EMAIL}.`,
  },
];
