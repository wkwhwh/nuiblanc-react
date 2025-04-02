import Links from "../components/Links";
import ArtworkWtmf from "../components/ArtworkWtmf";

export default function App() {
  const items = [
    { icon: "youtube" as const, link: "https://youtu.be/ETO0XTtEPHk" },
    {
      icon: "bandcamp" as const,
      link: "https://nuiblanc.bandcamp.com/album/when-the-machine-fails",
    },
  ];
  return (
    <div>
      <ArtworkWtmf />
      <Links items={items} />
      <p id="p5_loading" className="hidden" />
    </div>
  );
}
