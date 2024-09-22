import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const ManagePanel = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const storageEmail = localStorage.getItem("email");
    const storagePassword = localStorage.getItem("password");

    if (storageEmail === "admin@admin" && storagePassword === "admin") {
      login({ email: storageEmail, password: storagePassword });
      navigate("/userpanel");
    }
  }, [login, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.toLowerCase() === "admin@admin" && password === "admin") {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      login({ email, password });
      navigate("/userpanel");
    } else {
      alert("Kullanıcı bilgilerini yanlış girdiniz lütfen tekrar deneyiniz.");
    }
  };

  return (
    <div className="w-[300px] m-auto my-5 p-5 rounded-[20px] ">
      <div className="flex gap-2">
        <span className="w-[6px] h-[39px] bg-secondary-color"></span>
        <h1 className="text-center font-serif text-3xl dark:text-white">
          TNY Rent a Car Login
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col text-left p-3 gap-5"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-serif text-xl dark:text-white">
            Email - admin@admin
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            className="rounded-[10px]"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="password"
            className="font-serif text-xl dark:text-white"
          >
            Password - admin
          </label>

          <input
            type="password"
            placeholder="Password"
            className="rounded-[10px]"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="bg-light-red h-[44px] font-serif text-label uppercase hover:opacity-90 rounded-[4px] text-white">
          Sign In
        </button>
        <div className="flex justify-center items-center flex-wrap">
          <span className="text-label font-montserrat font-[500] text-labelColor dark:text-white">
            Forgot your password?
          </span>
          <span className="text-main text-[14px] font-montserrat font-[500] underline ml-1 dark:text-white">
            Reset password
          </span>
        </div>
      </form>
    </div>
  );
};

export default ManagePanel;
