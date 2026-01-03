import '@/global.css';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import Head from 'expo-router/head';
import { useEffect } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

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
      <SafeAreaProvider>
          <SafeAreaView className='flex-1 bg-background' edges={['top', 'bottom']}> 
            <Stack screenOptions={{ headerShown: false }}>
            </Stack>
          </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
