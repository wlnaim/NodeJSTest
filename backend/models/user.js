'use strict';
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        user_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        birthday: {
            type: DataTypes.DATE
        },
        password: {
            type: DataTypes.STRING
        },
        gender_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'gender',
                key: 'gender_id'
           },
        }
    });

    user.associate = function(models) {
        user.belongsTo(models.gender,
            {
                as: 'gender',
                foreignKey: 'gender_id'
            }
        );
    };
    return user;
};