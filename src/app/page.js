import Link from "next/link";

export default function page() {
  return (
    <main>
      <div className=" w-1/3 border mx-auto mt-36 p-5">
        <h1 className="text-center mt-5 text-sky-500">
          Welcome to Assignment for Module-14
        </h1>
        <div className=" flex justify-center py-5">
          <Link
            href="/login"
            className="py-2 px-6 rounded border text-orange-500 hover:bg-orange-300 hover:text-white"
          >
            Check Authentication with nodemailer
          </Link>
        </div>
      </div>
    </main>
  );
}
