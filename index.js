//================================ React Native Imported Files ======================================//

import {AppRegistry} from 'react-native';

//================================ Local Imported Files ======================================//

import App from './App';
import {name as appName} from './app.json';

const Index = () => {
  return <App />;
};

AppRegistry.registerComponent(appName, () => Index);
