const Skeleton = () => {
  return (
    <article>
      <div className="flex flex-col gap-4 m-8">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
      <div className="flex flex-col gap-4 m-8">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </article>
  );
};

export default Skeleton;