import { AppText } from '@/components';
import '@/global.css';
import { ReactNode } from 'react';
import { Image, ImageSourcePropType, Pressable } from 'react-native';

interface ButtonProps {
  text: string;
  onPress: () => void;
  className?: string;
  image?: ImageSourcePropType;
  children?: ReactNode;
}

export default function Button({ text, onPress, className, image, children }: ButtonProps) {
  return (
    <Pressable
      className={`bg-primary rounded-xl items-center p-3 ${className || ''}`}
      onPress={onPress}
    >
      <AppText className={`text-lg ${image ? 'mb-2' : ''}`}>
        {text}
      </AppText>
      { image && <Image className="rounded-xl" source={image} /> }
      {children}
    </Pressable>
  );
}