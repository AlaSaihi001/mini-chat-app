import bcrypt from 'bcrypt'
import { userModel } from "../../../models/user.model.js";

export const signUp = async (req, res) => {
  const { name, email, password, age } = req.body;
  const user = await userModel.findOne({ email });
  if (user) {
    return res.json({ message: "user already exists" });
  } else {
    const hash = bcrypt.hashSync(password, 8);
    await userModel.insertMany({
      name,
      email,
      password: hash,
      age,
    });
    res.json({ message: "success" });
  }
};


export const signIn = async(req, res) => {
  const {email, password} = req.body
  const user = await userModel.findOne({email})
  if(user && bcrypt.compareSync(password, user.password)) {
    res.json({message: "Login with token"})
  }else{
    res.json({message: "email not found or password incorrect"})
  }
}
