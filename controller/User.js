const { User } = require("../model/User");

exports.fetchUserById = async (req, res) => {
  const { id } = req.user;
  try {
    const user = await User.findById(id).exec();
    res.status(200).json({id:user.id,addresses:user.addresses,email:user.email,role:user.role});
  } catch (error) {
    res.status(4001).json(error);
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.user;
  try {
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(error);
  }
};
