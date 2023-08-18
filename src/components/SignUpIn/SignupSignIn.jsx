import { Amplify, Auth } from 'aws-amplify';

import { withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useEffect, useContext } from 'react';
import AuthContext from '../../context/context';

import awsExports from '../../aws-exports';
Amplify.configure(awsExports);

function SignupSignIn({ signOut, user }) {
  const { setUser, setIsAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    checkUserAuthentication()
  }, []);

  const checkUserAuthentication = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
      setIsAuthenticated(true);
    } catch (error) {
      setIsAuthenticated(false);
    }
  };

  return (
    <>
    </>
  );
}

export default withAuthenticator(SignupSignIn);