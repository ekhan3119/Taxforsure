module.exports = function (sequelize, DataTypes) {
    var Job = sequelize.define("Job", {
        job_id: {
            type: DataTypes.INTEGER,
            primaryKey: {
                allowNull: false
            }
        },
        job_nickname: {
            type: DataTypes.STRING
        }
    });
    // Job.belongsTo(User);
    return Job;
};