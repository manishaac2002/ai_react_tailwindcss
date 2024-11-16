import deployAi from "../images/deploy.ai.png"
import div from "../images/div.png"
import { motion, useInView } from "framer-motion"
import { useRef } from "react";
function DeployAi() {
  
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1, once: true });
  return (
    <div className="mx-44 pt-40  ">

      <div className="grid grid-cols-2 gap-24">

        <div>
          <motion.img
            className="flex justify-start"
            src={deployAi} alt="Deploy Ai"
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-6xl font-light py-4 ">Deploy <span className="font-medium">Multi-Agent
            <br />Ai System </span>in Just Minutes
          </p>

          <p className="text-gray-500 text-xl pt-4 pb-6">Using Fetch.ai universal Agents library - uAgents</p>

          <div className="grid grid-rows-2 ">

            <div>
              <h3 className="text-3xl text-gray-900 pt-3">Ai Communication with Langchain & More</h3>
              <p className="text-xl text-gray-500 pt-4 pb-3">Add communication capabilities to AI Agents developed using
                <br />frameworks such as Langchain, CrewAI, Autogen, Vertex AI and others</p>
            </div>

            <div>
              <img className="pt-5" src={div} alt="Split div" />
            </div>

            <div>
              <h3 className="text-3xl text-gray-900 ">Build Ai Agents with LLM & APIs</h3>
              <p className="text-xl text-gray-500 pt-4">
                Create AI Agents from scratch powered by any combination
                <br />of LLMs,Ai/ML models API calls or custom business logic</p>
            </div>

          </div>

        </motion.div>

      </div>

    </div>
  )
}

export default DeployAi