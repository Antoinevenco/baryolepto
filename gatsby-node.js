const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
        query {
            allMdx {
                edges {
                    node {
                        id
                        frontmatter {
                            slug
                            title
                            year
                            skills
                            client
                            featuredImage {
                                childImageSharp {
                                    id
                                    gatsbyImageData
                                }
                            }
                            images {
                                childImageSharp {
                                    id
                                    gatsbyImageData
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    // console.log(JSON.stringify(result, null, 4))
    result.data.allMdx.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.slug,
            component: path.resolve(`./src/templates/project.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                project: node.frontmatter,
                slug: node.frontmatter.slug,
            },
        })
    })
}
