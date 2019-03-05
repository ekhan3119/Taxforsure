module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },

    });

    /*     User.associate = function (models) {
            // We're saying that a Post should belong to an Author
            // A Post can't be created without an Author due to the foreign key constraint
            User.belongsTo(models.Taxforsure, {
                foreignKey: {
                    allowNull: false
                }
            });
        };
     */
    return User;
};
