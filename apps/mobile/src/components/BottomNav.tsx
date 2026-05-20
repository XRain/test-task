import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import tw from '../lib/tw';

export function BottomNav() {
  const tabs = [
    { label: 'Discover', icon: 'search' },
    { label: 'Messages', icon: 'chat-bubble-outline' },
    { label: 'Profile', icon: 'person-outline', active: true },
  ];

  return (
    <View style={tw`absolute bottom-0 left-0 right-0 flex-row items-center justify-around border-t border-outline/10 bg-surface/95 px-6 pb-8 pt-4`}>
      {tabs.map((tab, idx) => (
        <TouchableOpacity key={idx} style={tw`items-center`}>
          <Icon 
            name={tab.icon} 
            size={24} 
            color={tab.active ? tw.color('primary') : tw.color('outline')} 
          />
          <Text style={tw`mt-1 text-[10px] font-bold ${tab.active ? 'text-primary' : 'text-outline'}`}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
