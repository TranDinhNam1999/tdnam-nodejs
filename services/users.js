const bcrypt = require('bcrypt');
const db = require('./db');
const Sequelize = require('sequelize');

const Model = Sequelize.Model;

class User extends Model {
    static async findUserById(id) {
        return User.findByPk(id);
    }


    static async findAllUser() {
        return User.findAll({});
    }

    static async findUserByEmail(email) {
        return User.findOne({
            where: {
                email,
            }
        });
    }

    static hashPassword(password) {
        return bcrypt.hashSync(password, 10);
    }

    static verifyPassword(password, hashPassword) {
        return bcrypt.compareSync(password, hashPassword);
    }
};

User.init({
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    displayName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
    },
    tooken: {
        type: Sequelize.STRING,
    },
    facebookId: {
        type: Sequelize.STRING,
    },
    facebookAccessToken: {
        type: Sequelize.STRING,
    }
}, {
    sequelize: db,
    modelName: 'users',
});
module.exports = User;