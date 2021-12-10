// Import React and dependencies
import * as React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import imgAbout01 from '../assets/About-01.jpg'

//import components

// Import styles
import './styles/app.scss'
import './styles/about.scss'

const AboutPage = () => {
    return (
        <div className="about">
            <section className="hero-about-section">
                <div className="main-container h-align">
                    <div>
                        <h1>
                            Baryo&Lepto is more than a studio, it’s a state of
                            mind.
                        </h1>
                        <p>
                            Animated by curiosity, wishing above all to honor
                            the world of images.
                        </p>
                    </div>
                    <div>
                        <img src={imgAbout01} alt="" />
                    </div>
                </div>
            </section>
            <section className="team-section">
                <div className="main-container v-align">
                    <h2>We don't have talent.We are a team of individuals</h2>
                    <div>
                        <img src={imgAbout01} alt="" />
                        <div>
                            <p>
                                committed to making our personalities, our
                                identity as designers, aspiring to remain
                                authentic to leave full place to the image and
                                its poetry.
                            </p>
                            <p>
                                We take the constraint to explore, to dare, to
                                create, to experiment and to tend towards an
                                innovativCe esthetism. We take pleasure in
                                freeing ourselves from the classical
                                communication patterns to propose unexpected
                                inspirations .
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="featured-companies-section"></section>
            <section></section>
        </div>

        // <main className="about">
        //     <title>About Me</title>
        //     <motion.h1 layout="position" layoutId="title">
        //         Welcome to my Gatsby site!
        //     </motion.h1>
        //     <motion.p layout="position" layoutId="description">
        //         Hi there! I'm the proud creator of this site, which I built with
        //         Gatsby.
        //     </motion.p>
        //     <motion.div layout="position" layoutId="link">
        //         <Link to="/">Go back home</Link>
        //     </motion.div>
        //     {/* <motion.img layoutId="image" className="framer-image" src={image} /> */}
        //     <AnimImage src={1} />
        // </main>
    )
}

// Step 3: Export your component
export default AboutPage
