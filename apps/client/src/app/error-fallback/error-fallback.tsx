import { useTranslation } from 'react-i18next';

export interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  const { t } = useTranslation(['intro']);
  return (
    <div role="alert">
      <p>{t('intro:Something-went-wrong')}</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>{t('intro:Try-again')}</button>
    </div>
  );
};

export default ErrorFallback;
