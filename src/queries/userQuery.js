const { where } = require("sequelize");
const db = require("../models");
const user = db.user;

const createUserQuery = async (userName) => {
  try {
    const res = await user.create({
      userName,
    });
    return res;
  } catch (error) {
    throw error;
  }
};

const findUserQuery = async (id) => {
  try {
    const res = await user.findOne({
        where: {id}
    });
    return res;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUserQuery,
  findUserQuery,
};
