import Image from "next/image"
import books from "@/assets/images/books.png"

function page() {
  return (
    <div className="w-full h-screen flex text-white">
        <div className=" h-full w-1/2 flex items-center justify-center pb-24">
            <div className="w-1/2 min-w-1/2 flex flex-col gap-10">
                <span className="text-3xl font-semibold text-center">Login</span>
                <form action="" method="post" className="flex flex-col gap-2">
                    <input type="email" name="email" id="email" />
                    <input type="password" name="password" id="password" />
                    <button className="bg-amber-400 hover:bg-amber-500 ease-linear duration-150 text-black font-semibold rounded-lg mt-10" type="submit">Login</button>
                </form>
                <div className="flex flex-col gap-3 text-center ">
                    <span>Don't have an Account ?</span>
                    <button className="bg-white hover:bg-gray-200 text-black font-semibold rounded-lg">Sign Up</button>
                </div>
            </div>
        </div>
        <div className="flex h-full w-1/2 items-center justify-center">
            <Image src={books} alt="" width={600} height={600}/>
        </div>
    </div>
  )
}

export default page