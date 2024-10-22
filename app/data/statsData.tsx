import { StatItem } from "../types/stats";
import { FaCheck, FaSmile, FaUserFriends } from "react-icons/fa";

export const statsData: StatItem[] = [
  {
    icon: <FaUserFriends className="text-4xl text-cinnabar-500" />,
    percent: "+5",
    heading: "Years of experience",
    subheading:
      "We have been delivering innovative solutions to clients for over 5 years.",
  },
  {
    icon: <FaCheck className="text-4xl text-cinnabar-500" />,
    percent: "90k",
    heading: "Project completed",
    subheading:
      "Successfully delivered a wide range of innovative solutions across multiple industries.",
  },
  {
    icon: <FaSmile className="text-4xl text-cinnabar-500" />,
    percent: "100%",
    heading: "Client satisfaction",
    subheading:
      "We pride ourselves on building lasting relationships and delivering beyond expectations.",
  },
  {
    icon: <FaUserFriends className="text-4xl text-cinnabar-500" />,
    percent: "20+",
    heading: "Team members",
    subheading:
      "Our team of experts is dedicated to delivering innovative solutions to clients.",
  },
];
