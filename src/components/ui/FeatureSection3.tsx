import { ChevronIcon } from "../../icons/Chevroncon";
import dotted_arrow from "../../assets/images/feature-section1-dottedrows.png";
import razorpayXicon from "../../assets/images/razorpayXicon.svg";
import autopay_icon  from "../../assets/images/autopay-icon.svg";
import magic_checkout from "../../assets/images/magic-checkout.svg";
import payment_button from "../../assets/images/payment-button.svg";
import instant_settlement_icon from "../../assets/images/instant-settlement-icon.svg"


export const FeatureSection3 = () => {
    return <div className="w-10/12 max-w-[1080px] h-auto mx-auto relative">

            <img className="absolute left-64 -top-10" src={dotted_arrow} alt="" />
            <img className="absolute right-0" src={dotted_arrow} alt="" />

        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4  relative z-10">
            {/* text-box*/}
                <div className="ml-8">
                    <div className="h-auto w-full text-deepBlue font-mullish text-4xl font-extrabold leading-10 py-14">
                        New in the <br />
                        <span className="text-lightBlue500 my-2">Razorpay</span> <br />
                        Product Suite
                    </div>
                </div>
            {/* main box - 1 */}
                <div className="p-8 bg-[url(src/assets/images/instant-settlement-bg.svg)] w-full max-h-[500px] bg-no-repeat cursor-pointer shadow-md
                                hover:scale-105 hover:bg-[url(src/assets/images/instant-settlement-bghover.svg)] transition-all duration-400">
                    <div className="">
                        <img className="w-10 h-10" src={razorpayXicon} alt="" />
                        <div className="">
                            <h3 className="font-mullish text-lg font-bold pt-4">Corporate Cards</h3>
                            <p className="w-full font-mullish leading-normal py-3  text-gray-500">Simplify your recurring, international and team expenses with savings on every spend. Save upto 10 lacs every month.</p>
                            <button
                                className="flex flex-row justify-center items-center cursor-pointer group"
                            >
                                <a 
                                className="flex justify-center items-center font-mullish text-bold text-lightBlue500 group-hover:text-lightBlue"
                                href="#">Know More
                                <ChevronIcon />
                                </a>
                                
                            </button>
                        </div>
                    </div>
                </div>
            {/* main box - 1 */}
            <div className="shadow p-8 bg-[url(src/assets/images/instant-settlement-bg.svg)] w-full max-h-[500px] bg-no-repeat cursor-pointer
                                hover:scale-105 hover:bg-[url(src/assets/images/instant-settlement-bghover.svg)] transition-all duration-400">
                    <div className="">
                    <img className="w-10 h-10 bg-lightBlue300 rounded-full" src={autopay_icon} alt="" />
                        <div className="">
                            <h3 className="font-mullish text-lg font-bold pt-4">UPI AutoPay</h3>
                            <p className="w-full font-mullish leading-normal py-3  text-gray-500">Allow customers to set up recurring payments using UPI Apps.</p>
                            <button
                                className="flex flex-row justify-center items-center cursor-pointer group"
                            >
                                <a 
                                className="flex justify-center items-center font-mullish text-bold text-lightBlue500 group-hover:text-lightBlue"
                                href="#">Know More
                                <ChevronIcon />
                                </a>
                                
                            </button>
                        </div>
                    </div>
                </div>
                {/* main box - 1 */}
            <div className="shadow p-8 bg-[url(src/assets/images/instant-settlement-bg.svg)] w-full max-h-[500px] bg-no-repeat cursor-pointer
                            mb-10    hover:scale-105 hover:bg-[url(src/assets/images/instant-settlement-bghover.svg)] transition-all duration-400">
                    <div className="overflow-y-hidden">
                    <img className="w-10 h-10" src={magic_checkout} alt="" />
                        <div className="">
                            <h3 className="font-mullish text-lg font-bold pt-4">Magic Checkout</h3>
                            <p className="w-full font-mullish leading-normal py-3  text-gray-500">Improve your order conversion rates & reduce return-to-origins. Boost your business by 20%</p>
                            <button
                                className="flex flex-row justify-center items-center cursor-pointer group"
                            >
                                <a 
                                className="flex justify-center items-center font-mullish text-bold text-lightBlue500 group-hover:text-lightBlue"
                                href="#">Know More
                                <ChevronIcon />
                                </a>
                                
                            </button>
                        </div>
                    </div>
                </div>
                {/* main box - 1 */}
            <div className="shadow p-8 bg-[url(src/assets/images/instant-settlement-bg.svg)] w-full max-h-[500px] bg-no-repeat cursor-pointer
                            mb-10 hover:scale-105 hover:bg-[url(src/assets/images/instant-settlement-bghover.svg)] transition-all duration-400">
                    <div className="overflow-y-hidden">
                        <img className="w-10 h-10" src={payment_button} alt="" />
                        <div className="">
                            <h3 className="font-mullish text-lg font-bold pt-4">Payment Button</h3>
                            <p className="w-full font-mullish leading-normal py-3  text-gray-500">Accept payments on your website, in less than 5 minutes. No developer needed.</p>
                            <button
                                className="flex flex-row justify-center items-center cursor-pointer group"
                            >
                                <a 
                                className="flex justify-center items-center font-mullish text-bold text-lightBlue500 group-hover:text-lightBlue"
                                href="#">Know More
                                <ChevronIcon />
                                </a>
                                
                            </button>
                        </div>
                    </div>
                </div>
                {/* main box - 1 */}
            <div className="shadow p-8 bg-[url(src/assets/images/instant-settlement-bg.svg)] w-full max-h-[500px] bg-no-repeat cursor-pointer
                            mb-10 hover:scale-105 hover:bg-[url(src/assets/images/instant-settlement-bghover.svg)] transition-all duration-400">
                    <div className="overflow-y-hidden">
                        <img className="w-10 h-10" src={instant_settlement_icon} alt="" />
                        <div className="">
                            <h3 className="font-mullish text-lg font-bold pt-4">Payment Button</h3>
                            <p className="w-full font-mullish leading-normal py-3  text-gray-500">Accept payments on your website, in less than 5 minutes. No developer needed.</p>
                            <button
                                className="flex flex-row justify-center items-center cursor-pointer group"
                            >
                                <a 
                                className="flex justify-center items-center font-mullish text-bold text-lightBlue500 group-hover:text-lightBlue"
                                href="#">Know More
                                <ChevronIcon />
                                </a>
                                
                            </button>
                        </div>
                    </div>
                </div>

        </div>
    </div>
}


// ok