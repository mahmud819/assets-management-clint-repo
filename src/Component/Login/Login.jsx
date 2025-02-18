
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import signInLottie from '../../assets/Lottie/signInAnimation.json'
import axios from "axios";
import Swal from 'sweetalert2';
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import useAxios from "../../SharedElement/Hooks/useAxios";

const Login = () => {
    const {userLogin,signInWithGoogle} = useContext(AuthContext);
  
    const navigate = useNavigate();
    const location = useLocation();
    const axiosHook = useAxios();
    const handleLogin = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const role = form.role.value.toLowerCase();
      // console.log(role);
      userLogin(email, password)
        .then((res) => {
          // console.log(res);
          Swal.fire({
                    title: "Well Done!",
                    text: "Login successfull!",
                    icon: "success"
                  });
                  const user = res?.user?.email;
        axiosHook.post('/jwt',user,{withCredentials:true})
        .then(res=>{
        console.log(res.data);
                })        
          
          console.log(res.user);
          updateProfile(user,{
            displayName: name,
            
          })
          .then(()=>{
            console.log('user name updated properly',name,role);
          })
          .catch(err=>{
            console.log(err,err.message);
          })
        

          e.target.reset();
          navigate(location?.state?location.state:'/')
        })
        .catch((error) => {
          console.log(error);
        });
      // console.log({email,password})
    };
    const handleSignInGoogle =()=>{
      signInWithGoogle()
      .then(result=>{
        // console.log(result);
        if(result.operationType == 'signIn'){
          Swal.fire({
            title: 'Welcome!,Welcome!',
            text: 'Login in with Google Successfuly',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        }
        navigate(location?.state?location.state:'/');
      })
      .catch(error=>{
        // console.log(error);
      })
    }
    return (
      <div className="bg-base-200 min-h-screen">
        <div className="flex justify-center items-center flex-col lg:flex-row-reverse  lg:p-4">
          <div className="text-center lg:text-left lg:ml-4">
            <Lottie animationData={signInLottie}></Lottie>
          </div>
          <div className="bg-base-100 w-full max-w-md shrink-0 shadow-2xl rounded-lg p2 lg:p-4">
            <h1 className="text-2xl  font-bold text-center">Login now</h1>
            <button onClick={handleSignInGoogle} className='w-[100%] mx-auto btn mt-2'>Login With Google</button>
            <h1 className=' font-bold text-xl text-center pt-2'>Or</h1>
            <form onSubmit={handleLogin} className="flex flex-col rounded-lg">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  placeholder="User Name"
                  name="name"
                  className="input input-bordered input-sm"
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
                  className="input input-bordered input-sm"
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
                  className="input input-bordered input-sm"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              {/* <div className="form-control">
              <label className="label">
                <span className="label-text">Login As</span>
              </label>
              <select  name='role' className="select select-bordered w-full max-w-xs">
                <option >
                  Login as HR or Employee
                </option>
                <option>HR</option>
                <option>Employee</option>
              </select>
            </div> */}

              <div className="form-control">
                <button className="btn btn-primary btn-sm text-large">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
export default Login;