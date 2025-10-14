import { create } from 'zustand';

interface ProfileData {
  name: string;
  role: string;
  location: string;
  bio: string;
  interests: string[];
}

interface ProfileState extends ProfileData {
  updateProfile: (partial: Partial<ProfileData>) => void;
}

const initialProfile: ProfileData = {
  name: 'Alex Rivers',
  role: 'Product Designer',
  location: 'Brooklyn, NY',
  bio: 'Designing human-centered experiences for mobile and beyond.',
  interests: ['NativeWind', 'Motion', 'Type Systems'],
};

export const useProfileStore = create<ProfileState>()(set => ({
  ...initialProfile,
  updateProfile: (partial: Partial<ProfileData>) =>
    set(state => ({
      ...state,
      ...partial,
    })),
}));

export type { ProfileData, ProfileState };
