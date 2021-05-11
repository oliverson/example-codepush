/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import CodePush from 'react-native-code-push';

AppRegistry.registerComponent(appName, () =>
  CodePush({
    updateDialog: {
      optionalInstallButtonLabel: 'Cài đặt',
      optionalIgnoreButtonLabel: 'Bỏ qua',
      title: 'Thông Báo!',
      optionalUpdateMessage: 'Có phiên bản mới, nhấn cài đặt để cập nhật.',
    },
    installMode: CodePush.InstallMode.IMMEDIATE,
    checkFrequency: CodePush.CheckFrequency.ON_APP_START,
  })(App),
);
