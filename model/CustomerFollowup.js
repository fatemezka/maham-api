const Base = require("./Base");

module.exports = (sequelize, DataTypes) =>
{
	return Base(sequelize, DataTypes, "customer_followup", {
		id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true, },
		user_id: { type: DataTypes.INTEGER, allowNull: false },
		customer_id: { type: DataTypes.INTEGER, allowNull: false },
		customer_stage_id: { type: DataTypes.INTEGER, allowNull: false },
		responsible_user_id: { type: DataTypes.INTEGER, allowNull: false },
		date: { type: DataTypes.DATE, allowNull: false },  // date example: 1402-07-12
		reminder_date: { type: DataTypes.DATE, allowNull: false },
		description: { type: DataTypes.STRING(4096), allowNull: false },
	});
};
