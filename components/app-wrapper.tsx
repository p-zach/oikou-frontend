import { ReactNode } from "react";
import { Platform, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

interface AppsWrapperProps {
  children: ReactNode;
}

export default function AppWrapper({ children }: AppsWrapperProps) {
  if (Platform.OS === 'web') {
    return (
      <View className="flex-1 flex-row justify-center items-center">
        <View className="flex-1 max-w-lg h-[95vh] rounded-3xl overflow-hidden shadow-[0_0_10px_2px_rgba(0,0,0,0.2)]">
          {children}
        </View>
      </View>
    );
  }
  else return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1 bg-background' edges={['top', 'bottom']}> 
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}