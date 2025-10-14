## React Native Starter Template

Opinionated React Native starter focused on shipping quickly with polished, shadcn-inspired primitives.

### What’s inside

- **NativeWind 4** configured with `tailwind.config.js` so you can reach for utility classes immediately.
- **React Native Reusables** components (Button, Text, Card, Badge, Avatar, Input) copied locally for full control.
- **Zustand** store example (`src/store/profileStore.ts`) for light-weight state management.
- **React Navigation** native stack with Home & Profile screens wired up and themed for light/dark.
- TypeScript, ESLint/Prettier, and Metro already patched for NativeWind + Reanimated.

### Quick start

```sh
# install dependencies
npm install

# (iOS only) install pods
cd ios && pod install && cd ..

# run the app
npm run android
# or
npm run ios
```

The project bootstraps Metro with NativeWind—no separate Tailwind build step is required.

### Key structure

- `src/components/ui/` – Copied React Native Reusables primitives, ready to extend.
- `src/screens/HomeScreen.tsx` – Hero/dashboard layout showing component usage.
- `src/screens/ProfileScreen.tsx` – Form-like screen that mutates Zustand state.
- `src/navigation/AppNavigator.tsx` – React Navigation stack with theming glue.
- `tailwind.config.js` – Shadcn-style design tokens for Background, Card, Primary, etc.

### Styling

- Adjust design tokens in `tailwind.config.js` to match your brand.
- Use the provided UI primitives or add more from React Native Reusables following the same pattern.

### State & data

- `useProfileStore` demonstrates a small Zustand slice with update handlers.
- Screens consume derived data via selectors so you can grow the store without rerenders.

### Next steps

1. Duplicate one of the UI components or import more from React Native Reusables.
2. Add additional screens into `AppNavigator` and wire them through the stack.
3. Swap the placeholder data in `useProfileStore` with API calls or persistence (MMKV, AsyncStorage, etc.).
4. Integrate your own design tokens or fonts—NativeWind is already configured.

### Useful scripts

```sh
npm run start      # metro bundler
npm run android    # run on Android emulator/device
npm run ios        # run on iOS simulator/device
npm run test       # jest test suite
npm run lint       # eslint using @react-native/eslint-config
```

Refer to the [React Native docs](https://reactnative.dev/docs/getting-started) if you’re setting up your environment for the first time.
