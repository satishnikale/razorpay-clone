import { ClearIcon } from "../../icons/ClearIcon";
import { RightIcon } from "../../icons/RightIcon";
import ctaImg from "../../assets/images/ctaImg.svg";

export const Testomonial = () => {
    return <div className="bg-[url(src/assets/images/CTABg.svg)] bg-no-repeat bg-cover">
        <div className="w-10/12 max-w-[1080px] mx-auto h-auto mt-28 flex">
            <div className="my-16">
                <h1 className="text-white font-bold font-mullish text-2xl">Supercharge your business with Razorpay</h1>
                <div className="h-1 w-8  bg-greenLight my-4"></div>
                <p className="text-white font-mullish font-medium mb-8">Sign up now to experience the future of payments and offer <br /> your customers the best checkout experience.</p>

                <ul className="gap-x-6 gap-y-6 flex flex-wrap w-10/12">
                    <li className="flex items-center gap-x-1 ">  
                    <ClearIcon />                      
                        <span className="text-white">Quick Onboarding</span>
                    </li>
                    <li className="flex items-center gap-x-1 ">
                        <ClearIcon />
                        <span className="text-white">Access to entire product suite</span>
                    </li>
                    <li className="flex items-center gap-x-1 ">
                        <ClearIcon />
                        <span className="text-white">API access</span>
                    </li>
                    <li className="flex items-center gap-x-1 ">
                        <ClearIcon />
                        <span className="text-white">24x7 support</span>
                    </li>
                </ul>
                <button className="mb-10 mt-4 px-5 py-2 rounded font-bold bg-white text-lightBlue flex justify-center items-center gap-x-2 hover:text-blue-600 transition-all duration-200">
                    Sign up
                    <RightIcon />
                </button>
            </div>
            <div className="mx-auto">
                <img className="h-44 hidden md:hidden lg:block" src={ctaImg} alt="" />
            </div>
        </div>
    </div>
}