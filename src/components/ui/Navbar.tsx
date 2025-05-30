import { Hamberger } from "../../icons/Hamberger"
import { RightIcon } from "../../icons/RightIcon"
import logo from "../../assets/images/logo.svg";
import flag from "../../assets/images/india-flag.svg";


export const Navbar = () => {
    return <div className="bg-deepBlue">
        <div className="relative w-10/12 max-w-[1080px] mx-auto flex items-center justify-between pt-6">
            <a href="/" className="cursor-pointer pr-7">
                <img
                    className="h-12 w-32"
                    src={logo}
                    alt="razorpay-img"
                />
            </a>
            <ul className="hidden lg:flex gap-6">
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
                <img className="hidden lg:block" src={flag} alt="flag" />
                <button
                    className="py-2 px-4 text-white text-sm font-mullish border border-blue-500 cursor-pointer rounded-sm font-bold"
                >
                    Login
                </button>
                <button className="text-white lg:hidden">
                    <Hamberger />
                </button>
                <button
                    className="hidden lg:block lg:flex text-blue-500 text-sm  hover:text-blue-700 bg-white py-2 px-4 font-bold rounded-sm justify-center items-center gap-2 transition-all trasition-duration-200"
                >
                    Sign Up
                    <RightIcon />
                </button>
            </div>
        </div>
    </div>
} 


// ok