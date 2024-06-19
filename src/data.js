import { v4 as uuidv4 } from "uuid";

const Data = () => {
  return [
    {
      name: "Sunrise Serenade",
      cover:
        "https://randommer.io/images/albums/9412062.webp",
      artist: "Harmony Harp",
      audio:
        "https://media.geeksforgeeks.org/wp-content/uploads/20231004185212/Jawan-Prevue-Theme.mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Urban Groove",
      cover:
        "https://randommer.io/images/albums/9412062.webp",
      artist: "Beatmaster B",
      audio:
        "https://media.geeksforgeeks.org/wp-content/uploads/20231004184006/SoundHelix-Song-10.mp3",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Mystic Echo",
      cover:
        "https://randommer.io/images/albums/9412062.webp",
      artist: "Harmony Harp",
      audio:
        "https://media.geeksforgeeks.org/wp-content/uploads/20231004185212/Jawan-Prevue-Theme.mp3",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Electro Vibes",
      cover:
        "https://randommer.io/images/albums/9412062.webp",
      artist: "Synthwave Sensation",
      audio:
        "https://media.geeksforgeeks.org/wp-content/uploads/20231004191840/Zinda-Banda---Jawan-(1).mp3",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Jazzy Whispers",
      cover:
        "https://randommer.io/images/albums/9412062.webp",
      artist: "Smooth Sax Serenade",
      audio:
        "https://media.geeksforgeeks.org/wp-content/uploads/20231004184006/SoundHelix-Song-10.mp3",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Tropical Breez",
      cover:
        "https://randommer.io/images/albums/9412062.webp",
      artist: "Island Rhythms",
      audio:
        "https://media.geeksforgeeks.org/wp-content/uploads/20231004191840/Zinda-Banda---Jawan-(1).mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
  ];
};

export default Data;
