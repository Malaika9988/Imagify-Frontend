import userLine from '../assets/user-line.png'
import mailLine from '../assets/mail-line.png'
import lockLine from '../assets/lock-line.png'
import close from '../assets/close.png'
import { useEffect, useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
  const [state, setState] = useState('Login');
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmithandler = async (e) => {
    e.preventDefault();
    try {
      if (state === 'Login') {
        const { data } = await axios.post(backendUrl + '/api/user/login', { name, email, password });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.getItem('token', data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token', data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };




  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-xs bg-black/30 flex justify-center items-center">
      <form
        onSubmit={onSubmithandler}
        className="relative bg-white p-4 rounded-xl text-slate-500 w-full max-w-xs"
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium">{state}</h1>
        <p className="text-sm text-center text-neutral-400 mt-2">
          Welcome back! Please {state === 'Login' ? 'Sign in' : 'Sign up'} to continue
        </p>

        {state !== 'Login' && (
          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
            <img src={userLine} alt="user icon" className="w-6 h-6" />
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="outline-none text-sm"
              placeholder="Full Name"
              required
            />
          </div>
        )}
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
          <img src={mailLine} alt="email icon" className="w-6 h-6" />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="outline-none text-sm"
            placeholder="Email ID"
            required
          />
        </div>
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
          <img src={lockLine} alt="password icon" className="w-6 h-6" />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="outline-none text-sm"
            placeholder="Enter Your Password"
            required
          />
        </div>
        <p className="text-sm text-blue-600 my-4 cursor-pointer">Forgot Password?</p>
        <button className="bg-blue-600 w-full text-white py-2 rounded-full">
          {state === 'Login' ? 'Login' : 'Create account'}
        </button>

        {state === 'Login' ? (
          <p className="mt-5 text-center">
            Don’t have an account?{' '}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState('Sign Up')}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?{' '}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState('Login')}
            >
              Login
            </span>
          </p>
        )}

        <img
          onClick={() => setShowLogin(false)}
          src={close}
          alt="close icon"
          className="absolute top-5 right-5 cursor-pointer w-3 h-3"
        />
      </form>
    </div>
  );
};

export default Login;
