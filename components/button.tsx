import '@/global.css';
import { Image, ImageSourcePropType, Pressable, Text } from 'react-native';

interface ButtonProps {
  text: string;
  onPress: () => void;
  className?: string;
  image?: ImageSourcePropType;
}

export default function Button({ text, onPress, className, image }: ButtonProps) {
  return (
    <Pressable
      className={`bg-primary rounded-xl items-center p-3 ${className || ''}`}
      onPress={onPress}
    >
      <Text className={`font-lexend-regular text-lg text-textPrimary ${image ? 'mb-2' : ''}`}>
        {text}
      </Text>
      { image && <Image className="rounded-xl" source={image} /> }
    </Pressable>
  );
}