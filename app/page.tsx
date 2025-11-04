import ProductCard from "@/components/ProductCard";
import ThemeToggle from "@/components/ThemeToggle";

export default async function Home() {
  const baseUrl =
  process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/products`, {
    cache: "no-store",
  });

  const products = await res.json();

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 flex flex-col items-center">
      <ThemeToggle />

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
