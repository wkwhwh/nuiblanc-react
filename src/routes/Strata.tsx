import Links from "../components/Links";
import ArtworkStrata from "../components/ArtworkStrata";

export default function App() {
  const items = [
    {
      icon: "spotify" as const,
      link: "https://open.spotify.com/album/52BaNGxt93III47z748UQV",
    },
    {
      icon: "itunes-note" as const,
      link: "https://music.apple.com/gb/album/strata-ep/1457196651",
    },
    { icon: "youtube" as const, link: "https://youtu.be/fwxwkFwuccg" },
  ];
  return (
    <div>
      <ArtworkStrata />
      <Links items={items} />
      <p id="p5_loading" className="hidden" />
    </div>
  );
}
