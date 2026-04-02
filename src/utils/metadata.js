/**
 * Metadata definitions for SEO optimization
 * Each page has its own meta title, description, and OpenGraph tags
 */

const baseUrl = 'https://rsdevworks.co.za'

export const metadata = {
    home: {
        title: 'rsdevworks | Custom Software Development | South Africa',
        description: 'rsdevworks specializes in custom web and mobile app development, SaaS solutions, and UI/UX design. Build your next product with our in-house team in South Africa.',
        keywords: 'software development, web development, mobile apps, SaaS, UI/UX design, web design, South Africa, React, custom software',
        canonical: `${baseUrl}/`,
        ogTitle: 'rsdevworks - Custom Software Development',
        ogDescription: 'Build your next product with rsdevworks. Custom web and mobile applications + SaaS solutions.',
        ogImage: `${baseUrl}/og-image.png`,
        ogType: 'website',
    },
    terms: {
        title: 'Terms of Service | rsdevworks',
        description: 'Read the terms of service for rsdevworks software development services.',
        keywords: 'terms, terms of service, legal',
        canonical: `${baseUrl}/terms`,
        ogTitle: 'Terms of Service',
        ogDescription: 'rsdevworks Terms of Service',
        ogImage: `${baseUrl}/og-image.png`,
        ogType: 'website',
    },
    privacy: {
        title: 'Privacy Policy | rsdevworks',
        description: 'Read our privacy policy to understand how rsdevworks collects, uses, and protects your personal data.',
        keywords: 'privacy, privacy policy, data protection, POPIA',
        canonical: `${baseUrl}/privacy`,
        ogTitle: 'Privacy Policy',
        ogDescription: 'rsdevworks Privacy Policy - Your data security matters to us',
        ogImage: `${baseUrl}/og-image.png`,
        ogType: 'website',
    },
    'myvirtualcards-privacy': {
        title: 'Privacy Policy | MyVirtualCards',
        description: 'Read the MyVirtualCards privacy policy to understand how we collect, use, and protect your data in the app.',
        keywords: 'MyVirtualCards, privacy policy, data protection, VRC',
        canonical: `${baseUrl}/myvirtualcards/privacy`,
        ogTitle: 'Privacy Policy | MyVirtualCards',
        ogDescription: 'MyVirtualCards Privacy Policy - Your cards are stored locally and your backups are encrypted.',
        ogImage: `${baseUrl}/og-image.png`,
        ogType: 'website',
    },
}

/**
 * Helper function to get metadata for a page
 * @param {string} page - Page identifier (e.g., 'home', 'services')
 * @returns {object} Metadata object with all required tags
 */
export function getMetadata(page) {
    return metadata[page] || metadata.home
}

/**
 * Helper function to create Helmet config object
 * @param {object} meta - Metadata object
 * @returns {object} Configuration for Helmet component
 */
export function createHelmetConfig(meta) {
    return {
        title: meta.title,
        meta: [
            { name: 'description', content: meta.description },
            { name: 'keywords', content: meta.keywords },
            { name: 'canonical', content: meta.canonical },
            { property: 'og:title', content: meta.ogTitle },
            { property: 'og:description', content: meta.ogDescription },
            { property: 'og:image', content: meta.ogImage },
            { property: 'og:url', content: meta.canonical },
            { property: 'og:type', content: meta.ogType },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: meta.ogTitle },
            { name: 'twitter:description', content: meta.ogDescription },
            { name: 'twitter:image', content: meta.ogImage },
        ],
    }
}
