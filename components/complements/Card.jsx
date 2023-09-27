import Image from "next/image";
import Link from "next/link";

const Card = ({ image, title, paragraph, index }) => {
  return (
    <div key={index} className="w-64 group rounded  bg-base-600 shadow-2xl ">
      <img
        className="rounded"
        src={image}
        alt="Imagen"
        width={350}
        height={350}
      />
      <div className="p-4 hover:text-base-300 ">
        <h2 className="text-base-200 text-2xl p-4 group-hover:text-base-300  ">
          <Link href="https://www.google.com/" target="_blank">
            {title}
          </Link>
        </h2>
        <p className="text-base-200 pb-4 ">{paragraph}</p>
        <button className="invisible group-hover:visible">VER MÁS</button>
      </div>
    </div>
  );
};

export default Card;
