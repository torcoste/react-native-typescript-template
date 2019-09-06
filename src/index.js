/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import App from './App';
import {name as appName} from '../app.json';

YellowBox.ignoreWarnings(['RCTBridge required dispatch_sync']);

AppRegistry.registerComponent(appName, () => App);
