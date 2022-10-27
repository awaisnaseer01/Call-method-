const Comp_E = ()=>{

    const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);
    return(
        <>
        <h1>E</h1>
        <ul>{listItems}</ul>
        </>


    );

}
export default Comp_E;