module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        firstName: {
            type: DataTypes.text,
            allowNull: false,
            primaryKey: true
        },
        lastName: {
            type: DataTypes.text,
            allowNull: false
        },
        streetAddress: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
        },
        zipcode: {
            type: DataTypes.INTEGER,
            allowNull: false
        }


    });

    User.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        User.belongsTo(models.job, {
            primaryKey: {
                allowNull: false
            }
        });
    };

    return User;
};


/* const User = sequelize.define('user', { name: Sequelize.STRING })
const Task = sequelize.define('task', { name: Sequelize.STRING })
const Tool = sequelize.define('tool', { name: Sequelize.STRING })

Task.belongsTo(User)
User.hasMany(Task)
User.hasMany(Tool, { as: 'Instruments' })

sequelize.sync().then(() => {
  // this is where we continue ...
}) */
