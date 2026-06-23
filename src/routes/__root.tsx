import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const SITE_URL = "https://cocosmoneyclub.com.au";
const SITE_NAME = "Coco's Money Club";
const SITE_TITLE = "Coco's Money Club — Raise a child who's clever with money";
const SITE_DESCRIPTION =
  "A monthly letter from Coco the quokka teaches kids 6–9 about money — screen-free, story-led, built by an accountant and a mum.";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

// Structured data for richer search results (Organization, Product/Offer, FAQ).
const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      description: SITE_DESCRIPTION,
      email: "hello@cocosmoneyclub.com.au",
      areaServed: "AU",
    },
    {
      "@type": "Product",
      name: SITE_NAME,
      image: OG_IMAGE,
      description: SITE_DESCRIPTION,
      brand: { "@id": `${SITE_URL}/#organization` },
      offers: {
        "@type": "Offer",
        price: "29.00",
        priceCurrency: "AUD",
        availability: "https://schema.org/InStock",
        url: SITE_URL,
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
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
          a: "Yes — we post Australia-wide, right to your letterbox.",
        },
      ].map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, viewport-fit=cover",
      },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#FBF3E7" },
      { name: "author", content: SITE_NAME },
      // Open Graph
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:locale", content: "en_AU" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1024" },
      { property: "og:image:height", content: "1024" },
      {
        property: "og:image:alt",
        content: "Coco the quokka holding a letter, beside the Coco's Money Club name",
      },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
      {
        name: "twitter:image:alt",
        content: "Coco the quokka holding a letter, beside the Coco's Money Club name",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", href: "/icon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;600;700&display=swap",
      },
    ],
    scripts: [
      // Structured data for rich search results.
      {
        type: "application/ld+json",
        children: JSON.stringify(STRUCTURED_DATA),
      },
      // Self-exclusion: visit /?exclude=me on each of your devices to flag them.
      // Works with Plausible's built-in localStorage.plausible_ignore check.
      {
        children: `
(function(){try{
  var p=new URLSearchParams(window.location.search);
  if(p.get('exclude')==='me'){localStorage.setItem('plausible_ignore','true');console.log('[analytics] this browser is now excluded');}
  if(p.get('exclude')==='off'){localStorage.removeItem('plausible_ignore');console.log('[analytics] exclusion removed');}
}catch(e){}})();
        `.trim(),
      },
      // Plausible Analytics
      {
        defer: true,
        "data-domain": "cocosmoneyclub.com.au",
        src: "https://plausible.io/js/script.js",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
