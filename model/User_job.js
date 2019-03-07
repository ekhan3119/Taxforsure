module.exports = function (sequelize, DataTypes) {
    var UserJob = sequelize.define("UserJob", {

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



    UserJob.associate = function (models) {
        UserJob.belongsToMany(models.Job, {
            through: "Job",
            foreingKey: "job_id"
        })

    };


    UserJob.associate = function (models) {
        UserJob.belongsToMany(models.Job, {
            through: "User",
            foreingKey: "user_id"
        });
    };


    return UserJob;
};