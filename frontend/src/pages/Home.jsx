import { useState } from "react";
import InputField from "../components/InputField";
import { generateReply } from "../api/reviewApi";

// ── Icons ──────────────────────────────────────────────────────────────────
function SpinnerIcon() {
  return (
    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
    </svg>
  );
}

function CopyIcon({ checked }) {
  if (checked) {
    return (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

// ── Problem Section ────────────────────────────────────────────────────────
const PROBLEM_POINTS = [
  {
    icon: "👀",
    title: "Customers check reviews first",
    desc: "Over 90% of diners read online reviews before choosing a restaurant.",
  },
  {
    icon: "🤐",
    title: "Silence destroys trust",
    desc: "Unanswered reviews signal that you don't care about your customers.",
  },
  {
    icon: "📉",
    title: "Negative reviews hurt revenue",
    desc: "A single unaddressed complaint can turn away dozens of potential visitors.",
  },
];

function ProblemSection() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-3">
          The problem
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Why replying to reviews matters
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {PROBLEM_POINTS.map(({ icon, title, desc }) => (
          <div
            key={title}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-violet-500/20 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
            <h3 className="text-sm font-semibold text-white mb-2">{title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Consequences Section ───────────────────────────────────────────────────
const CONSEQUENCES = [
  { icon: "🚶", text: "Missed potential customers who chose your competitor instead" },
  { icon: "🔍", text: "Lower trust from new visitors browsing your profile" },
  { icon: "💬", text: "Poor brand perception that's hard to reverse" },
  { icon: "⏳", text: "Hours wasted trying to craft the right response manually" },
];

function ConsequencesSection() {
  return (
    <section className="max-w-3xl mx-auto px-6 pb-16">
      <div className="bg-red-500/5 border border-red-500/10 rounded-2xl p-7 sm:p-8">
        <p className="text-xs font-semibold text-red-400/80 uppercase tracking-widest mb-2">
          The cost of ignoring reviews
        </p>
        <h3 className="text-lg font-bold text-white mb-6">
          Every unanswered review is a missed opportunity
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {CONSEQUENCES.map(({ icon, text }) => (
            <div
              key={text}
              className="flex items-start gap-3 bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 hover:bg-white/[0.05] transition-colors duration-200"
            >
              <span className="text-base mt-0.5 shrink-0">{icon}</span>
              <p className="text-xs text-slate-400 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Solution Section ───────────────────────────────────────────────────────
const SOLUTION_POINTS = [
  {
    icon: "⚡",
    title: "Generate replies instantly",
    desc: "AI crafts professional, context-aware replies in under 3 seconds.",
  },
  {
    icon: "🛡️",
    title: "Handle negative reviews professionally",
    desc: "Turn bad reviews into trust-building moments with the right tone.",
  },
  {
    icon: "🔁",
    title: "Save time, stay consistent",
    desc: "Reply to every review without burning hours or sounding repetitive.",
  },
];

function SolutionSection() {
  return (
    <section className="max-w-3xl mx-auto px-6 pb-16">
      <div className="text-center mb-10">
        <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-3">
          The solution
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          How we help
        </h2>
        <p className="text-slate-400 text-sm mt-3 max-w-sm mx-auto leading-relaxed">
          One tool that handles your review replies — so you can focus on running your restaurant.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {SOLUTION_POINTS.map(({ icon, title, desc }) => (
          <div
            key={title}
            className="relative bg-white/5 border border-violet-500/15 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-violet-500/30 transition-all duration-300 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/20 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>
              <div className="w-5 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mb-3" />
              <h3 className="text-sm font-semibold text-white mb-2">{title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Trust Bar ──────────────────────────────────────────────────────────────
function TrustBar() {
  return (
    <div className="max-w-3xl mx-auto px-6 pb-10">
      <p className="text-center text-xs text-slate-500 mb-4 tracking-wide">
        Helping restaurant owners respond faster and build customer trust
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6 py-4 px-6 bg-white/[0.03] border border-white/[0.07] rounded-2xl">
        {[
          { icon: "🏪", label: "500+ restaurants using it" },
          { icon: "⚡", label: "Replies in under 3 seconds" },
          { icon: "⭐", label: "4.9 / 5 satisfaction score" },
        ].map(({ icon, label }) => (
          <div key={label} className="flex items-center gap-2">
            <span className="text-base">{icon}</span>
            <span className="text-xs text-slate-400 font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Tool Card ──────────────────────────────────────────────────────────────
function ToolCard() {
  const [review, setReview]                 = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [reply, setReply]                   = useState("");
  const [loading, setLoading]               = useState(false);
  const [error, setError]                   = useState("");
  const [copied, setCopied]                 = useState(false);

  const handleGenerate = async () => {
    if (!review.trim()) return;
    setLoading(true);
    setError("");
    setReply("");
    try {
      const data = await generateReply({ review: review.trim(), restaurantName });
      if (data.success) {
        setReply(data.reply);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError(
        err?.response?.data?.message ||
        err?.message ||
        "Failed to connect to the server. Please check your connection."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!reply) return;
    navigator.clipboard.writeText(reply).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const canGenerate = review.trim().length > 0 && !loading;

  return (
    <section className="max-w-2xl mx-auto px-6 pb-6">
      <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-7 sm:p-9">

        {/* top shimmer */}
        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

        <div className="flex flex-col gap-5">

          <InputField
            label="Customer Review"
            type="textarea"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Example: “Food was great but service was slow“"
            rows={5}
            disabled={loading}
          />

          <InputField
            label="Restaurant Name (optional)"
            type="input"
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
            placeholder="e.g. The Golden Fork"
            disabled={loading}
          />

          {/* Button + helper */}
          <div className="flex flex-col items-center gap-2">
            <button
              onClick={handleGenerate}
              disabled={!canGenerate}
              className="w-full h-12 flex items-center justify-center gap-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 active:scale-[0.99] shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40"
            >
              {loading ? (
                <>
                  <SpinnerIcon />
                  Writing your reply...
                </>
              ) : (
                <>✨ Generate Smart Reply</>
              )}
            </button>
            {!loading && (
              <p className="text-xs text-slate-500">
                Generate professional responses in seconds
              </p>
            )}
          </div>

          {/* Error */}
          {error && (
            <div className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm leading-relaxed">
              {error}
            </div>
          )}

          {/* Output */}
          {reply && (
            <div className="animate-[fadeUp_0.35s_ease]">
              <div className="relative bg-gradient-to-br from-white/[0.06] to-white/[0.03] border border-violet-500/20 rounded-2xl overflow-hidden">

                {/* header */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.07] bg-white/[0.03]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">
                      Generated Reply
                    </span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-200 ${
                      copied
                        ? "border-green-500/30 bg-green-500/10 text-green-400"
                        : "border-white/10 bg-white/5 text-slate-300 hover:bg-violet-500/10 hover:border-violet-500/30 hover:text-violet-300"
                    }`}
                  >
                    <CopyIcon checked={copied} />
                    {copied ? "Copied!" : "Copy reply"}
                  </button>
                </div>

                {/* body */}
                <div className="px-5 py-5 text-sm text-slate-200 leading-[1.85] whitespace-pre-wrap">
                  {reply}
                </div>

                {/* bottom shimmer */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
              </div>

              <p className="text-center text-xs text-slate-600 mt-3">
                Review before posting — small personal edits go a long way.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ── How It Works ───────────────────────────────────────────────────────────
const STEPS = [
  { icon: "📋", step: "01", title: "Paste the review",  desc: "Copy any review from Google, Zomato, TripAdvisor, or any platform." },
  { icon: "⚡", step: "02", title: "Generate reply",    desc: "AI crafts a professional, context-aware response in seconds." },
  { icon: "✨", step: "03", title: "Copy & post",       desc: "One click to copy, then paste it directly on the review platform." },
];

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="max-w-3xl mx-auto px-6 pt-10 pb-16 text-center">
      <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-3">
        How it works
      </p>
      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-10">
        Three steps to a perfect reply
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
        {STEPS.map(({ icon, step, title, desc }) => (
          <div
            key={title}
            className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-violet-500/20 transition-all duration-300 group"
          >
            <p className="text-4xl font-black text-violet-900/40 leading-none mb-3 group-hover:text-violet-800/50 transition-colors">
              {step}
            </p>
            <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-base mb-3 group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
            <h3 className="text-sm font-semibold text-white mb-1.5">{title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen pt-16">

      {/* Hero */}
      <section className="text-center px-6 pt-20 pb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium tracking-wide mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          AI-Powered for Restaurant Owners
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
          AI Review{" "}
          <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
            Assistant
          </span>
        </h1>

        <p className="text-slate-400 text-lg max-w-md mx-auto leading-relaxed mb-8">
          Generate smart, professional replies to customer reviews — in seconds.
        </p>

        {/* Stat pills */}
        <div className="inline-flex flex-wrap justify-center gap-8 px-8 py-4 bg-white/[0.03] border border-white/[0.07] rounded-2xl">
          {[
            { value: "⚡", label: "Instant AI replies" },
            { value: "🧠", label: "Smart & contextual responses" },
            { value: "💬", label: "Handle all types of reviews" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-xl font-bold bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text text-transparent">
                {value}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <ProblemSection />
      <ConsequencesSection />
      <SolutionSection />
      <TrustBar />
      <ToolCard />
      <HowItWorksSection />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}