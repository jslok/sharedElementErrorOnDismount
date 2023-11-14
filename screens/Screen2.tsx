import React, { useState } from 'react';
import { View, Button } from 'react-native';
import Animated, {
  SharedTransition,
  withTiming,
} from 'react-native-reanimated';

const animationConfig = {
  duration: 250,
};
const transition = SharedTransition.custom(values => {
  'worklet';
  return {
    height: withTiming(values.targetHeight, animationConfig),
    width: withTiming(values.targetWidth, animationConfig),
    originY: withTiming(values.targetOriginY, animationConfig),
    originX: withTiming(values.targetOriginX, animationConfig),
  };
});

const Screen2: React.FC = ({ navigation }) => {
  const [mounted, setMounted] = useState(true);

  return (
    <View style={{ flex: 1 }}>
      {mounted && (
        <>
          <Animated.View
            style={{
              width: 150,
              height: 150,
              backgroundColor: 'green',
            }}
            sharedTransitionTag={'STT'}
            sharedTransitionStyle={transition}
          />
          <Button
            title={mounted ? 'Hide component' : 'Show component'}
            onPress={() => setMounted(!mounted)}
          />
        </>
      )}
    </View>
  );
};

export default Screen2;
