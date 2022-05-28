// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { Header } from '@jonraaron/common-components';
import ThemeWrapper from './theme-wrapper/theme-wrapper';

export function App() {
  return (
    <ThemeWrapper>
      <Header
        leftContent={
          <span className="text-black dark:text-white">Jon R Aaron</span>
        }
      />
    </ThemeWrapper>
  );
}

export default App;
