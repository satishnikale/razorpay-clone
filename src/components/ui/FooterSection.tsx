import { RightIcon } from "../../icons/RightIcon";

export const Footer = () => {
  return (
    <div className="bg-blue-50">
      <div className="w-[1080px] mx-auto h-auto overflow-x-hidden-hidden">
        <div className="flex my-10">
          {/* left section  */}
          <div className="w-3/12">
            <img
              className="w-28"
              src="./src/assets/images/logo-dark.svg"
              alt=""
            />
            <p className="font-mullish text-sm text-grayText mb-6 mt-4">
              Razorpay is the only payments solution in India that allows
              businesses to accept, process and disburse payments with its
              product suite. It gives you access to all payment modes including
              credit card, debit card, netbanking, UPI and popular wallets
              including JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money
              and PayZapp.
            </p>
            <p className="font-mullish text-sm text-grayText my-6">
              RazorpayX supercharges your business banking experience, bringing
              effectiveness, efficiency, and excellence to all financial
              processes. With RazorpayX, businesses can get access to
              fully-functional current accounts, supercharge their payouts and
              automate payroll compliance.
            </p>
            <p className="font-mullish text-sm text-grayText my-6">
              Manage your marketplace, automate bank transfers, collect
              recurring payments, share invoices with customers and avail
              working capital loans - all from a single platform. Fast forward
              your business with Razorpay.
            </p>
            <p className="font-mullish text-[12px] text-grayText my-6">
              Disclaimer: The RazorpayX powered Current Account and VISA
              corporate credit card are provided by RBI licensed banks. Your
              RazorpayX powered account is provided by our partner bank, in
              accordance with RBI regulations. RazorpayX itself is not a bank
              and doesn't hold or claim to hold a banking license.
            </p>
            <h2 className="text-[20px] font-mullish uppercase text-blue-950 leading-6">
              Subscribe to our newsletter
            </h2>

            {/* butotn  */}
            <div className="h-10 my-6 w-full flex">
            <input className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-blue-600" id="username" type="text" placeholder="Your Email"
            
            />
            {/* <button className="flex justify-center items-center gap-1 text-lightBlue font-mullish font-bold text-sm">
                Subscribe
                <RightIcon />
            </button>  */}

            </div>

            <div className="flex justify-between items-center">
              <img
                className="w-32"
                src="src/assets/images/footer-certificate-1.png"
                alt=""
              />
              <img
                className=""
                src="src/assets/images/footer-certificate-2.jpg"
                alt=""
              />
            </div>
          </div>
          {/* right section  */}
          <div className="w-9/12 flex justify-between ml-32">
            <div className="flex flex-col gap-y-2">
              {/* link - 1  */}
              <h2 className="text-gray-500 font-mullish font-bold">
                BANKING PLUS
              </h2>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                RazorPayX
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Current Accounts
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Payouts
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Payout Links
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Coorporate Credit Card
              </a>
              <a
                className="h-auto w-auto flex gap-1 overflow-y-hidden font-mullish  text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                View Live Demo
                <div className="h-6 w-10 flex justify-center items-center text-[14px] font-mullish rounded-sm text-white bg-green-400">
                  NEW
                </div>
              </a>
              {/* link - 2  */}
              <h2 className="text-gray-500 mt-4 font-mullish font-bold">
                LENDINGS
              </h2>
              <a
                className="font-mullish  text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                RazorPayX
              </a>
              <a
                className="font-mullish  text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Current Accounts
              </a>
              <a
                className="font-mullish  text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Payouts
              </a>
              <a
                className="h-auto w-auto flex gap-1 overflow-y-hidden font-mullish  text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                View Live Demo
              </a>
              {/* link - 3  */}
              <h2 className="text-gray-500 font-mullish font-bold">
                RISK & FRAUD
              </h2>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Thirdwatch
              </a>
              <a
                className="h-auto w-auto flex gap-1 overflow-y-hidden font-mullish  text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                PrePay CoD
                <div className="h-6 w-10 flex justify-center items-center text-[14px] font-mullish rounded-sm text-white bg-green-400">
                  NEW
                </div>
              </a>
              {/* link - 3 */}
              <h2 className="text-gray-500 font-mullish font-bold">
                BECOME A PARTNER
              </h2>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                RazorPayX
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Current Accounts
              </a>
              {/* LINK - 4 */}

              <h2 className="text-gray-500 font-mullish font-bold">MORE</h2>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Route
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Invoices
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Freelancer Payments
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                International
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Flash Checkouts
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                RazorPayX
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                UPI
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                ePOS
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                CheckOut Demo
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                RazorPayX Payroll
              </a>
            </div>
            <div className="flex flex-col gap-y-2">
              {/* link - 1  */}
              <h2 className="text-gray-500 font-mullish font-bold">
                ACCEPT PAYMENTS
              </h2>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Payment Gateway
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Payment Pages
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Payment Links
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                QR Codes
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Subscriptions
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Smart Collect
              </a>{" "}
              {/* link - 2  */}
              <h2 className="text-gray-500 mt-4 font-mullish font-bold">
                DEVELOPERS
              </h2>
              <a
                className="font-mullish  text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Docs
              </a>
              <a
                className="font-mullish  text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Integrations
              </a>
              <a
                className="font-mullish  text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                API References
              </a>{" "}
              {/* link - 3  */}
              <h2 className="text-gray-500 font-mullish font-bold">
                RESOURCES
              </h2>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Blogs
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Events
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Chargeback Guide
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Settlement Guide
              </a>
              {/* link - 3 */}
              <h2 className="text-gray-500 font-mullish font-bold">
                SOLUTIONS
              </h2>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Education
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                E-commerce
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Saas
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                BFSI
              </a>
              {/* LINK - 4 */}
              <h2 className="text-gray-500 font-mullish font-bold">
                FREE TOOLS
              </h2>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                GST Calculator
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Online TDS Payments
              </a>
              <a
                className="h-auto w-auto flex gap-1 overflow-y-hidden font-mullish  text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                GST Number Search
                <div className="h-6 w-10 flex justify-center items-center text-[14px] font-mullish rounded-sm text-white bg-green-400">
                  NEW
                </div>
              </a>
            </div>
            <div className="flex flex-col gap-y-2">
              {/* link - 1  */}
              <h2 className="text-gray-500 font-mullish font-bold">COMPANY</h2>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                About Us
              </a>
              <a
                className="h-auto w-auto flex gap-1 overflow-y-hidden font-mullish  text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Careers
                <div className="h-6 w-20 overflow-y-hidden flex justify-center items-center text-[12px] font-mullish rounded-sm text-white bg-green-400">
                  We Are Hiring
                </div>
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Terms of Use
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Grievance Redressal
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Partners
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                White Papers
              </a>
              <a
                className="font-mullish text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Corporate Information
              </a>
              {/* link - 2  */}
              <h2 className="text-gray-500 mt-4 font-mullish font-bold">
                HELP & SUPPORT
              </h2>
              <a
                className="font-mullish  text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Support
              </a>
              <a
                className="font-mullish  text-lightBlue hover:text-black transition-all duration-200"
                href="#"
              >
                Knowledge base
              </a>

              <div>
                <h2 className="text-gray-500 font-mullish font-bold">
                  FIND US ONLINE
                </h2>
                <div className="flex gap-4 my-4">
                  <img src="src/assets/images/facebook-icon.svg" alt="" />
                  <img src="src/assets/images/twitter-icon.svg" alt="" />
                  <img src="src/assets/images/instagram-icon.svg" alt="" />
                  <img src="src/assets/images/github-icon.svg" alt="" />
                  <img
                    className="w-6"
                    src="src/assets/images/linkedin-icon.svg"
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="py-4">REGD. OFFICE ADDRESS</h2>
                  <p className="text-sm w-full py-2 font-mullish leading-5">
                    Razorpay Software Private Limited, <br />
                    1st Floor, SJR Cyber, <br />
                    22 Laskar Hosur Road, Adugodi, <br />
                    Bengaluru, 560030, <br />
                    Karnataka, India <br />
                    CIN: U72200KA2013PTC097389
                  </p>
                  <p className="text-sm py-2 font-mullish leading-5">© Razorpay 2022 <br /> All Rights Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
