import { Route, Routes } from 'react-router-dom';

import MainSubHeader from '../main-sub-header/main-sub-header';
import HomePage from '../home-page/home-page';
import FeaturedComponentsPage from '../featured-components-page/featured-components-page';

export function MainContent() {
  return (
    <div className="relative z-10">
      <MainSubHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="featured-components"
          element={<FeaturedComponentsPage />}
        />
      </Routes>
    </div>
  );
}

export default MainContent;
