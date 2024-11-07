const axious=require("axios");
const app=express();

async function main(){
    const response=await axious.get("https://sum-server.100xdevs.com/todos");
    console.log(response.data.todos.length);
}
app.listen(3000);