import logoImg from "../../assets/logo.svg";
import homeImg from "../../assets/home.svg";
import planetImg from "../../assets/planet.svg";
import statisticImg from "../../assets/statistic.svg";
import usersImg from "../../assets/users.svg";
import depositeImg from "../../assets/deposite.svg";
import maneyImg from "../../assets/maney.svg";
import disountImg from "../../assets/disount.svg";
import supportImg from "../../assets/support.svg";
import settingsImg from "../../assets/settings.svg";

const menuItems = [
  {
    src: logoImg,
    alt: "logo",
    className: "logo__img",
    text: "Metamorphosis",
    href: "/",
  },
  {
    src: homeImg,
    alt: "home",
    className: "home__img",
    text: "Главная",
    href: "/home",
  },
  {
    src: planetImg,
    alt: "planet",
    className: "planet__img",
    text: "Домены",
    href: "/domains",
  },
  {
    src: statisticImg,
    alt: "statistic",
    className: "statistic__img",
    text: "Статистика",
    href: "/statistics",
  },
  {
    src: usersImg,
    alt: "users",
    className: "users__img",
    text: "Пользователи",
    href: "/users",
  },
  {
    src: depositeImg,
    alt: "deposite",
    className: "deposite__img",
    text: "Депозиты",
    href: "/deposits",
  },
  {
    src: maneyImg,
    alt: "maney",
    className: "maney__img",
    text: "Выплаты",
    href: "/payouts",
  },
  {
    src: disountImg,
    alt: "disount",
    className: "disount__img",
    text: "Промокоды",
    href: "/promo",
  },
  {
    src: supportImg,
    alt: "support",
    className: "support__img",
    text: "Саппорт",
    href: "/support",
  },
  {
    src: settingsImg,
    alt: "settings",
    className: "settings__img",
    text: "Настройки",
    href: "/settings",
  },
];

export default menuItems;
