export const isLogged = (req, res, next) => {
  //si la session isLogged existe, il peut acceder au controller
  if (req.session.isLogged && !req.session.isAdmin) {
    console.log("Bien joué t'es connecté doc tu accéde au controller");
    next();
  } else {
    console.log("tu n'es pas connecté , donc tu n'accéde pas");
    res.redirect("/");
  }
};
export const isAdmin = (req, res, next) => {
  //si la session isLogged existe, il peut acceder au controller
  if (req.session.isAdmin) {
    console.log("Bien joué t'es connecté doc tu accéde au controller");
    next();
  } else {
    console.log("tu n'es pas connecté , donc tu n'accéde pas");
    res.redirect("/");
  }
};
