module.exports = function (sequelize, DataTypes) {
    var Jobuser = sequelize.define("Jobuser", {
        job_id: {
            id: DataTypes.INTEGER,

        },
        user_id: {
            id: DataTypes.INTEGER,
            primaryKey: true
        },
        rate: {
            rate: DataTypes.INTEGER,
            allowNull: false
        },
        timeEntry: {
            timeEntry: DataTypes.INTEGER
        }
    });

    Jobuser.associate = function (models) {

        Jobuser.hasOne(User, {
            foreignKey: 'initiator_id',
            onDelete: "cascade"
        });
    };

    return Jobuser;
};

