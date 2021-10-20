// import Mamba from "../../img/Mamba.jpg";
// import Rose from "../../img/Rose.jpg";
// import Kyrie from "../../img/kyrie.webp";
// import Connect from "../../img/connect.svg";
// import percept from "../../img/percept.svg";
// import ball from "../../img/basket.svg";
// import Micheal from "../../img/Micheal.svg";
// import balls from "../../img/basketballs.svg";
// import court from "../../img/courts.svg";
// import about from "../../img/about-b.svg";
import men from "./image/lebron-logo.svg";
import lebronImage from "./image/lebro.svg";
import KobeImage from "./image/Kobemain.svg";
import KobeLogo from "./image/Kobelogo.svg";
import StephImage from "./image/Stephs.svg";
import StephLogo from "./image/Stephlogo.svg";
import MichealImage from "./image/Mjart.svg";
import MichealLogo from "./image/Micheal.svg";
import Kd from "./image/kdmain.svg";
import KdLogo from "./image/Kd.svg";
const content = [
  {
    id: 1,
    name: "Lebron James",
    nickname: ["The King", "The Chosen One"],
    // niche: "The Chosen One",
    position: "SF",
    body: "Arguably the best player ever behind Micheal Jordan",
    belief: "Family Forever",
    image: lebronImage,
    logo: men,
    team: "LosAngeles Lakers",
  },
  {
    id: 2,
    name: "Kobe Bryant",
    nickname: ["Black Mamba", "The Dagger"],
    niche: "Mamba Mentality",
    position: "SG",
    body:
      "The closest Thing to Micheal Jordan with his killer instinct, offensively and defensively",
    belief: "Hard work",
    image: KobeImage,
    logo: KobeLogo,
    team: "LosAngeles Lakers",
  },
  {
    id: 3,
    name: "Stephen Curry",
    nickname: ["Chef Curry", "Baby Faced Assassin"],
    position: "PG",
    body: "The Greatest shooter of all time",
    belief: "I can do all things",
    image: StephImage,
    logo: StephLogo,
    team: "GoldenState Warriors",
  },
  {
    id: 4,
    name: "Micheal Jordan",
    nickname: ["His Airness", "Black jesus"],
    // niche: ,
    position: "SG",
    body:
      "🐐, nothing more but he would never admit cus it is disrespectful to the greats who played the game before he did ",
    belief: "I can do all things",
    image: MichealImage,
    logo: MichealLogo,
    team: "Chicago Bulls",
  },
  {
    id: 5,
    name: "Kevin Durant",
    nickname: ["KD", "Slim Reaper"],
    // niche:,
    position: "SF",
    body:
      "Best Player in the world as of today, the best ever at his height, 7footer that can handle, pass, and score at will. He is Kevin Durant",
    image: Kd,
    logo: KdLogo,
    team: "Brooklyn Nets",
  },
];

export default content;
