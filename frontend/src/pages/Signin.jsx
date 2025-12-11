import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#]).{8,}$/;

const signupSchema = z.object({
  name: z.string().nonempty("Name is required").min(3, "At least 3 characters"),
  email: z.string().nonempty("Email is required").email("Invalid email"),
  password: z
    .string()
    .nonempty("Password is required")
    .regex(
      passwordRegex,
      "Must include 8+ chars, upper, lower, number & special"
    ),
});

const loginSchema = z.object({
  email: z.string().nonempty("Email is required").email("Invalid email"),
  password: z
    .string()
    .nonempty("Password is required")
    .regex(
      passwordRegex,
      "Must include 8+ chars, upper, lower, number & special"
    ),
});

const Signin = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const schema = isLogin ? loginSchema : signupSchema;

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", password: "" },
    mode: "onChange",
  });

  const passwordValue = watch("password", "");

  const checks = useMemo(() => {
    return {
      min8: passwordValue.length >= 8,
      hasUpper: /[A-Z]/.test(passwordValue),
      hasLower: /[a-z]/.test(passwordValue),
      hasNumber: /[0-9]/.test(passwordValue),
      hasSpecial: /[@$!%*?&#]/.test(passwordValue),
    };
  }, [passwordValue]);

  const passwordValid = Object.values(checks).every(Boolean);

  useEffect(() => {
    reset({ name: "", email: "", password: "" });
  }, [isLogin, reset]);

  const form = isLogin
    ? {
        title: "Welcome Back!",
        description: "Enter your details below to log in to your account",
        btn: "Log In",
        btmT: "Don’t have an account? ",
        btm: "Sign Up",
      }
    : {
        title: "Welcome!",
        description: "Enter your details below to create your account",
        btn: "Sign Up",
        btmT: "Already have an account? ",
        btm: "Log In",
      };

  const onSubmit = (data) => {
    if (!isLogin) {
      const users = JSON.parse(localStorage.getItem("user") || "[]");
      users.push(data);
      localStorage.setItem("user", JSON.stringify(users));
      alert("Signup Successful!");
      setIsLogin(true);
      reset();
    } else {
      const users = JSON.parse(localStorage.getItem("user") || "[]");
      const user = users.find(
        (u) => u.email === data.email && u.password === data.password
      );
      if (user) {
        alert("Login Successful!");
        navigate("/Home");
      } else {
        alert("Invalid Credentials!");
      }
    }
  };

  const toggleMode = () => setIsLogin((s) => !s);

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-cover bg-no-repeat bg-bottom bg-[url('https://i.pinimg.com/1200x/5e/e3/01/5ee301cd762833921fc2e46befe4380d.jpg')] px-4 py-6">
      <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[60%] xl:w-[45%] bg-transparent backdrop-blur-md border border-black/20 rounded-3xl shadow-lg flex justify-center items-center py-8 px-6 sm:px-10 md:px-14">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md flex flex-col"
          key={isLogin ? "login" : "signup"}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center">
            {form.title}
          </h1>
          <p className="mt-2 text-center text-white/80">{form.description}</p>

          {!isLogin && (
            <div className="mt-5">
              <label className="text-white text-sm sm:text-base">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 p-3 rounded-2xl bg-white/80 text-black outline-none focus:ring-2 focus:ring-purple-500 font-sans"
                autoComplete="off"
                {...register("name")}
              />
              <span className="text-xs text-pink-400">
                {errors.name?.message}
              </span>
            </div>
          )}

          <div className="mt-4">
            <label className="text-white text-sm sm:text-base">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-3 rounded-2xl bg-white/80 text-black outline-none focus:ring-2 focus:ring-purple-500 font-sans"
              autoComplete="off"
              {...register("email")}
            />
            <span className="text-xs text-pink-400">{errors.email?.message}</span>
          </div>

          <div className="mt-4">
            <label className="text-white text-sm sm:text-base">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 p-3 rounded-2xl bg-white/80 text-black outline-none focus:ring-2 focus:ring-purple-500 font-sans"
              autoComplete="new-password"
              {...register("password")}
            />
            <span className="text-xs text-pink-400">
              {errors.password?.message}
            </span>
          </div>

          <button
            type="submit"
            className="mt-6 w-full py-3 bg-gradient-to-r from-blue-800 via-purple-700 to-purple-900 rounded-xl text-white text-lg font-semibold hover:scale-[1.02] transition-transform duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={!passwordValid || isSubmitting}
          >
            {form.btn}
          </button>

          <p className="mt-3 text-center text-purple-200 text-sm sm:text-base">
            {form.btmT}
            <span
              className="text-purple-400 font-bold cursor-pointer hover:underline"
              onClick={toggleMode}
            >
              {form.btm}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;


