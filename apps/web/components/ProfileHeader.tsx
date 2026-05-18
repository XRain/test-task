import type { HunqzProfile } from "@repo/shared";

interface ProfileHeaderProps {
  profile: HunqzProfile;
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  const location = profile.location ? `${profile.location.name}, ${profile.location.country}` : "Unknown location";
  const age = profile.personal?.age;
  const imageUrl = profile.preview_pic?.image_url || "/placeholder-profile.png";

  return (
    <div className="relative overflow-hidden bg-surface shadow-sm sm:rounded-2xl">
      <div className="h-48 w-full bg-surface-variant sm:h-64">
        {/* Banner/Cover area - could use first picture or default color */}
        <div className="h-full w-full bg-gradient-to-r from-primary to-primary-container opacity-80" />
      </div>
      
      <div className="px-4 pb-6 sm:px-8">
        <div className="relative -mt-16 flex items-end space-x-5 sm:-mt-24">
          <div className="flex">
            <img
              className="h-32 w-32 rounded-2xl border-4 border-surface object-cover shadow-lg sm:h-48 sm:w-48"
              src={imageUrl}
              alt={profile.name}
            />
          </div>
          <div className="mb-2 flex-1 pt-4 sm:pt-0">
            <div className="flex items-center space-x-2">
              <h1 className="truncate font-headline text-2xl font-bold text-on-surface sm:text-4xl">
                {profile.name}{age ? `, ${age}` : ""}
              </h1>
              <div className="flex space-x-1">
                {profile.is_plus && (
                  <span className="inline-flex items-center rounded-full bg-primary-container/20 px-2.5 py-0.5 text-xs font-medium text-primary ring-1 ring-inset ring-primary/10">
                    PLUS
                  </span>
                )}
                <span className="inline-flex items-center rounded-full bg-surface-variant px-2.5 py-0.5 text-xs font-medium text-on-surface-variant ring-1 ring-inset ring-outline/20">
                  {profile.type}
                </span>
              </div>
            </div>
            <div className="mt-1 flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <div className="flex items-center text-sm text-outline">
                <span className="material-symbols-outlined mr-1.5 text-lg">location_on</span>
                {location}
              </div>
              <div className="flex items-center text-sm text-outline">
                <span className={`mr-1.5 h-2.5 w-2.5 rounded-full ${profile.online_status === 'Online' ? 'bg-green-500' : 'bg-outline'}`} />
                {profile.online_status}
              </div>
              {profile.last_login && (
                <div className="flex items-center text-sm text-outline/60">
                  <span className="material-symbols-outlined mr-1.5 text-lg">history</span>
                  Active {new Date(profile.last_login).toLocaleDateString()}
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            {profile.headline && (
              <p className="text-lg italic text-on-surface-variant">"{profile.headline}"</p>
            )}
          </div>
          <div className="flex space-x-3">
            <button className="inline-flex flex-1 items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-on-primary shadow-sm hover:bg-primary-container focus:outline-none sm:flex-none">
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
