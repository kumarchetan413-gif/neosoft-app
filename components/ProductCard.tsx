"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProductProps {
  title: string;
  description: string;
  price: string;
  rating: number;
  image: string;
  status?: string;
}

export default function ProductCard({
  title,
  description,
  price,
  rating,
  image,
  status
}: ProductProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="
        bg-white dark:bg-gray-800 rounded-xl shadow-md 
        hover:shadow-lg p-4 w-full max-w-sm mx-auto 
        transition-all border dark:border-gray-700
      "
      aria-label={`Product card for ${title}`}
    >
      {/* Top image */}
      <figure className="relative">
        {status === "sale" && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
            SALE
          </span>
        )}

        {status === "out-of-stock" && (
          <span className="absolute top-2 left-2 bg-gray-700 text-white text-xs px-2 py-1 rounded">
            OUT OF STOCK
          </span>
        )}

        <Image
          src={image}
          alt={`${title} image`}
          width={400}
          height={250}
          className="rounded-lg w-full object-cover h-52"
        />
      </figure>

      {/* Content */}
      <div className="mt-4 text-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
          {description}
        </p>

        <div className="flex justify-between items-center mt-3 text-gray-800 dark:text-gray-200">
          <span className="text-lg font-bold">{price}</span>
          <span className="text-sm">⭐ {rating}</span>
        </div>

        {/* Action Button */}
        <button
          aria-label={`View more details about ${title}`}
          className="
            mt-4 w-full py-2 rounded-lg bg-blue-600 text-white 
            hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 
            transition font-semibold
          "
        >
          View More
        </button>
      </div>
    </motion.div>
  );
}
