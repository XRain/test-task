export function BottomNav() {
  const navItems = [
    { label: "Search", icon: "search" },
    { label: "Discover", icon: "explore" },
    { label: "Messages", icon: "chat_bubble" },
    { label: "Profile", icon: "person" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-outline/10 bg-surface/90 pb-safe backdrop-blur-lg sm:hidden">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => (
          <button key={item.label} className="flex flex-col items-center space-y-1 text-outline hover:text-primary">
            <span className="material-symbols-outlined text-2xl">{item.icon}</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
