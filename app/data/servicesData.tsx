import { FaLaptop, FaChartLine, FaRobot, FaShieldAlt } from "react-icons/fa";
import { ServiceItem } from "../types/services";

export const servicesData: ServiceItem[] = [
  {
    icon: <FaLaptop className="text-4xl text-cinnabar-500" />,
    country: "Web & Mobile Development",
    paragraph: "Our team of developers is ready to bring your ideas to life.",
  },
  {
    icon: <FaChartLine className="text-4xl text-cinnabar-500" />,
    country: "Data Analysis",
    paragraph:
      "We provide data-driven insights to help you make informed decisions.",
  },
  {
    icon: <FaRobot className="text-4xl text-cinnabar-500" />,
    country: "AI & Machine Learning",
    paragraph: "Leverage the power of AI to optimize your business processes.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-cinnabar-500" />,
    country: "Cybersecurity",
    paragraph:
      "Protect your data and secure your business with our cybersecurity solutions.",
  },
];
