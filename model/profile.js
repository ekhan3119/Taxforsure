module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {

        name: {
            type: DataTypes.STRING
        }

    });
    return User;
};
    /* var User = sequelize.define("User", {
userid: {
type: DataTypes.INTEGER,
primaryKey: true,
autoIncrement: true
}, first_name: {
type: DataTypes.STRING,
allowNull: false,
validate: {
len: [1, 100]
}
}, lastName: {
type: DataTypes.STRING,
allowNull: false
}, streetAddress: {
type: DataTypes.STRING,
}, city: {
type: DataTypes.STRING,
allowNull: false
}, state: {
type: DataTypes.STRING,
}, zipcode: {
type: DataTypes.INTEGER,
allowNull: false
}
}); */

/*     User.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        User.belongsTo(models.job, {
            foreignKey: {
                allowNull: false
            }
        });
    }; */






