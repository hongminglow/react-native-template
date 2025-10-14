import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Text,
} from '../components/ui';
import type { RootStackParamList } from '../navigation/types';
import { useProfileStore } from '../store/profileStore';

const AVATAR_PLACEHOLDER =
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&w=256&h=256&q=80';

type ProfileScreenNavigation = NativeStackNavigationProp<
  RootStackParamList,
  'Profile'
>;

function ProfileScreen() {
  const navigation = useNavigation<ProfileScreenNavigation>();
  const { top } = useSafeAreaInsets();
  const { name, role, location, bio, interests, updateProfile } =
    useProfileStore();
  const [bioDraft, setBioDraft] = React.useState(bio);
  const contentContainerStyle = React.useMemo(
    () => ({ paddingTop: top + 12, paddingBottom: 48 }),
    [top],
  );
  const interestList = React.useMemo<string[]>(
    () => interests ?? [],
    [interests],
  );
  const isDirty = React.useMemo(
    () => bioDraft.trim() !== bio.trim(),
    [bioDraft, bio],
  );

  React.useEffect(() => {
    setBioDraft(bio);
  }, [bio]);

  return (
    <ScrollView
      className="bg-background flex-1"
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={contentContainerStyle}
    >
      <View className="gap-8 px-6">
        <Card className="items-center gap-5 px-6 py-8">
          <Avatar alt={`${name} avatar`} className="size-24">
            <AvatarImage source={{ uri: AVATAR_PLACEHOLDER }} />
            <AvatarFallback>
              <Text variant="large">{name.slice(0, 2).toUpperCase()}</Text>
            </AvatarFallback>
          </Avatar>
          <View className="items-center gap-2">
            <Text variant="h3">{name}</Text>
            <Badge variant="secondary" className="tracking-wide uppercase">
              {role}
            </Badge>
            <Text variant="small" className="text-muted-foreground">
              {location}
            </Text>
          </View>
          <View className="flex-row flex-wrap justify-center gap-2">
            {interestList.map(interest => (
              <Badge key={interest} variant="outline">
                {interest}
              </Badge>
            ))}
          </View>
          <View className="w-full flex-row gap-3">
            <Button className="flex-1" size="sm">
              Share profile
            </Button>
            <Button
              className="flex-1"
              size="sm"
              variant="outline"
              onPress={() => navigation.navigate('Home')}
            >
              Back home
            </Button>
          </View>
        </Card>

        <Card className="gap-5">
          <CardHeader className="gap-3">
            <CardTitle>Your story</CardTitle>
            <CardDescription>
              Keep an up-to-date summary to align your team quickly.
            </CardDescription>
          </CardHeader>
          <CardContent className="gap-4">
            <View className="gap-1">
              <Text
                variant="small"
                className="uppercase tracking-[0.18em] text-muted-foreground"
              >
                Bio
              </Text>
              <Input
                multiline
                value={bioDraft}
                onChangeText={setBioDraft}
                textAlignVertical="top"
                numberOfLines={5}
                className="min-h-[120px] py-3"
              />
            </View>
            <Button
              variant="default"
              disabled={!isDirty}
              onPress={() => updateProfile({ bio: bioDraft.trim() })}
            >
              Save changes
            </Button>
          </CardContent>
        </Card>
      </View>
    </ScrollView>
  );
}

export default ProfileScreen;
