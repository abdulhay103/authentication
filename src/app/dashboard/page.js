"use client";
import { useRouter } from "next/navigation";
import { Cookies } from "universal-cookie";

export default function page() {
  const router = useRouter();
  const cookies = new Cookies();

  const Logout = async () => {
    cookies.remove("token");
    // router.replace("/");
  };

  return (
    <main>
      <div className=" w-1/3 border mx-auto mt-36 p-5">
        <h1 className="text-center mt-5 text-sky-500">Dashboard</h1>
        <div className=" flex justify-center py-5">
          <button
            onClick={Logout}
            className="py-2 px-6 rounded border text-red-500 hover:bg-red-300 hover:text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </main>
  );
}
