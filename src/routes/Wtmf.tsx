import Links from "../components/Links";
import ArtworkWtmf from "../components/ArtworkWtmf";

export default function App() {
  const items = [
    {
      icon: "spotify" as const,
      link: "https://open.spotify.com/album/1mmJZ5edBZa7JXgGzk09iI",
    },
    {
      icon: "itunes-note" as const,
      link: "https://music.apple.com/gb/album/when-the-machine-fails-ep/1682543502",
    },
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
