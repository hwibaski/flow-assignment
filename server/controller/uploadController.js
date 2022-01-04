const upload = (req, res, next) => {
  try {
    res.status(200).json({ status: 'SUCCESS' });
  } catch (error) {
    next(error);
  }
};

module.exports = { upload };
