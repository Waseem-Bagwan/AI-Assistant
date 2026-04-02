/**
 * InputField — reusable input or textarea
 *
 * Props:
 *   label       string   — field label
 *   type        string   — "input" | "textarea" (default: "input")
 *   value       string
 *   onChange    fn
 *   placeholder string
 *   rows        number   — only for textarea (default: 5)
 *   disabled    bool
 */
export default function InputField({
  label,
  type = "input",
  value,
  onChange,
  placeholder = "",
  rows = 5,
  disabled = false,
}) {
  const baseClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed resize-none";

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
          {label}
        </label>
      )}

      {type === "textarea" ? (
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          disabled={disabled}
          className={baseClass}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`${baseClass} h-11`}
        />
      )}
    </div>
  );
}