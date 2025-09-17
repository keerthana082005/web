const express=require('express');
const mongoose=require('mongoose');
const taskRoutes=require('./routers/taskRoutes');
const app=express();
const PORT=8080;
app.use(express.json());
app.use('/',taskRoutes);
mongoose.connect('mongodb://127.0.0.1:27017/appdb', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=> {
    console.log('Connected to MongoDB');
    app.listen(PORT, ()=> {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((err)=> {
    console.error('MongoDB connection error:',err);
});
