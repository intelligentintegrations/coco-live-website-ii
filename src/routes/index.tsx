import { createFileRoute } from "@tanstack/react-router";
import cocoHeroAsset from "@/assets/coco-waving.png";
import cocoMapAsset from "@/assets/coco-hero-v2.png";
import cocoMeetAsset from "@/assets/coco-meet.svg";
import flatlayAsset from "@/assets/flatlay.png";
import silvinaAsset from "@/assets/silvina.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const CTA_URL = "https://buy.stripe.com/9B6cN4drf6DOfCefMlaEE01";

const PLANS = [
  {
    name: "Monthly",
    price: "$29",
    period: "/month",
    tagline: "Pay as you go, cancel anytime.",
    features: ["A new envelope every month", "Cancel in one click, anytime", "Ships Australia-wide"],
    cta: "Start monthly",
    url: "https://buy.stripe.com/9B6cN4drf6DOfCefMlaEE01",
    featured: false,
  },
  {
    name: "Quarterly",
    price: "$65",
    period: "/3 months",
    tagline: "Save 25% with code COCO25.",
    features: [
      "Three months of envelopes",
      "25% off with code COCO25",
      "The best way to try the club",
    ],
    cta: "Try 3 months",
    url: "https://buy.stripe.com/6oUdR8af3fakblYas1aEE03",
    featured: true,
  },
  {
    name: "Yearly",
    price: "$290",
    period: "/year",
    tagline: "Two months free vs monthly.",
    features: ["A full year of envelopes", "2 months free", "Our best value"],
    cta: "Join yearly",
    url: "https://buy.stripe.com/dRmaEWgDrd2c89MgQpaEE02",
    featured: false,
  },
];

function CTAButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      <a
        href={CTA_URL}
        className="inline-flex items-center justify-center rounded-full bg-coral px-10 py-4 text-base font-bold text-white shadow-[0_4px_14px_rgba(216,90,48,0.35)] transition hover:bg-[var(--coral-dark)] hover:-translate-y-0.5 active:translate-y-0 sm:text-lg"
      >
        {children}
      </a>
      <p className="mt-3 text-sm text-ink/55">Risk-free · cancel anytime</p>
    </div>
  );
}

