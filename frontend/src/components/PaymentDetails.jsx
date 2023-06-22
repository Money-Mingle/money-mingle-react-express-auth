import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { loadSusuDetails } from "../adapters/susu-adapter";
import SusuMembers from "./Members";
import CurrentUserContext from "../contexts/current-user-context";
import Button from '@mui/material/Button';


export default function detailsLink() {
  const {id} = useParams()
  const [errorText, setErrorText] = useState(null);
  const [data, setData] = useState([])
  const { currentUser } = useContext(CurrentUserContext);
  useEffect(()=>{
    const loadDetails = async () =>{
      const [details, error] = await loadSusuDetails(id);
      if(error) return setErrorText(true);
      setData(details)
      
    }
    loadDetails();
  },[id])
  console.log(data);

    return (
      <>
      <ul>
        {
          data.map((user) => <div key={user.user_id}> <SusuMembers user={user} owner={currentUser.id!==user.owner ? true : false}/> </div>)
        }
        {/* {
          data.length > 0 && currentUser.id===data[0].owner ? <Button variant="contained">Submit Changes</Button> : <Button variant="contained" disabled>Submit Changes</Button>
        } */}
      </ul>
        <h1>{data.length > 0 ? data[0].name : ''}</h1>

        <h1>{data.length > 0 ? data[0].next_payment: ''}</h1>
        <h1>{data.length > 0 ? data[0].payment_amount : ''}</h1>
      </>
        // <div className = "payment-details">
        //   <label>
        //     <span className = "name">Amanda</span>
        //     <input type="checkbox" />
        //   </label>
        //   <label>
        //     <span className = "name">Ashley</span>
        //     <input type="checkbox" />
        //   </label>
        //   <label>
        //     <span className = "name">Casterly</span>
        //     <input type="checkbox" />
        //   </label>
        //   <label>
        //     <span className = "name">Luis</span>
        //     <input type="checkbox" />
        //   </label>
        // </div>
      );
}
