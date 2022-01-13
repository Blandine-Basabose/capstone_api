
import User from "../data/User";


const getUser = (req, res) => {
  res.json({
    Result: User.length,
    User: User,
  });
};

const signUp = (req, res) => {
  const { name, email, password } = req.body;
  if(!name || !email || !password){
    return res.status(400).json({
      error:"Name, email, password are required"
    });
  };
  const usr = User.find((u) => u.name === name && u.email === email && u.password === password);
  if (usr) {
    return res.status(409).json({
      error: "User exixts",
    });
  }
  const user = {
    name,
    email,
    password,
  };
  User.push(user);
  res.json({
    message: "User added successfully",
    user,
  });
};


const signIn = (req, res) => {
  const { email, password } = req.body;
  if(!email || !password){
    return res.status(400).json({
      error:"Email and password required"
    })
  }

  const usr = User.find((u) => u.email === email && u.password === password);
  if (!usr) {
    return res.status(401).json({
      error: "invalid email or password",
    });
  }
  return res.status(200).json({
    message:"Logged in successfully"
  })
};
export default { signUp, getUser, signIn };
