export function MobileActions() {
  return (
    <div className="fixed bottom-20 left-0 right-0 z-40 px-4 sm:hidden">
      <div className="flex flex-col space-y-3">
        <button className="flex w-full items-center justify-center rounded-2xl bg-on-background py-4 text-sm font-black uppercase tracking-widest text-background shadow-xl">
          Request Connection
        </button>
        <button className="flex w-full items-center justify-center rounded-2xl bg-primary py-4 text-sm font-black uppercase tracking-widest text-on-primary shadow-xl">
          Send Message
        </button>
      </div>
    </div>
  );
}
