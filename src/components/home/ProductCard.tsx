/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { IoStar } from "react-icons/io5";
export default function ProductCard({ item }: any) {
  return (
    <>
      <Link href={`/website/product-details?id=${item?.id}`}>
        <div className="flex flex-col gap-2 shadow-xl rounded-lg p-4">
          <img src={item.img} alt="image" className="w-auto h-60" />
          <div className="flex flex-col gap-6">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h2>{item.name}</h2>
                <small>Al Karam</small>
              </div>
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <IoStar key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
            </div>
            <small>(4.1k) Customer Reviews</small>
            <div className="flex justify-between">
              <h1>$95.50</h1>
              <small className="text-primary">Almost Sold Out</small>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
