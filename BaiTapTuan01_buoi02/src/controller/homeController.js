import db from "../models/index.js"; // import database
import CRUDService from "../services/CRUDService.js"; // import service

// Hàm getHomePage
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll(); // lấy dữ liệu từ models/index
        console.log("-----------------");
        console.log(data);
        console.log("-----------------");
        return res.render("homepage.ejs", {
            data: JSON.stringify(data)// trả dữ liệu data về view
        });
    } catch (e) {
        console.log(e);
    }
};

// Hàm getAbout
let getAboutPage = (req, res) => {
    return res.render("test/about.ejs");
};

// Hàm CRUD
let getCRUD = (req, res) => {
    return res.render("crud.ejs");
};

// Hàm findAll CRUD
let getFindAllCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    // console.log("----------");
    // console.log(data);
    // console.log("----------");
    // return res.send("findAll crud to server");
    return res.render("users/findallUser.ejs", {
        datalist: data // Trả data và truyền dữ liệu ra view
    });
};

// Hàm post CRUD
let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body); // gọi service
    // console.log(message.body); // lấy thông tin body của request
    console.log(message);
    return res.send("post crud to server");
};

// Hàm lấy dữ liệu để edit
let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        //console.log(userData);
        // return res.send("edit page");
        return res.render("users/editUser.ejs", {
            data: userData,
        });
    } else {
        return res.send("Không lấy được Id");
    }
};

// Hàm update CRUD
let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDService.updateUser(data); // update rồi hiển thị danh sách user
    return res.render("users/findallUser.ejs", {
        datalist: allUsers,
    });
    // return res.send("update thành công");
};

// Hàm delete CRUD
let deleteCRUD = async (req, res) => {
    let id = req.query.id; // lấy trên view ?id=1
    if (id) {
        await CRUDService.deleteUser(id);
        return res.send("Deleted!!!");
    } else {
        return res.send("Not find user");
    }
};

export {
  getHomePage,
  getAboutPage,
  getCRUD,
  postCRUD,
  getFindAllCRUD,
  getEditCRUD,
  putCRUD,
  deleteCRUD,
};

