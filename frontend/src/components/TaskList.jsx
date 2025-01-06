import {useEffect, useState } from "react"
import axio fromk 'axios'

function TaskList(){
  const [data,setData]=useState([])
  return(
    <>
        <table>
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Dis</th>

               </tr>

          </thead>
          <tbody>
              { data.map((value,index)=>(
                <tr key={index}>
                  <td>{value.title}</td>
                  <td>{value.dis}</td>

                  

                </tr>
              ))}
          </tbody>

      </table>

  </>
  )
}
export default TaskList