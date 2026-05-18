import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StatusBar, Text, View } from "react-native";
import { createApiClient, type HunqzProfile } from "@repo/shared";
import tw from "./src/lib/tw";

const apiClient = createApiClient({
  baseUrl: "https://www.hunqz.com/api/opengrid/profiles/msescortplus",
  timeoutMs: 15000
});

interface ProfileViewModel {
  name: string;
  type: string;
  onlineStatus: string;
  location: string;
  age: number | null;
  rateHour: number | null;
  currency: string;
  pictureCount: number;
  reviewCount: number;
  headline: string | null;
}

function buildProfileViewModel(profile: HunqzProfile): ProfileViewModel {
  const pictureCount = Array.isArray(profile.pictures) ? profile.pictures.length : 0;
  const reviewCount = Array.isArray(profile.reviews) ? profile.reviews.length : 0;

  return {
    name: profile.name,
    type: profile.type,
    onlineStatus: profile.online_status,
    location: profile.location ? `${profile.location.name}, ${profile.location.country}` : "Unknown",
    age: profile.personal?.age ?? null,
    rateHour: profile.service?.rate_hour ?? null,
    currency: profile.service?.currency ?? "",
    pictureCount,
    reviewCount,
    headline: profile.headline ?? null
  };
}

export default function App() {
  const [profile, setProfile] = useState<ProfileViewModel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const result = await apiClient.fetchProfile();
        if (!cancelled) {
          setProfile(buildProfileViewModel(result));
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

  return (
    <View style={tw`flex-1 bg-background`}>
      <StatusBar barStyle="light-content" />
      <ScrollView style={tw`flex-1 px-5 pt-16`} contentContainerStyle={tw`pb-6`}>
        <Text style={tw`text-xs font-semibold uppercase tracking-[2px] text-primary font-headline`}>HUNQZ</Text>
        <Text style={tw`mb-6 mt-2 text-3xl font-bold text-on-background font-headline`}>Profile Viewer</Text>
        {loading ? (
          <View style={tw`items-center py-10`}>
            <ActivityIndicator color={tw.color('primary')} />
            <Text style={tw`mt-3 text-on-surface-variant font-body`}>Loading data...</Text>
          </View>
        ) : error ? (
          <Text style={tw`rounded-xl bg-error/10 p-4 text-error font-body`}>{error}</Text>
        ) : !profile ? (
          <Text style={tw`text-on-surface-variant font-body`}>Profile is empty.</Text>
        ) : (
          <View style={tw`rounded-xl bg-surface p-5 shadow ring-1 ring-outline/20`}>
            <Text style={tw`text-2xl font-bold text-on-surface font-headline`}>{profile.name}</Text>
            <Text style={tw`mt-2 text-on-surface-variant font-body`}>
              {profile.type} • {profile.onlineStatus}
            </Text>
            <Text style={tw`mt-2 text-on-surface-variant font-body`}>Location: {profile.location}</Text>
            <Text style={tw`mt-2 text-on-surface-variant font-body`}>Age: {profile.age ?? "Unknown"}</Text>
            <Text style={tw`mt-2 text-on-surface-variant font-body`}>
              Rate: {profile.rateHour ?? 0} {profile.currency}
            </Text>
            <Text style={tw`mt-2 text-on-surface-variant font-body`}>Pictures: {profile.pictureCount}</Text>
            <Text style={tw`mt-2 text-on-surface-variant font-body`}>Reviews: {profile.reviewCount}</Text>
            {profile.headline ? <Text style={tw`mt-4 text-on-surface-variant font-body italic`}>"{profile.headline}"</Text> : null}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
