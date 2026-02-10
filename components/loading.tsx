import { AppText } from '@/components';
import '@/global.css';
import { ScrollView } from 'react-native';

export default function Loading() {
  return (
    <ScrollView className="bg-background p-4">
        <AppText className='text-lg'>Loading...</AppText>
    </ScrollView>
  );
}