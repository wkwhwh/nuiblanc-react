import { IconName } from "@fortawesome/free-brands-svg-icons";

export interface LinkProps {
  items: {
    icon: IconName;
    link: string;
  }[];
}
