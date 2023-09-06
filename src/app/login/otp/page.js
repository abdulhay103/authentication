"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function page() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState({
    otp: "",
  });

  //Onchange Handler
  const handleChange = (name, value) => {
    setInputValue({ ...inputValue, [name]: value });
  };

  //Submit Handler
  const submitHandler = async () => {
    const config = { method: "POST", body: JSON.stringify(inputValue) };
    const response = await fetch("/api/login/otp", config);
    const json = await response.json();

    if (json["status"] === true) {
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
              handleChange("otp", e.target.value);
            }}
            className="border w-full py-3 px-5 rounded"
            type="text"
            placeholder="OTP"
            value={inputValue.otp}
          />
        </div>
        <div className="px-5 mb-8 flex justify-center">
          <button
            onClick={submitHandler}
            className="py-2 px-6 rounded border text-gray-500 hover:bg-sky-300 hover:text-white"
          >
            Verify
          </button>
        </div>
      </div>
    </main>
  );
}
