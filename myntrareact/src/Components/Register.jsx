import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../Styles/Register.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Register = () => {
  const [myntraReg, setMyntraReg] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Buyer",
    cart: [],
  });

  const router = useNavigate();

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setMyntraReg({ ...myntraReg, [name]: value });
  };

  const handleRegisterMyntra = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword, role } = myntraReg;

    if (name && email && password && confirmPassword && role) {
      if (password === confirmPassword) {
        const response = await axios.post("http://localhost:8000/register", {
          myntraReg,
        });

        if (response.data.success) {
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
      } else {
        toast.error("password Doesnot match");
      }
    } else {
      toast.error("all fields are mandatory");
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Navbar />
      <div id="register-body">
        <div id="registration-form">
          <div id="left-reg">
            <div id="left-img">
              <img
                src="https://previews.123rf.com/images/pressmaster/pressmaster1205/pressmaster120500115/13476073-vertical-shot-of-attractive-young-people-doing-shopping-together.jpg"
                alt=""
              />
            </div>
          </div>
          <div id="right-reg">
            <div id="main-form">
              <h2>Sign Up</h2>

              {/* <!-- registering Form --> */}

              <form onSubmit={handleRegisterMyntra}>
                <div className="input-details">
                  <input
                    type="text"
                    placeholder="User Name"
                    id="reg_userName"
                    name="name"
                    onChange={handleInputs}
                    value={myntraReg.name}
                  />
                </div>
                <div className="input-details">
                  <input
                    name="email"
                    type="email"
                    placeholder="user Email"
                    id="reg_Email"
                    onChange={handleInputs}
                    value={myntraReg.email}
                  />
                </div>
                <div className="input-details">
                  <input
                    name="password"
                    type="password"
                    placeholder="*************"
                    id="reg_Password"
                    onChange={handleInputs}
                    value={myntraReg.password}
                  />
                </div>
                <div className="input-details">
                  <input
                    type="password"
                    placeholder="*************"
                    id="reg_Cpassword"
                    name="confirmPassword"
                    onChange={handleInputs}
                    value={myntraReg.confirmPassword}
                  />
                </div>
                <div className="input-details">
                  <select
                    value={myntraReg.role}
                    onChange={handleInputs}
                    name="role"
                  >
                    <option value="">BUYER OR SELLER</option>
                    <option value="Buyer">Buyer</option>
                    <option value="Seller">Seller</option>
                  </select>
                </div>
                {/* <div className="input-checkbox">
                  <input type="checkbox" />
                  <p>
                    I agree to the <b> Terms and Conditons..</b>
                  </p>
                </div> */}

                <div id="sign-up">
                  <div>
                    <button>Sign Up</button>
                  </div>
                  <div>
                    <p>
                      <NavLink to="/login">
                        Already Have an Account? <span>Sign in</span>
                      </NavLink>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

// const [myntraReg, setMyntraReg] = useState({
//   myntraUser: "",
//   myntraEmail: "",
//   myntraPassword: "",
//   myntraCpassword: "",
//   myntraRole: "Buyer",
//   cart: [],
// });

// const route = useNavigate();

// useEffect(() => {
//   const getmyntraUser = JSON.parse(localStorage.getItem("currentmyntrauser"));

//   if (getmyntraUser) {
//     route("/");
//   }
// }, []);

// const handleInputs = (e) => {
//   const { name, value } = e.target;

//   setMyntraReg({ ...myntraReg, [name]: value });
// };

// const {
//   myntraUser,
//   myntraEmail,
//   myntraPassword,
//   myntraCpassword,
//   myntraRole,
// } = myntraReg;
// const handleRegisterMyntra = async (e) => {
//   e.preventDefault();

//   if (
//     myntraUser &&
//     myntraEmail &&
//     myntraPassword &&
//     myntraCpassword &&
//     myntraRole
//   ) {
//     if (myntraPassword.length > 3) {
//       if (myntraPassword === myntraCpassword) {
//         // **************// localstorage setup //*************************** */
//         let getMyntraRegUser =
//           JSON.parse(localStorage.getItem("myntraRegUser")) || [];
//         let flag = false;
//         for (let i = 0; i < getMyntraRegUser.length; i++) {
//           if (getMyntraRegUser[i].myntraEmail === myntraReg.myntraEmail) {
//             flag = true;
//           }
//         }
//         if (!flag) {
//           let regUSerObj = {
//             ...myntraReg,
//           };
//           getMyntraRegUser.push(regUSerObj);
//           localStorage.setItem(
//             "myntraRegUser",
//             JSON.stringify(getMyntraRegUser)
//           );
//           toast.success("successfully registered");
//           setMyntraReg({
//             myntraUser: "",
//             myntraEmail: "",
//             myntraPassword: "",
//             myntraCpassword: "",
//             myntraRole: "",
//           });
//           route("/login");
//         } else {
//           toast.warn("detail already registered please try login ");
//         }
//       } else {
//         toast.error("password doesnot match");
//       }
//     } else {
//       toast.error("password must contain 3 or more characters");
//     }
//   } else {
//     toast.error("please fill all the fields");
//   }
// };
