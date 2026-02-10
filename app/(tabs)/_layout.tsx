import Ionicons from '@expo/vector-icons/Ionicons';
import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui";
import { View } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs>
      <TabSlot />
      <TabList className='bg-background border-border border-t flex-row justify-around'>
        <TabTrigger name='home' href={'/home'} className='p-2 flex-grow justify-center'>
          <View >
            <Ionicons name="home" size={36} className='text-textPrimary' />
          </View>
        </TabTrigger>
        <TabTrigger name='profile' href={'/profile'} className='p-2 flex-grow justify-center'>
          <View>
            <Ionicons name="person-circle" size={36} className='text-textPrimary' />
          </View>
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}
