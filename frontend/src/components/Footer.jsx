export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative z-10 border-t border-white/10 py-8 mt-20"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © 2026 AI Review Assistant —{" "}
          <span className="text-violet-400">Built with AI</span>
        </p>

        <div className="flex items-center gap-6">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}