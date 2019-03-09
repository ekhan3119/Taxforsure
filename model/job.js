module.exports = function (sequelize, DataTypes) {
    var Job = sequelize.define("Job", {
        job_id: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.UUID,
            foreignKey: true
        },
        job_name: {
            type: DataTypes.STRING
        },
        rate: {
            type: DataTypes.DECIMAL
        },
        timeEntry: {
            type: DataTypes.DECIMAL
        }
    });
    /*     Job.associate = function(models) {
            Job.belongsTo(models.User, {
                foreignKey: "user_id"
            });
        }; */
    return Job;
};
