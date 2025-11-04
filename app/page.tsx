import ProductCard from "@/components/ProductCard";

export default async function Home() {
  // ✅ ABSOLUTE STATIC API URL (always works)
  const API_URL = "https://neosoft-app.vercel.app/api/products";

  const res = await fetch(API_URL, { cache: "no-store" });

  if (!res.ok) {
    console.error("API failed:", res.status, await res.text());
    throw new Error("Failed to fetch products");
  }

  const products = await res.json();

  return (
    <main className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 flex justify-center items-center">
      {products.map((p: any) => (
        <ProductCard
          key={p.id}
          title={p.title}
          description={p.description}
          price={p.price}
          rating={p.rating}
          image={p.image}
          status={p.status}
        />
      ))}
    </main>
  );
}
