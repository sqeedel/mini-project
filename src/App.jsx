import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./Naughty_Dog_Logo.png";
// import headLogo from "./paralax.jpg";
import twitterLogo from "./twitter.png";
import youTubeLogo from "./Youtube.png";
import twitchLogo from "./twitch.png";
import instagramLogo from "./instagram.png";
import facebookLogo from "./FaceBook.png";
import ellieImg from "./Ellie.jpg";
import joelImg from "./Joel.jpg";
import mariaImg from "./maria.jpg";
import marleneImg from "./Marlene.jpg";
import rileyImg from "./riley.jpg";
import sarahImg from "./sarah.jpg";
import tessImg from "./tess.jpg";
import tommyImg from "./tommy.jpg";

function Navigation() {
  // const [visible, setVisible] = useState(false);
  const navList = [
    {
      img: logo,
      href: "#main",
    },
    {
      name: "NEWS",
      href: "#news",
    },
    {
      name: "COMPANY ↓",
      href: "#company",
      additionInfo: [
        {
          name: "ABOUT US",
          href: "#aboutUs",
        },
        {
          name: "OUR TEAM",
          href: "#ourTeam",
        },
      ],
    },
    {
      name: "GAMES ↓",
      href: "#games",
      additionInfo: [
        {
          name: "THE LAST OF US",
          href: "#theLastOfUs",
        },
        {
          name: "UNCHARTED",
          href: "#uncharted",
        },
        {
          name: "JAK & DEXTER",
          href: "#jakAndDexter",
        },
      ],
    },
    {
      name: "SUPPORT",
      href: "#support",
    },
    {
      name: "GEAR STORE ↓",
      href: "#gearStore",
      additionInfo: [
        {
          name: "THE LAST OF US",
          href: "#theLastOfUs",
        },
        {
          name: "UNCHARTED",
          href: "#uncharted",
        },
      ],
    },
  ];
  return (
    <div className="navigation">
      {navList.map((item) => (
        <a href={item.href} className="navigation-item">
          {item.img ? (
            <img src={item.img} alt="logotype" />
          ) : (
            <div className="descriptionOfNav">
              {item.name}

              <ul className="hiddenAdditionInfo">
                {item.additionInfo?.map((addItem) => (
                  <li>
                    <a href={addItem.href} className="navigation-item">
                      {addItem.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </a>
      ))}
    </div>
  );
}
function Header() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 200) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return visible ? (
    <div className="containerParalax">
      <div className="paralax">
        <div className="paralax-layer" id="paralax-image">
          <div className="paralax-layer" id="paralax-text">
            NAUGHTY DOG
          </div>
        </div>
      </div>

      <div className="blurHidden">
        <div className="paralax-layer" id="paralax-image">
          <div className="paralax-layer" id="paralax-text">
            NAUGHTY DOG
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="containerHidden">
      <div className="paralaxHidden">
        <div className="paralax-layer" id="paralax-image">
          <div className="paralax-layer" id="paralax-text">
            NAUGHTY DOG
          </div>
        </div>
      </div>

      <div className="blur">
        <div className="paralax-layer" id="paralax-image">
          <div className="paralax-layer" id="paralax-text">
            NAUGHTY DOG
          </div>
        </div>
      </div>
    </div>
  );
}
function Footer() {
  const contactList = [
    {
      img: twitterLogo,
      href: "#twittter",
    },
    {
      img: instagramLogo,
      href: "https://www.instagram.com/naughty_dog_inc",
    },
    {
      img: facebookLogo,
      href: "#facebook.com",
    },
    {
      img: youTubeLogo,
      href: "#youtube.com",
    },
    {
      img: twitchLogo,
      href: "#twitch.tv",
    },
  ];
  return (
    <div className="containerFooter">
      {contactList.map((contact, index) => (
        <span key={index} className="contactsBlock">
          <a href={contact.href}>
            <img src={contact.img} alt="contactsImg" />
          </a>
        </span>
      ))}
    </div>
  );
}

function Card({ name, info, img, imgBack }) {
  console.log(name, info, img);
  const [flipped, setFlipped] = useState(false);
  const handleClick = (e) => {
    console.log(flipped);
    setFlipped(!flipped);
  };

  return (
    <div className="containerFlip" onClick={handleClick}>
      <div className={flipped ? "flipped" : ""}>
        <div className="card-inner">
          <div style={{ backgroundImage: `url(${img})` }} className="frontFlip">
            {name}
          </div>
          <div
            style={{ backgroundImage: `url(${imgBack})` }}
            className="backFlip"
          >
            <div className="textInfoContainer">{info}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
function СhangeMainBlock() {
  const [swap, setSwap] = useState(0);
  const firstBlock = () => {
    setSwap(1);
  };
  const secondBlock = () => {
    setSwap(2);
  };
  const thirdBlock = () => {
    setSwap(3);
  };
  return (
    <div className="mainBlock">
      <button className="buttonAboutGame" onClick={firstBlock}>
        The Last Of Us Part I
      </button>
      <button className="buttonAboutGame" onClick={secondBlock}>
        The Last Of Us Part II
      </button>
      <button className="buttonAboutGame" onClick={thirdBlock}>
        The Last Of Us Part III
      </button>
      {swap == 0 && <div className="textAboutGame">Добро пожаловать!</div>}
      {swap == 1 && (
        <div className="textAboutGame">
          Действие игры происходит в постапокалиптическом будущем на территории
          бывших Соединённых Штатов Америки спустя двадцать лет после глобальной
          пандемии, вызванной опасно мутировавшим грибком кордицепс. Сюжет
          посвящён путешествию главных героев — контрабандиста Джоэла и
          девочки-подростка Элли, сыгранных Троем Бейкером и Эшли Джонсон с
          помощью технологии захвата движения. Креативным директором и
          сценаристом выступил Нил Дракманн. Музыка к игре написана композитором
          Густаво Сантаолальей. Анонс ремейка вызвал противоречивую реакцию в
          игровом сообществе, как со стороны профильных журналистов, так и со
          стороны обычных игроков. Игроки жаловались на завышенную цену в 70
          долларов, а также на слишком незначительные изменения в сравнении с
          предыдущими итерациями The Last of Us. Многие поклонники ожидали от
          Part I нововведения в виде механик из The Last of Us Part II, однако
          основываясь на официальных и слитых в сеть футажах был сделан вывод,
          что игровой процесс не претерпел кардинальных изменений.
        </div>
      )}
      {swap == 2 && (
        <div className="textAboutGame">
          The Last of Us Part II представляет собой приключенческий боевик с
          элементами survival horror и стелс-экшена от третьего лица. Игрок
          может использовать огнестрельное и самодельное оружие, лук против
          враждебно настроенных представителей других фракций и заражённых
          грибком кордицепс. The Last of Us Part II расширяет возможности
          игрового процесса, представленного в первой части: игрок может
          использовать возможности окружения более широко, например занимать
          высокие точки для получения преимущества или скрываться в высокой
          траве. Также игрок может подбирать различные предметы для улучшения
          дерева навыков персонажа, разделённого на три категории: «Выживание»,
          «Крафтинг» и «Скрытность». Во второй части также появились собаки,
          которые способны выследить персонажа игрока по запаху.
        </div>
      )}
      {swap == 3 && <div className="textAboutGame">В разработке</div>}
    </div>
  );
}

function App() {
  return (
    <div className="body">
      <header>
        <Header />
      </header>
      <nav>
        <Navigation />
      </nav>

      <main>
        <div className="infoAboutGame">
          <СhangeMainBlock />
        </div>
        <div className="characterSession">
          Информация о главных действующих персонажах в The Last Of Us Part I;
        </div>
        <div className="characterCards">
          <Card
            name="Джоэл"
            info="Главный герой, контрабандист из Бостона."
            img={joelImg}
            imgBack={joelImg}
          />
          <Card
            name="Элли"
            info="Главная героиня, 14-летняя девочка, обладающая иммунитетом от заражения."
            img={ellieImg}
            imgBack={ellieImg}
          />
          <Card
            name="Сара"
            info="Дочь Джоэла, погибшая в начале эпидемии КЦИ."
            img={sarahImg}
            imgBack={sarahImg}
          />
          <Card
            name="Томми"
            info="Брат Джоэла. Поселился на ГЭС в округе Джексон, женат на лидере местной общины."
            img={tommyImg}
            imgBack={tommyImg}
          />
          <Card
            name="Тесс"
            info="Партнер Джоэла, контрабандистка из Бостона."
            img={tessImg}
            imgBack={tessImg}
          />
          <Card
            name="Марлин"
            info="Лидер действующей группировки «Цикад»."
            img={marleneImg}
            imgBack={marleneImg}
          />
          <Card
            name="Мария"
            info="Лидер общины в округе Джексон. Супруга Томми"
            img={mariaImg}
            imgBack={mariaImg}
          />
          <Card
            name="Райли"
            info="Лучшая подруга Элли, обучавшаяся в военной школе-интернате Бостона."
            img={rileyImg}
            imgBack={rileyImg}
          />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
