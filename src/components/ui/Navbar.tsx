import { RightIcon } from "../../icons/RightIcon"

export const Navbar = () => {
    return <div className="bg-deepBlue">
        <div className="relative w-[1080px] mx-auto flex items-center justify-between">
            <a href="/" className="cursor-pointer pr-7">
                <img
                    className="h-12 w-32"
                    src="./src/assets/images/logo.svg"
                    alt="razorpay-img"
                />
            </a>
            <ul className="flex gap-6">
                <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all trasition-duration-200 relative group">
                    <a href="#">Payment</a>
                    <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all trasition-duration-200"></div>
                </li>

                <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all trasition-duration-200 relative group">
                    <a href="#">Banking</a>
                    <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all trasition-duration-200"></div>
                </li>

                <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all trasition-duration-200 relative group">
                    <a href="#">Corporate Card</a>
                </li>

                <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all trasition-duration-200 relative group">
                    <a href="#">Payroll</a>
                </li>

                <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all trasition-duration-200 relative group">
                    <a href="#">Resources</a>
                    <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all trasition-duration-200"></div>
                </li>
                <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all trasition-duration-200 relative group">
                    <a href="#">Support</a>
                    <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all trasition-duration-200"></div>
                </li>
                <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all trasition-duration-200 relative group">
                    <a href="#">Pricing</a>
                    <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all trasition-duration-200"></div>
                </li>
            </ul>
            <div className="flex gap-6">
                <img src="src/assets/images/india-flag.svg" alt="flag" />
                <button
                    className="py-2 px-4 text-white text-sm font-mullish border border-blue-500 cursor-pointer rounded-sm font-bold"
                >
                    Login
                </button>
                <button
                    className="flex text-blue-500 text-sm  hover:text-blue-700 bg-white py-2 px-4 font-bold rounded-sm justify-center items-center gap-2 transition-all trasition-duration-200"
                >
                    Sign Up 
                    <RightIcon />
                </button>
            </div>
        </div>
    </div>
} 