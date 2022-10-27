function greeting(props) {
    
    const array1 = props.array;
    const item = array1.map((v)=> 
    <h2>{v}</h2>
    );


       return (
    <>
    <h1>D</h1>
    {item}
    </>     
       );
    } 
   
   export default greeting;