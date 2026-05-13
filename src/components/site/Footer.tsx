export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[image:var(--gradient-accent)]" />
          <span className="font-semibold text-foreground">Armstrong Digital</span>
        </div>
        <div>© {new Date().getFullYear()} Armstrong Digital. Built with care.</div>
      </div>
    </footer>
  );
}