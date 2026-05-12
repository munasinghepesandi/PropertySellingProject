import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { CheckCircle, Crown, Zap, TrendingUp, Users, Shield, Clock, Gift } from "lucide-react";

const membershipPlans = [
  {
    name: "Basic",
    price: "Free",
    description: "Essential property search and browsing",
    features: [
      "Browse all property listings",
      "Save favorite properties",
      "Basic price alerts",
      "Access to public market data",
      "Mobile app access",
    ],
    cta: "Start Browsing",
    color: "#d9e8f6",
  },
  {
    name: "Premium",
    price: "Rs. 4,999/month",
    description: "Advanced tools and priority support",
    features: [
      "Everything in Basic",
      "Advanced price analysis tools",
      "Unlimited property alerts",
      "Direct agent messaging",
      "Property comparison tools",
      "Market reports (monthly)",
      "Priority customer support",
    ],
    cta: "Upgrade to Premium",
    color: "#2171B5",
    highlighted: true,
  },
  {
    name: "Professional",
    price: "Rs. 14,999/month",
    description: "For serious investors and agents",
    features: [
      "Everything in Premium",
      "Investment ROI calculator",
      "Portfolio management tools",
      "Advanced market analytics",
      "Export property data",
      "Lead generation tools",
      "Custom market reports",
      "Dedicated account manager",
      "API access",
    ],
    cta: "Get Professional",
    color: "#d9e8f6",
  },
];

const benefitCategories = [
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    description: "Access real-time market data, price trends, and investment insights",
    features: [
      "Live property price indices",
      "Neighborhood trend analysis",
      "Investment opportunity alerts",
      "Market sentiment reports",
    ],
  },
  {
    icon: Users,
    title: "Expert Network",
    description: "Connect with trusted professionals and industry experts",
    features: [
      "Direct access to agents",
      "Architect & builder directory",
      "Legal advisor network",
      "Group buying discounts",
    ],
  },
  {
    icon: Shield,
    title: "Protection & Confidence",
    description: "Verified listings and secure transactions",
    features: [
      "Identity verified agents",
      "Fraud protection guarantee",
      "Secure payment escrow",
      "Document verification",
    ],
  },
  {
    icon: Zap,
    title: "Time Saving Tools",
    description: "Automation and smart features",
    features: [
      "Auto-matching properties",
      "AI-powered recommendations",
      "Bulk property management",
      "Saved searches & alerts",
    ],
  },
];

const memberStats = [
  { label: "Active Members", value: "100K+", note: "Joined our community" },
  { label: "Properties Saved", value: "500K+", note: "Bookmarked by members" },
  { label: "Transactions", value: "25K+", note: "Completed through our platform" },
];

const faqs = [
  {
    q: "Can I upgrade or downgrade my membership anytime?",
    a: "Yes, you can change your membership tier at any time. Changes take effect on your next billing cycle.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept credit cards, bank transfers, and mobile payments (Dialog, Airtel, Hutch).",
  },
  {
    q: "Is there a contract or long-term commitment?",
    a: "No contracts. All plans are month-to-month and can be cancelled anytime without penalties.",
  },
  {
    q: "Do I get a refund if I cancel mid-month?",
    a: "Refunds are not provided for partial months. Your account will remain active until the end of your billing period.",
  },
  {
    q: "What happens to my saved properties if I downgrade?",
    a: "Your saved properties and searches remain safe. You'll just have fewer tools available with the Basic plan.",
  },
  {
    q: "Is there a trial period?",
    a: "Yes, you can use the Basic plan for free to explore all features before upgrading.",
  },
];

export default function MembershipBenefitsPage() {
  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden text-white">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80&auto=format&fit=crop"
          alt="Membership benefits"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="absolute inset-x-0 top-0 h-2 bg-[#2171B5]" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-white/80">Membership</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
            Lanka Property Web Membership Benefits
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
            Unlock exclusive features, tools, and insights. Access advanced market data, connect with experts, and find your perfect property faster.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {memberStats.map((stat) => (
            <article key={stat.label} className="rounded-[1.75rem] border border-[#d9e8f6] bg-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)]">
              <p className="text-4xl font-black text-[#2171B5]">{stat.value}</p>
              <p className="mt-2 text-sm font-black uppercase tracking-[0.24em] text-slate-600">{stat.label}</p>
              <p className="mt-2 text-xs leading-6 text-slate-500">{stat.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Membership Plans</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Choose your membership tier</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {membershipPlans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-[1.75rem] border-2 p-6 transition ${
                  plan.highlighted
                    ? "border-[#2171B5] bg-[#f8fbff] shadow-[0_20px_50px_rgba(33,113,181,0.15)]"
                    : "border-[#d9e8f6] bg-white shadow-[0_16px_40px_rgba(8,48,107,0.05)]"
                }`}
              >
                {plan.highlighted && (
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#2171B5] px-4 py-2 text-xs font-black text-white">
                    <Crown size={14} />
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-black text-slate-900">{plan.name}</h3>
                <p className="mt-2 text-3xl font-black text-[#2171B5]">{plan.price}</p>
                <p className="mt-2 text-sm text-slate-600">{plan.description}</p>

                <div className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle size={18} className="mt-1 shrink-0 text-[#2171B5]" />
                      <span className="text-sm font-semibold text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`mt-6 w-full rounded-xl px-5 py-3 font-black transition ${
                    plan.highlighted
                      ? "bg-[#2171B5] text-white hover:bg-[#194d7a]"
                      : "border border-[#2171B5] text-[#2171B5] hover:bg-[#f8fbff]"
                  }`}
                >
                  {plan.cta}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="mb-8">
          <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
          <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Benefits</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900">What you get as a member</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefitCategories.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article key={benefit.title} className="rounded-[1.75rem] border border-[#d9e8f6] bg-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)]">
                <div className="inline-flex rounded-2xl bg-[#eff6fd] p-3 text-[#2171B5]">
                  <Icon size={24} />
                </div>
                <h3 className="mt-4 text-lg font-black text-slate-900">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{benefit.description}</p>
                <ul className="mt-4 space-y-2">
                  {benefit.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-slate-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#2171B5]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">FAQ</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Membership questions answered</h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {faqs.map((faq) => (
              <details key={faq.q} className="rounded-2xl border border-[#d9e8f6] bg-[#f8fbff] p-5 shadow-sm">
                <summary className="cursor-pointer list-none text-base font-black text-slate-900">{faq.q}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="rounded-[2rem] bg-gradient-to-br from-[#08306B] to-[#2171B5] p-6 text-white shadow-[0_18px_50px_rgba(8,48,107,0.18)] md:p-8">
          <Gift size={30} />
          <h2 className="mt-4 text-3xl font-black">Join Lanka Property Web Today</h2>
          <p className="mt-3 text-sm leading-7 text-blue-100">
            Start with our free Basic membership and upgrade anytime. No contracts, no hidden fees. Cancel whenever you want.
          </p>
          <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-black text-[#2171B5] transition hover:shadow-lg">
            Sign Up Free
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
