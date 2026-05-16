import { useEffect, useMemo, useState } from "react";
import { ActivityIndicator, ScrollView, StatusBar, Text, View } from "react-native";
import { createApiClient, DataStateList, type Post } from "@repo/shared";
import "./global.css";

const apiClient = createApiClient({
  baseUrl: "https://jsonplaceholder.typicode.com"
});

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const result = await apiClient.fetchPosts(6);
        if (!cancelled) {
          setPosts(result);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Unknown error");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void load();

    return () => {
      cancelled = true;
    };
  }, []);

  const content = useMemo(
    () => (
      <DataStateList
        data={posts}
        loading={loading}
        error={error}
        emptyState={<Text className="text-slate-600">No posts yet.</Text>}
        renderItem={(post) => (
          <View key={post.id} className="mb-3 rounded-xl bg-white p-4 shadow">
            <Text className="mb-2 text-lg font-semibold text-slate-900">{post.title}</Text>
            <Text className="text-slate-600">{post.body}</Text>
          </View>
        )}
      />
    ),
    [error, loading, posts]
  );

  return (
    <View className="flex-1 bg-slate-50">
      <StatusBar barStyle="dark-content" />
      <ScrollView className="flex-1 px-5 pt-16">
        <Text className="text-xs font-semibold uppercase tracking-[2px] text-blue-700">Bootstrap</Text>
        <Text className="mb-6 mt-2 text-3xl font-bold text-slate-900">React Native App</Text>
        {loading ? (
          <View className="items-center py-10">
            <ActivityIndicator />
            <Text className="mt-3 text-slate-600">Loading data...</Text>
          </View>
        ) : error ? (
          <Text className="rounded-xl bg-red-50 p-4 text-red-700">{error}</Text>
        ) : (
          content
        )}
      </ScrollView>
    </View>
  );
}
