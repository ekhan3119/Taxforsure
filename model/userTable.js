module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
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

    return User;
};
