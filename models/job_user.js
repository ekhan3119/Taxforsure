module.exports = function (sequelize, DataTypes) {
    var Jobuser = sequelize.define("Jobuser", {
        job_id: {
            id: DataTypes.INTEGER,
            primaryKey: true
        },
        user_id: {
            id: DataTypes.INTEGER,
            primaryKey: true
        },
        rate: {
            rate: numeric(3, 2),
            allowNull: false
        },
        timeEntry: {
            timeEntry: numeric(2, 2)
        }
    });

    Jobuser.associate = function (models) {

        Jobuser.hasOne(User, {
            as 'User'
            foreignKey: 'initiator_id',
            onDelete: "cascade"
        });
    };

    return Jobuser;
};
/* Team.hasOne(Game, {as: 'HomeTeam', foreignKey : 'homeTeamId'});
Team.hasOne(Game, {as: 'AwayTeam', foreignKey : 'awayTeamId'});

Game.belongsTo(Team); */



//identifier: { type: Sequelize.STRING, primaryKey: true },
