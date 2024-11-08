function Header() {
    return (
        <>
            <div className=" m-10 flex justify-between " >

                <div className="flex justify-start py-3">

                    <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11" cy="10" r="5" fill="#2A2A2A" />
                        <circle cx="11" cy="25" r="5" fill="#2A2A2A" />
                        <circle cx="11" cy="40" r="5" fill="#2A2A2A" />
                        <circle cx="11" cy="55" r="5" fill="#D9D9D9" />
                        <circle cx="25" cy="10" r="5" fill="#2A2A2A" />
                        <circle cx="25" cy="25" r="5" fill="#2A2A2A" />
                        <circle cx="25" cy="40" r="5" fill="#D9D9D9" />
                        <circle cx="25" cy="55" r="5" fill="#D9D9D9" />
                        <circle cx="39" cy="10" r="5" fill="#2A2A2A" />
                        <circle cx="39" cy="25" r="5" fill="#D9D9D9" />
                        <circle cx="39" cy="40" r="5" fill="#D9D9D9" />
                        <circle cx="39" cy="55" r="5" fill="#D9D9D9" />
                        <circle cx="53" cy="10" r="5" fill="#D9D9D9" />
                        <circle cx="53" cy="25" r="5" fill="#D9D9D9" />
                        <circle cx="53" cy="40" r="5" fill="#D9D9D9" />
                        <circle cx="53" cy="55" r="5" fill="#D9D9D9" />
                    </svg>

                    <p className="text-3xl font-light pl-4">fetch.ai</p>
                </div>

                <ul className="flex justify-center font-bold text-gray-700 py-4">
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

export default Header 