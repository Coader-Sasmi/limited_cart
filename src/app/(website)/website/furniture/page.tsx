import { ProductCard } from "@/components";
import { furnitureProducts } from "@/components/utils/productCollections";
import Link from "next/link";

export default function FurniturePage() {
  return (
    <section className="main-container py-10 flex flex-col justify-center items-center gap-8 ">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 w-full ">
        {furnitureProducts?.map((item, i) => (
          <Link
            href={`/website/product-details?category=furniture&id=${item?.id}`}
            key={i}
          >
            <ProductCard item={item} />
          </Link>
        ))}
      </div>
    </section>
  );
}
