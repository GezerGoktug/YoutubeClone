//! Video Detay sayfası için yükleme skeleton yapısı.

const Loader = () => {
  return (
    <div className=" flex gap-4 flex-col">
      <div className="bg-zinc-800 rounded-lg animate-pulse h-[250px] min-[450px]:h-[350px] min-[550px]:h-[450px] min-[1000px]:h-[350px] min-[1200px]:h-[450px]" />
      <div className="w-[50%] h-6 bg-zinc-800 animate-pulse rounded-lg" />
      <div className="flex gap-2 w-full">
        <div className="rounded-full bg-zinc-800  h-12 w-[51px] animate-pulse" />
        <div className="flex flex-col gap-3 w-full">
          <div className="bg-zinc-800 w-[15%] rounded-lg h-3 animate-pulse" />
          <div className="bg-zinc-800 w-[10%] rounded-lg h-3 animate-pulse" />
        </div>
      </div>
      <div className="w-full h-48 bg-zinc-800 rounded-lg animate-pulse" />
    </div>
  );
};

export default Loader;
