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
    Job.associate = function (models) {
        Job.belongsTo(models.User, {
            foreignKey: {
                allowNull: true
            }
        });
    }
    return Job;
};