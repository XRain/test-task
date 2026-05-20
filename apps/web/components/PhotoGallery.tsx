import type { HunqzImage } from "@repo/shared";

interface PhotoGalleryProps {
  pictures: HunqzImage[];
}

export function PhotoGallery({ pictures }: PhotoGalleryProps) {
  if (!pictures || pictures.length === 0) return null;

  return (
    <div className="rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-outline/20 sm:p-8">
      <h2 className="mb-6 font-headline text-xl font-bold text-on-surface">Photos</h2>
      
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {pictures.map((pic) => (
          <div key={pic.id} className="group relative aspect-square overflow-hidden rounded-xl bg-surface-variant">
            {/* We actually don't have placeholder image, but that should usually present in real code */}
            <img
              src={pic.image_url || "/placeholder-photo.png"}
              alt={pic.comment || "Profile photo"}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {!pic.is_public && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/40 backdrop-blur-sm">
                <span className="material-symbols-outlined text-on-background">lock</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
