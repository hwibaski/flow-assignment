const upload = (req, res) => {
  try {
    res.status(200).json({ status: 'SUCCESS' });
  } catch (error) {
    const { statusCode, message } = error;
    res.status(statusCode || 400).json({
      status: 'FAILED',
      message,
    });
    console.log(error);
  }
};

module.exports = { upload };
