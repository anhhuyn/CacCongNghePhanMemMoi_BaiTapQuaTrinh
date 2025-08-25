import { Sequelize } from "sequelize";

// Khởi tạo Sequelize instance
const sequelize: Sequelize = new Sequelize("node_fulltask", "root", "12345", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

// Hàm kết nối database
const connectDB = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log(" Kết nối database thành công!");
  } catch (error) {
    console.error(" Không thể kết nối database:", error);
  }
};

export default connectDB;
