module.exports = function (sequelize, DataTypes) {
    var Taxforsure = sequelize.define("Taxforsure", {
        name: DataTypes.STRING
    });
    /* 
        Taxforsure.associate = function (models) {
    
            Taxforsure.hasMany(models., {
                onDelete: "cascade"
            });
        }; */

    return Taxforsure;
};
