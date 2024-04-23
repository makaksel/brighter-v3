export const routerLinks = {
  root: '/',
  portfolio: '/portfolio',
  portfolioItem: '/portfolio/:id',
  services: '/services',
  contacts: '/contacts',
  about: '/about',
  brif: '/brif',
}

export const navigation = {
  portfolio: {
    path: routerLinks.portfolio,
    label: 'портфолио',
  },
  // services: {
  //   path: routerLinks.services,
  //   label: 'услуги',
  // },
  contacts: {
    path: routerLinks.contacts,
    label: 'контакты',
  },
  about: {
    path: routerLinks.about,
    label: 'о нас',
  },
};
