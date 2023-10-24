// import React, { useEffect, useState } from "react";

// const UseEffectHook = () => {
//   const [r, setR] = useState({
//     name: "",
//     subject: "",
//   });

//   const [changing, setChanging] = useState({ changeStatus: false });
//   let timer = null;
//   function handleChange(e) {
//     // setChanging({ changeStatus: true });
//     const newValue = r;
//     console.log(newValue[e.target.name])
//     newValue[e.target.name] = e.target.value;
//     // setR(newValue);
//     if (timer) {
//       clearTimeout(timer);
//     }
//     timer = setTimeout(() => {
//       setChanging({ changeStatus: false });
//     }, 2000);
//   }

//   useEffect(() => {
//     // console.log("value of r changed");
//   }, [r]);

//   return (
//     <div className="flex flex-col gap-3">
//       <div>{changing.changeStatus ? "loading" : "not loading"}</div>
//       {JSON.stringify(r)}
//       {r.name}
//       <div className="">
//         <input
//           className="border border-gray-400"
//           name="name"
//           value={r.name}
//           onChange={handleChange}
//           placeholder="name"
//         />
//       </div>
//       <div>
//         <input
//           className="border border-gray-400"
//           name="subject"
//           value={r.subject}
//           placeholder="Subject"
//           onChange={handleChange}
//         />
//       </div>
//     </div>
//   );
// };

// export default UseEffectHook;

import { useEffect, useState } from "react";

const TaskTwo = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      // console.log(count)
      setCount( old => old + 1);
    }, 1000);
  }, []);

  return <div className="text-4xl">Current Count is {count}</div>;
};

export default TaskTwo;
