import { useEffect } from "react";
import { Button, Checkbox, TextField } from "@material-ui/core";
import { useState } from "react";
import "./Table.css";
import { collection, query, where, getDocs } from "firebase/firestore";
import fb from "../../Firebase";
import { deleteDoc, getFirestore } from "@firebase/firestore";

export default function ChildsList() {
  const db = getFirestore(fb);
  const [childs, setChilds] = useState([]);
  const [enabledChild, setEnabledChild] = useState(true);
  const [enabledChildsAll, setEnabledChildsAll] = useState(false);
  const kids = query(collection(db, "kids"));
  const handleEnableChild = () => {
    setEnabledChild(!enabledChild);
  };
  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(kids);
      const dataResults = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        dataResults.push(
            doc.data()
          );
        console.log(doc.data());
      });
      setChilds(dataResults);
    };
    getData();
    [...childs].map((child) => console.log(child));
  }, []);
  const childDelete = async(email) =>  {
  }
  const childUpdate = (id) => {

  }
  return (
    <div style={{ height: 400, width: "100%", marginTop: 20 }}>
      <table className="table">
        <thead>
          <th> </th>
          <th>Nombre Infante</th>
          <th>Edad Infante</th>
          <th>Nombre Acudiente</th>
          <th>Correo de Contácto</th>
          <th>Teléfono de Contácto</th>
          <th>Acciones</th>
        </thead>
        <tbody>
          {childs.map((child) => (
            <tr >
              <td className="data-label"> </td>
              <td className="data-label">
                {" "}
                <TextField type="text" value={child.fullNameKid} />{" "}
              </td>
              <td className="data-label">
                {" "}
                <TextField type="text" value={child.age} />{" "}
              </td>
              <td className="data-label">
                {" "}
                <TextField type="text" value={child.fullnNameGuardian} />{" "}
              </td>
              <td className="data-label">
                {" "}
                <TextField type="email" value={child.contactEmail} />{" "}
              </td>
              <td className="data-label">
                {" "}
                <TextField value={child.contactPhone} />{" "}
              </td>
              <td className="data-label">
                <Button type="submit" style={{backgroundColor:"red", width:120, color:"#fff"}} onClick={() => childUpdate(child.id) } >
                  Actualizar
                </Button>
                <Button type="submit" style={{backgroundColor:"#77dd77", width:120, color:"#fff"}} onClick={()=> childDelete(child.id)} >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
