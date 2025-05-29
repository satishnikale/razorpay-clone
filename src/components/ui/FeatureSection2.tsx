import { ChevronIcon } from "../../icons/Chevroncon"
import { ClearIcon } from "../../icons/ClearIcon"
import { RightIcon } from "../../icons/RightIcon"
import razorpayX from "../../assets/images/razorpayX.svg";
import bussiness_banking from "../../assets/images/buisness-banking.png";
import current_icon from "../../assets/images/current-icon.svg";
import capital_credit from "../../assets/images/capital-credit-icon.svg";
import payouts_icon from "../../assets/images/payouts-icon.svg";
// import feature_section_2BG from "../../assets/images/feature-section-2BG.svg";

export const FeatureSection2 = () => {
    return <div className="my-10 h-auto">
        {/* <img className="" src="src/assets/images/feature-section-2BG.svg" alt="" /> */}
        <div className="bg-[url(./assets/images/feature-section-2BG.svg)] bg-cover bg-no-repeat h-auto pt-[16rem] pb-[500px]">
            {/* <img className="absolute z-0 top-60 left-20 -rotate-90"
                src="src/assets/images/x-flame-2.png" alt=""
            />
            <img className="absolute right-16 top-96 z-0"
                src="src/assets/images/x-flame-2.png" alt=""
            /> */}

            <div className="w-10/12 max-w-[1080px] h-auto mx-auto relative z-10">
                <div className="text-center my-10 space-y-4">
                    <h2 className="text-white text-2xl font-mullish font-bold">Explore Razorpay Business Banking</h2>
                    <div className="h-1 w-8 bg-greenLight mx-auto"></div>
                </div>

                <div className="h-[450px] border border-slate-700 rounded-md relative overflow-y-hidden">
                    <div className="py-10 pl-10">
                        <span>
                            <h2 className="text-white text-2xl font-mullish font-bold">
                                Manage your company’s finances with
                            </h2>
                            <div className="flex gap-4">
                                <img src={razorpayX} alt="" />
                                <span className="text-2xl font-mullish font-bold text-greenLight">Business Banking</span>
                            </div>
                        </span>
                        <ul className="my-10 font-mullish text-white">
                            <li className="flex gap-2 my-3 items-center">
                                <ClearIcon />
                                <span>Open a fully digital current account
                                </span>
                            </li>
                            <li className="flex gap-2 my-3 items-center">
                                <ClearIcon />
                                <span>Automate payables & compliment payments

                                </span>
                            </li>
                            <li className="flex gap-2 my-3 items-center">
                                <ClearIcon />
                                <span>Simplify and track spends with Corporate cards

                                </span>
                            </li>
                            <li className="flex gap-2 my-3 items-center">
                                <ClearIcon />
                                <span>View financial insights at a glance

                                </span>
                            </li>
                        </ul>
                        <div className="flex flex-row w-full items-center gap-6">
                            <button
                                className="relative flex items-center py-4 px-16 text-white bg-blue-500 hover:bg-blue-600 font-bold rounded overflow-hidden"
                            >Sign up
                                <RightIcon />
                                {/* <div className="absolute w-12 h-20 bg-greenLight right-4"></div> */}
                            </button>
                            <div className="flex justify-center items-center text-lightBlue hover:text-blue-600 font-extrabold transition-all trasition-duration-200">
                                <a href="#">Know more</a>
                                <ChevronIcon />
                            </div>
                        </div>
                    </div>
                    <img className="absolute right-0 top-0 hidden md:block lg:block md:max-w-[400px] lg:max-w-[600px]" src={bussiness_banking} alt="" />

                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-14">
                    {/* card - 1  */}
                    <div className="w-full min-h-[15rem] relative cursor-pointer">

                        <img
                            className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8] trasition-all duration-200"
                            src={current_icon} alt="" />
                        <svg
                            viewBox="0 0 349.32501220703125 225"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            className="stroke-1 stroke-[#f9fafc] h-full w-full absolute z-[9] transition-all duration-200"
                            style={{ strokeOpacity: 0.15 }}
                        >
                            <path
                                d="m 0 6 
                                        a 6 6 0 0 1 6 -6 
                                        h 250.32501220703125 
                                        a 16 16 0 0 1 11 5 
                                        l 77 77 
                                        a 16 16 0 0 1 5 11 
                                        v 126 
                                        a 6 6 0 0 1 -6 6 
                                        h -337.32501220703125 
                                        a 6 6 0 0 1 -6 -6 
                                        z"
                                fill="#181c2e"
                            ></path>
                        </svg>

                        <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-6 py-6 pr-8">
                            <div>
                                <h3 className="font-mullish font-bold text-white leading-[1.2] text-[1.375rem]">Current Account
                                </h3>
                                <p className="font-mullish text-grayText mt-6">Current accounts for fast-growing businesses, supported by the best-in-class technology

                                </p>
                            </div>

                            <div className="flex text-blue-500 hover:text-blue-600 gap-1 py-4 font-extrabold transition-all trasition-duration-200">
                                <a href="#">Know more</a>
                                <ChevronIcon />

                            </div>
                        </div>

                    </div>
                    {/* card - 2 */}
                    <div className="w-full min-h-[15rem] relative cursor-pointer">

                        <img
                            className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8] trasition-all duration-200"
                            src={capital_credit} alt="" />
                        <svg
                            viewBox="0 0 349.32501220703125 225"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            className="stroke-1 stroke-[#f9fafc] h-full w-full absolute z-[9] transition-all duration-200"
                            style={{ strokeOpacity: 0.15 }}
                        >
                            <path
                                d="m 0 6 
                                        a 6 6 0 0 1 6 -6 
                                        h 250.32501220703125 
                                        a 16 16 0 0 1 11 5 
                                        l 77 77 
                                        a 16 16 0 0 1 5 11 
                                        v 126 
                                        a 6 6 0 0 1 -6 6 
                                        h -337.32501220703125 
                                        a 6 6 0 0 1 -6 -6 
                                        z"
                                fill="#181c2e"
                            ></path>
                        </svg>

                        <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-6 py-6 pr-8">
                            <div>
                                <h3 className="font-mullish font-bold text-white leading-[1.2] text-[1.375rem]">Capital & Credit
                                </h3>
                                <p className="font-mullish text-grayText mt-6">Instant additional cash and corporate cards designed for growing businesses

                                </p>
                            </div>

                            <div className="flex text-blue-500 hover:text-blue-600 gap-1 py-4 font-extrabold transition-all trasition-duration-200">
                                <a href="#">Know more</a>
                                <ChevronIcon />

                            </div>
                        </div>

                    </div>
                    {/* card - 3 */}

                    <div className="w-full min-h-[15rem] relative cursor-pointer">

                        <img
                            className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8] trasition-all duration-200"
                            src={payouts_icon} alt="" />
                        <svg
                            viewBox="0 0 349.32501220703125 225"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            className="stroke-1 stroke-[#f9fafc] h-full w-full absolute z-[9] transition-all duration-200"
                            style={{ strokeOpacity: 0.15 }}
                        >
                            <path
                                d="m 0 6 
                                        a 6 6 0 0 1 6 -6 
                                        h 250.32501220703125 
                                        a 16 16 0 0 1 11 5 
                                        l 77 77 
                                        a 16 16 0 0 1 5 11 
                                        v 126 
                                        a 6 6 0 0 1 -6 6 
                                        h -337.32501220703125 
                                        a 6 6 0 0 1 -6 -6 
                                        z"
                                fill="#181c2e"
                            ></path>
                        </svg>

                        <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-6 py-6 pr-8">
                            <div>
                                <h3 className="font-mullish font-bold text-white leading-[1.2] text-[1.375rem]">Payouts</h3>
                                <p className="font-mullish text-grayText mt-6">Make simple, reliable & secure payouts to bank accounts, UPI IDs or wallets

                                </p>
                            </div>

                            <div className="flex text-blue-500 hover:text-blue-600 gap-1 py-4 font-extrabold transition-all trasition-duration-200">
                                <a href="#">Know more</a>
                                <ChevronIcon />

                            </div>
                        </div>

                    </div>
                </div>
                <div className="w-full h-32 hidden md:flex flex-col md:flex-row justify-center items-center border border-gray-700 rounded px-10 space-y-2 gap-4">
                    <h3 className="text-gray-300 space-x-2">
                        <span className="text-lg font-medium">Check out the live demo to learn how RazorpayX works.</span>
                        <span className="text-lg font-extrabold">No sign-up required!</span>
                    </h3>
                    <button className="text-white font-bold py-3 px-7 rounded bg-blue-500 hover:bg-blue-600 transition-all trasition-duration-200">
                        Check out the demo
                    </button>
                </div>
            </div>
        </div>
    </div>
}