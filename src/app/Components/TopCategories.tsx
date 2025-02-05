import Link from "next/link";
import Image from "next/image";


interface ICategories {
 _id: string;
  title: string | undefined;
  imageUrl: string | undefined;
 quntity: number;
 slug: {
  _type : "slug";
  current : string;
   
};
}
 
const TOpCategories = async () => {
  const res = await fetch("https://giaic-hackathon-template-08.vercel.app/api/categories")

const Categories : ICategories[] = await res.json()
  

  return (
    <div className="top-categories">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">TOp Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {Categories.map((category) => (
            <div key={category._id} className="border p-4 rounded-lg shadow-md">
              <Link href={`/category/${category._id}`}>
                {category.imageUrl && (
                  <Image
                    src={category.imageUrl}
                    alt={category.title || 'No title available'}
                    width={600}
                    height={600}
                    className="rounded-lg mb-4"
                  />
                )}
                <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-700">{category.quntity} Products</p>
              </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        };
        
        export default TOpCategories;