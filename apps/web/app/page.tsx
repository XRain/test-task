import { createApiClient } from "@repo/shared";

export const dynamic = "force-dynamic";

const apiClient = createApiClient({
  baseUrl: "https://www.hunqz.com/api/opengrid/profiles/msescortplus"
});

export default async function HomePage() {
  const profile = await apiClient.fetchProfile();
  const location = profile.location ? `${profile.location.name}, ${profile.location.country}` : "Unknown";

  return (
    <main className="mx-auto min-h-screen max-w-4xl p-8">
      <header className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-700">Hunqz</p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Profile Viewer
        </h1>
      </header>

      <section>
        <article className="space-y-3 rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900">{profile.name}</h2>
          <p className="text-slate-700">
            {profile.type} • {profile.online_status}
          </p>
          <p className="text-slate-700">Location: {location}</p>
          <p className="text-slate-700">Age: {profile.personal?.age ?? "Unknown"}</p>
          <p className="text-slate-700">
            Rate: {profile.service?.rate_hour ?? 0} {profile.service?.currency ?? ""}
          </p>
          <p className="text-slate-700">Pictures: {profile.pictures.length}</p>
          <p className="text-slate-700">Reviews: {profile.reviews.length}</p>
          {profile.headline ? <p className="pt-2 text-slate-600">{profile.headline}</p> : null}
        </article>
      </section>
    </main>
  );
}
