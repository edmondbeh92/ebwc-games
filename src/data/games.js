const IMG_ROOT = "https://img.itch.zone/";
const GAME_ROOT = "https://ebwc-games.itch.io/";

const gm = "GameMaker Studio 1.4";
const unity = "Unity";

const games = [
  {
    id: 1,
    name: "Celestial Raid",
    engine: gm,
    game_url: GAME_ROOT + "celestial-raid",
    youtube_url: "https://www.youtube.com/embed/EKzkaFqvT4Y",
    banner: IMG_ROOT + "aW1nLzE0ODA0NTgucG5n/original/3XfQfg.png",
    images: [
      "aW1hZ2UvMjk3NDk4LzE0NTQwNDcuanBn/794x1000/hUZKtE.jpg",
      "aW1hZ2UvMjk3NDk4LzE0NTQwNDMuanBn/794x1000/R8KBzz.jpg",
      "aW1hZ2UvMjk3NDk4LzE0NTQwNDUuanBn/794x1000/9sa6tt.jpg",
      "aW1hZ2UvMjk3NDk4LzE0NTQwNDQuanBn/794x1000/OThUQe.jpg",
      "aW1hZ2UvMjk3NDk4LzE0NTQwNDYuanBn/794x1000/VEaQS8.jpg",
    ].map((url) => IMG_ROOT + url),
    description:
      "A 60fps vertical shmup with 6 missions, each with their own bosses. Ships have a few upgrades. Available on PC or Android.",
  },
];

export default games;
