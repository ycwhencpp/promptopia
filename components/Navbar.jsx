"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useProviders from "@utils/useProviders";
import { useSession, signIn, signOut } from "next-auth/react";
const Navbar = () => {
  const {data: session} = useSession();
  const isLoggedIn =  session?.user;
  const [toogleDropdown, setToogleDropdown] = useState(false);

  const providers = useProviders();

  return (
    <nav className="flex justify-between items-center w-full mb-16 pt-5">
      <Link href="/" className="flex gap-2 justify-center items-center">
        <Image src="/assets/images/logo.svg" width={50} height={50} alt="logo" />
        <p className="logo_text">Promptopia</p>
      </Link>
      {/* desktop navigation */}
      <div className="sm:flex hidden">
        {isLoggedIn ? (
          <div className="flex gap-3 md:gap-5 ">
            <Link href="/create-post" className="black_btn">
              Create Post
            </Link>
            <button className="outline_btn" onClick={()=>{signOut()}}>Sign Out</button>
            <Link href="/profile">
              {" "}
              <Image
                className="rounded-full"
                src={session?.user.image}
                width={37}
                height={37}
                alt="profile image"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((p) => (
                <button key={p.name} className="outline_btn" onClick={()=>{signIn()}}>
                  {p.name} Sign In
                </button>
              ))}
          </>
        )}
      </div>
      {/* mobile navigation */}
      <div className="sm:hidden flex relative">
        {isLoggedIn ? (
          <div className="flex">
            <Image src={session?.user.image} width={50} height={50} alt="logo" onClick = {() => {setToogleDropdown((prev) => !prev)}}/>
            {toogleDropdown && (
                <div className="dropdown">
                    <Link href="/create-post" className="dropdown_link" onclick = {()=> {setToogleDropdown(false)}}>Create Prompt</Link>
                    <Link href="/profile" className="dropdown_link" onclick = {()=> {setToogleDropdown(false)}}> Profile</Link>
                    <button className="mt-5 w-full black_btn" onclick = {()=> {signOut(); setToogleDropdown(false)}}>Sign Out</button>
                </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((p) => (
                <button key={p.name} className="outline_btn" onClick={()=> signIn()}>
                  {p.name} Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
