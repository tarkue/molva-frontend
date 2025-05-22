export const MainPageMeta = () => {
  return (
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
  );
};
