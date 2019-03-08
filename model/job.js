module.exports = function(sequelize, DataTypes) {
    var Job = sequelize.define("Job", {
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
    Job.associate = function(models) {
        Job.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Job;
};
