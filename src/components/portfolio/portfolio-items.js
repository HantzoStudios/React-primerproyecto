// Este codigo es el que estaba de base, componente funcional 
// import React from "react";

// export default function() {
//   return (
//     <div>
//       <h3>Portfolio Item</h3>
//     </div>
//   );
// }

import React from "react";

export default function(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <h4>{props.url}</h4>
    </div>
  );
}