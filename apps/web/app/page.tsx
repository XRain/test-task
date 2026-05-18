import { createApiClient } from "@repo/shared";
import { ProfileHeader } from "../components/ProfileHeader";
import { PersonalInfo } from "../components/PersonalInfo";
import { SexualPreferences } from "../components/SexualPreferences";
import { ServicesInfo } from "../components/ServicesInfo";
import { Reviews } from "../components/Reviews";
import { PhotoGallery } from "../components/PhotoGallery";

export const dynamic = "force-dynamic";

const apiClient = createApiClient({
  baseUrl: "https://www.hunqz.com/api/opengrid/profiles/msescortplus"
});

export default async function HomePage() {
  const profile = await apiClient.fetchProfile();

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 border-b border-outline/20 bg-surface/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl font-headline font-black tracking-tighter text-primary">HUNQZ</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#" className="text-sm font-semibold text-on-background">Search</a>
                <a href="#" className="text-sm font-semibold text-on-surface-variant">Messages</a>
                <a href="#" className="text-sm font-semibold text-on-surface-variant">Profile</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="rounded-full p-2 text-outline hover:bg-surface-variant hover:text-on-surface-variant">
                <span className="material-symbols-outlined">search</span>
              </button>
              <button className="rounded-full p-2 text-outline hover:bg-surface-variant hover:text-on-surface-variant">
                <span className="material-symbols-outlined">settings</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8">
          {/* Profile Header Section */}
          <ProfileHeader profile={profile} />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 gap-8">
            {/* Gallery Section */}
            <PhotoGallery pictures={profile.pictures} />

            {/* Info Sections */}
            <PersonalInfo personal={profile.personal} />
            
            <SexualPreferences sexual={profile.sexual} />
            
            <ServicesInfo service={profile.service} />
            
            {/* Reviews Section */}
            <Reviews reviews={profile.reviews} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-outline/20 bg-surface py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-2xl font-headline font-black tracking-tighter text-primary">HUNQZ</p>
          <p className="mt-4 text-sm text-on-surface-variant">© 2026 Hunqz - Forged in Berlin.</p>
          <div className="mt-6 flex justify-center space-x-6">
            <a href="#" className="text-xs font-semibold text-outline hover:text-on-surface uppercase tracking-widest">Terms</a>
            <a href="#" className="text-xs font-semibold text-outline hover:text-on-surface uppercase tracking-widest">Privacy</a>
            <a href="#" className="text-xs font-semibold text-outline hover:text-on-surface uppercase tracking-widest">Safety</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
