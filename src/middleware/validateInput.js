const multer = require('multer');

const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

module.exports = (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;

  if (req.path === '/register') {
    if (!name) {
      return res.status(400).json({ message: 'Name is required' });
    }
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }
    if (!password) {
      return res.status(400).json({ message: 'Password is required' });
    }
    if (!confirmPassword) {
      return res.status(400).json({ message: 'Confirm Password is required' });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }
  } else if (req.path === '/login') {
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }
    if (!password) {
      return res.status(400).json({ message: 'Password is required' });
    }
  }

  next();
};
