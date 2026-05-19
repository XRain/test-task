import type { HunqzProfile } from "@repo/shared";

interface ProfileHeaderProps {
  profile: HunqzProfile;
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  const location = profile.location ? `${profile.location.name}, ${profile.location.country}` : "Unknown location";
  const age = profile.personal?.age;
  const imageUrl = profile.preview_pic?.image_url || "/placeholder-profile.png";

  return (
    <div className="relative overflow-hidden bg-surface shadow-sm sm:rounded-2xl sm:ring-1 sm:ring-outline/20">
      {/* Banner Area */}
      <div className="relative h-64 w-full bg-surface-variant sm:h-64">
        <img
          className="h-full w-full object-cover opacity-80"
          src={imageUrl}
          alt={profile.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent sm:hidden" />
        
        {/* Mobile Status Tag */}
        <div className="absolute left-4 top-4 flex items-center rounded-full bg-surface/60 px-3 py-1 backdrop-blur-md sm:hidden">
          <span className={`mr-1.5 h-2 w-2 rounded-full ${profile.online_status === 'Online' ? 'bg-green-500' : 'bg-outline'}`} />
          <span className="text-xs font-bold uppercase tracking-wider text-on-surface">{profile.online_status}</span>
        </div>
      </div>
      
      <div className="px-6 pb-8 sm:px-8">
        <div className="relative flex flex-col sm:-mt-24 sm:flex-row sm:items-end sm:space-x-5">
          {/* Desktop Profile Pic Overlap */}
          <div className="hidden sm:flex">
            <img
              className="h-48 w-48 rounded-2xl border-4 border-surface object-cover shadow-lg"
              src={imageUrl}
              alt={profile.name}
            />
          </div>

          <div className="flex-1 pt-6 sm:pt-0">
            <div className="flex flex-col items-start sm:flex-row sm:items-center sm:space-x-2">
              <h1 className="font-headline text-3xl font-black tracking-tight text-on-surface sm:text-4xl uppercase">
                {profile.name}{age ? `, ${age}` : ""}
              </h1>
              <div className="mt-2 flex space-x-1 sm:mt-0">
                {profile.is_plus && (
                  <span className="inline-flex items-center rounded-full bg-primary-container/20 px-2.5 py-0.5 text-xs font-bold text-primary ring-1 ring-inset ring-primary/10">
                    PLUS
                  </span>
                )}
                <span className="inline-flex items-center rounded-full bg-surface-variant px-2.5 py-0.5 text-xs font-bold text-on-surface-variant ring-1 ring-inset ring-outline/20">
                  {profile.type}
                </span>
              </div>
            </div>

            <div className="mt-4 flex flex-col space-y-2 sm:mt-1 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
              <div className="flex items-center text-sm font-medium text-outline">
                <span className="material-symbols-outlined mr-1.5 text-lg text-primary">location_on</span>
                {location}
              </div>
              <div className="hidden items-center text-sm font-medium text-outline sm:flex">
                <span className={`mr-1.5 h-2.5 w-2.5 rounded-full ${profile.online_status === 'Online' ? 'bg-green-500' : 'bg-outline'}`} />
                {profile.online_status}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col gap-6 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            {profile.headline && (
              <p className="text-xl font-medium italic leading-relaxed text-on-surface-variant sm:text-lg">
                "{profile.headline}"
              </p>
            )}
          </div>
          
          {/* Desktop Actions */}
          <div className="hidden space-x-3 sm:flex">
            <button className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-on-primary shadow-sm hover:bg-primary-container focus:outline-none">
              <span className="material-symbols-outlined mr-2">chat_bubble</span>
              Message
            </button>
            <button className="inline-flex items-center justify-center rounded-xl border border-outline/20 bg-surface px-3 py-3 text-on-surface shadow-sm hover:bg-surface-variant focus:outline-none">
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
