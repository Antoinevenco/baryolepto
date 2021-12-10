module.exports = {
    siteMetadata: {
        title: 'baryo',
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-gatsby-cloud',
        'gatsby-plugin-image',
        'gatsby-remark-images',
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    formats: [`auto`, `webp`],
                    placeholder: `dominantColor`,
                    quality: 100,
                    breakpoints: [750, 1080, 1366, 1920],
                },
            },
        },
        'gatsby-transformer-sharp', // Needed for dynamic images
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `assets`,
                path: `${__dirname}/src/assets`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `projects`,
                path: `${__dirname}/src/projects`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                extensions: [`.md`, `.mdx`],
                plugins: [`gatsby-remark-images`],
                gatsbyRemarkPlugins: [`gatsby-remark-images`],
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /svg/, // See below to configure properly
                },
            },
        },
    ],
}
