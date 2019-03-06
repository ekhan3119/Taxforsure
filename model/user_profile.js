module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.TEXT
        },
        last_name: {
            type: DataTypes.INTEGER,
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
            type: DataTypes.INTEGER
        }

    });


    return User;
};