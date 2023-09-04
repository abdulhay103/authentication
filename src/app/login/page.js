import Link from "next/link";

export default function login() {
  return (
    <main className="w-full">
      <div className=" w-1/3 border rounded mx-auto mt-14 py-3">
        <h1 className=" text-center py-4 text-sky-500">Admin Login</h1>
        <div className="px-5 mb-8">
          <input
            className="border w-full py-3 px-5 rounded"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="px-5 mb-8">
          <input
            className="border w-full py-3 px-5 rounded"
            type="text"
            placeholder="Password"
          />
        </div>
        <div className="px-5 mb-8 flex justify-center">
          {/* <button className="py-2 px-6 rounded border text-gray-500 hover:bg-sky-300 hover:text-white">
            Login
          </button> */}
          <Link
            href="/dashboard"
            className="py-2 px-6 rounded border text-gray-500 hover:bg-sky-300 hover:text-white"
          >
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}
