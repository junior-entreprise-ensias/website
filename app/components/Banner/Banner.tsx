import Link from "next/link";

const Banner = () => {
  return (
    <main>
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">
          <div className="text-center">
            <h1 className="text-4xl font-semibold sm:text-5xl lg:text-7xl md:4px lh-96">
              Empowering Innovation,
              <br />
              Shaping Tomorrow
            </h1>
            <p className="mt-6 text-lg leading-8 text-black text-opacity-50">
              At ENSIAS Junior Entreprise, we harness the talent and creativity
              of tomorrow’s leaders <br /> to deliver cutting-edge solutions.
            </p>
          </div>
          <div className="text-center mt-5">
            <Link
              href="/projects"
              type="button"
              className="text-15px text-white font-medium bg-cinnabar-600 py-5 px-9 mt-2 leafbutton"
            >
              See our portfolio
            </Link>
            <Link
              href="/about"
              type="button"
              className="text-15px ml-4 mt-2 text-cinnabar-600 transition duration-150 ease-in-out hover:text-white hover:bg-cinnabar-600 font-medium py-5 px-16 border border-lightgrey leafbutton"
            >
              More info
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
