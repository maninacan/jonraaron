import { ErrorBoundary } from 'react-error-boundary';
import ThemeWrapper from './theme-wrapper/theme-wrapper';
import MainHeader from './main-header/main-header';
import MainContent from './main-content/main-content';
import ErrorFallback from './error-fallback/error-fallback';
import LogRocket from 'logrocket';

LogRocket.init('jonraaron/jonraaron');

export function App() {
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
