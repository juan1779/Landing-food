"use client";
import { useState } from "react";
import axios from "axios";

function NewLetter() {
  const [data, setData] = useState({
    name: "",
    apellido: "",
    email: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setData({ [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    NewLetter(data);
    alert("Datos enviados con exito");
  };

  return (
    <main className="w-screen md:w-screen pb-20">
      <h2 className="leter text-center  text-7xl text-base-200 py-20">
        Contáctanos
      </h2>
      <form className=" w-3/5 flex m-auto flex-col items-center self-center justify-center">
        <section className=" flex justify-center gap-6 mb-6  flex-wrap ">
          <div className="flex flex-col">
            <label className="mb-2 text-base font-semibold hover:boder-base-300">
              NOMBRE
            </label>
            <input
              className="w-96  min-w-full h-12 border-2   hover:border-base-300 "
              type="text"
              name="nombre"
              required
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-base font-semibold">APELLIDO</label>
            <input
              className="w-96  min-w-full h-12 border-2 hover:border-base-300"
              type="text"
              name="apellido"
              required
              onChange={handleChange}
            />
          </div>
        </section>
        <section className=" flex justify-center box-border gap-6 mb-6 flex-wrap">
          <div className="flex flex-col">
            <label className="mb-2 text-base font-semibold">MAIL</label>
            <input
              className="w-96 min-w-full h-12 border-2 hover:border-base-300"
              type="email"
              name="email"
              required
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-base font-semibold">TELÉFONO</label>
            <input
              className="w-96 min-w-full h-12 border-2 hover:border-base-300"
              type="tel"
              name="telefono"
              required
              onChange={handleChange}
            />
          </div>
        </section>

        <button
          className="bg-base-300 self-end  py-4 px-16 text-base-600 rounded-full font-semibold hover:bg-base-400 duration-500"
          type="submit"
          onSubmit={handleSubmit}
        >
          Enviar
        </button>
      </form>
    </main>
  );
}

export const enviarNewsletter = async (data) => {
  const res = await axios.post(
    "https://5eed24da4cbc340016330f0d.mockapi.io/api/newsletter",
    data
  );
  return res;
};

export default NewLetter;
