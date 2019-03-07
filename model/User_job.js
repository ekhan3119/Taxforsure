module.exports = function (sequelize, DataTypes) {
    var Userjob = sequelize.define("Userjob", {

        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true


        }, job_id: {
            type: DataTypes.INTEGER,
            primaryKey: true

        }, rate: {
            type: DataTypes.DECIMAL

        }, time_entry: {
            type: DataTypes.DECIMAL
        }
    });





    return Userjob;
};