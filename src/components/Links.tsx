import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkProps } from "../types/links";
import { useEffect, useState } from "react";

export default function Links({ items }: LinkProps) {
  const [loadAnimation, setLoadAnimation] = useState(false);
  useEffect(() => {
    setLoadAnimation(true);
  }, []);
  const linkItems = items.map((item) => (
    <a id="link-item" href={item.link} key={item.icon} target="_blank">
      <FontAwesomeIcon
        icon={["fab", item.icon]}
        size="2xl"
        className="opacity-70 hover:opacity-100 text-neutral-50"
      />
    </a>
  ));
  return (
    <div
      id="links"
      className={`${
        loadAnimation &&
        "transition-opacity duration-1000 ease-in-out opacity-100"
      } flex absolute justify-center gap-x-16 inset-1/2 opacity-0`}
    >
      {linkItems}
    </div>
  );
}
