import { ChevronIcon } from "../../icons/Chevroncon"
import { ClearIcon } from "../../icons/ClearIcon"
import { RightIcon } from "../../icons/RightIcon"

export const FeatureSection = () => {
    return <div className="relative w-full my-12">
        {/* images */}
        <img className="absolute -top-32 left-32" src="src/assets/images/feature-section1-dottedrows.png" alt="" loading="lazy" />
        <img className="absolute right-0 top-32" src="src/assets/images/feature-section1-dottedrows.png" alt="" loading="lazy" />

        <div className="w-10/12 max-w-[1080px] mx-auto pt-8">
            {/* heading */}
            <h1 className="text-center text-2xl font-extrabold">Accept Payments with Razorpay Payment Suite</h1>
            <div className="h-1 w-6 bg-greenLight mx-auto my-2"></div>

            {/* content box  */}
            <div className="relative border rounded-lg my-20">
                {/* left section  */}
                <div className="w-full px-10 py-10">
                    <h3
                    className="text-3xl font-extrabold"
                    >Supercharge your business with the <br /> all‑powerful <span className="text-blue-500">Payment Gateway</span> </h3>

                    <ul className="my-10 font-mullish">
                        <li className="flex gap-2 my-3 items-center">
                            <ClearIcon />
                            <span>100+ Payment Methods</span>
                        </li>
                        <li className="flex gap-2 my-3 items-center">
                            <ClearIcon />
                            <span>Industry Leading Success Rate
                            </span>
                        </li>
                        <li className="flex gap-2 my-3 items-center">
                            <ClearIcon />
                            <span>Superior Checkout Experience
                            </span>
                        </li>
                        <li className="flex gap-2 my-3 items-center">
                            <ClearIcon />
                            <span>Easy to Integrate
                            </span>
                        </li>
                        <li className="flex gap-2 my-3 items-center">
                            <ClearIcon />
                            <span>Instant Settlements from day 1
                            </span>
                        </li>
                        <li className="flex gap-2 my-3 items-center">
                            <ClearIcon />
                            <span>In-depth Reporting and Insights
                            </span>
                        </li>
                    </ul>
                    {/* button and links */}
                    <div className="flex flex-col md:flex-row gap-2">
                        <button className="flex  justify-center items-center text-white gap-2 rounded py-4 px-7 bg-blue-500 hover:bg-blue-600 font-extrabold transition-all trasition-duration-200">
                            Sign up now 
                            <RightIcon />
                        </button>
                        <div className="flex justify-center items-center text-blue-500 hover:text-black gap-1 py-4 px-7 font-extrabold transition-all trasition-duration-200">
                            <a href="#">Know more</a>
                            <ChevronIcon />
                            
                        </div>
                    </div>
                </div>
                {/* backgraound image  */}
                <img src="src/assets/images/payment-suite.png" alt="" 
                className="max-w-[38rem] absolute right-0 bottom-0 hidden md:block lg:block md:max-w-[400px] lg:max-w-[600px]"
                />
            </div>

        </div>
    </div>
}