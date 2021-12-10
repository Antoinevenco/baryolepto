import React from 'react'
import { motion } from 'framer-motion'
import { GatsbyImage } from 'gatsby-plugin-image'

export const AnimImage = ({ image, alt, id }) => {
    console.log(id)
    return (
        <motion.div
            transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
            }}
            className="framer-image"
            layoutId={id}
            layout
        >
            <GatsbyImage loading="eager" image={image} alt={alt} />
        </motion.div>
    )
}
