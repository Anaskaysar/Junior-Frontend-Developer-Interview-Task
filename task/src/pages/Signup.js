import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import googleIcon from "../Assests/images/googleIcon.png"
import lock from "../Assests/Icons/lock_Icon.png";
// import Error from "../components/Error";
import Navbar from "../components/Navbar";
// import { useRegisterMutation } from "../features/auth/authApi";
import axios from "axios";


function Signup() {

    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);
    const [error, setError] = useState('')

    const eye = () => {
        setShow(!show)
    }

    const emailValidation = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

        if (!email.match(regEx)) {
            setMessage("Enter a Valid Email Address")
            return false;
        }
        else {
            setMessage(' ')
            return true;
        }
    };

    const handleSubmit = () => {
        axios
            .post("https://reqres.in/api/register", {
                email: email,
                password: password,
            })
            .then((result) => {
                console.log(result.data);
                navigate("/dashboard")
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <Navbar />

            <div>
                <h1 className="font-bold  text-center text-2xl pt-[30px]">Getting Started</h1>
                <h4 className="text-center text-[#8A94A6] text-2xl font-medium pt-3">
                    Create an account to continue!
                </h4>
            </div>

            <div className="pt-5 m-auto w-[540px]">
                <div className="flex justify-between">
                    <Link to='/' className="flex bg-[#F0F5FA] w-[255px] justify-center rounded-2xl	h-[58px] items-center	">
                        <img src={googleIcon} alt="" />
                        <p className="pl-2 text_Subtitles font-bold">Sign Up with Google</p>
                    </Link>

                    <Link to='/' className="flex bg-[#F0F5FA] w-[255px] justify-center rounded-2xl	h-[58px] items-center">
                        <i className="text-2xl text_Subtitles fa-brands fa-apple"></i>
                        <p className="pl-2 text_Subtitles font-bold">Sign Up with Apple ID</p>
                    </Link>
                </div>
            </div>

            <div className='m-auto w-[540px] flex justify-between h-[24px]'>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider text-[#B0B7C3]">OR</div>
                </div>
            </div>

            <div className="flex justify-center md:flex-none">
                <div className="text-center">
                    <div className="w-[540px] m-auto pt-10">
                        <form onClick={handleSubmit}>
                            <div className="relative">
                                <i className="absolute left-4 text_Subtitles top-5 fa-sharp fa-solid fa-at"></i>
                                <input
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your Email"
                                    onKeyUp={emailValidation}
                                    className="w-full h-[58px] border border-[##F3F3F3] font-semibold rounded-2xl pl-12"
                                />
                                <span className="justify-items-start text-red-500 ">{message}</span>
                            </div>

                            <div className="pt-5 relative">
                                <i className="absolute left-4 bottom-5 text_Subtitles fa-sharp fa-solid fa-face-smile"></i>
                                <input
                                    type="text"
                                    name="Your Name"
                                    value={userName}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Your name"
                                    className="w-full h-[58px] border border-[##F3F3F3] font-semibold rounded-2xl pl-12"
                                />
                            </div>

                            <div className="relative pt-5">
                                <img src={lock} alt="" className="absolute left-4 bottom-4" />
                                <input
                                    type={show ? "text" : "password"}
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    className="w-full h-[58px] border border-[##F3F3F3] font-semibold rounded-2xl pl-12"
                                />
                                <button>
                                    <i className="absolute right-5 bottom-4 text_Subtitles fa-solid fa-eye " onClick={eye} ></i>
                                </button>
                            </div>

                            <div className="flex pt-5 pb-5">
                                <input
                                    type="checkbox" className="p-2" value={agree}
                                    onChange={(e) => setAgree(e.target.checked)}
                                    required
                                />
                                <span className="pl-4 font-semibold text_Subtitles">I agree to the Terms and Conditions</span>
                            </div>
                            <div type="submit" className="w-full rounded-2xl bg-[#377DFF] text-center h-[58px] flex justify-center items-center" >
                                <button className="text-base font-semibold text-white font-medium	">Sign In</button>
                            </div>


                        </form>
                    </div>
                    <div className="pt-5 text-center">
                        <span className="text-base text_Subtitles font-1xl	">
                            Already have an account?
                        </span>
                        <span className="text-[#377DFF] ml-2 text-base font-medium">
                            <Link to="/signin">Sign In</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
