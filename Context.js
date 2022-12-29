const Sequelize = require("sequelize");

module.exports = class Context {
  constructor() {
    this.database = require("./config/database");
  }

  init() {
    // Models
    const User = require("./model/User");
    const UserType = require("./model/UserType");
    const Estate = require("./model/Estate");
    const EstateType = require("./model/EstateType");

    // Tables
    const user = User(this.database, Sequelize.DataTypes);
    const user_type = UserType(this.database, Sequelize.DataTypes);
    const estate = Estate(this.database, Sequelize.DataTypes);
    const estate_type = EstateType(this.database, Sequelize.DataTypes);

    // ForeignKeys
    user.belongsTo(user_type, {
      foreignKey: { name: "user_type_id", allowNull: false },
    });
    estate.belongsTo(user, {
      foreignKey: { name: "owner_id", allowNull: false },
    });
    estate.belongsTo(estate_type, {
      foreignKey: { name: "estate_type_id", allowNull: false },
    });

    this.database.sync({ force: false });
  }
};
