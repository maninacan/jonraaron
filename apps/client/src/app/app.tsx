import { ErrorBoundary } from 'react-error-boundary';
import LogRocket from 'logrocket';
import { useAuth0 } from '@auth0/auth0-react';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import ThemeWrapper from './theme-wrapper/theme-wrapper';
import MainHeader from './main-header/main-header';
import MainContent from './main-content/main-content';
import ErrorFallback from './error-fallback/error-fallback';
import { removeUser, setUser } from './redux/userSlice';

LogRocket.init(process.env['NX_LOGROCKET_APP_ID'] || '');

export function App() {
  const { user } = useAuth0();
  const dispatch = useDispatch();

  useMemo(() => {
    if (user) {
      LogRocket.identify(user?.sub || 'unknown', {
        name: user?.name || 'unknown',
        email: user?.email || 'unknown',
      });
      dispatch(setUser(user));
    } else {
      dispatch(removeUser());
    }
  }, [user]);

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <ThemeWrapper>
        {(themeProps) => {
          return (
            <div className="dark:text-gray-50">
              <MainHeader themeProps={themeProps} />
              <MainContent />
            </div>
          );
        }}
      </ThemeWrapper>
    </ErrorBoundary>
  );
}

export default App;
