import { ChevronIcon } from "../../icons/Chevroncon"
import payment_link_icon  from "../../assets/images/payment-link-icon.svg"
import payment_page_icon  from "../../assets/images/payment-pages-icon.svg"
import subscription_icon from "../../assets/images/subscriptions-icon.svg";
import payment_button_icon from "../../assets/images/payment-buttons-icon.svg";
import route_icon from "../../assets/images/route-icon.svg";
import smart_collect_icon from "../../assets/images/smart-collect-icon.svg";





export const CardSection = () => {
    return <div className="w-10/12 max-w-[1080px] mx-auto  grid md:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* card - 1  */}
        <div className="w-full min-h-[15rem] relative cursor-pointer">

            <img
                className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8] trasition-all duration-200"
                src={payment_link_icon} alt="" />
            <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
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
                    fill="#fff"
                ></path>
            </svg>

            <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-6 py-6 pr-8">
                <div>
                    <h3 className="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">Payment Links</h3>
                    <p className="font-mullish text-grayText mt-2">Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately</p>
                </div>

                <div className="overflow-y-hidden flex justify-center items-center text-blue-500 hover:text-black gap-1 py-4 px-7 font-extrabold transition-all trasition-duration-200">
                    <a href="#">Know more</a>
                    <ChevronIcon />

                </div>
            </div>

        </div>

        {/* card - 1  */}
        <div className="w-full min-h-[15rem] relative cursor-pointer">

            <img
                className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8] trasition-all duration-200"
                src={payment_page_icon} alt="" />
            <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
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
                    fill="#fff"
                ></path>
            </svg>

            <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-6 py-6 pr-8 overflow-y-hidden">
                <div className="h-full">
                    <h3 className="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">Payment Pages
                    </h3>
                    <p className="font-mullish text-grayText mt-2 overflow-y-hidden">Take your store online instantly with zero coding. Accept international & domestic payments

                    </p>
                </div>

                <div className="overflow-y-hidden flex justify-center items-center text-blue-500 hover:text-black gap-1 py-4 px-7 font-extrabold transition-all trasition-duration-200">
                    <a href="#">Know more</a>
                    <ChevronIcon />

                </div>
            </div>

        </div>

        {/* card - 1  */}
        <div className="w-full min-h-[15rem] relative cursor-pointer">

            <img
                className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8] trasition-all duration-200"
                src={payment_button_icon} alt="" />
            <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
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
                    fill="#fff"
                ></path>
            </svg>

            <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-6 py-6 pr-8">
                <div className="h-full">
                    <h3 className="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem] overflow-y-hidden">Payment Buttons
                    </h3>
                    <p className="font-mullish text-grayText mt-2 overflow-y-hidden">Create, Copy & Collect With Payment Button. Collect one time or subscription payments & more

                    </p>
                </div>

                <div className="overflow-y-hidden flex justify-center items-center text-blue-500 hover:text-black gap-1 py-4 px-7 font-extrabold transition-all trasition-duration-200">
                    <a href="#">Know more</a>
                    <ChevronIcon />

                </div>
            </div>

        </div>

        {/* card - 1  */}
        <div className="w-full min-h-[15rem] relative cursor-pointer">

            <img
                className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8] trasition-all duration-200"
                src={subscription_icon} alt="" />
            <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
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
                    fill="#fff"
                ></path>
            </svg>

            <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-6 py-6 pr-8">
                <div className="h-full">
                    <h3 className="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem] overflow-y-hidden">Subscriptions</h3>
                    <p className="font-mullish text-grayText mt-2 overflow-y-hidden">Subscription plans with automated recurring transactions on various payment modes.

                    </p>
                </div>

                <div className="overflow-y-hidden flex justify-center items-center text-blue-500 hover:text-black gap-1 py-4 px-7 font-extrabold transition-all trasition-duration-200">
                    <a href="#">Know more</a>
                    <ChevronIcon />

                </div>
            </div>

        </div>

        {/* card - 1  */}
        <div className="w-full min-h-[15rem] relative cursor-pointer">

            <img
                className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8] trasition-all duration-200"
                src={route_icon} alt="" />
            <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
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
                    fill="#fff"
                ></path>
            </svg>

            <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-6 py-6 pr-8">
                <div className="h-full">
                    <h3 className="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem] overflow-y-hidden">Route</h3>
                    <p className="font-mullish text-grayText mt-2 overflow-y-hidden">Split incoming payments auto- matically to vendor’s accounts, manage marketplace money flow...

                    </p>
                </div>

                <div className="overflow-y-hidden flex justify-center items-center text-blue-500 hover:text-black gap-1 py-4 px-7 font-extrabold transition-all trasition-duration-200">
                    <a href="#">Know more</a>
                    <ChevronIcon />

                </div>
            </div>

        </div>

        {/* card - 1  */}
        <div className="w-full min-h-[15rem] relative cursor-pointer">

            <img
                className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8] trasition-all duration-200"
                src={smart_collect_icon} alt="" />
            <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
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
                    fill="#fff"
                ></path>
            </svg>

            <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-6 py-6 pr-8">
                <div className="h-full">
                    <h3 className="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem] overflow-y-hidden">Smart Collect
                    </h3>
                    <p className="font-mullish text-grayText mt-2 overflow-y-hidden">Automatically reconcile incoming NEFT, RTGS, IMPS, UPI payments using Virtual Accounts & UPI-IDs

</p>
                </div>

                <div className="overflow-y-hidden flex justify-center items-center text-blue-500 hover:text-black gap-1 py-4 px-7 font-extrabold transition-all trasition-duration-200">
                    <a href="#">Know more</a>
                    <ChevronIcon />

                </div>
            </div>

        </div>
    </div>
}


// ok