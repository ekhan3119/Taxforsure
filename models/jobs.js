module.exports = function (sequelize, DataTypes) {
    var Job = sequelize.define("Job", {
        id: DataTypes.INTEGER
    });

    JOb.associate = function (models) {

        Job.hasone(models.User, {
            onDelete: "cascade"
        });
    };

    return Job;
};
