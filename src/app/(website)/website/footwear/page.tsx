import { ProductCard } from "@/components";
import { footwearProducts } from "@/components/utils/productCollections";
import Link from "next/link";

export default function FootwearPage() {
  return (
    <section className="main-container py-10 flex flex-col justify-center items-center gap-8 ">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 w-full ">
        {footwearProducts?.map((item, i) => (
          <Link
            href={`/website/product-details?category=footwear&id=${item?.id}`}
            key={i}
          >
            <ProductCard item={item} />
          </Link>
        ))}
      </div>
    </section>
  );
}
