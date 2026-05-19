import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { type HunqzImage } from '@repo/shared';
import tw from '../lib/tw';

interface PhotoGalleryProps {
  pictures: HunqzImage[];
}

export function PhotoGallery({ pictures }: PhotoGalleryProps) {
  if (!pictures || pictures.length === 0) return null;

  return (
    <View style={tw`rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-outline/20 mx-4 mb-4`}>
      <Text style={tw`mb-6 font-headline text-xl font-bold text-on-surface`}>Photos</Text>
      
      <View style={tw`flex-row flex-wrap`}>
        {pictures.map((pic) => (
          <View key={pic.id} style={tw`w-1/3 p-1`}>
            <TouchableOpacity activeOpacity={0.8} style={tw`aspect-square overflow-hidden rounded-xl bg-surface-variant`}>
              {pic.image_url ? (
                <Image
                  source={{ uri: pic.image_url }}
                  style={tw`h-full w-full`}
                  resizeMode="cover"
                />
              ) : null}
              {!pic.is_public && (
                <View style={tw`absolute inset-0 items-center justify-center bg-background/40`}>
                  <Text style={tw`text-on-background`}>🔒</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}
