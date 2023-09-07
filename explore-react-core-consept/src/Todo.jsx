// export default function Todo({task}) {
//     return (
//         <li>Task: {task} </li>
//     )
// }


//  conditional rendering option 01
// export default function Todo({task, isDone}) {
//    if (isDone === true) {
//     return <li>Finish: {task}</li>
//    }
//    else{
//     return <li>Work on: {task}</li>
//    }
// }


// conditional rendering option 02
// export default function Todo({task, isDone}) {
//     if(isDone) {
//         return <li>Finish: {task}</li>
//     }
//     return <li>Work on: {task}</li>
// }


//conditional rendering option 03
// export default function Todo({task, isDone}) {
//     return (
//         <li>{isDone ? 'Finished' : 'Work On'} : {task}</li>
//     )
// }


// conditional rendering option 04 &&
//  export default function Todo({task, isDone}) {
//         return (
//             <li>{task} {isDone && ' : Done'} </li>
//         )
//     }
   
   
// conditional rendering option 05 &&
//  export default function Todo({task, isDone}) {
//     return (
//         <li>{task} {isDone || ' : Do it'} </li>
//     )
// }


// conditional rendering option 06
    export default function Todo({task, isDone}) {
        let listItem;
        if(isDone) {
            listItem = <li>Finish: {task}</li>
        }
        else{
            listItem = <li>Work on: {task}</li>
        }
        return listItem
    }