function Check() {
  return (
    <span
      aria-hidden
      className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-eucalyptus text-white"
    >
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
        <path
          d="M4 10.5l4 4 8-9"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function Dot() {
  return <span className="mt-2.5 inline-block h-2.5 w-2.5 flex-none rounded-full bg-ink/30" />;
}

function Section({
  children,
  className = "",
  bg = "bg-white",
}: {
  children: React.ReactNode;
  className?: string;
  bg?: string;
}) {
  return (
    <section className={`w-full ${bg}`}>
      <div className={`mx-auto w-full max-w-[720px] px-5 py-16 sm:px-6 sm:py-24 ${className}`}>
        {children}
      </div>
    </section>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center text-3xl font-bold leading-tight text-ink sm:text-4xl">
      {children}
    </h2>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl bg-cream/60 p-5 shadow-[0_2px_10px_rgba(74,27,12,0.05)] sm:p-6 ${className}`}
    >
      {children}
    </div>
  );
}

function LandingPage() {
  return (
    <main className="bg-cream font-body text-ink">
      {/* 1. Top credibility line */}
      <div className="w-full bg-cream pt-8 sm:pt-10">
        <p className="mx-auto max-w-[720px] px-5 text-center text-sm font-semibold tracking-wide text-ink/60">
          Made by a qualified accountant. And a mum.
        </p>
      </div>

      {/* 2. HERO */}
      <section className="w-full bg-cream">
        <div className="mx-auto w-full max-w-[1080px] px-5 py-12 sm:px-6 sm:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
            <div className="order-2 text-center md:order-1 md:text-left">
              <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-[3.25rem]">
                Raise a child who's clever with money —{" "}
                <span className="text-coral">
                  without lectures, screens, or being an expert yourself.
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink/80 sm:text-xl md:mx-0">
                Every month, a little quokka named Coco sends your child a real letter in the post —
                a story, a hands-on adventure, and one money idea they'll actually remember.
              </p>
              <div className="mt-9 flex justify-center md:justify-start">
                <CTAButton>Start your subscription</CTAButton>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="mx-auto w-full max-w-[460px]">
                <img
                  src={cocoHeroAsset}
                  alt="Coco the quokka waving hello with a letter in hand"
                  width={1024}
                  height={1024}
                  fetchPriority="high"
                  decoding="async"
                  className="block h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Does this sound like you? */}
      <Section bg="bg-white">
        <H2>Does this sound like you?</H2>
        <ul className="mx-auto mt-10 space-y-4">
          {[
            "You want your child confident with money, but you're not sure how to teach it.",
            "You were never really taught yourself, so where do you begin?",
            "Every \u201Ceducational\u201D app is just more screen time — and you want less, not more.",
            "You worry they're learning that money = stuff, and happiness = buying things.",
          ].map((t) => (
            <li
              key={t}
              className="flex gap-4 rounded-2xl bg-cream p-5 text-base leading-relaxed sm:text-lg"
            >
              <Dot />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* 4. Now imagine if */}
      <Section bg="bg-cream">
        <H2>Now imagine if…</H2>
        <ul className="mx-auto mt-10 space-y-4">
          {[
            "Your child actually looked forward to learning about money.",
            "They understood by age nine what took you until adulthood.",
            "They learned it screen-free, while you got ten quiet minutes.",
            "And every month, you did nothing — it just arrived, and it just worked.",
          ].map((t) => (
            <li
              key={t}
              className="flex gap-4 rounded-2xl bg-white p-5 text-base leading-relaxed shadow-[0_2px_10px_rgba(74,27,12,0.05)] sm:text-lg"
            >
              <Check />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex justify-center">
          <CTAButton>Start your subscription</CTAButton>
        </div>
      </Section>

      {/* 5. Meet Coco */}
      <Section bg="bg-white" className="text-center">
        <H2>Meet Coco</H2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink/80 sm:text-xl">
          Coco's Money Club is a monthly money adventure that lands in your child's letterbox. A
          little Australian quokka who teaches one money idea a month, through story and play. No
          apps. No prep for you.
        </p>
        <img
          src={cocoMeetAsset}
          alt="Coco the quokka waving hello"
          loading="lazy"
          decoding="async"
          className="mx-auto mt-10 h-auto w-full max-w-xs sm:max-w-sm"
        />
      </Section>

      {/* 6. How it works */}
      <Section bg="bg-cream">
        <H2>How it works</H2>
        <ol className="mt-10 space-y-4">
          {[
            { n: 1, t: "It arrives", d: "a flat envelope addressed to your child, every month." },
            {
              n: 2,
              t: "They dive in",
              d: "the letter, the adventure, the stickers, mostly on their own.",
            },
            {
              n: 3,
              t: "They grow",
              d: "they build their Money World and pick up one money skill for life.",
            },
          ].map((step) => (
            <li
              key={step.n}
              className="flex items-start gap-5 rounded-2xl bg-white p-6 shadow-[0_2px_10px_rgba(74,27,12,0.05)]"
            >
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-sky text-xl font-bold text-white">
                {step.n}
              </span>
              <p className="text-base leading-relaxed sm:text-lg">
                <span className="font-bold text-ink">{step.t}</span> — {step.d}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-center text-base italic text-ink/65">
          The only thing you do is check the letterbox.
        </p>
      </Section>

      {/* 7. 12-month journey */}
      <Section bg="bg-white">
        <H2>The 12-month journey</H2>
        <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-ink/70 sm:text-lg">
          Each month adds a new piece to your child's Money World — a growing map of everything
          they've learned.
        </p>
        <div className="mx-auto mt-8 w-full max-w-[520px] overflow-hidden rounded-3xl shadow-xl ring-1 ring-ink/5">
          <img
            src={cocoMapAsset}
            alt="Illustrated map of Coco's World with little shops, trees, and gold coins"
            width={1024}
            height={1024}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full"
          />
        </div>
        <div className="mt-10 space-y-4">
          {[
            {
              a: "Act 1",
              t: "What money is",
              d: "a tool, where it comes from, every coin is a choice.",
              c: "bg-sky",
            },
            {
              a: "Act 2",
              t: "Choosing with care",
              d: "the story behind things, \u201Cdo I really want this?\u201D, patience.",
              c: "bg-orange",
            },
            {
              a: "Act 3",
              t: "Directing money",
              d: "saving for what matters, spending on purpose, giving.",
              c: "bg-eucalyptus",
            },
            {
              a: "Act 4",
              t: "Beyond money",
              d: "caring for what we have, making something, what truly makes us happy.",
              c: "bg-coral",
            },
          ].map((act) => (
            <div key={act.a} className="rounded-2xl bg-cream p-6">
              <span
                className={`inline-block rounded-full ${act.c} px-3 py-1 text-xs font-bold uppercase tracking-wider text-white`}
              >
                {act.a}
              </span>
              <p className="mt-3 text-xl font-bold text-ink">{act.t}</p>
              <p className="mt-1 text-base leading-relaxed text-ink/80">{act.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 8. Why an accountant built this */}
      <Section bg="bg-cream" className="text-center">
        <H2>Why an accountant built this</H2>
        <div className="mt-8 flex justify-center">
          <img
            src={silvinaAsset}
            alt="Silvina, founder of Coco's Money Club"
            width={1277}
            height={1920}
            loading="lazy"
            decoding="async"
            className="h-28 w-28 rounded-full object-cover shadow-[0_4px_14px_rgba(74,27,12,0.15)] ring-4 ring-white sm:h-32 sm:w-32"
          />
        </div>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink/80 sm:text-xl">
          Hi — I'm Silvina. By day I build money systems for businesses worth millions. I'm also a
          mum to a little girl. I'm building this for her — and for your kids too: real money sense,
          taught with warmth, on paper, by someone who actually does this for a living.
        </p>
      </Section>

      {/* 9. What's inside every month */}
      <Section bg="bg-white">
        <H2>What's inside every month</H2>
        <div className="mt-10 overflow-hidden rounded-3xl bg-cream">
          <img
            src={flatlayAsset}
            alt="A flat-lay of Coco's monthly envelope: letter, coins, activity sheet, stickers and map"
            width={1024}
            height={1024}
            loading="lazy"
            decoding="async"
            className="mx-auto block h-auto w-full"
          />
        </div>
        <ul className="mt-10 space-y-4">
          {[
            { icon: "✉️", t: "A personal letter from Coco, addressed to your child by name." },
            { icon: "🧩", t: "A hands-on adventure — a story, puzzle, or game." },
            { icon: "🗺️", t: "A piece of their Money World — stickers to build their map." },
            { icon: "🏅", t: "A Money Explorer rank — they level up as they go." },
            { icon: "📮", t: "A pass-it-on postcard to send to a friend." },
            { icon: "📝", t: "A note just for you — 30 seconds, no prep." },
          ].map((item) => (
            <li
              key={item.t}
              className="flex items-start gap-4 rounded-2xl bg-cream p-5 text-base leading-relaxed sm:text-lg"
            >
              <span aria-hidden className="text-2xl leading-none">
                {item.icon}
              </span>
              <span>{item.t}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* 10. This is for you if */}
      <Section bg="bg-cream">
        <H2>This is for you if…</H2>
        <ul className="mx-auto mt-10 space-y-4">
          {[
            "You've got a child aged roughly 6 to 9.",
            "You want them grounded about money, not materialistic.",
            "You'd rather they learned offline, away from a screen.",
            "You believe the best things in life aren't things.",
          ].map((t) => (
            <li
              key={t}
              className="flex gap-4 rounded-2xl bg-white p-5 text-base leading-relaxed shadow-[0_2px_10px_rgba(74,27,12,0.05)] sm:text-lg"
            >
              <Check />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* 11. OFFER */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1080px] px-5 py-16 sm:px-6 sm:py-24">
          <H2>Choose your plan</H2>
          <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-ink/70 sm:text-lg">
            One little quokka, three easy ways to join. Cancel anytime — and your first month is
            covered by our money-back guarantee.
          </p>
          <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl p-7 text-center sm:p-8 ${
                  plan.featured
                    ? "border-2 border-coral bg-cream shadow-[0_12px_34px_rgba(216,90,48,0.18)] md:-translate-y-3"
                    : "border-2 border-ink/10 bg-cream/60 shadow-[0_4px_16px_rgba(74,27,12,0.06)]"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-coral px-4 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[0_4px_12px_rgba(216,90,48,0.35)]">
                    Most popular
                  </span>
                )}
                <p
                  className={`text-lg font-bold uppercase tracking-wide ${
                    plan.featured ? "text-coral" : "text-ink/70"
                  }`}
                >
                  {plan.name}
                </p>
                <p className="mt-4 text-5xl font-bold text-ink">
                  {plan.price}
                  <span className="text-lg font-bold text-ink/55">{plan.period}</span>
                </p>
                <p className="mt-3 text-sm font-semibold text-ink/65">{plan.tagline}</p>
                <ul className="mt-7 flex-1 space-y-3 text-left text-base">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check />
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href={plan.url}
                    className={`inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-base font-bold transition hover:-translate-y-0.5 active:translate-y-0 sm:text-lg ${
                      plan.featured
                        ? "bg-coral text-white shadow-[0_4px_14px_rgba(216,90,48,0.35)] hover:bg-[var(--coral-dark)]"
                        : "border-2 border-coral bg-transparent text-coral hover:bg-coral/5"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-md text-center text-sm leading-relaxed text-ink/70">
            Try your first month risk-free — if it's not right for your family, just email me within
            14 days of your first envelope arriving and I'll refund that month in full, no questions
            asked.
          </p>
        </div>
      </section>

      {/* 12. FAQ */}
      <Section bg="bg-cream">
        <H2>A few quick questions</H2>
        <div className="mt-10 space-y-4">
          {[
            {
              q: "Is this another screen or app?",
              a: "The opposite — all paper, all hands-on. A break from screens.",
            },
            {
              q: "Do I have to teach anything?",
              a: "No. Your child does it. You get a 30-second note if you'd like to join in.",
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes — cancel anytime in one click. And if your very first envelope isn't right for your family, email me within 14 days and I'll refund that first month in full.",
            },
            {
              q: "Do you ship to me?",
              a: "Yes — we post Australia-wide, right to your letterbox. Wherever you are in Australia, Coco's letter will find you.",
            },
            {
              q: "I've got another question.",
              a: "Just email me at hello@cocosmoneyclub.com.au and I'll get back to you personally — I'm a real mum, not a call centre.",
            },
          ].map((f) => (
            <div
              key={f.q}
              className="rounded-2xl bg-white p-6 shadow-[0_2px_10px_rgba(74,27,12,0.05)]"
            >
              <p className="text-lg font-bold text-ink">{f.q}</p>
              <p className="mt-2 text-base leading-relaxed text-ink/75">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 13. CLOSING */}
      <Section bg="bg-cream" className="text-center">
        <p className="mx-auto max-w-xl text-2xl font-bold leading-snug text-ink sm:text-3xl">
          One day your child will manage their own money. This is where it begins — quietly,
          monthly, in the letterbox.
        </p>
        <div className="mt-10 flex justify-center">
          <CTAButton>Join Coco's Money Club</CTAButton>
        </div>
      </Section>

      {/* 13b. Freebie */}
      <section className="w-full bg-cream">
        <div className="mx-auto w-full max-w-[560px] px-5 pb-4 sm:px-6">
          <div className="rounded-2xl border border-ink/10 bg-white/60 p-6 text-center">
            <p className="text-sm leading-relaxed text-ink/70 sm:text-base">
              Not ready to join yet? Grab my free guide — 5 screen-free ways to teach your kids
              about money.
            </p>
            <div className="mt-4 flex justify-center">
              <a
                href="https://tally.so/r/7RPgXR"
                className="inline-flex items-center justify-center rounded-full border border-ink/25 bg-transparent px-5 py-2 text-sm font-semibold text-ink/80 transition hover:bg-ink/5"
              >
                Get the free guide
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 14. Footer */}
      <footer className="bg-cream pb-10 pt-2 text-center text-xs text-ink/55">
        <p className="mb-2 text-sm text-ink/70">
          Questions? Email me at{" "}
          <a
            href="mailto:hello@cocosmoneyclub.com.au"
            className="font-semibold text-ink underline"
          >
            hello@cocosmoneyclub.com.au
          </a>{" "}
          — I answer personally.
        </p>
        © 2026 Coco's Money Club
      </footer>
    </main>
  );
}
