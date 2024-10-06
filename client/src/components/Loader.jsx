const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center fixed inset-0 bg-primary z-[10000]">
      <div className="flex gap-5 text-6xl font-semibold max-sm:3xl">
        <h1 className="text-secondary a">A</h1>
        <h1 className="text-secondary k">K</h1>
        <h1 className="text-white d">.</h1>
        <h1 className="text-tertiary s">S</h1>
      </div>
    </div>
  );
};

export default Loader;
