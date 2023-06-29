import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import "../styles/users.css";


function InviteCard({invites}) {
    const navigate = useNavigate();
    const getFetchOptions = (body, method = "POST") => ({
        method,
        credentials: "include", // IMPORTANT, this tells fetch to include cookies
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    const deleteOptions = {
        method: 'DELETE',
        credentials: 'include',
      };

async function handleAccept (){
    console.log("accept")
    const user_id = invites.receiver_id

    const susu_id = invites.susu_id
    const make_payments = false
    let cardoptions = getFetchOptions({ user_id, susu_id, make_payments });
    console.log(cardoptions)
    const addcard = await fetch("/api/susuform", cardoptions);
    let deletedoptions = getFetchOptions({}, 'DELETE');
    const deleteInvite = await fetch(`/api/invites/${invites.id}`, deletedoptions)
    navigate(`/susu/${susu_id}`)
}
async function handleDelete(){
    let cardoptions = getFetchOptions({}, 'DELETE');
    const deleteInvite = await fetch(`/api/invites/${invites.id}`, cardoptions)
}

  return (
    <div className="individual-card">
      <Card style={{ width: '18rem' }} id="card_container">
      <Card.Body>
        <Card.Title id="card_title">{invites.name}</Card.Title>
        <Card.Text id="card_body">
          {invites.username} has invited you to Join Their Susu
        </Card.Text>
        <Button className="card_buttons" variant="primary" onClick={handleDelete}>delete</Button>
        <Button className="card_buttons" variant="primary" onClick={handleAccept}>accept</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default InviteCard;