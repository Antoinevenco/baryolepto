import React from 'react'
import { motion } from 'framer-motion'
import { GatsbyImage } from 'gatsby-plugin-image'

export const AnimImage = ({ image, alt, id }) => {
    console.log(id)
    return (
        <motion.div
            className="framer-image-wrapper"
            layoutId={`${id}-wrapper`}
            transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
            }}
        >
            <motion.div
                transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                }}
                layoutId={`${id}`}
                layout
                className="framer-image"
            >
                <GatsbyImage
                    objectFit="none"
                    loading="eager"
                    image={image}
                    alt={alt}
                />
            </motion.div>
        </motion.div>
    )
}
