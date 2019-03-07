module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
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

    return User;
};
