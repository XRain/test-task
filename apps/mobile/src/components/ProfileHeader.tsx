import React from 'react';
import { View, Text, Image } from 'react-native';
import { type HunqzProfile } from '@repo/shared';
import tw from '../lib/tw';

interface ProfileHeaderProps {
  profile: HunqzProfile;
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  const location = profile.location ? `${profile.location.name}, ${profile.location.country}` : "Unknown location";
  const age = profile.personal?.age;
  const imageUrl = profile.preview_pic?.image_url;

  return (
    <View style={tw`overflow-hidden bg-surface`}>
      {/* Banner Area */}
      <View style={tw`relative h-64 w-full bg-surface-variant`}>
        {imageUrl && (
          <Image
            source={{ uri: imageUrl }}
            style={tw`h-full w-full opacity-80`}
            resizeMode="cover"
          />
        )}
        <View style={tw`absolute inset-0 bg-black/20`} />
        
        {/* Online Status Tag */}
        <View style={tw`absolute left-4 top-4 flex-row items-center rounded-full bg-surface/60 px-3 py-1`}>
          <View style={tw`mr-1.5 h-2 w-2 rounded-full ${profile.online_status === 'Online' ? 'bg-green-500' : 'bg-outline'}`} />
          <Text style={tw`text-[10px] font-bold uppercase tracking-wider text-on-surface`}>{profile.online_status}</Text>
        </View>
      </View>
      
      <View style={tw`px-6 pb-8`}>
        <View style={tw`pt-6`}>
          <View style={tw`flex-row flex-wrap items-center`}>
            <Text style={tw`font-headline text-3xl font-black tracking-tight text-on-surface uppercase`}>
              {profile.name}{age ? `, ${age}` : ""}
            </Text>
          </View>
          
          <View style={tw`mt-2 flex-row`}>
            {profile.is_plus && (
              <View style={tw`mr-2 rounded-full bg-primary-container/20 px-2.5 py-0.5 ring-1 ring-primary/10`}>
                <Text style={tw`text-[10px] font-bold text-primary`}>PLUS</Text>
              </View>
            )}
            <View style={tw`rounded-full bg-surface-variant px-2.5 py-0.5 ring-1 ring-outline/20`}>
              <Text style={tw`text-[10px] font-bold text-on-surface-variant`}>{profile.type}</Text>
            </View>
          </View>

          <View style={tw`mt-4 flex-row items-center`}>
            <Text style={tw`text-sm font-medium text-outline`}>
              📍 {location}
            </Text>
          </View>
        </View>
        
        <View style={tw`mt-8`}>
          {profile.headline && (
            <Text style={tw`text-lg font-medium italic leading-6 text-on-surface-variant`}>
              "{profile.headline}"
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}
