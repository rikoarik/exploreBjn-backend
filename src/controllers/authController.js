const bcrypt = require('bcrypt');
const admin = require('firebase-admin');

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await admin.database().ref('users').orderByChild('email').equalTo(email).once('value');
  if (existingUser.val()) {
    return res.status(400).json({ message: 'Email already registered' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const userRef = admin.database().ref('users').push();
  await userRef.set({ name, email, password: hashedPassword });

  res.status(201).json({ message: 'User registered successfully', user: { id: userRef.key, name, email } });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const userQuery = await admin.database().ref('users').orderByChild('email').equalTo(email).once('value');
  if (!userQuery.val()) {
    return res.status(404).json({ message: 'User not found' });
  }

  const user = userQuery.val()[Object.keys(userQuery.val())[0]];
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  res.status(200).json({ message: 'Logged in successfully', user: { id: Object.keys(userQuery.val())[0], name: user.name, email } });
};

module.exports = { register, login };
