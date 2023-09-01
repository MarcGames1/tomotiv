import User from "../models/user";

export const currentAdmin = async (req, res) => {
  
   
  
  try {
    let user = await User.findById(req.auth._id).select('-password').exec();
    // console.log("CURRENT INSTRUCTOR => ", user);
    if (!user.role.includes('Admin')) {
      return res.sendStatus(403);
    } else {
      res.json({ ok: true });
    }
  } catch (err) {
    console.log(err);
  }
};


export const listUsers = async (req, res) => {
  try {
    const users = await User.find().select(
      'nume email role createdAt updatedAt'
    );
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const updateRole = async (req, res) => {
  try {
    const { userId } = req.params;
    const { role } = req.body;

    const user = await User.findByIdAndUpdate(userId, { role }, { new: true });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};


export const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;

    await User.findByIdAndDelete(userId);
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
