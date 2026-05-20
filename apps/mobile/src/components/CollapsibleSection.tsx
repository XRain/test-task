import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import tw from '../lib/tw';

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function CollapsibleSection({ title, children, defaultOpen = false }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <View style={tw`mb-4 overflow-hidden rounded-2xl bg-surface shadow-sm ring-1 ring-outline/20`}>
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        activeOpacity={0.7}
        style={tw`flex-row items-center justify-between p-6`}
      >
        <Text style={tw`font-headline text-lg font-bold text-on-surface`}>
          {title}
        </Text>
        <Icon 
          name={isOpen ? 'expand-less' : 'expand-more'} 
          size={24} 
          color={tw.color('outline')} 
        />
      </TouchableOpacity>
      
      {isOpen && (
        <View style={tw`px-6 pb-6`}>
          {children}
        </View>
      )}
    </View>
  );
}
