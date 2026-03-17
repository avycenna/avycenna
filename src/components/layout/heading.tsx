export function Heading({ title, caption }: { title: string; caption: string }) {
  return (
    <div className="flex flex-col items-center text-center pt-24 pb-8 sm:pt-48">
      <h2 className="text-xl md:text-4xl text-balance font-bold">{title}</h2>
      <p className="max-w-3xl text-balance">{caption}</p>
    </div>
  );
}
