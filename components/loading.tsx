import '@/global.css';
import { ScrollView, Text } from 'react-native';

export default function Loading() {
  return (
    <ScrollView className="bg-background p-4">
        <Text className='text-lg font-lexend-regular'>Loading...</Text>
    </ScrollView>
  );
}