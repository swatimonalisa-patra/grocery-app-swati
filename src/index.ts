// // src/index.ts
// import express from 'express';
// import bodyParser from 'body-parser';
// import connectDB from './config/database';
// import dotenv from 'dotenv';
// import groceryItemRoutes from './groceryItem/routes/groceryItemRoutes';
// import cors from 'cors'; // Import cors

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());

// app.use(cors());
// // Connect to MongoDB
// connectDB();

// app.use(express.json());
// app.use('/api', groceryItemRoutes);

// app.get('/', (req, res) => {
//   res.send('Hello, TypeScript with MongoDB!');
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


import express from "express";
import groceryItemRoutes from './groceryItem/routes/groceryItemRoutes';
import connectDB from './config/database';
import userroutes from './user/routes/Userroutes';
import orderroutes from './order/routes/orderRoutes';
import roleroutes from './role/routes/roleroutes';

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

connectDB();

app.use("/admin/grocery", groceryItemRoutes);

app.use("/user/availablegroceryitem",groceryItemRoutes);
app.use("/user",userroutes);
app.use("/user/order",orderroutes);

app.use("/role",roleroutes)

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
});