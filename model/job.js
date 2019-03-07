module.exports = function (sequelize, DataTypes) {
    var Job = sequelize.define("Job", {
        user_id: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        job_nickname: {
            type: DataTypes.STRING
        },



    }, { underscored: true });

    // Job.associate = function (models) {
    //     Job.belongsToMany(models.UserJob, {
    //         through: "UserJob",
    //         as: ',
    //         foreingKey: "job_id"

    //     });
    // }
    return Job;
};

/**
 *
 *
 *
 *    Job.associate = function (models) {
        Job.belongsToMany(models.Userjob, {
            through: "Userjob",
            foreignKey: "user_id"

        })
    }
 * through: 'GroupUsers',
      as: 'groups',
      foreignKey: 'userId'
 */