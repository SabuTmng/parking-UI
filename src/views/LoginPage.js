import {useState} from 'react';
import "../css/login.css";
import axios from "axios";

export default function LoginPage() {
    const baseURL = 'http://localhost:8000/api/'
    const[username,setUser] = useState("")
    const[password,setPassword] = useState("")
    function HandleVerify(e){
        e.preventDefault();
        axios.post(baseURL + 'token/',{
            email: username,
            password: password,
        })
        .then(
            (response) => {
                const access_token = response.data.access;
                const refresh_token = response.data.refresh;
                localStorage.setItem("access_token", access_token);
                localStorage.setItem("refresh_token", refresh_token);
                console.log("now hitting the roles")
                // get the role of the user
                axios.get(baseURL + 'v1/roles/', {
                    headers: {
                        Authorization: "Bearer " + access_token
                    }
                })
                .then(
                    (response) => {
                        console.log(response.data);
                        localStorage.setItem("role", response.data.role);
                        console.log("response",response.data);
                        const role = response.data.role;
                        if(role === "admin" ){
                            window.location.href = "/admin";
                        } else {
                            window.location.href = "/parking"
                        }
                    },
                    (error) => {
                        console.log(error)
                    }
                )
            },
            (error) => {
                console.log(error)
            }
        )

    }
    return (
    <div className="wrapper">
        <form onSubmit={HandleVerify}>
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder="Email" onChange={(e) => {setUser(e.target.value)}} required/>
                <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} required/>
                <i className='bx bxs-lock-alt'></i>
            </div>
            <button type="submit" className="btn" onClick={HandleVerify}>Login</button>
        </form>
    </div>
)
}