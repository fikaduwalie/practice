export default function ProductNotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Product Not Found</h1>
      <p className="mt-4 text-gray-600">
        Sorry, the product you are looking for does not exist.
      </p>
    </div>
  );
}
