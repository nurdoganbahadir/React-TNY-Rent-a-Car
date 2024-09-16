const ManagePanel = () => {
  return (
    <div className="w-[300px] m-auto my-5 p-5 rounded-[20px] ">
      <div className="flex gap-2">
        <span className="w-[6px] h-[39px] bg-secondary-color"></span>
        <h1 className="text-center font-serif text-3xl dark:text-white">
          TNY Rent a Car Login
        </h1>
      </div>

      <form className="flex flex-col text-left p-3 gap-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-serif text-xl dark:text-white">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            className="rounded-[10px]"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="password"
            className="font-serif text-xl dark:text-white"
          >
            Password
          </label>

          <input
            type="password"
            placeholder="Password"
            className="rounded-[10px]"
            required
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
