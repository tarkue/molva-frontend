import { useTheme } from '@/shared/models/theme-store';

export const MainPageMeta = () => {
  const { theme } = useTheme();
  return (
    <>
      <meta
        name="theme-color"
        content={theme === 'light' ? '#8EAEFF' : '#121212'}
      />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Molva',
          alternateName: [
            'Помощник в выборе дисциплин в УрФУ',
            'Помощник урфу',
            'Молва',
          ],
          url: import.meta.env.VITE_URL,
        })}
      </script>
    </>
  );
};
