import bcrypt from 'bcryptjs'; // import thư viện bcryptjs
import db from '../models/index.js'; // import database
import { where } from 'sequelize';

const salt = bcrypt.genSaltSync(10); // Thuật toán hash password

// Hàm tạo user mới
let createNewUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPasswordFromBcrypt = await hashUserPassword(data.password);
      await db.User.create({
        email: data.email,
        password: hashPasswordFromBcrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phoneNumber: data.phoneNumber,
        gender: data.gender === '1' ? true : false,
        roleId: data.roleId
      });
      resolve('OK create a new user successful!');
    } catch (e) {
      reject(e);
    }
  });
};

// Hàm hash password
let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

// Hàm lấy tất cả user (findAll CRUD)
let getAllUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = await db.User.findAll();
      resolve(users);
    } catch (e) {
      reject(e);
    }
  });
};

let getUserInfoById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId },
                raw: true,
            });
            if(user){
            resolve(user);
            }else{
                resolve([]);
            }
        } catch (e) {
            reject(e);
        }
    });
};

let updateUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id },
            });
            if (user) {
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;
                await user.save();
                let allUsers = await db.User.findAll();
                resolve(allUsers);
            } else {
                resolve();
            }
        } catch (e) {
            reject(e);
        }
    });
};

let deleteUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId },
            });
            if (user) {
                  await user.destroy();
            } resolve();
        } catch (e) {
            reject(e);
        }
    });
};

const CRUDService = {
    createNewUser,
    getAllUser,
    getUserInfoById,
    updateUser,
    deleteUser
};

export default CRUDService;
