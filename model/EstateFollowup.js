const Base = require("./Base");

module.exports = (sequelize, DataTypes) =>
{
	return Base(sequelize, DataTypes, "estate_followup", {
		id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true, },
		user_id: { type: DataTypes.INTEGER, allowNull: false },
		estate_id: { type: DataTypes.INTEGER, allowNull: false },
		customer_id: { type: DataTypes.INTEGER, allowNull: false },
		register_time: { type: DataTypes.DATE, allowNull: false },
		register_date: { type: DataTypes.DATE, allowNull: false },
		reminder_time: { type: DataTypes.DATE, allowNull: false },
		reminder_date: { type: DataTypes.DATE, allowNull: false },
		description: { type: DataTypes.STRING(4096), allowNull: false },
	});
};