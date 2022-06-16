import Page from '../page/page';
import styles from './featured-components-page.module.scss';
import { Clock, Title } from '@jonraaron/common-components';

/* eslint-disable-next-line */
export interface FeaturedComponentsPageProps {}

export function FeaturedComponentsPage(props: FeaturedComponentsPageProps) {
  return (
    <Page className={styles['container']}>
      <Title>Clock With Greensock Animations</Title>
      <Clock />
    </Page>
  );
}

export default FeaturedComponentsPage;
