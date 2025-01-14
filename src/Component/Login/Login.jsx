
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import signInLottie from '../../assets/Lottie/signInAnimation.json'
import axios from "axios";
import Swal from 'sweetalert2';
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
// import { updateProfile } from "firebase/auth";

const Login = () => {
    const { userLogin } = useContext(AuthContext);
  
    const navigate = useNavigate();
    const location = useLocation();
    const handleLogin = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      userLogin(email, password)
        .then((res) => {
          // console.log(res);
          Swal.fire({
                    title: "Well Done!",
                    text: "Login successfull!",
                    icon: "success"
                  });
          const user = res.user;
          // updateProfile(user,{
          //   displayName: name
          // })
          // .then(()=>{
          //   console.log('user name updated properly',name);
          // })
          // .catch(err=>{
          //   console.log(err,err.message);
          // })
          // const newUser = {email : email,name : name}
          // axios.post('https://volunteer-website-server-mu.vercel.app/jwt',newUser,{withCredentials:true})
          // .then(res=>{
          //   console.log(res.data);
          // })
          
          e.target.reset();
          navigate(location?.state?location.state:'/')
        })
        .catch((error) => {
          console.log(error);
        });
      console.log({email,password})
    };
    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie animationData={signInLottie}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  placeholder="User Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
export default Login;