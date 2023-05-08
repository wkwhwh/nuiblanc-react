import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Navbar from "../components/Navbar";

library.add(fab);

export default function Root() {
  return <Navbar />;
}
