export default function PersonSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Laxman Nath',
    jobTitle: 'Fullstack Developer',
    url: 'https://laxmannath.com.np',
    email: 'nathlaxman242@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kathmandu',
      addressCountry: 'NP',
    },
    sameAs: [
      'https://github.com/Laxman-Nath',
      'https://linkedin.com/in/laxman-nath',
    ],
    knowsAbout: [
      'Java', 'Spring Boot', 'Node.js', 'React', 'Next.js',
      'MySQL', 'PostgreSQL', 'MongoDB', 'REST APIs',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}