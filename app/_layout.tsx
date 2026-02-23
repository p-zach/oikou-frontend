import AppWrapper from '@/components/app-wrapper';
import { ThemeProvider } from '@/components/theme-provider';
import '@/global.css';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import Head from 'expo-router/head';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Lexend-Regular': require('../assets/fonts/lexend/static/Lexend-Regular.ttf'),
  });

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
