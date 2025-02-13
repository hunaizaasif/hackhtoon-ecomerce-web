
import Link from "next/link";
import Image from "next/image";

interface ICategories {
  id: any;
  _id: string;
  title: string;
  imageUrl: string;
  quantity: number;
  slug: {
    _type: "slug";
    current: string;
  };
}

const TopCategories = async () => {
  try {
    const res = await fetch(
      "https://giaic-hackathon-template-08.vercel.app/api/categories");

    if (!res.ok) {
      throw new Error('Failed to fetch categories');
    }

    const categories: ICategories[] = await res.json();

    return (
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Top Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link 
                key={category._id}
                href={`/products/${category._id}`} 
                className="group"
              >
            
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={category.imageUrl}
                      alt={category.title}
                      width={400}
                      height={400}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-gray-600">{category.quantity} Products</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Error loading categories:', error);
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Top Categories</h2>
        <p className="text-red-500">Failed to load categories. Please try again later.</p>
      </div>
    );
  }
};

export default TopCategories;