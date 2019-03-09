module.exports = function (sequelize, DataTypes) {
    var Time = sequelize.define("Time", {


        timeEntry: {
            type: DataTypes.DECIMAL
        },
        rate: {
            type: DataTypes.DECIMAL
        }
    });
    /*     Job.associate = function(models) {
            Job.belongsTo(models.User, {
                foreignKey: "user_id"
            });
        }; */
    return Time;
};
