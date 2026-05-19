import { createApiClient } from "@repo/shared";
import { ProfileHeader } from "../components/ProfileHeader";
import { PersonalInfo } from "../components/PersonalInfo";
import { PreferencesAndServices } from "../components/PreferencesAndServices";
import { Reviews } from "../components/Reviews";
import { PhotoGallery } from "../components/PhotoGallery";
import { BottomNav } from "../components/BottomNav";
import { MobileActions } from "../components/MobileActions";

export const dynamic = "force-dynamic";

const apiClient = createApiClient({
  baseUrl: "https://www.hunqz.com/api/opengrid/profiles/msescortplus"
});

export default async function HomePage() {
  const profile = await apiClient.fetchProfile();

  return (
    <div className="min-h-screen bg-background font-body pb-32 sm:pb-0">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 border-b border-outline/20 bg-surface/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Desktop Logo */}
            <div className="hidden items-center md:flex">
              <span className="text-2xl font-headline font-black tracking-tighter text-primary">HUNQZ</span>
            </div>

            {/* Mobile Left Action */}
            <div className="flex items-center md:hidden">
              <button className="p-2 text-outline">
                <span className="material-symbols-outlined">search</span>
              </button>
            </div>

            {/* Mobile Title */}
            <div className="flex items-center md:hidden">
              <span className="text-xl font-headline font-black tracking-tighter text-primary">HUNQZ</span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#" className="text-sm font-semibold text-on-background">Search</a>
                <a href="#" className="text-sm font-semibold text-on-surface-variant">Messages</a>
                <a href="#" className="text-sm font-semibold text-on-surface-variant">Profile</a>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <button className="hidden rounded-full p-2 text-outline hover:bg-surface-variant hover:text-on-surface-variant md:block">
                <span className="material-symbols-outlined">search</span>
              </button>
              <button className="rounded-full p-2 text-outline hover:bg-surface-variant hover:text-on-surface-variant">
                <span className="material-symbols-outlined">settings</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-0 py-0 sm:px-6 sm:py-8 lg:px-8">
        <div className="flex flex-col gap-0 sm:gap-8">
          {/* Profile Header Section */}
          <ProfileHeader profile={profile} />

          {/* Main Content Grid */}
          <div className="flex flex-col gap-0 sm:gap-8">
            {/* Gallery Section */}
            <PhotoGallery pictures={profile.pictures} />

            {/* Info Sections */}
            <PersonalInfo personal={profile.personal} />
            
            <PreferencesAndServices sexual={profile.sexual} service={profile.service} />
            
            {/* Reviews Section */}
            <Reviews reviews={profile.reviews} />
          </div>
        </div>
      </main>

      {/* Mobile Components */}
      <MobileActions />
      <BottomNav />

      {/* Footer (Hidden on mobile according to common patterns, or just keep it) */}
      <footer className="mt-12 hidden border-t border-outline/20 bg-surface py-12 sm:block">
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
