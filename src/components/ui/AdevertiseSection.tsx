export const AddSection = () => {
    return (
        <div className="h-auto w-screen bg-blue-50 mb-10">
            <div className="w-10/12 max-w-[1080px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-col my-10 w-3/5">
                        <h1 className="font-mullish font-bold text-2xl mt-8 mb-4">
                            Join the 50,00,000+ businesses using Razorpay
                        </h1>
                        <div className="h-1 w-8 bg-greenLight mb-8"></div>
                        <p className="font-mullish">
                            We make it easier for you to focus on building great products while
                            we work <br /> on simplifying your payments. Become one of us by
                            joining thousands of our <br /> happy users and simplify the online
                            payment experience for your customers.
                        </p>
                        <p className="my-8 font-mullish">
                            Focus on your business while we handle the complexities of payments
                            for you.
                        </p>
                    </div>
                    <div className="relative w-3/5 h-[300px] overflow-y-hidden">
                        {/* <div style={{background: linear-gradient(180deg, #f4f8ff, #fff0)}} 
                            className="absolute w-full h-[150px] top-0">
                            </div> */}
                        <img
                            className="absolute companiesList"
                            src="src/assets/images/comanies.png"
                            alt=""
                        />
                        {/* <div></div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};
