import { AppText } from "@/components";
import { getCssVariableValue } from "@/utils/css";
import { Checkbox } from 'expo-checkbox';
import { Link } from "expo-router";
import { ReactNode, useState } from "react";
import { Platform, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

interface AppsWrapperProps {
  children: ReactNode;
}

export default function AppWrapper({ children }: AppsWrapperProps) {
  const [inFocusMode, setFocusMode] = useState(false);

  if (Platform.OS === 'web') {
    return (
      <View className="flex-1 flex-row bg-surface">
        {/* Left side text */}
        <View className="flex-1 items-start">
          { !inFocusMode && <View className="hidden lg:block p-4 max-w-[500px]">
            <AppText className="text-3xl">
              <Text className="font-bold">Oikou</Text>{' '}
              is a geography learning app created by{' '}
              <Link href={{ pathname: "https://pzach.com" }} className="text-blue-500">
                Porter Zach
              </Link>.
            </AppText>
          </View>}
        </View>
        {/* App view */}
        <View className="w-full max-w-xl bg-background border-x border-border">
          {children}
        </View>
        {/* Right side text */}
        <View className="flex-1 items-end justify-end">
          <View className="flex-row p-4">
            <Checkbox 
              value={inFocusMode}
              onValueChange={setFocusMode}
              color={getCssVariableValue("--primary")}
              className="mt-1.5 mr-2"
            />
            <AppText className="text-lg">
              Focus mode
            </AppText>
          </View>
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