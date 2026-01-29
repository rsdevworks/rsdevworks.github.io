/**
 * JSON-LD Structured Data generators for SEO and Knowledge Graph visibility
 */

const baseUrl = 'https://rsdevworks.co.za'
const companyName = 'rsdevworks'
const companyEmail = 'hello@rsdevworks.co.za'
const companyPhone = '+27(0)81 123 4567'

/**
 * Organization Schema - Company information for Knowledge Graph
 */
export function getOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        name: companyName,
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        description: 'rsdevworks is a software development company specializing in custom web and mobile app development in South Africa.',
        sameAs: [
            'https://www.linkedin.com/company/rsdevworks',
            'https://twitter.com/rsdevworks',
            'https://github.com/rsdevworks',
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: companyPhone,
            contactType: 'Customer Service',
            email: companyEmail,
        },
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'ZA',
            addressLocality: 'South Africa',
        },
        foundingDate: '2020',
        founder: {
            '@type': 'Person',
            name: 'Cyrian',
        },
    }
}

/**
 * Local Business Schema - For local search visibility
 */
export function getLocalBusinessSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${baseUrl}/#localbusiness`,
        name: companyName,
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        description: 'Custom software development company in South Africa',
        image: `${baseUrl}/og-image.png`,
        areaServed: 'ZA',
        priceRange: '$',
        telephone: companyPhone,
        email: companyEmail,
    }
}

/**
 * Service Schema - For individual services
 */
export function getServiceSchema(serviceName, serviceDescription) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: serviceName,
        description: serviceDescription,
        provider: {
            '@type': 'Organization',
            name: companyName,
            url: baseUrl,
        },
        areaServed: 'ZA',
    }
}

/**
 * Software Application Schema - For portfolio items
 */
export function getSoftwareApplicationSchema(appName, appDescription, appImage) {
    return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: appName,
        description: appDescription,
        image: appImage,
        creator: {
            '@type': 'Organization',
            name: companyName,
            url: baseUrl,
        },
        applicationCategory: 'WebApplication',
        operatingSystem: 'Web',
    }
}

/**
 * Breadcrumb Schema - For navigation hierarchy
 */
export function getBreadcrumbSchema(items) {
    // items should be array of {name, url}
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    }
}

/**
 * Helper to create script tag content for Helmet
 */
export function createJsonLdScript(schemaObject) {
    return JSON.stringify(schemaObject)
}

/**
 * Get all organizational schemas combined
 */
export function getOrganizationSchemas() {
    return [
        getOrganizationSchema(),
        getLocalBusinessSchema(),
    ]
}
