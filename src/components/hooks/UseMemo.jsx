import React, { useMemo, useState } from 'react';

function UseMemo(props) {
    const [count,setCount]=useState(0)
    const [item,setItem]=useState(2)

//    function multiplication(){
//      console.log("Multiplication called");
//      return count * 5
//    }

const multiply=useMemo(function multiplication(){
         console.log("Multiplication called");
         return count * 5
       },[count])

    return (
        <div>
            <h4>UseMemo hook</h4>
            {/* multiplication : {multiplication()} */}
            multiply :{multiply}
            <h3>useMemo hook memoize the value {count} : </h3>
             item: {item}
        <button onClick={()=>setCount(count+1)}>Increament</button>
       <button onClick={()=>setItem(item*10)}>ItemBtn</button>
        </div>
    );
}

export default UseMemo;