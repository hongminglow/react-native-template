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
import { useProfileStore } from '../store/profileStore';
import type { RootStackParamList } from '../navigation/types';

const AVATAR_PLACEHOLDER =
  'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=facearea&w=256&h=256&q=80';

type HomeScreenNavigation = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigation>();
  const { top } = useSafeAreaInsets();
  const { name, role, interests } = useProfileStore();
  const contentContainerStyle = React.useMemo(
    () => ({ paddingTop: top + 12, paddingBottom: 48 }),
    [top],
  );
  const interestList = React.useMemo<string[]>(
    () => interests ?? [],
    [interests],
  );

  return (
    <ScrollView
      className="bg-background flex-1"
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={contentContainerStyle}
    >
      <View className="gap-8 px-6">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-3">
            <Avatar alt={`${name} avatar`} className="size-12">
              <AvatarImage source={{ uri: AVATAR_PLACEHOLDER }} />
              <AvatarFallback>
                <Text variant="large">{name.slice(0, 2).toUpperCase()}</Text>
              </AvatarFallback>
            </Avatar>
            <View className="gap-1">
              <Text variant="small" className="text-muted-foreground">
                Welcome back
              </Text>
              <Text variant="h4">{name}</Text>
            </View>
          </View>
          <Badge variant="secondary" className="uppercase tracking-wide">
            {role}
          </Badge>
        </View>

        <Input
          placeholder="Search components, patterns, or keywords"
          inputMode="search"
          className="bg-card border border-border"
        />

        <Card className="gap-6 overflow-hidden">
          <CardHeader className="gap-3">
            <Badge variant="outline" className="self-start">
              Starter Kit
            </Badge>
            <CardTitle>Kickstart your next build</CardTitle>
            <CardDescription>
              NativeWind styling, shadcn-inspired components, and Zustand state
              feel right at home.
            </CardDescription>
          </CardHeader>
          <CardContent className="gap-3">
            <Button onPress={() => navigation.navigate('Profile')}>
              View profile
            </Button>
            <Button variant="outline">Open component gallery</Button>
          </CardContent>
        </Card>

        <View className="gap-4">
          <Text variant="large">Focus areas</Text>
          <View className="gap-3">
            {interestList.map(interest => (
              <Card
                key={interest}
                className="flex-row items-center justify-between gap-3 px-6 py-4"
              >
                <View className="gap-1">
                  <Text
                    variant="small"
                    className="text-muted-foreground uppercase tracking-[0.16em]"
                  >
                    {interest}
                  </Text>
                  <Text>Build immersive flows with cohesive primitives.</Text>
                </View>
                <Badge variant="outline" className="self-start">
                  Active
                </Badge>
              </Card>
            ))}
          </View>
        </View>

        <Card className="gap-5">
          <CardHeader className="gap-3">
            <CardTitle>Next steps</CardTitle>
            <CardDescription>
              Explore how routing, state, and styling come pre-wired so you can
              ship faster.
            </CardDescription>
          </CardHeader>
          <CardContent className="gap-3">
            <Button size="lg" onPress={() => navigation.navigate('Profile')}>
              Continue set up
            </Button>
            <Button
              variant="ghost"
              onPress={() => navigation.navigate('Profile')}
            >
              Review profile settings
            </Button>
          </CardContent>
        </Card>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
