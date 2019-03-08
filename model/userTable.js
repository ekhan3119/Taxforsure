module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
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
    User.associate = function(models) {
        User.hasMany(models.Job, {
            onDelete: "cascade"
        });
    };
    return User;
};
