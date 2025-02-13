import React from 'react';

async function fetchCategories() {
  const res = await fetch('/api/categories', {
    cache: 'force-cache', // Categories are unlikely to change frequently
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch categories: ${res.status}`);
  }
  return res.json();
}

export default async function Categories() {
  const categories = await fetchCategories();

  return (
    <div className="bg-gray-100 py-4 px-6">
      <h3 className="text-lg font-semibold mb-2">Categories</h3>
      <ul className="flex flex-wrap gap-2">
        {categories.map((category: { id: React.Key | null | undefined; name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | Iterable<React.ReactNode> | null | undefined; }) => (
          <li key={category.id}>
            <a
              href={`/category/${category.id}`}
              className="bg-white hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-md shadow-sm transition-colors duration-200"
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}