import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { type HunqzPersonal } from '@repo/shared';
import { CollapsibleSection } from './CollapsibleSection';
import tw from '../lib/tw';

interface PersonalInfoProps {
  personal?: HunqzPersonal;
}

export function PersonalInfo({ personal }: PersonalInfoProps) {
  if (!personal) return null;

  const infoItems = [
    { label: "Height", value: personal.height ? `${personal.height} cm` : null, icon: "straighten" },
    { label: "Weight", value: personal.weight ? `${personal.weight} kg` : null, icon: "monitor-weight" },
    { label: "Build", value: personal.body_type, icon: "fitness-center" },
    { label: "Eyes", value: personal.eye_color, icon: "visibility" },
    { label: "Facial Hair", value: personal.beard, icon: "face" },
    { label: "Body Hair", value: personal.body_hair, icon: "content-cut" },
    { label: "Orientation", value: personal.orientation, icon: "diversity-3" },
    { label: "Smoker", value: personal.smoker, icon: "smoke-free" },
  ].filter(item => item.value);

  return (
    <View style={tw`px-4`}>
      {personal.profile_text && (
        <CollapsibleSection title="About Me" defaultOpen={true}>
          <Text style={tw`text-on-surface-variant leading-6`}>
            {personal.profile_text}
          </Text>
        </CollapsibleSection>
      )}

      <CollapsibleSection title="Personal Details">
        <View style={tw`flex-row flex-wrap`}>
          {infoItems.map((item, idx) => (
            <View key={idx} style={tw`w-1/2 mb-6 flex-row items-start`}>
              <View style={tw`h-10 w-10 items-center justify-center rounded-xl bg-surface-variant/50`}>
                <Icon name={item.icon} size={20} color={tw.color('primary')} />
              </View>
              <View style={tw`ml-3 flex-1`}>
                <Text style={tw`text-xs font-medium text-outline`}>{item.label}</Text>
                <Text style={tw`mt-0.5 text-sm font-semibold text-on-surface`}>{item.value}</Text>
              </View>
            </View>
          ))}
        </View>
      </CollapsibleSection>
    </View>
  );
}
