import flowAi from "../images/flow.ai.png"
import PropTypes from 'prop-types'
import AHref from '../Components/buttons/ahref';
import ClickButton from "../Components/buttons/buttons"
import { motion, useInView } from "framer-motion"
import { useRef } from "react";


function AiAgents() {

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1, once: true });
  return (
    <>
      <div className=" m-10 text-center text-gray-900 p-20">

        <motion.div className="py-4 flex justify-center"
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}>

          <AHref

            data={"BUILDING AI NETWORKS WITH TCP/IP"}
            icon={<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512">!Font Awesome Free 6.6.0 by
              @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons,
              Inc.--<path d="M320 0c17.7 0 32 14.3 32 32l0 64 120 0c39.8 0 72 32.2 72 72l0 272c0 39.8-32.2 72-72 72l-304 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l120 0 0-64c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224l16 0 0 192-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-192 16 0z" />
            </svg>} />
        </motion.div>

        <motion.p
          className="text-8xl font-light py-4"
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}>
          Enhancing <span className="font-medium">AI Agents</span> with
          <br />
          <span className="font-medium">TCP/IP</span> Protocols
        </motion.p>

        <div className="flex justify-center py-10">

          <ClickButton background={"bg-indigo-600 text-white"} data={"Explore our tech"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg>} />
          <ClickButton background={"text-indigo-600 border border-indigo-600"} data={"Watch Video"} icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
          </svg>} />

          <p className="text-gray-500 ml-10 text-xl ">
            Develop, Deploy and orchestrate multi-agent systems
            <br />in an open Ai Agents marketplace
          </p>

        </div>

        <motion.img
          className="flex justify-start"
          src={flowAi}
          alt="Fetch Flow Ai"
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    </>
  )
}

// Adding prop types for the AiAgents component
AiAgents.propTypes = {
  data: PropTypes.string.isRequired,
};


export default AiAgents