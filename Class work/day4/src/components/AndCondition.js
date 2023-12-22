import React,{useState} from "react"

const AndCondition =()=>{
    const[err,setError]=useState(false)
    return(
        <div>
            <form>
                <input type='text' placeholder='Username'/>
            {err&& <p>Please enter valid username</p>}
            </form>
        </div>
    )
}
export default AndCondition;