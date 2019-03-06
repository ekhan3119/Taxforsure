module.exports = function (sequelize, DataTypes) {
    var Userjob = sequelize.define("Userjob", {

        job_user_id: {
            type: DataTypes.INTEGER,
            primaryKey: {
                allowNull: false
            }
        }, job_id: {
            type: DataTypes.INTEGER,
            foreignKey: {
                allowNull: false
            }
        }, rate: {
            type: DataTypes.DECIMAL

        }, time_entry: {
            type: DataTypes.DECIMAL
        }
    });

    /* Userjob.associate = function (models) {
        Userjob.belongsTo(models.User {
            foreignKey: {
                allowNull: false
            }

        });
    } */

    return Userjob;
};