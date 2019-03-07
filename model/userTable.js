
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        street_address: {
            type: DataTypes.STRING
        },
        state: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
        },
        zip_code: {
            type: DataTypes.STRING
        }

    });

    // User.associate = function (models) {
    //     User.belongsToMany(models.Job, {
    //         through: "Userjob",
    //         as: "userid",
    //         foreingKey: "user_id"
    //     });
    // }

    /**
     * classMethods: {
    associate: function(models) {
      User.belongsToMany(models.Project, {
        through: 'UserProject'
      });
    }
     */
    return User;
};