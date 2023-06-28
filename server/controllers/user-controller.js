import userModel from "../model/userModel";
import bcrypt from "bcryptjs";


// get all user 
export const getAllUser = async (req, res) => {
  let users;
  try {
    users = await userModel.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404).json({ message: "No Users Found" });
  }
  return res.status(200).json({ users });
};

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
// validation 
if(name|| email||password){
  return res.status(400).send({
    success:false,
    message:"please fill all fields"
  })
}
// existinguser

  let existingUser;
  try {
    existingUser = await userModel.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existingUser) {
    return res
      .status(401)
      .json({ message: "User Already Exists! Login Instead" });
  }
  const hashedPassword =  bcrypt.hashSync(password);
// save the new user

  const user = new userModel({
    name,
    email,
    password: hashedPassword,
    blogs: [],
  });

  try {
    await user.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ user });
};

// login

export const login = async (req, res) => {
  const { email, password } = req.body;
// validation
if(!email || !password){
  return res.status(401).send({
    success:false,
    message:"please provide email or password"
  })
}

  let existingUser;
  try {
    existingUser = await userModel.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res.status(404).json({ message: "Couldnt Find User By This Email" });
  }

  const isPasswordCorrect = bcrypt.compare(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Incorrect Password" });
  }
  return res
    .status(200)
    .json({ message: "Login Successfull", user: existingUser });
};