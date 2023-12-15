import User from "../models/UserModel.js";
import bcrypt from "bcrypt";

export const LoginSubmit = async (req, res) => {
  const userLogin = {
    email: req.body.email,
    password: req.body.password,
  };

  let checkUser = await User.findOne({ email: req.body.email });

  if (!checkUser) {
    return res.json(`introuvable`);
  }

  let passwordCorrect = bcrypt.compareSync(
    req.body.password,
    checkUser.password
  );

  if (!passwordCorrect) {
    res.json(`incorrect Try again`);
  }
  res.json(`super You're connected`);

  if (checkUser.role === "admin") {
    req.session.isAdmin = checkUser._id;
  } else {
    req.session.isLogged = checkUser._id;
    res.redirect(`/`);
  }
};
export const Logout = (req, res) => {
  req.session.destroy((err) => {
    res.redirect("/");
  });
};

export const registerSubmit = async (req, res) => {
  try {
    let checkUser = await User.findOne({ email: req.body.email });

    if (checkUser) {
      return res.send("cet email existe déja");
    }

    const useForm = new User({
      login: req.body.login,
      email: req.body.email,
      password: req.body.password,
    });

    await useForm.save();
  } catch (err) {
    res.send("impossible inscription ");
  }
};
