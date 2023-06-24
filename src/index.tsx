import React, {FC} from 'react';
import * as FlagWideSVGs from './assets/4x3';
import * as FlagSquareSVGs from './assets/1x1';
import {StyleProp, View, ViewStyle, StyleSheet} from 'react-native';
interface FlagIconPropsBase {
  size?: number;
  containerStyles?: StyleProp<ViewStyle> | undefined;
}

interface FlagIconPropsSq extends FlagIconPropsBase {
  name: keyof typeof FlagSquareSVGs;
  square: true;
}

interface FlagIconPropsWide extends FlagIconPropsBase {
  name: keyof typeof FlagWideSVGs;
  square?: false | undefined;
}

export type FlagIconProps = FlagIconPropsSq | FlagIconPropsWide;

const FlagIcon: FC<FlagIconProps> = ({
  name,
  size = 20,
  square = false,
  containerStyles = {},
}) => {
  const Component = square ? FlagSquareSVGs[name] : FlagWideSVGs[name];
  const height = size;
  const width = square ? size : size * 3;
  return (
    <View style={[styles.container, containerStyles]}>
      <Component height={height} width={width} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
  },
});

export default FlagIcon;
