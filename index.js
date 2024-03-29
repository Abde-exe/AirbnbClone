/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//aws amplify
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure(config);

AppRegistry.registerComponent(appName, () => App);
