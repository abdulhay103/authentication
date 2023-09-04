export default function login() {
  return (
    <div className=" w-1/3 border rounded mx-auto my-auto mt-14">
      <h1 className=" text-center py-4 text-gray-500">Login</h1>
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
        <button className="py-3 px-6 rounded border mx-auto text-gray-500">
          Login
        </button>
      </div>
    </div>
  );
}
