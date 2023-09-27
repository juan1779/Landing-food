"use client";
import Card from "./complements/Card.jsx";

import axios from "axios";
import { useState, useEffect, useRef } from "react";

function Articles() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  // En el efecto, hacer una petición a la API y almacenar los datos en el estado.
  useEffect(() => {
    axios
      .get(`https://5eed24da4cbc340016330f0d.mockapi.io/api/articles${filter}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [filter]);

  const handleClick = (e) => {
    setFilter(e.target.value);
  };

  return (
    <main className=" pb-20 w-screen">
      <h3 className="leter font-extrabold text-center text-7xl text-base-200 py-24">
        Nuestros artículos
      </h3>

      <section className="flex ">
        <aside className="w-1/3 h-1/3 flex justify-end pr-12">
          <nav className="flex pt-4 pl-4 pr-40 pb-40 gap-4 bg-base-600 rounded-md border-2 shadow-2xl">
            <ul className="flex flex-col  gap-4 text-base-100 ">
              <li className=" hover:text-base-300">
                <button onClick={handleClick} value="">
                  TODOS
                </button>
              </li>
              <li className="hover:text-base-300">
                <button onClick={handleClick} value="?filter=Productos">
                  PRODUCTOS
                </button>
              </li>
              <li className=" hover:text-base-300">
                <button onClick={handleClick} value="?filter=Recetas">
                  RECETAS
                </button>
              </li>
              <li className=" hover:text-base-300">
                <button onClick={handleClick} value="?filter=Consejos">
                  CONSEJOS
                </button>
              </li>
            </ul>
          </nav>
        </aside>
        <article className="w-2/3 flex flex-wrap gap-6 justify-start ">
          {data.map((d) => (
            <Card
              key={d.id}
              image={d.image}
              title={d.title}
              paragraph={d.content}
            />
          ))}
        </article>
      </section>
    </main>
  );
}

export async function getStaticProps({ filter }) {
  const res = await axios.get(
    `https://5eed24da4cbc340016330f0d.mockapi.io/api/articles${filter}`
  );
  const data = res.data;
  return {
    props: {
      data,
    },
  };
}

export default Articles;
