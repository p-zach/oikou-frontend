import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";

export function useAsyncStorageState<T>(
  key: string,
  defaultValue: T
) {
  const [value, setValue] = useState<T>(defaultValue);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    AsyncStorage.getItem(key)
      .then(stored => {
        if (stored != null && mounted) {
          setValue(JSON.parse(stored));
        }
      })
      .catch(err => {
        console.error(`Failed to load ${key}:`, err);
      })
      .finally(() => {
        if (mounted) setIsLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [key]);

  const set = useCallback(
    (newValue: T | ((prev: T) => T)) => {
      setValue(prev => {
        const resolved =
          typeof newValue === "function"
            ? (newValue as (prev: T) => T)(prev)
            : newValue;

        AsyncStorage.setItem(key, JSON.stringify(resolved))
          .catch(err =>
            console.error(`Failed to persist ${key}:`, err)
          );

        return resolved;
      });
    },
    [key]
  );

  return { value, setValue: set, isLoading };
}