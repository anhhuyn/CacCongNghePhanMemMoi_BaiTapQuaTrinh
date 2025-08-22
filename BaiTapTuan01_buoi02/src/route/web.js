// gọi Express
import express from "express";  
// gọi controller
import * as homeController from "../controller/homeController.js";


// khởi tạo Route
let router = express.Router();  

let initWebRoutes = (app) => {

    // cách 1: code trực tiếp trong route
    router.get('/', (req, res) => {
        return res.send('Nguyễn Hữu Trung');
    });

    // cách 2: gọi hàm trong controller
    router.get('/home', homeController.getHomePage);       // url cho trang chủ
    router.get('/about', homeController.getAboutPage);     // url cho trang about
    router.get('/crud', homeController.getCRUD);           // url get crud
    router.post('/post-crud', homeController.postCRUD);    // url post crud
    router.get('/get-crud', homeController.getFindAllCRUD);// url lấy findAll
    router.get('/edit-crud', homeController.getEditCRUD);  // url get edit crud
    router.post('/put-crud', homeController.putCRUD);      // url put crud
    router.get('/delete-crud', homeController.deleteCRUD); // url get delete crud

    return app.use("/", router); // url mặc định
};

export default initWebRoutes;

