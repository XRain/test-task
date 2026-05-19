import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from '../lib/tw';

export function MobileActions() {
  return (
    <View style={tw`absolute bottom-20 left-0 right-0 z-40 px-4`}>
      <View style={tw`flex-col`}>
        <TouchableOpacity 
          activeOpacity={0.9}
          style={tw`mb-3 flex w-full items-center justify-center rounded-2xl bg-on-background py-4 shadow-xl`}
        >
          <Text style={tw`text-sm font-black uppercase tracking-widest text-background`}>
            Request Connection
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          activeOpacity={0.9}
          style={tw`flex w-full items-center justify-center rounded-2xl bg-primary py-4 shadow-xl`}
        >
          <Text style={tw`text-sm font-black uppercase tracking-widest text-on-primary`}>
            Send Message
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
