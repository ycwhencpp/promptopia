import PromptCard from "./PromptCard";
const UserProfile = ({ name, desc, userPosts, handelEdit , handelDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left blue_gradient">{name} Profile</h1>
      <p className="desc text-left">{desc}</p>
      <div className="mt-10 prompt_layout">
        {userPosts.map((post, index) => (
          <PromptCard
            key={post._id}
            {...post}
            handelEdit={() =>  handelEdit && handelEdit(post)}
            handelDelete={() => handelDelete && handelDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default UserProfile;
