import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import '../styles/components/menuu.scss'

const Menuu = ({ data }) => {
    //const projects = data.allMdx.edges
    return (
        <div className="menu-wrapper">
            <div className="leftmenu">
                <div className="itemswrapper">
                    <p className="titlemenu">Menu</p>
                    <Link to="/" className="itemmenu">
                        Home
                    </Link>
                    <Link to="/work" className="itemmenu">
                        Projects
                    </Link>
                    <Link to="/about" className="itemmenu">
                        About
                    </Link>
                </div>
            </div>
            <div className="rightmenu">
                <div className="itemswrapper">
                    <p className="titlemenu">Projects</p>
                    <Link to="/lepto" className="itemmenu">
                        Baryo
                    </Link>
                    <Link to="/baryo" className="itemmenu">
                        Lepto
                    </Link>
                    <Link to="/lepto" className="itemmenu">
                        Porco
                    </Link>
                    <Link to="/baryo" className="itemmenu">
                        Experiment
                    </Link>
                    <Link to="/lepto" className="itemmenu">
                        Roadtrip
                    </Link>
                    <Link to="/baryo" className="itemmenu">
                        Peoject 1
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Menuu

export const query = graphql`
    query {
        allMdx {
            edges {
                node {
                    frontmatter {
                        title
                        archive
                        slug
                    }
                }
            }
        }
    }
`
