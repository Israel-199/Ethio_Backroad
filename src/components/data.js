import tour1 from "../images/tour-1.jpeg";
import tour2 from "../images/tour-2.jpeg";
import tour3 from "../images/tour-3.jpeg";
import tour4 from "../images/tour-4.jpeg";
import tour5 from "../images/tour-5.jpeg";
import tour6 from "../images/tour-6.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];
export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];
export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    para: " Enjoy unforgettable experiences without breaking the bank—quality adventures at affordable prices.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    para: "  Explore breathtaking trails and landscapes with hikes that lead you deep into Ethiopia’s natural beauty.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    para: "  Travel in style and rest easy with handpicked accommodations and smooth, stress-free service.",
  },
];
export const tours = [
  {
    id: 1,
    image: tour1,

    title: "Blue Nile’s Gateway",
    info: " A picturesque city on the shores of Lake Tana, close to the Blue Nile Falls, and a key hub in northwestern Ethiopia.",
    location: "Bahir-dar City",
    duration: 1,
    cost: 1200,
  },
  {
    id: 2,
    image: tour2,

    title: "Lakeside City of the South",
    info: " A scenic city in southern Ethiopia, located on Lake Hawassa, known for tourism and university life.",
    location: "Hawassa City",
    duration: 2,
    cost: 3200,
  },
  {
    id: 3,
    image: tour3,

    title: "The Railway City",
    info: "A major city in eastern Ethiopia, known for its railway history and cultural diversity.",
    location: "Dire-Dawa City",
    duration: 3,
    cost: 4100,
  },
  {
    id: 4,
    image: tour4,

    title: "The Walled City of Heritage",
    info: "A UNESCO World Heritage site, famous for its ancient walled city, Islamic heritage, and hyena feeding tradition.",
    location: "Harar City",
    duration: 4,
    cost: 1100,
  },
  {
    id: 5,
    image: tour5,

    title: "Heart of the Somali Region",
    info: "Capital of the Somali Region, located in eastern Ethiopia, known for its Somali culture and trade.",
    location: "Jigjiga City",
    duration: 5,
    cost: 6100,
  },
  {
    id: 6,
    image: tour6,

    title: "Gateway to Wollo Highlands",
    info: "A highland city in north-central Ethiopia, important for commerce and a gateway to the Wollo region.",
    location: "Dessie City",
    duration: 6,
    cost: 5100,
  },
];
