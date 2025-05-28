import { Discipline } from '@/shared/api';

const DisciplinePageMeta = ({
  discipline,
}: {
  discipline: Discipline;
}) => (
  <>
    <title>{discipline.name}</title>
    <meta name="description" content={discipline.description} />
    <meta property="og:title" content={discipline.name} />
    <meta
      property="og:description"
      content={discipline.description}
    />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="Discipline" />
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Дисциплины',
            item: `${import.meta.env.VITE_URL}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: discipline.name,
            item: `${import.meta.env.VITE_URL}/${discipline.id}`,
          },
        ],
      })}
    </script>
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org/',
        '@id': discipline.presentation_link,
        '@type': 'Course',
        offers: [
          {
            '@type': 'Offer',
            price: 0,
            priceCurrency: 'RUB',
          },
        ],
        hasCourseInstance: [],
        name: discipline.name,
        description: discipline.description,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: discipline.avg_rating,
          reviewCount: discipline.review_count,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Уральский федеральный университет',
          url: 'https://urfu.ru/',
        },
        provider: {
          '@type': 'Organization',
          name: 'Уральский федеральный университет',
          url: 'https://urfu.ru/',
        },
      })}
    </script>
  </>
);

export default DisciplinePageMeta;
