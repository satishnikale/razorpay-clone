import hero_illustration from "../../assets/images/hero-illustration.jpg";
import hero_shape from "../../assets/images/hero-shape.svg";

export const HeroSection = () => {
  return (
    <div>
      <div className="relative bg-deepBlue pt-10">
        <div className="w-10/12 max-w-[1080px] flex flex-col lg:flex-row justify-between items-center mx-auto">
          <div className="space-y-8">
            <h1 className="text-white text-4xl font-bold tracking-tight overflow-y-hidden">
              Power Your Finance, <br />
              Grow Yor Bussiness
            </h1>
            <div className="h-1 w-8 bg-green-400 my-8"></div>
            <p className="text-white font-medium text-wrap text-xl/8 opacity-60">
              Accept payments from customers. Automate payouts to vendors &
              employees. Never run out of working capital.
            </p>
            <button className="h-12 w-32 cursor-pointer  bg-blue-500 hover:bg-blue-600 transition-all trasition-duration-200 font-semibold text-white rounded-md my-10">
              Sign up now
            </button>
          </div>
          <div className="">
            <img
              className="max-w-full"
              src={hero_illustration}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-[101%] left-0 right-0">
        <img
          className="w-full object-fill"
          src={hero_shape}
          alt="hero-shape"
        />
      </div>
    </div>
  );
};
