import React from 'react'
import './src/styles/app.scss'
import { AnimatePresence, LayoutGroup } from 'framer-motion'

// Import components
import Nav from './src/components/Nav.js'

export const wrapPageElement = ({ element }) => (
    <div>
        <Nav />
        <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
    </div>
)
