"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function page() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  console.log(inputValue.email);
  const handleChange = (name, value) => {
    setInputValue({ ...inputValue, [name]: value });
  };
  const submitHandler = async () => {
    const config = { method: "POST", body: JSON.stringify(inputValue) };
    const response = await fetch("/api/login", config);
    console.log(response);
    const json = await response.json();

    if (json["status" === true]) {
      router.replace("/dashboard");
    } else {
      alert(json["msg"]);
    }
  };

  return (
    <main className="w-full">
      <div className=" w-1/3 border rounded mx-auto mt-14 py-3">
        <h1 className=" text-center py-4 text-sky-500">Admin Login</h1>
        <div className="px-5 mb-8">
          <input
            onChange={(e) => {
              handleChange("email", e.target.value);
            }}
            className="border w-full py-3 px-5 rounded"
            type="text"
            placeholder="Email"
            value={inputValue.email}
          />
        </div>
        <div className="px-5 mb-8">
          <input
            onChange={(e) => {
              handleChange("password", e.target.value);
            }}
            className="border w-full py-3 px-5 rounded"
            type="text"
            placeholder="Password"
            value={inputValue.password}
          />
        </div>
        <div className="px-5 mb-8 flex justify-center">
          <button
            onClick={submitHandler}
            className="py-2 px-6 rounded border text-gray-500 hover:bg-sky-300 hover:text-white"
          >
            Login
          </button>
        </div>
      </div>
    </main>
  );
}
