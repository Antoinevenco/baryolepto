// Step 1: Import React
import { Link } from 'gatsby'
import * as React from 'react'
import { motion } from 'framer-motion'

//Import styles
import './styles/app.scss'

// Import components
import Scene from '../components/Scene'

// Step 2: Define your component
const IndexPage = ({ data }) => {
    return (
        <div className="index">
            <div className="model">
                <Scene />
            </div>
            <h1>Cool Renders</h1>
        </div>
    )
}

// Step 3: Export your component
export default IndexPage
