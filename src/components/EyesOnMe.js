import React from 'react';

// function EyesOnMe() {

//     function focus() {
//         console.log('Good!')
//     }

//     function blur () {
//         console.log('Hey! Eyes on me!')
//     }

//     let thing = true

//     return (
//         <div>
//           <button
//             onClick={() => {
//                 if (thing) {
//                     thing = false
//                     blur()
//                 }else {
//                     thing = true
//                     focus()
//                 }
//             }}>
//             Eyes on me
//           </button>
//         </div>
//       );
// }

function EyesOnMe() {

    function focus() {
        console.log('Good!')
    }

    function blur () {
        console.log('Hey! Eyes on me!')
    }

    return (
        <div>
          <button onFocus={focus} onBlur={blur}>
            Eyes on me
          </button>
        </div>
      );
}

export default EyesOnMe



