import { Platform } from 'react-native';

let ReactNativeComponent;
if (Platform.OS === 'ios') {
  MyComponent = require('./component.ios').default;
} else if (Platform.OS === 'android') {
  MyComponent = require('./component.android').default;
}

export default ReactNativeComponent;
