import React from 'react';
import { View, Text } from 'react-native';
import { type HunqzSexual, type HunqzService } from '@repo/shared';
import { CollapsibleSection } from './CollapsibleSection';
import tw from '../lib/tw';

interface PreferencesAndServicesProps {
  sexual?: HunqzSexual;
  service?: HunqzService;
}

export function PreferencesAndServices({ sexual, service }: PreferencesAndServicesProps) {
  if (!sexual && !service) return null;

  const preferences = sexual?.enabled ? [
    { label: "Favored Position", value: sexual.favored_position },
    { label: "Anal Position", value: sexual.anal_position },
    { label: "Size", value: sexual.dick_size },
    { label: "Dirty Sex", value: sexual.dirty_sex },
    { label: "SM", value: sexual.sm },
    { label: "Fisting", value: sexual.fisting },
    { label: "Safer Sex", value: sexual.safer_sex },
    { label: "Kissing", value: sexual.kissing },
    { label: "Oral", value: sexual.oral },
  ].filter(item => item.value && item.value !== "N/A") : [];

  return (
    <View style={tw`px-4`}>
      <CollapsibleSection title="Preferences & Services">
        <View style={tw`flex-col`}>
          {/* Sexual Preferences Part */}
          {sexual?.enabled && (
            <View style={tw`mb-8`}>
              <Text style={tw`mb-4 text-xs font-semibold uppercase tracking-wider text-outline`}>
                Sexual Preferences
              </Text>
              <View style={tw`flex-row flex-wrap`}>
                {preferences.map((item, idx) => (
                  <View key={idx} style={tw`w-1/2 p-1`}>
                    <View style={tw`rounded-xl bg-surface-variant/50 p-3`}>
                      <Text style={tw`text-[10px] font-semibold uppercase tracking-wider text-outline`}>
                        {item.label}
                      </Text>
                      <Text style={tw`mt-1 text-sm font-bold text-on-surface`}>
                        {item.value}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Services Part */}
          {service && (
            <View>
              <View style={tw`mb-6`}>
                <Text style={tw`mb-4 text-xs font-semibold uppercase tracking-wider text-outline`}>
                  Rates
                </Text>
                <View style={tw`flex-col`}>
                  <View style={tw`mb-2 flex-row items-center justify-between rounded-xl bg-surface-variant/50 p-4`}>
                    <Text style={tw`text-sm font-medium text-on-surface-variant`}>Hourly Rate</Text>
                    <Text style={tw`text-lg font-bold text-on-surface`}>
                      {service.rate_hour} {service.currency}/hr
                    </Text>
                  </View>
                  <View style={tw`flex-row items-center justify-between rounded-xl bg-surface-variant/50 p-4`}>
                    <Text style={tw`text-sm font-medium text-on-surface-variant`}>Night Rate</Text>
                    <Text style={tw`text-lg font-bold text-on-surface`}>
                      {service.rate_night} {service.currency}
                    </Text>
                  </View>
                </View>
              </View>
              
              <View>
                <Text style={tw`mb-4 text-xs font-semibold uppercase tracking-wider text-outline`}>
                  Offerings
                </Text>
                <View style={tw`flex-row flex-wrap`}>
                  {service.service_offerings.map((offering, idx) => (
                    <View key={idx} style={tw`w-full flex-row items-center mb-2`}>
                      <Text style={tw`mr-2 text-primary`}>✓</Text>
                      <Text style={tw`text-sm text-on-surface-variant`}>{offering}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          )}
        </View>
      </CollapsibleSection>
    </View>
  );
}
