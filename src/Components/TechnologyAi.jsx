import ai from "../images/ai.png"
import person from "../images/person.png"
import security from "../images/security.png"
import PropTypes from 'prop-types'
import AHref from '../Components/buttons/ahref';
import ClickButton from "../Components/buttons/buttons"

function TechnologyAi() {

  return (
    <div className="mx-44 pt-40  ">

      <div className="border border-gray-300  bg-indigo-50 rounded-3xl pt-16 pb-24">

        <div className="py-4 flex justify-center">

          <AHref data={"TECHNOLOGY"} icon={<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">!Font Awesome Free 6.6.0 by
            @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons,
            Inc.--<path d="M320 0c17.7 0 32 14.3 32 32l0 64 120 0c39.8 0 72 32.2 72 72l0 272c0 39.8-32.2 72-72 72l-304 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l120 0 0-64c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224l16 0 0 192-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-192 16 0z" />
          </svg>} />
        </div>

        <div className="flex justify-center text-gray-900">
          <p className="text-6xl font-light py-4">Transforming
            <span className="font-medium "> Experiences <br />with Powerful </span>
            Features</p>
        </div>

        <p className="text-xl text-gray-500 pt-4 flex justify-center">Create AI Agents from scratch powered by any combination</p>

        <div className="grid grid-cols-2 m-10 px-32 gap-14">

          <div className="border border-indigo-100 rounded-3xl bg-slate-50">
            <img className="pt-5 p-5" src={person} alt="Person" />
            <h3 className="px-5 text-gray-900 font-medium text-2xl">Real-time Communication</h3>
            <p className="px-5 text-gray-400 pt-3 pb-8 text-xl">Ai agents use TCP/IP for instant data transfer across networks</p>
          </div>

          <div className="border border-indigo-100 rounded-3xl bg-slate-50">
            <img className="pt-5 p-5" src={ai} alt="Ai" />
            <h3 className="px-5 text-gray-900 font-medium text-2xl">Scalable AI Deployment</h3>
            <p className="px-5 text-gray-400 pt-3 pb-8 text-xl">TCP/IP enables distributed AI agents to scale across systems</p>
          </div>

        </div>

        <div className="mx-40 rounded-3xl border border-indigo-100 bg-slate-50 pb-10">

          <div className="grid grid-cols-2 px-10 gap-14">

            <div className="">
              <img className="pt-5 " src={security} alt="Security" />

            </div>

            <div className="pt-36">

              <h3 className="px-5 text-gray-900 font-medium text-2xl">Highly Secure Data Transfer</h3>
              <p className="px-5 text-gray-400 pt-3 pb-8 text-xl">TCP/IP ensures secure, encrypted data transfer between Ai agents and systems, protecting workflow integrity and privacy</p>

              <ClickButton background={"text-white bg-indigo-600"} data={"Learn More"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>} />
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}
TechnologyAi.propTypes = {
  data: PropTypes.string.isRequired,
};

export default TechnologyAi