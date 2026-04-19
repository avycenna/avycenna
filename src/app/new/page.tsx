import { ContactForm } from "./form";

export default function ContactPage() {
  return (
    <div className="mt-24 flex flex-col min-h-[80vh] items-center justify-center gap-12 lg:gap-24 mx-12 px-4">
      <h1 className="text-xl md:text-4xl text-balance font-bold">Discuss your project</h1>
      <ContactForm />
    </div>
  );
}
