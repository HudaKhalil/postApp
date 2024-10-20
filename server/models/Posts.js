const { Sequelize, DataTypes } = require("sequelize");

// table Posts creation (
module.exports = (Sequelize, DataTypes) => {
    const Posts = Sequelize.define("Posts", {
        title: {
            // Field post Title datatype string & constraint not allow null data
            type: DataTypes.STRING,
            allowNull: false,
        },
        postText: {
            // Field postText for post description datatype string & constraint not allow null data
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            // Field username to store the user who write this post & constraint not allow null data
            type: DataTypes.STRING,
            allowNull: false,
        },        
    });
    return Posts;
};