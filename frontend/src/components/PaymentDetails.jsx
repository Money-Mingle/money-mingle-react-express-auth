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
       <h1>Susu Name: {data.length > 0 ? data[0].name : ''}</h1>
      <ul>
        {
          data.map((user) => <div key={user.user_id}> <SusuMembers user={user} owner={currentUser.id!==user.owner ? true : false}/> </div>)
        }
      </ul>
      <h2>Payment Interval: {data.length > 0 ? data[0].next_payment: ''} Days</h2>
      <h1>Payment Amount: ${data.length > 0 ? data[0].payment_amount : ''}</h1>
       <h3>Susu ID:{data.length > 0 ? data[0].susu_id:''}</h3>
      </>
      );
}
