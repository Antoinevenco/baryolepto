import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { AnimImage } from '../components/AnimImage'
import { motion } from 'framer-motion'
import '../styles/templates/project.scss'

export default function Project({ pageContext }) {
    const { project } = pageContext

    return (
        <div className="project-template">
            <section className="hero-project-section">
                <div className="project-hero-container">
                    <div className="heading-project">
                        <h1 layoutId={project.title}>{project.title}</h1>
                        <AnimImage
                            key={project.featuredImage.childImageSharp.id}
                            alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                            image={
                                project.featuredImage.childImageSharp
                                    .gatsbyImageData
                            }
                            id={project.featuredImage.childImageSharp.id}
                        />
                    </div>
                    <div className="meta-project">
                        <div>
                            <h2>Year</h2>
                            <p>{project.year}</p>
                        </div>
                        <div>
                            <h2>Client</h2>
                            <p>{project.client}</p>
                        </div>
                        <div>
                            <h2>skills</h2>
                            {project.skills.map((skills) => {
                                return <p>{skills}</p>
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-project-section">
                <div className="project-hero-container">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Euismod lobortis maecenas urna viverra cursus fames.
                        Mattis odio gravida scelerisque velit, sed. <br />{' '}
                        <br /> Sed a dui, volutpat sit suspendisse orci,
                        ultrices sit. Nunc dui metus in sit eget. <br />
                        <br /> Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Euismod lobortis maecenas urna viverra
                        cursus fames. Mattis odio gravida scelerisque velit,
                        sed. Sed a dui, volutpat sit suspendisse orci, ultrices
                        sit. Nunc dui metus in sit eget. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Euismod lobortis
                        maecenas urna viverra cursus fames. Mattis odio gravida
                        scelerisque velit, sed. Sed a dui, volutpat sit
                        suspendisse orci, ultrices sit. Nunc dui metus in sit
                        eget.
                    </p>
                </div>
                <div className="main-container v-align">
                    <motion.div
                        initial={{ opacity: 0, y: 200 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring',
                            stiffness: 70,
                            damping: 20,
                            delay: 0.2,
                        }}
                    >
                        {project.images.map((image) => {
                            const finalImage = getImage(image)
                            return (
                                <GatsbyImage
                                    key={image.childImageSharp.id}
                                    alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                                    image={finalImage}
                                />
                            )
                        })}
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
