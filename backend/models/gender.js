'use strict';
module.exports = (sequelize, DataTypes) => {
    const gender = sequelize.define('gender', {
        gender_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        }
    });

    gender.associate = function(models) {
        gender.belongsTo(models.user,
            {
                as: 'user',
                foreignKey: 'user_id'
            }
        );
    };
    return Usuario;
};