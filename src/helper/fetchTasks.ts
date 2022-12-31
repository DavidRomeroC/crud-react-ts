export const getDataTasks = async () => {
    try {
        const resp = await fetch('http://localhost:5000/tasks');
        const data = await resp.json()
        return data
    } catch (error) {
        return error;
    }
}

// export const getDataTasks = () => {
//     return async () => {
//         const respData = await getData()
//         return respData
//     }

// }



// export const getDataTasks = async () => {

//     // const data = fetch('http://localhost:5000/tasks')
//     //     .then(res => res.json())
//     //     .then(data => data)
//     //     .catch(err => console.log(err))

//     const resp = await fetch('http://localhost:5000/tasks');
//     const data = await resp.json()

//     console.log(data)

//     return data;
// }