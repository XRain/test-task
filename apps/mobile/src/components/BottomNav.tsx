import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from '../lib/tw';

export function BottomNav() {
  const tabs = [
    { label: 'Discover', icon: '🔍' },
    { label: 'Messages', icon: '💬' },
    { label: 'Profile', icon: '👤', active: true },
  ];

  return (
    <View style={tw`absolute bottom-0 left-0 right-0 flex-row items-center justify-around border-t border-outline/10 bg-surface/95 px-6 pb-8 pt-4`}>
      {tabs.map((tab, idx) => (
        <TouchableOpacity key={idx} style={tw`items-center`}>
          <Text style={tw`text-xl ${tab.active ? 'text-primary' : 'text-outline'}`}>{tab.icon}</Text>
          <Text style={tw`mt-1 text-[10px] font-bold ${tab.active ? 'text-primary' : 'text-outline'}`}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
