const searchForm = {
  searchField: "Фильм",
  shortMovies: "Короткометражки",
};

const footer = {
  description: "Учебный проект Яндекс.Практикум х BeatFilm.",
  links: {
    practicum: "Яндекс.Практикум",
    github: "Github",
  },
  copyright: `© ${new Date().getFullYear()}`,
};

const header = {
  tabs: {
    movies: "Фильмы",
    savedMovies: "Сохраненные фильмы",
  },
  links: {
    profile: "Аккаунт",
    signin: "Войти",
    signup: "Регистрация",
  },
};

const sideNav = {
  tabs: [
    { link: "/", label: "Главная" },
    { link: "/movies", label: header.tabs.movies },
    { link: "/saved-movies", label: header.tabs.savedMovies },
  ],
  links: {
    account: header.links.profile,
  },
};

const auth = {
  login: {
    title: "Рады видеть!",
    question: "Ещё не зарегистрированы?",
    actions: {
      signin: "Войти",
      signup: "Регистрация",
    },
  },
  register: {
    title: "Добро пожаловать!",
    question: "Уже зарегистрированы?",
    actions: {
      signin: "Войти",
      signup: "Зарегистрироваться",
    },
  },
};

const main = {
  promo: {
    title: "Учебный проект студентки факультета Веб-разработки.",
  },
  navTab: [
    { selector: "#about-project", label: "О проекте" },
    { selector: "#techs", label: "Технологии" },
    { selector: "#about-me", label: "Студент" },
  ],
  aboutProject: {
    header: "О проекте",
    projectTable: [
      {
        id: "steps",
        heading: "Дипломный проект включал 5 этапов",
        text: "Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.",
      },
      {
        id: "length",
        heading: "На выполнение диплома ушло 5 недель",
        text: "У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.",
      },
    ],
    plans: [
      { id: "current", label: "1 неделя", value: "4 недели" },
      { id: "values", label: "Back-end", value: "Front-end" },
    ],
  },
  techs: {
    header: "Технологии",
    title: "7 технологий",
    subtitle:
      "На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте",
    items: [
      { id: "html", value: "HTML" },
      { id: "css", value: "CSS" },
      { id: "js", value: "JS" },
      { id: "react", value: "React" },
      { id: "git", value: "Git" },
      { id: "expressjs", value: "Express.js" },
      { id: "mongodb", value: "mongoDB" },
    ],
  },
  aboutMe: {
    header: "Студентка",
    title: "Александра",
    subtitle: "Фронтенд-разработчица, 22 года",
    description:
      "Несколько лет посвятила медицине и работала ассистентом хирурга. В новой деятельности нашла много плюсов: возможность работы из любой точки мира, неограниченные ресурсы в создании любых проектов, рост в профессиональной деятельности. Активно занимаюсь спортом, учусь новому и читаю книги, пишу дневник, чтобы следить за результатами личностного роста",
    github: {
      label: "Github",
      link: "https://github.com/kirillovaaa",
    },
  },
  portfolio: {
    title: "Портфолио",
    links: [
      {
        link: "https://kirillovaaa.github.io/how-to-learn/",
        label: "Статичный сайт",
      },
      {
        link: "https://kirillovaaa.github.io/russian-travel/",
        label: "Адаптивный сайт",
      },
      {
        link: "https://github.com/kirillovaaa/react-mesto-api-full-gha/",
        label: "Одностраничное приложение",
      },
    ],
  },
};

const moviesCardList = {
  emptyMessage: "По вашему запросу фильмов нет",
  actions: {
    more: "Ещё",
  },
};

const page404 = {
  title: "404",
  subtitle: "Страница не найдена",
  actions: {
    back: "Назад",
  },
};

const profile = {
  welcome: (name) => `Привет, ${name}!`,
  messages: {
    success: "Данные успешно обновлены",
    error: "При обновлении профиля произошла ошибка",
  },
  actions: {
    submit: "Редактировать",
    logout: "Выйти из аккаунта",
  },
};

const textLabels = {
  searchForm,
  footer,
  header,
  sideNav,
  auth,
  main,
  moviesCardList,
  page404,
  profile,
};

export default textLabels;
