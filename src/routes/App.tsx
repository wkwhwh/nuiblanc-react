import Links from "../components/Links";

export default function App() {
  const items = [
    {
      icon: "spotify" as const,
      link: "https://open.spotify.com/artist/0iDVSTcujudt52DYBSZas2",
    },
    {
      icon: "itunes-note" as const,
      link: "https://music.apple.com/gb/artist/nui-blanc/1202591305",
    },
    { icon: "youtube" as const, link: "https://www.youtube.com/@nuiblanc" },
    { icon: "bandcamp" as const, link: "https://nuiblanc.bandcamp.com/" },
  ];
  return <Links items={items} />;
}
