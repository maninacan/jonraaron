import styles from './coming-soon.module.scss';
import { useTranslation } from 'react-i18next';

export function ComingSoon() {
  const { t } = useTranslation(['intro']);
  return (
    <div className={styles['container']}>
      <h1 className="text-center text-[48px] mb-10">
        {t('intro:coming-soon')}
      </h1>
    </div>
  );
}

export default ComingSoon;
