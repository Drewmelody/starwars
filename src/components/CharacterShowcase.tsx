import React, { useState } from 'react';

const CharacterShowcase = () => {
  const [activeCharacter, setActiveCharacter] = useState(0);
  
  const characters = [
    {
      name: "Din Djarin",
      title: "The Mandalorian",
      description: "A lone bounty hunter making his way through the galaxy's outer reaches.",
      image: "https://images.unsplash.com/photo-1579566346927-c68383817a25?auto=format&fit=crop&q=80"
    },
    {
      name: "Grogu",
      title: "The Child",
      description: "A force-sensitive being of the same species as Yoda.",
      image: "https://images.unsplash.com/photo-1472457974886-0ebcd59440cc?auto=format&fit=crop&q=80"
    },
    {
      name: "Ahsoka Tano",
      title: "Former Jedi",
      description: "Once a Padawan to Anakin Skywalker, now a powerful force user seeking her own path.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Featured Characters</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative h-[600px] overflow-hidden rounded-lg">
            <img 
              src={characters[activeCharacter].image}
              alt={characters[activeCharacter].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-4xl font-bold mb-2">{characters[activeCharacter].name}</h3>
              <p className="text-xl text-yellow-400 mb-4">{characters[activeCharacter].title}</p>
              <p className="text-gray-300 max-w-md">{characters[activeCharacter].description}</p>
            </div>
          </div>
          
          <div className="flex flex-col justify-center space-y-6">
            {characters.map((character, index) => (
              <button
                key={index}
                className={`text-left p-6 rounded-lg transition ${
                  activeCharacter === index 
                    ? 'bg-yellow-400 text-black' 
                    : 'bg-zinc-800 hover:bg-zinc-700'
                }`}
                onClick={() => setActiveCharacter(index)}
              >
                <h4 className="text-xl font-semibold mb-1">{character.name}</h4>
                <p className={activeCharacter === index ? 'text-black/80' : 'text-gray-400'}>
                  {character.title}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterShowcase;