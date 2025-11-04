import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const base = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const url = new URL("/api/products", base);

  const res = await fetch(url.toString(), {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products = await res.json();

  return (
    <main className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900">
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
