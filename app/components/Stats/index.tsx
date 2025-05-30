import BlurFade from "@/app/magicui/ui/blur-fade";
import NumberTicker from "@/app/magicui/ui/number-ticker";
import { statsData } from "@/app/data/statsData";

const stats = statsData;

const Stats = () => {
  return (
    <div className="mx-auto max-w-7xl py-16 px-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5">
        {stats.map((items, i) => (
          <BlurFade key={i} inView={true}>
            <div className="flex flex-col justify-center items-center" key={i}>
              <div className="flex justify-center border border-border  p-2 w-10 rounded-lg">
                {items.icon}
              </div>
              <h2 className="text-4xl lg:text-6xl text-black font-semibold text-center mt-5">
                {items.prefix}
                <NumberTicker value={items.value} />
                {items.suffix}
              </h2>
              <h3 className="text-2xl text-black font-semibold text-center lg:mt-6">
                {items.heading}
              </h3>
              <p className="text-lg font-normal text-black text-center text-opacity-90 mt-2">
                {items.subheading}
              </p>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
};

export default Stats;
