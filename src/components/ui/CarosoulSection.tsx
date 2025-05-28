export const Carousoul = () => {
    return <div>
        <div className="w-10/12 mx-auto h-auto relative my-10">
            {/* <img className="absolute" src="src/assets/images/feature-section1-dottedrows.png" alt="" /> */}
            <div>
                <h1 className="text-blue-950 text-2xl mt-20 font-mullish font-bold text-center">An Experience <br />
                    People Love to Talk About</h1>
                <div className="h-1 w-8 bg-greenLight mx-auto my-4"></div>
            </div>
            <div className="relative">
                <div className="border rounded-full p-4 bg-gray-100 absolute left-0 top-52">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 hover:scale-110 transition-all duration-200 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>

                </div>
                <div className="border rounded-full p-4 bg-gray-100 absolute right-0 top-52">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 hover:scale-110 transition-all duration-200 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                </div>
                <div className="w-[80%] mx-auto h-auto flex mt-20 mb-12 rounded">
                    <img className="max-w-[350px] max-h-[400px] rounded-lg" src="src/assets/images/testimonial.jpg" alt="" />
                    <div className="w-3/5 ml-48">
                        <img className="h-12 w-12 ml-10" src="src/assets/images/quotes.svg" alt="" />
                        <h1 className="text-blue-950 text-3xl font-thin py-4 leading-normal">Readymade Closed Wallet <br /> Solution For Quick Refunds</h1>
                        <a href="">Learn More</a>
                        <h2 className="text-xl font-mullish font-bold">Lorem Ipsum</h2>
                        <p className="font-mullish py-2">CEO, XYZ Engineering Company</p>
                        <img className="h-12 w-16" src="src/assets/images/fake-company-logo.png" alt="" />
                    </div>                    
                </div>
                <div className="flex gap-x-2 justify-center items-center">
                        <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                        <div className="h-3 w-3 rounded-full bg-blue-700"></div>
                        <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                        <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                        <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                        <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                    </div>
            </div>
        </div>
    </div>
}