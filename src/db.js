import mongoose from "mongoose";

export const connectDB = async ()=>{
    try{
        const url ='mongodb+srv://sistema_productos:SistemaProductos2023@alejandra.lfjaj0i.mongodb.net/?retryWrites=true&w=majority'
        await mongoose.connect(url)
        console.log('Base de datos conectada');
    } catch(error) {
        console.log(error);
    }
}