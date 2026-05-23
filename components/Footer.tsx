export function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--glass-border)] bg-[color:var(--glass-fill-base)] backdrop-blur-3xl">
      <div className="section-shell flex flex-col gap-4 py-5 text-sm text-[color:color-mix(in_srgb,var(--foreground)_72%,transparent)] sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; 2026 OakFrog Labs. All rights reserved.</p>
        <p className="flex items-center gap-2">
          <span>Developed by</span>
          <span className="font-semibold text-[var(--accent)]">OakFrog</span>
          <span className="liquid-pill inline-flex items-center justify-center rounded-full px-2.5 py-1 text-xs">
            frog
          </span>
        </p>
      </div>
    </footer>
  );
}
