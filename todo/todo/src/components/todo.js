const [task,setTask] = useState("");
const [taskList,setTaskList] = useState([]);

const handleChange = (e) =>{
  setTask(e.target.value)

};
const AddTask = () =>{
 if(task!== ""){
   const TaskDetails ={
     id:Math.floor(Math.random()*1000),
     value :task,
     isCompleted : false,
   }

   setTaskList([...taskList,TaskDetails])
 }
}

console.log("tasklist",taskList);





<header>
         
            <input type="text" placeholder="Enter Text" onChange={(e)=> handleChange(e)}/>
            <button type="submit" onClick={AddTask}>ADD</button>

         
        </header>