import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_UUID_KEY = 'local_user_uuid';

export async function getOrCreateLocalUUID(): Promise<string> {
  const storedUUID = await AsyncStorage.getItem(LOCAL_UUID_KEY);

  if (storedUUID) {
    return storedUUID;
  }

  const newUUID = uuidv4();
  await AsyncStorage.setItem(LOCAL_UUID_KEY, newUUID);
  return newUUID;
}
