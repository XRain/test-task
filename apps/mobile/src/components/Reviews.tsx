import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { type HunqzReview } from '@repo/shared';
import tw from '../lib/tw';

interface ReviewsProps {
  reviews: HunqzReview[];
}

export function Reviews({ reviews }: ReviewsProps) {
  if (!reviews || reviews.length === 0) return null;

  const averageVote = reviews.reduce((acc, r) => acc + (r.vote || 0), 0) / reviews.length;

  return (
    <View style={tw`rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-outline/20 mx-4 mb-4`}>
      <View style={tw`mb-8 flex-row items-center justify-between`}>
        <View>
          <Text style={tw`font-headline text-xl font-bold text-on-surface`}>Reviews</Text>
          <View style={tw`mt-1 flex-row items-center`}>
            <Icon name="star" size={20} color={tw.color('primary')} style={tw`mr-1`} />
            <Text style={tw`text-lg font-bold text-on-surface`}>{averageVote.toFixed(1)}</Text>
            <Text style={tw`text-outline ml-2`}>({reviews.length})</Text>
          </View>
        </View>
      </View>
      
      <View style={tw`flex-col`}>
        {reviews.slice(0, 3).map((review) => (
          <View key={review.id} style={tw`border-b border-outline/10 pb-6 mb-6 last:border-0 last:pb-0 last:mb-0`}>
            <View style={tw`flex-row items-start justify-between`}>
              <View style={tw`flex-row items-center`}>
                <View style={tw`h-10 w-10 items-center justify-center rounded-full bg-surface-variant`}>
                  <Text style={tw`font-bold text-on-surface-variant`}>
                    {review.reviewer_name?.charAt(0) || "U"}
                  </Text>
                </View>
                <View style={tw`ml-3`}>
                  <Text style={tw`text-sm font-bold text-on-surface`}>{review.reviewer_name || "User"}</Text>
                  <Text style={tw`text-xs text-outline`}>
                    {new Date(review.updated_at).toLocaleDateString()}
                    {review.is_reviewer_genuine && (
                      <Text style={tw`text-green-600`}> • Verified</Text>
                    )}
                  </Text>
                </View>
              </View>
              <View style={tw`flex-row`}>
                {[...Array(5)].map((_, i) => (
                  <Icon 
                    key={i} 
                    name="star"
                    size={14}
                    color={(review.vote || 0) > i ? tw.color('primary') : tw.color('outline/20')}
                  />
                ))}
              </View>
            </View>
            <Text style={tw`mt-3 text-sm leading-5 text-on-surface-variant`}>
              "{review.comment}"
            </Text>
            {review.reply && (
              <View style={tw`mt-4 rounded-xl bg-surface-variant/50 p-4`}>
                <Text style={tw`text-xs font-bold text-on-surface`}>Reply from Profile</Text>
                <Text style={tw`mt-1 text-sm italic text-on-surface-variant`}>"{review.reply.text}"</Text>
              </View>
            )}
          </View>
        ))}
      </View>
    </View>
  );
}
