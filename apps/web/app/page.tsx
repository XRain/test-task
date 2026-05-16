import { createApiClient, DataStateList } from "@repo/shared";

export const dynamic = "force-dynamic";

const apiClient = createApiClient({
  baseUrl: "https://www.hunqz.com/api/opengrid/profiles/msescortplus"
});

export default async function HomePage() {
  const users = await apiClient.fetchUsers();

  return (
    <main className="mx-auto min-h-screen max-w-4xl p-8">
      <header className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
          Bootstrap
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Next.js SSR + React Server Components
        </h1>
      </header>

      <section className="grid gap-4">
        <DataStateList
          data={posts}
          loading={false}
          renderItem={(post) => (
            <article key={post.id} className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
              <h2 className="mb-2 text-lg font-semibold">{post.title}</h2>
              <p className="text-slate-600">{post.body}</p>
            </article>
          )}
        />
      </section>
    </main>
  );
}
