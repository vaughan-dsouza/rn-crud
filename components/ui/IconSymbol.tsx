import React from 'react';
import { OpaqueColorValue, StyleProp, ViewStyle } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SymbolWeight } from 'expo-symbols';

// Mapping includes both the icon name and which library to use
const MAPPING = {
  'house.fill': { library: 'MaterialIcons', name: 'home' },
  'people.fill': { library: 'Ionicons', name: 'people-circle' },
  'chevron.left.forwardslash.chevron.right': { library: 'MaterialIcons', name: 'code' },
  'chevron.right': { library: 'MaterialIcons', name: 'chevron-right' },

  // Ionicons example
  'person.fill': { library: 'Ionicons', name: 'person' },
  'settings.fill': { library: 'Ionicons', name: 'settings' },
} as const;

export type IconSymbolName = keyof typeof MAPPING;

type IconProps = {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
};

export function IconSymbol({ name, size = 24, color, style }: IconProps) {
  const mapping = MAPPING[name];

  if (!mapping) {
    console.warn(`Icon "${name}" not found in mapping`);
    return null;
  }

  const { library, name: iconName } = mapping;

  if (library === 'MaterialIcons') {
    return <MaterialIcons name={iconName} size={size} color={color} style={style} />;
  }

  if (library === 'Ionicons') {
    return <Ionicons name={iconName} size={size} color={color} style={style} />;
  }

  return null;
}
