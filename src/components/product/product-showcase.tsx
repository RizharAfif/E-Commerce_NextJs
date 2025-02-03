"use client";
import Link from "next/link";

// components
import { ProductCard } from "@/components/product/product-card";

// utils
import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";

interface ShowcaseProps {
  gridConfig?: string;
  products: Product[];
}

const ProductShowcase: React.FC<ShowcaseProps> = ({
  gridConfig,
  products,
}: ShowcaseProps) => {
  return (
    <>
      <div className="w-full">
        <div className={cn("grid gap-6", gridConfig)}>
          {products?.map((product, index) => (
            <Link key={`productCard${index}`} href={"/product/detail/1"}>
              <ProductCard details={product} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export { ProductShowcase };
