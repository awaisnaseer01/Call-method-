import Child from "./Child";
import Greetings from "./Greetings";
import A from "./Compnent_A";
import C from "./Component_C";
import E from "./Component_E";
import F from "./Component_F";

const Parent = () => {
  const fun = () => {
    console.log("Hello..!!");
  };

  const arr = [1, 2, 3, 4, 5];
  return (
    <div class="flex-container">
        
      <div className="innerdiv">
        <A />
      </div>
      <div className="innerdiv">
        {" "}
        <Child fun={fun} />
      </div>
      <div className="innerdiv">
        <C />
      </div>
      <div className="innerdiv">
        <Greetings array={arr} />
      </div>
      <div className="innerdiv">
        <E />
      </div>
      <div className="innerdiv">
        <F />
      </div>
    </div>
  );
};

export default Parent;
