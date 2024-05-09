module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define(
        "user", 
        {
            userName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        },
        {
            timestamps: false,
            tableName: "users"
        }
            
    );

    return user;
}