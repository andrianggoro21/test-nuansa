const { createUserQuery, findUserQuery } = require("../queries/userQuery");

const createUserController = async (req, res) => {
  try {
    const { userName } = req.body;
    const result = await createUserQuery(userName);
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
};

const findUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await findUserQuery(id);
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
};

module.exports = { createUserController, findUserController };
