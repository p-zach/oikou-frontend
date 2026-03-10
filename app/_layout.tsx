import AppWrapper from '@/components/app-wrapper';
import { ThemeProvider } from '@/components/theme-provider';
import '@/global.css';
import { inject } from "@vercel/analytics";
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import Head from 'expo-router/head';
import { useEffect } from 'react';
import { Platform } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Lexend-Regular': require('../assets/fonts/lexend/static/Lexend-Regular.ttf'),
  });

  // Inject analytics on web
  useEffect(() => {
    if (Platform.OS === "web")
      inject();
  }, [])

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Oikou</title>
      </Head>
      <ThemeProvider>
        <AppWrapper>
          <Stack screenOptions={{ headerShown: false }} />
        </AppWrapper>
      </ThemeProvider>
    </>
  );
}
