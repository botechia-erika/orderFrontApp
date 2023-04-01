import { Table, Badge } from "@chakra-ui/react";
export function TableCart({ tasks, setTasks, orderPriority1, orderPriority2 }) {
  return (
    <Table w={"100%"} h={"50%"}>
      <thead>
        <tr>
          <td></td>
          <td>Confira Nossa Lista</td>
          <td>
            <select>
              <option onClick={orderPriority1}>MAIOR PRECO</option>
              <option onClick={orderPriority2}>MENOR PRECO</option>
            </select>
          </td>
        </tr>
      </thead>
      {[...tasks].map((task) => (
        <tr key={task.id}>
          <td>
            <img src={task.img} alt={""} />
            <Badge>ref: #0{task.id}</Badge>
          </td>
          <td>
            <p>{task.typeCategory}</p>
          </td>
          <td>
            <p>{task.priority}</p>
          </td>
        </tr>
      ))}
    </Table>
  );
}
