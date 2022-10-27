import Child from "./Child";
import Greetings from "./Greetings"
import A from './Compnent_A'
import C from "./Component_C"
import E from "./Component_E"

const Parent=()=> {

    const fun = ()=>{
        console.log("Hello..!!")
    }

    const arr = [1,2,3,4,5,6]
    return (
        <> 
        <A />
       <Child fun={fun}/>
       <C />
       <Greetings array={arr}/>
       <E/>
       
        </>
    );
}

export default Parent;
