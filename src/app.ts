import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoute } from "./app/modules/product/product.route";
import { OrderRoute } from "./app/modules/order/order.route";
const app: Application = express();


// parser-------------------------------------------------
app.use(express.json());
app.use(cors());


app.use('/api/products', ProductRoute);
app.use('/api/orders', OrderRoute);
app.use((req: Request, res: Response) =>{
  res.status(404).json({
    success: false,
    message: "route not found"
  })
})


app.get('/', (req: Request, res: Response) => {
  res.send('Level-2 assignment-2');
})

export default app;


