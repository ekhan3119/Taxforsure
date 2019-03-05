module.exports = function (sequelize, DataTypes) {
    var Job = sequelize.define("Job", {
        job_id: DataTypes.INTEGER
    });

    Job.associate = function (models) {

        Job.hasOne(models.User, {
            onDelete: "cascade"
        });
    };

    return Job;
};
