function App() {

  return (
    <>
      <Header />
      <AiAgents />
    </>
  )
}


function Header() {
  return (
    <>
      <div className=" border border-gray-300 m-10 flex " >
        {/* <img className="w-16"  src="/ai.jpeg" alt="fetch.ai" /> */}

        <ul className=" container flex justify-center font-bold text-gray-700 p-4">
          <li className="pr-16">Products</li>
          <li className="pr-16">Developers</li>
          <li className="pr-16">Events</li>
          <li className="pr-16">Blog</li>
        </ul>


        <div className="flex ">
          <button className="font-bold text-gray-700 pr-10">Login</button>
          <button className="font-bold text-white bg-indigo-600 px-6 py-2 rounded-xl">
            Sign Up
          </button>
        </div>

      </div>
    </>
  )
}

function AiAgents() {
  return (
    <>
      <div className="border border-black m-10 text-center text-gray-900 p-28">

        <div className="py-4">
          <a href="" className="border border-indigo-600 px-6 py-2 rounded-xl ">BUILDING AI NETWORKS WITH TCP/IP</a>
        </div>
        <p className="text-7xl font-light py-4">
          Enhancing <span className="font-medium">AI Agents</span> with 
          <span className="font-medium">TCP/IP</span>  Protocols
        </p>

        <div className="flex "> 
          <button className="font-bold text-white bg-indigo-600 px-6 py-2 rounded-xl">
          Explore our tech
          </button>
          <button className="font-bold text-indigo-600 border border-indigo-600 px-6 py-2 rounded-xl">
          Watch Video
          </button>
          <p className="text-gray-500 text-sm'">
            Develop, Deploy and orchestrate multi-agent systems in an open Ai Agents marketplace
          </p>
        </div>

      </div>
    </>
  )
}
// function Company () {

// }
// function DevelopAi () {

// }
// function DeployAi () {

// }
// function TechnologyAi () {

// }
// function PlatformAi () {

// }
// function Footer () {

// }

export default App
