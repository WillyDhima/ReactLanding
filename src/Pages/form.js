import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Form_input = () => {
    const [emil, setEmail] = useState("");
    const [pasword, setPassword] = useState("");

    let handleSubmit= async (e) =>{
        e.preventDefault();
        try{
            let res = await fetch("https://reqres.in/api/register", {
                method: "POST",
                headers : {"Content-Type": "application/json"} ,
                body: JSON.stringify({
                    "email": emil,
                    "password": pasword
                }),
            });
            let resJson = await res.json();
            console.log(resJson)
            if(res.status === 200){
                setEmail("");
                setPassword("");
            }else{
                console.log(res.status)
            }
        }catch(err){
            console.log(err);
        }
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group className="col-sm-9">
                <Form.Label>EMail</Form.Label>
                <Form.Control type="email" value={emil} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="col-sm-9">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={pasword} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Form_input;