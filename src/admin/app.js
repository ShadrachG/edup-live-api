const config = {
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "EdUp Live",
      "app.components.LeftMenu.navbrand.workplace": " ",
    },
  },
  tutorials: false,
  notification: {
    releases: false,
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
