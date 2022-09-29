import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card({
  href = "",
  imageSrc = false,
  imageAlt = "",
  title = "Title",
  subtitle = false,
  date = false,
  excerpt = false,
}) {
  return (
    <Link href={href}>
      <a className="cursor-pointer overflow-hidden rounded shadow transition-all duration-200 ease-in-out hover:shadow-lg focus:shadow-lg active:shadow">
        {imageSrc && (
          <div className="aspect-video bg-secondary/20">
            <Image src={imageSrc} alt={imageAlt ?? ""} />
          </div>
        )}
        <div className="px-3 py-2">
          <h2 className="text-3xl font-bold">{title}</h2>
          {subtitle && <h3 className="text-xl font-semibold">{subtitle}</h3>}
          {date && <span className="italic text-secondary">{date}</span>}
          {excerpt && <p>{excerpt}</p>}
        </div>
      </a>
    </Link>
  );
}

export default Card;
