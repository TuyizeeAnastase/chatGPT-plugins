module.exports = (sequelize, DataTypes) => {
  const Job=sequelize.define("Job",{
    name: DataTypes.STRING,
    salary: DataTypes.INTEGER,
    experience: DataTypes.INTEGER
  }, {});
  return Job;
};