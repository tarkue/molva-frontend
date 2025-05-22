const AboutPageMeta = () => (
  <>
    <title>О нас</title>
    <link rel="prefetch" href="/about.webp" as="image"></link>
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        url: import.meta.env.VITE_URL,
        logo: `${import.meta.env.VITE_URL}/about.webp`,
        name: 'Molva',
        description: 'Твой помощник в выборе дисциплин в УрФУ в урфу',
        email: import.meta.env.VITE_EMAIL,
      })}
    </script>
  </>
);

export default AboutPageMeta;
