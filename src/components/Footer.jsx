export default function Footer() {
  return (
    <footer className="w-full py-12 px-4 border-t border-[var(--glass-border)] mt-auto bg-[var(--color-background)] bg-opacity-50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-bold text-xl tracking-tight text-[var(--color-primary)]">
          Walkers
        </div>
        
        <div className="flex gap-8 text-sm font-medium text-[var(--color-secondary)]">
          <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Our Materials</a>
          <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Design Philosophy</a>
          <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Contact</a>
        </div>
        
        <div className="text-xs text-secondary">
          &copy; {new Date().getFullYear()} Walkers. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
