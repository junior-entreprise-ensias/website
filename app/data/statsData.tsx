import { StatItem } from "../types/stats";
import { FaCheck, FaSmile, FaUserFriends } from "react-icons/fa";

export const statsData: StatItem[] = [
  {
    icon: <FaUserFriends className="text-4xl text-cinnabar-500" />,
    value: 5,
    suffix: "+",
    heading: "Years of experience",
    subheading:
      "We have been delivering innovative solutions to clients for over 5 years.",
  },
  {
    icon: <FaCheck className="text-4xl text-cinnabar-500" />,
    value: 90,
    suffix: "k",
    heading: "Project completed",
    subheading:
      "Successfully delivered a wide range of innovative solutions across multiple industries.",
  },
  {
    icon: <FaSmile className="text-4xl text-cinnabar-500" />,
    value: 100,
    suffix: "%",
    heading: "Client satisfaction",
    subheading:
      "We pride ourselves on building lasting relationships and delivering beyond expectations.",
  },
  {
    icon: <FaUserFriends className="text-4xl text-cinnabar-500" />,
    value: 20,
    suffix: "+",
    heading: "Team members",
    subheading:
      "Our team of experts is dedicated to delivering innovative solutions to clients.",
  },
];
