import Accordion from "@/components/accordion";
import Footer from "@/components/footer";
import Header from "@/components/header";
import InfoInput from "@/components/info-input";
import { VisitorsResponse } from "@/types/visitors";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
export default async function Home() {
  const response = await fetch("http://localhost:3333/visitors", {
    cache: "no-store",
  });
  const data: VisitorsResponse = await response.json();

  const inputData = [
    {
      label: "Nome",
      value: "Flamarion Fagundes Pinto",
    },
    {
      label: "Idade",
      value: "20",
    },
    {
      label: "E-mail",
      value: "flamarionpinto@sou.faccat.br",
    },
    {
      label: "Telefone",
      value: "(54) 99690-8625",
    },
    {
      label: "Website",
      value: "https://portifolio-steel-ten.vercel.app/",
    },
  ];

  const socialMedia = [
    {
      link: "https://www.facebook.com/flamarion.fagundes.1/",
      icon: <Facebook className="text-white" />,
    },
    {
      link: "https://www.instagram.com/flamarionfagundes/",
      icon: <Instagram className="text-white" />,
    },
    {
      link: "https://www.linkedin.com/in/flamarion-fagundes-pinto-7b0b3a1b2/",
      icon: <Linkedin className="text-white" />,
    },
    {
      link: "mailto:",
      icon: <Mail className="text-white" />,
    },
  ];

  const accordionData = [
    {
      title: "Formação Academica",
      content: ["Faccat - Sistemas de Informação (Cursando)"],
      defaultOpen: true,
    },
    {
      title: "Experiencia Profissional",
      content: [
        "Lighthouse IT - Estágio - maio 2021 - 9 meses",
        "Lighthouse IT - Desenvolvedor Frontend - janeiro 2022 - 1 ano 6 meses (atualmente trabalhando)",
      ],
      defaultOpen: false,
    },
  ];

  return (
    <div className="h-[100%] bg-white">
      <Header />
      <main className="w-screen flex flex-col items-center justify-center py-10">
        <div className="grid grid-cols-2 bg-white shadow-2xl rounded-md">
          <Image
            className="rounded-md rounded-r-none"
            alt="Flamarion Fagundes Pinto image"
            src="https://i.ibb.co/XLKbPg0/profile-picture.jpg"
            width={412}
            height={533}
          />
          <div className="relative">
            <div className="flex flex-col gap-4 py-4 px-6">
              {inputData.map((input) => (
                <InfoInput
                  key={input.label}
                  label={input.label}
                  value={input.value}
                />
              ))}
            </div>
            <div className="bg-green-500 min-h-[50px] flex justify-around items-center absolute bottom-0 w-full px-6">
              {socialMedia.map((social) => (
                <a key={social.link} href={social.link}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <section className="my-8 flex flex-col gap-2">
          {accordionData.map((accordion) => (
            <Accordion
              key={accordion.title}
              defaultOpen={accordion.defaultOpen}
              title="Formação Academica"
            >
              <ul>
                {accordion.content.map((content) => (
                  <li key={content}>
                    <p>{content}</p>
                  </li>
                ))}
              </ul>
            </Accordion>
          ))}
        </section>
      </main>
      <Footer quantityOfVisitors={data?.quantityOfVisitors} />
    </div>
  );
}
