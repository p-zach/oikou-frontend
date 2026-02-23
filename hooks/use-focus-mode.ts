import { useAsyncStorageState } from './use-async-storage-state';

export function useFocusModePreference() {
  const { value, setValue, isLoading } = useAsyncStorageState("focusMode", false);

  return {
    inFocusMode: value,
    setFocusMode: setValue,
    toggleFocusMode: () => setValue(prev => !prev),
    isLoading,
  };
}