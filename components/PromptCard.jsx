import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const PromptCard = ({ _id, title, tag, user: author, handelEdit, handelDelete, handelTagClick }) => {
  const { data: session } = useSession();
  const [isCopied, setIsCopied] = useState(false);

  const handelCopyClick = async () => {
    setIsCopied(true);
    await navigator.clipboard.writeText(title);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <Link href={`/profile/${author._id}`}>
          <div className="flex-1 flex justify-start items-center cursor-pointer gap-3">
            <Image
              src={author?.image}
              width={40}
              height={40}
              alt={author?.username + "profile"}
              className="rounded-full object-contain"
            />
            <div className=" flex flex-col">
              <h3 className="font-satoshi font-semibold text-gray-900">{author?.username}</h3>
              <p className="font-inter text-sm text-gray-500">{author?.email}</p>
            </div>
          </div>
        </Link>
        <div
          className="copy_btn"
          onClick={() => {
            handelCopyClick();
          }}>
          <Image
            src={isCopied ? "/assets/icons/tick.svg" : "/assets/icons/copy.svg"}
            width={12}
            height={12}
            alt="copy_icon"
            className="transition duration-500 ease-in-out"
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">{title}</p>
      <p
        className="text-sm blue_gradient font-inter cursor-pointer"
        onClick={() => {
          handelTagClick && handelTagClick(tag);
        }}>
        #{tag}
      </p>
      {usePathname().startsWith("/profile") && author._id === session?.user.id  && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p className="font-inter text-sm green_gradient cursor-pointer" onClick={handelEdit}>
            Edit
          </p>
          <p className="font-inter text-sm orange_gradient cursor-pointer" onClick={handelDelete}>
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
