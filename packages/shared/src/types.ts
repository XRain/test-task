export interface HunqzImage {
  id: string;
  owner_id: string;
  url_token: string;
  image_url?: string;
  width: number;
  height: number;
  rating: string;
  comment?: string;
  is_public: boolean;
}

export interface HunqzLocation {
  name: string;
  country: string;
  sensor: boolean;
  is_base_profile: boolean;
}

export interface HunqzTargetAge {
  min: number;
  max: number;
}

export interface HunqzGenderOrientation {
  gender: string;
  orientation: string;
  looking_for_gender: string[];
  looking_for_orientation: string[];
}

export interface HunqzPersonal {
  profile_text: string;
  height: number;
  weight: number;
  target_age: HunqzTargetAge;
  spoken_languages: string[];
  beard: string;
  body_hair: string;
  body_type: string;
  ethnicity: string;
  eye_color: string;
  hair_length: string;
  hair_color: string;
  orientation: string;
  smoker: string;
  piercing: string;
  tattoo: string;
  gender_orientation: HunqzGenderOrientation;
  age: number;
}

export interface HunqzService {
  rate_hour: number;
  rate_night: number;
  currency: string;
  service_locations: string[];
  service_offerings: string[];
}

export interface HunqzSexual {
  enabled: boolean;
  favored_position: string;
  anal_position: string;
  dick_size: string;
  concision: string;
  dirty_sex: string;
  sm: string;
  fisting: string;
  fetish: string[];
  safer_sex: string;
  kissing: string;
  oral: string;
}

export interface HunqzReviewReply {
  id: number;
  review_id: number;
  text: string;
  updated_at: string;
}

export interface HunqzReview {
  id: string;
  comment: string;
  reviewer_id?: string;
  reviewer_name?: string;
  updated_at: string;
  is_reviewer_genuine: boolean;
  vote?: number;
  reply?: HunqzReviewReply;
  is_reported: boolean;
}

export interface HunqzProfile {
  id: string;
  name: string;
  type: string;
  is_plus: boolean;
  online_status: string;
  preview_pic?: HunqzImage;
  headline?: string;
  last_login: string;
  location?: HunqzLocation;
  personal?: HunqzPersonal;
  service?: HunqzService;
  sexual?: HunqzSexual;
  telephone?: string;
  pictures: HunqzImage[];
  reviews: HunqzReview[];
  travel_locations: string[];
  social_links: string[];
  is_public: boolean;
  is_new: boolean;
  creation_date: string;
}
