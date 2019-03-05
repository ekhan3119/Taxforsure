module.exports = function (sequelize, DataTypes) {
    var Taxforsure = sequelize.define("User", {
        name: DataTypes.STRING
    });

    Taxforsure.associate = function (models) {

        Taxforsure.hasMany(models.Post, {
            onDelete: "cascade"
        });
    };

    return Taxforsure;
};
