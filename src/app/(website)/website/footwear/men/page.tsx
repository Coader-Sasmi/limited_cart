import { ProductCard } from "@/components";
import { menFootwearProducts } from "@/components/utils/productCollections";
import Link from "next/link";

export default function FooterPage() {
  return (
    <section className="main-container py-10 flex flex-col justify-center items-center gap-8 ">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 w-full ">
        {menFootwearProducts?.map((item, i) => (
          <Link
            href={`/website/product-details?category=menFootwear&id=${item?.id}`}
            key={i}
          >
            <ProductCard item={item} />
          </Link>
        ))}
      </div>
    </section>
  );
}
