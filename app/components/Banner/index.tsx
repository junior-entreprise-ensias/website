import Link from "next/link";
import BlurFade from "@/app/magicui/ui/blur-fade";
import GradualSpacing from "@/app/magicui/ui/gradual-spacing";


const Banner = () => {
  return (
    <div className="px-6 lg:px-8 banner-image">
      <div className="mx-auto min-h-[100vh] flex flex-col justify-center items-center"> 
        <div className="text-center">
          <GradualSpacing
            className="text-2xl lg:text-4xl drop-shadow-lg text-white font-semibold sm:text-5xl lg:text-7xl md:4px lh-96"
            text="Empowering Innovation,"
          />
          <GradualSpacing
            className="text-2xl lg:text-4xl drop-shadow-lg text-white font-semibold sm:text-5xl lg:text-7xl md:4px lh-96"
            text="Shaping Tomorrow"
          />
        </div>
        <div className="text-center mt-5">
          <BlurFade>
            <p className="text-md leading-8 text-white drop-shadow-lg font-medium text-black text-opacity-90">
              At ENSIAS Junior Entreprise, we harness the talent and creativity
              of tomorrow’s leaders
            </p>
            <p className="text-md leading-8 text-white drop-shadow-lg font-medium text-black text-opacity-90">
              to deliver cutting-edge solutions.
            </p>
          </BlurFade>
        </div>
        <div className="text-center mt-10">
          <BlurFade>
            <Link
              href="#projects"
              type="button"
              className="text-15px text-white font-medium bg-cinnabar-600 py-5 px-9 mt-2 leafbutton"
            >
              See our portfolio
            </Link>
            <Link
              href="#about"
              type="button"
              className="text-15px text-cinnabar-600 font-medium bg-white ml-0 sm:ml-4 mt-2 py-5 px-16 leafbutton-reverse"
            >
              More info
            </Link>
          </BlurFade>
        </div>
      </div>
    </div>
  );
};

export default Banner;
