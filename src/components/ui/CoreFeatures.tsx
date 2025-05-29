// import core_features from "../../assets/images/core-features-sectionBg.svg";
import instant_activation from "../../assets/images/instant-activation-icon.svg";
import easy_integration from "../../assets/images/easy-integration.svg";
import api_driven from "../../assets/images/api-driven-icon.svg";
import payment_modes from "../../assets/images/payment-modes.svg";
import dashboard_reporting_icon from "../../assets/images/dashboard-reporting-icon.svg";
import secure_icon from "../../assets/images/secure-icon.svg";
export const CoreFeatures = () => {
    return <div className="bg-[url(./assets/images/core-features-sectionBg.svg)] w-full bg-cover bg-no-repeat"        
    >
        <div className="md:mt-40">
            <div className="w-10/12 max-w-[1080px] mx-auto py-48">
                <div className="flex flex-col justify-center items-center gap-y-4">
                    <h1 className="text-2xl font-mullish font-bold text-white">Features</h1>
                    <div className="h-1 w-8 bg-greenLight"></div>
                    <p className="font-mullish text-white">Empower your business with all the right tools to accept <br /> online payments and provide the best customer experience</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 my-10">
                    {/* box - 1 */}
                    <div className="text-white">
                        <img src={instant_activation} alt="" />
                        <h2 className="py-4 font-mullish font-bold text-lg">Instant Activation</h2>
                        <p className="font-mullish text-gray-300 text-[16px]">Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation.</p>
                    </div>
                    {/* box - 2 */}
                    <div className="text-white">
                        <img src={easy_integration} alt="" />
                        <h2 className="py-4 font-mullish font-bold text-lg">Easy Integration
                        </h2>
                        <p className="font-mullish text-gray-300 text-[16px]">With plugins for all major platforms and languages, integrate and go live with Razorpay in less than an hour.</p>
                    </div>
                    {/* box - 3 */}
                    <div className="text-white">
                        <img src={api_driven} alt="" />
                        <h2 className="py-4 font-mullish font-bold text-lg">Instant Activation</h2>
                        <p className="font-mullish text-gray-300 text-[16px]">Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation.</p>
                    </div>
                    {/* box - 4 */}
                    <div className="text-white">
                        <img src={payment_modes} alt="" />
                        <h2 className="py-4 font-mullish font-bold text-lg">100+ payment modes
                        </h2>
                        <p className="font-mullish text-gray-300 text-[16px]">Offer your customers the luxury of all payment modes including Credit/Debit cards, Netbanking, UPI, Wallets etc.</p>
                    </div>
                    {/* box - 5 */}
                    <div className="text-white">
                        <img src="src/assets/images/simple-pricing.svg" alt="" />
                        <h2 className="py-4 font-mullish font-bold text-lg">Simple Pricing</h2>
                        <p className="font-mullish text-gray-300 text-[16px]">Our innovative payment solutions with competitive pricing make payments simpler.</p>
                    </div>
                    {/* box - 6 */}
                    <div className="text-white">
                        <img src="src/assets/images/industry-support-icon.svg" alt="" />
                        <h2 className="py-4 font-mullish font-bold text-lg">Best in Industry Support</h2>
                        <p className="font-mullish text-gray-300 text-[16px]">Always available email, phone and chat based support to help you in your every step.</p>
                    </div>
                    {/* box - 7 */}
                    <div className="text-white">
                        <img src={dashboard_reporting_icon} alt="" />
                        <h2 className="py-4 font-mullish font-bold text-lg">Dashboard Reporting
                        </h2>
                        <p className="font-mullish text-gray-300 text-[16px]">Real-time data and insights on your Razorpay Dashboard to make informed business decisions.

                        </p>
                    </div>
                    {/* box - 8 */}
                    <div className="text-white">
                        <img src={secure_icon} alt="" />
                        <h2 className="py-4 font-mullish font-bold text-lg">Secure</h2>
                        <p className="font-mullish text-gray-300 text-[16px]">PCI DSS Level 1 compliant solution which removes your burden of regulatory compliance.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}