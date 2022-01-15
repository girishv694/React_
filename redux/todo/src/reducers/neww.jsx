

const neww =() => {
    const[count,setcounter] = useState();

    return(
        <div>
            <button onClick={()=>setcounter(count+1)}>+</button>
            <button onClick={()=>setcounter(count-1)}>-</button>
            {count}
        </div>
    )
}
export default neww;