import React from "react";
import { ActivityIndicator, ScrollView, StatusBar, Text, View } from "react-native";
import { createApiClient, useProfile } from "@repo/shared";
import { ProfileHeader } from "./src/components/ProfileHeader";
import { PhotoGallery } from "./src/components/PhotoGallery";
import { PersonalInfo } from "./src/components/PersonalInfo";
import { PreferencesAndServices } from "./src/components/PreferencesAndServices";
import { Reviews } from "./src/components/Reviews";
import { MobileActions } from "./src/components/MobileActions";
import { BottomNav } from "./src/components/BottomNav";
import tw from "./src/lib/tw";

const apiClient = createApiClient({
  baseUrl: "https://www.hunqz.com/api/opengrid/profiles/msescortplus",
  timeoutMs: 15000
});

export default function App() {
  const { profile, loading, error } = useProfile(apiClient);

  return (
    <View style={tw`flex-1 bg-background`}>
      <StatusBar barStyle="light-content" />
      
      {/* Top Header */}
      <View style={tw`flex-row items-center justify-between px-6 pt-16 pb-4 bg-background z-50`}>
        <Text style={tw`text-2xl font-headline font-black tracking-tighter text-primary`}>HUNQZ</Text>
        <View style={tw`flex-row items-center`}>
          <Text style={tw`text-outline text-xl mr-4`}>🔍</Text>
          <Text style={tw`text-outline text-xl`}>⚙️</Text>
        </View>
      </View>

      <ScrollView 
        style={tw`flex-1`} 
        contentContainerStyle={tw`pb-60`}
        showsVerticalScrollIndicator={false}
      >
        {loading ? (
          <View style={tw`flex-1 items-center justify-center py-20`}>
            <ActivityIndicator color={tw.color('primary')} size="large" />
            <Text style={tw`mt-4 text-on-surface-variant font-body`}>Loading Profile...</Text>
          </View>
        ) : error ? (
          <View style={tw`mx-6 mt-10 rounded-2xl bg-error/10 p-6 ring-1 ring-error/20`}>
            <Text style={tw`text-center text-error font-body font-bold`}>{error}</Text>
          </View>
        ) : !profile ? (
          <View style={tw`items-center py-20`}>
            <Text style={tw`text-on-surface-variant font-body`}>Profile not found.</Text>
          </View>
        ) : (
          <View style={tw`flex-col gap-4`}>
            <ProfileHeader profile={profile} />
            
            <PhotoGallery pictures={profile.pictures} />

            <PersonalInfo personal={profile.personal} />
            
            <PreferencesAndServices sexual={profile.sexual} service={profile.service} />
            
            <Reviews reviews={profile.reviews} />

            {/* Footer */}
            <View style={tw`mt-12 items-center py-12 border-t border-outline/10`}>
              <Text style={tw`text-2xl font-headline font-black tracking-tighter text-primary`}>HUNQZ</Text>
              <Text style={tw`mt-4 text-sm text-on-surface-variant font-body`}>© 2026 Hunqz - Forged in Berlin.</Text>
              <View style={tw`mt-6 flex-row gap-6`}>
                <Text style={tw`text-[10px] font-bold text-outline uppercase tracking-widest`}>Terms</Text>
                <Text style={tw`text-[10px] font-bold text-outline uppercase tracking-widest`}>Privacy</Text>
                <Text style={tw`text-[10px] font-bold text-outline uppercase tracking-widest`}>Safety</Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Overlays */}
      {!loading && profile && (
        <>
          <MobileActions />
          <BottomNav />
        </>
      )}
    </View>
  );
}
