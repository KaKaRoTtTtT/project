import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import java from '../../assets/java.png'
import cpp from '../../assets/cpp.png'
import js from '../../assets/js.png'
import python from '../../assets/python.png'
import react from '../../assets/react.png'
import node from '../../assets/node.png'
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import flutter from '../../assets/flutter.png'
import go from '../../assets/go.png'

import './Course.css';

const Courses = () => {
    return(
        <>
        <div>
        <LeftSidebar  />
        </div>

        <div className="centrediv">
            <a className="link-anchor" href="https://www.coursera.org/specializations/java-programming-language">
            <img src={java} alt='java'/>
            </a>
            <a className="link-anchor" href="https://www.coursera.org/specializations/coding-for-everyone">
            <img src={cpp} alt='cpp'/>
            </a>
            <a className="link-anchor" href="https://www.coursera.org/professional-certificates/ibm-full-stack-javascript-developer">
            <img src={js} alt='js'/>
            </a>
            <a className="link-anchor" href="https://www.coursera.org/specializations/python">
            <img src={python} alt='pyhton'/>
            </a>
            <a className="link-anchor" href="https://www.coursera.org/projects/rudi-hinds-web-development-in-reactjs-build-a-web-app">
            <img src={react} alt='react'/>
            </a>
            <a className="link-anchor" href="https://www.coursera.org/learn/restful-apis-with-node-and-express">
            <img src={node} alt='node'/>
            </a>
            <a className="link-anchor" href="https://www.coursera.org/projects/googlecloud-flutter-qwik-start-tzik1">
            <img src={flutter} alt='flutter'/>
            </a>
            <a className="link-anchor" href="https://www.coursera.org/learn/programming-with-golang">
            <img src={go} alt='go'/>
            </a>

        </div>
        </>
    )
}

export default Courses;