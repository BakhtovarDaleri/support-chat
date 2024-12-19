import React, { useRef, useState } from "react";
import "./MenuSection.css";
// import menuData from "../../data/MenuData";

// Импорт изображений
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

const MenuSection = () => {
  const menuRef = useRef(null);
  const [isMouseOver, setIsMouseOver] = useState(false); // Состояние для отслеживания состояния мыши

  const handleMouseMove = () => {
    if (menuRef.current && !isMouseOver) {
      menuRef.current.style.width = "191px"; // Изменяем ширину, если мышь внутри
      setIsMouseOver(true); // Устанавливаем флаг, что мышь внутри
    }
  };

  const handleMouseLeave = () => {
    if (menuRef.current) {
      menuRef.current.style.width = "73px"; // Сбрасываем ширину обратно
      setIsMouseOver(false); // Устанавливаем флаг, что мышь покинула меню
    }
  };

  return (
    <section className="menu">
      <div
        className="menu__list"
        ref={menuRef}
        onMouseMove={handleMouseMove} // Обработчик для движения мыши
        onMouseLeave={handleMouseLeave} // Обработчик для ухода мыши
      >
        <ul className="ul__item-list">
          {menuItems.map((item, index) => (
            <li className="li__item" key={index}>
              <div className="menu__item">
                {/* Оборачиваем изображение в ссылку */}
                <a href={item.href} className="menu__link">
                  <img
                    className={item.className}
                    src={item.src}
                    alt={item.alt}
                  />
                  <span className="menu__text">{item.text}</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MenuSection;

// import React, { useRef, useState } from "react";
// import "./MenuSection.css";

// // Импорт изображений
// import logoImg from "../../assets/logo.svg";
// import homeImg from "../../assets/home.svg";
// import planetImg from "../../assets/planet.svg";
// import statisticImg from "../../assets/statistic.svg";
// import usersImg from "../../assets/users.svg";
// import depositeImg from "../../assets/deposite.svg";
// import maneyImg from "../../assets/maney.svg";
// import disountImg from "../../assets/disount.svg";
// import supportImg from "../../assets/support.svg";
// import settingsImg from "../../assets/settings.svg";

// // Массив с данными для каждого элемента меню
// const menuItems = [
//   { src: logoImg, alt: "logo", className: "logo__img", text: "Metamorphosis" },
//   { src: homeImg, alt: "home", className: "home__img", text: "Главная" },
//   { src: planetImg, alt: "planet", className: "planet__img", text: "Домены" },
//   {
//     src: statisticImg,
//     alt: "statistic",
//     className: "statistic__img",
//     text: "Статистика",
//   },
//   {
//     src: usersImg,
//     alt: "users",
//     className: "users__img",
//     text: "Пользователи",
//   },
//   {
//     src: depositeImg,
//     alt: "deposite",
//     className: "deposite__img",
//     text: "Депозиты",
//   },
//   { src: maneyImg, alt: "maney", className: "maney__img", text: "Выплаты" },
//   {
//     src: disountImg,
//     alt: "disount",
//     className: "disount__img",
//     text: "Промокоды",
//   },
//   {
//     src: supportImg,
//     alt: "support",
//     className: "support__img",
//     text: "Саппорт",
//   },
//   {
//     src: settingsImg,
//     alt: "settings",
//     className: "settings__img",
//     text: "Настройки",
//   },
// ];

// const MenuSection = () => {
//   const menuRef = useRef(null);
//   const [isMouseOver, setIsMouseOver] = useState(false); // Состояние для отслеживания состояния мыши

//   // Функция, которая изменяет ширину меню при движении мыши
//   const handleMouseMove = () => {
//     if (menuRef.current && !isMouseOver) {
//       menuRef.current.style.width = "191px"; // Изменяем ширину, если мышь внутри
//       setIsMouseOver(true); // Устанавливаем флаг, что мышь внутри
//     }
//   };

//   // Функция для обработки ухода мыши с меню
//   const handleMouseLeave = () => {
//     if (menuRef.current) {
//       menuRef.current.style.width = "73px"; // Сбрасываем ширину обратно
//       setIsMouseOver(false); // Устанавливаем флаг, что мышь покинула меню
//     }
//   };

//   return (
//     <section className="menu">
//       <div
//         className="menu__list"
//         ref={menuRef}
//         onMouseMove={handleMouseMove} // Обработчик для движения мыши
//         onMouseLeave={handleMouseLeave} // Обработчик для ухода мыши
//       >
//         <ul className="ul__item-list">
//           {menuItems.map((item, index) => (
//             <li className="li__item" key={index}>
//               <div className="menu__item">
//                 <img className={item.className} src={item.src} alt={item.alt} />
//                 <span className="menu__text">{item.text}</span>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default MenuSection;
