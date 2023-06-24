import Accordion from "@/components/accordion";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[100%] bg-white">
      <header className="bg-[#1D232A] p-4 flex justify-center items-center">
        <a className="text-white" href="#visitors">
          Ver quantidade de acessos
        </a>
      </header>
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
              <div>
                <label className="font-bold">Nome</label>
                <input
                  value="Flamarion Fagundes Pinto"
                  readOnly
                  type="text"
                  className="input w-full bg-gray-200"
                />
              </div>
              <div>
                <label className="font-bold">Idade</label>
                <input
                  value="20"
                  readOnly
                  type="text"
                  className="input w-full bg-gray-200"
                />
              </div>
              <div>
                <label className="font-bold">E-mail</label>
                <input
                  value="flamarionpinto@sou.faccat.br"
                  readOnly
                  type="text"
                  className="input w-full bg-gray-200"
                />
              </div>
              <div>
                <label className="font-bold">Telefone</label>
                <input
                  value="(54) 99690-8625"
                  readOnly
                  type="text"
                  className="input w-full bg-gray-200"
                />
              </div>
              <div>
                <label className="font-bold">Website</label>
                <input
                  value="https://portifolio-steel-ten.vercel.app/"
                  readOnly
                  type="text"
                  className="input w-full bg-gray-200"
                />
              </div>
            </div>
            <div className="bg-green-500 min-h-[50px] flex justify-around items-center absolute bottom-0 w-full px-6">
              <a>
                <Facebook className="text-white" />
              </a>
              <a>
                <Instagram className="text-white" />
              </a>
              <a>
                <Linkedin className="text-white" />
              </a>
              <a>
                <Mail className="text-white" />
              </a>
            </div>
          </div>
        </div>
        <section className="my-8 flex flex-col gap-2">
          <Accordion defaultOpen title="Formação Academica">
            <ul>
              <li>
                <p>
                  <b>Faccat</b> - Sistemas de Informação (Cursando)
                </p>
              </li>
            </ul>
          </Accordion>
          <Accordion title="Experiencia Profissional">
            <p>
              <ul>
                <li>
                  <p>
                    <b>Lighthouse IT</b> - Estágio - maio 2021 - 9 meses
                  </p>
                </li>
                <li>
                  <p>
                    <b>Lighthouse IT</b> - Desenvolvedor Frontend - janeiro 2022
                    - 1 ano 6 meses (atualmente trabalhando)
                  </p>
                </li>
              </ul>
            </p>
          </Accordion>
        </section>
      </main>
      <footer
        style={{ padding: 0 }}
        className="flex items-center justify-center w-full pb-6 text-white bg-[#1D232A] bottom-0 h-[60px]"
      >
        <section id="visitors">
          <span>Quantidade de acessos:</span>
          <span className="font-bold ml-1">{`${10}`}</span>
        </section>
      </footer>
    </div>
  );
}
