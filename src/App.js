import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator, Button, View} from "@aws-amplify/ui-react";
import  { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

import BitcoinApp from './bitcoinApp/bitcoinApp';
import './App.css';

Auth.configure(awsconfig);

function App() {
  return (
    <View className="App">
      <Button className="signout" onClick={() => Auth.signOut()}>Sign Out</Button> {/* //to fix signout */}
      <BitcoinApp/>
    </View>
  );
}

export default withAuthenticator(App);