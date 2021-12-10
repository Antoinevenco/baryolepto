// Step 1: Import React
import { Link } from 'gatsby'
import * as React from 'react'
import { graphql } from 'gatsby'
import { AnimImage } from '../components/AnimImage'
import { motion } from 'framer-motion'

// Import components

//Import styles
import './styles/app.scss'
import './styles/work.scss'

//Local Components

const ProjectItem = ({ title, client, skills, image, slug }) => {
    console.log(image)
    return (
        <Link to={`/${slug}`}>
            <motion.div className="project-item">
                <div className="project-item-content-wrapper">
                    <div className="upper-text">
                        <h3>{title}</h3>
                        <p>{client}</p>
                    </div>
                    <div className="bottom-text">
                        {skills.map((skill) => {
                            return <p>{skill}</p>
                        })}
                    </div>
                </div>

                <AnimImage
                    alt={title}
                    image={image.childImageSharp.gatsbyImageData}
                    id={image.childImageSharp.id}
                />
            </motion.div>
        </Link>
    )
}

const LittleProjectItem = ({ title, client, skills }) => {
    return (
        <div className="project-item">
            <div className="first-text">
                <h3>{title}</h3>
                <p>{client}</p>
            </div>
            <div className="last-text">
                {skills.map((skill) => {
                    return <p>{skill}</p>
                })}
            </div>
        </div>
    )
}

// Step 2: Define your component
const Work = ({ data }) => {
    const projects = data.allMdx.edges

    return (
        <div className="work">
            <section className="featured-projects-section">
                <div className="main-container v-align">
                    <div className="heading-projects">
                        <h1>WORK</h1>
                        <h2>Featured Projects</h2>
                    </div>
                    <div className="projects-items-wrapper">
                        {projects.map(
                            ({
                                node: {
                                    frontmatter: {
                                        skills,
                                        title,
                                        client,
                                        archive,
                                        featuredImage,
                                        slug,
                                    },
                                },
                            }) => {
                                if (!archive) {
                                    return (
                                        <ProjectItem
                                            title={title}
                                            client={client}
                                            skills={skills}
                                            image={featuredImage}
                                            slug={slug}
                                        />
                                    )
                                }
                            }
                        )}
                    </div>
                </div>
            </section>

            <section className="archive-project-section">
                <div className="main-container v-align">
                    <h2>Archive</h2>
                    <div className="archive-projects-wrapper">
                        {projects.map(
                            ({
                                node: {
                                    frontmatter: {
                                        skills,
                                        title,
                                        client,
                                        archive,
                                    },
                                },
                            }) => {
                                if (archive) {
                                    return (
                                        <LittleProjectItem
                                            title={title}
                                            client={client}
                                            skills={skills}
                                            key={title}
                                        />
                                    )
                                }
                            }
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}
// Step 3: Export your component
export default Work

export const query = graphql`
    query {
        allMdx {
            edges {
                node {
                    frontmatter {
                        title
                        skills
                        year
                        archive
                        slug
                        featuredImage {
                            childImageSharp {
                                gatsbyImageData
                                id
                            }
                        }
                        client
                    }
                }
            }
        }
    }
`
