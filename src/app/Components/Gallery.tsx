import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';



interface IGallery {
    _id: string;
    title: string;
    image: {
        asset: {
            url: string;
            _id: string;
        };
    };
}

async function getGalleryData(): Promise<IGallery[]> {
    const query = `*[_type == 'products' && 'gallery' in tags[] && defined(image.asset._ref)] {
        _id,
        title,
        image {
            asset->{
                url,
                _id
            }
        }
    }`;

    try {
        const galleryData = await client.fetch(query);
        return galleryData;
    } catch (error) {
        console.error("Error fetching gallery data:", error);
        return [];
    }
}


async function GalleryItem({ gallery }: { gallery: IGallery }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-300">
            <Image
                src={urlFor(gallery.image).width(600).height(600).url()}
                alt={gallery.title}
                width={600}
                height={600}
                className="rounded-lg mb-4 object-cover" // Added object-cover
            />
        </div>
    );
}

export default async function Gallery() {
    const galleryData = await getGalleryData();

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-4xl font-bold mb-6">Explore Modern and Popular Styles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {galleryData && galleryData.map((gallery) => (
                    <Link key={gallery._id} href={`/product/${gallery._id}`}>
                        <GalleryItem gallery={gallery} />
                    </Link>
                ))}

            </div>
        </div>
    );
}













