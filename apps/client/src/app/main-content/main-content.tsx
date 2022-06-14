import { Route, Routes } from 'react-router-dom';

import MainSubHeader from '../main-sub-header/main-sub-header';
import HomePage from '../home-page/home-page';
import FeaturedComponentsPage from '../featured-components-page/featured-components-page';
import { NavItem } from '@jonraaron/data';

export interface MainContentProps {
  navList: NavItem[];
}

export function MainContent({ navList }: MainContentProps) {
  return (
    <div className="relative z-10">
      <MainSubHeader navList={navList} />
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
