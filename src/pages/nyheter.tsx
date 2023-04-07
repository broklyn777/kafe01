import Image from "next/image";
import React from "react";

const blogPosts = [
  {
    title: "Vår nya sommarmeny är här!",
    date: "2023-06-01",
    content:
      "Vi är glada att presentera vår nya sommarmeny fylld med läckra säsongsbetonade rätter och uppfriskande drycker. Kom och njut av solen på vår uteservering!",
    image: "/img/choklad-tarta.jpg",
  },
  {
    title: "Livemusik på fredagar",
    date: "2023-05-10",
    content:
      "Vi är glada att meddela att vi nu kommer att ha livemusik på kaféet varje fredagkväll. Kom och njut av en avslappnad atmosfär och god musik!",
    image: "/img/musik-live.jpg",
  },
  // Lägg till fler blogginlägg här...
];

const BlogPage: React.FC = () => {
  return (
    <div className="bg-gray-100 py-10 px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl font-bold text-center mb-10">Blogg / Nyheter</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              width={500}
              height={500}
              className="w-full h-64 object-cover"
              src={post.image}
              alt={post.title}
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-500 text-sm mb-4">{post.date}</p>
              <p className="text-gray-700">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
