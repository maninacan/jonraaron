import Page from '../page/page';
import styles from './featured-components-page.module.scss';
import { ComingSoon } from '@jonraaron/common-components';

/* eslint-disable-next-line */
export interface FeaturedComponentsPageProps {}

export function FeaturedComponentsPage(props: FeaturedComponentsPageProps) {
  return (
    <Page className={styles['container']}>
      <ComingSoon />
    </Page>
  );
}

export default FeaturedComponentsPage;
