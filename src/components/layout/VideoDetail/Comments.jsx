const Comments = ({ children, commentCount }) => {
  return (
    <>
      <h4 className="font-semibold text-2xl my-4">{commentCount} Comments</h4>
      <div className="flex gap-4 items-start">
        <img className="h-12 rounded-full" src="/img/avatar1.png" alt="avatar" />
        <input
          className="bg-transparent pb-2 outline-0 border-b-2 border-zinc-700 w-full placeholder:text-zinc-600"
          type="text"
          placeholder="Yorum ekleyin"
        />
      </div>
      <div className="flex flex-col gap-10 mt-8">{children}</div>
    </>
  );
};

export default Comments;
