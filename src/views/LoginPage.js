import {useState} from 'react';
import "../css/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const baseURL = 'http://localhost:8000/api/';
    const[username,setUser] = useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate();

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
            <div className="flex flex-col">
                <div className="md:items-center md:justify-center flex flex-col containerupper">
                    <div className="flex flex-col items-center md:justify-center mt-20 container">
                        <div className="flex flex-col items-center card">
                            <div >
                                <h2>Log in</h2>
                                <p> Enter your credentials to login to your account. </p>
                            </div>
                            <form onSubmit={HandleVerify}>
                                <div className="rounded-md">
                                    <input name="identity" type="text" onChange={(e) => {setUser(e.target.value)}} placeholder="Email or Phone number" />
                                </div>
                                <div className="rounded-md">
                                    <input name="password" type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Password"/>
                                </div>
                                <button> Login </button>
                            </form>
                        </div>
                        <div className="flex whitespace-nowrap float-right tracking-tight text-sm gap-1 mt-20">
                            <p onClick={() => navigate("/signup")} className="text-theme-color cursor-pointer underline">
                                Create a free account
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}