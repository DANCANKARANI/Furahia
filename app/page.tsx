import Footer from "./componets/footer";
import Navbar from "./componets/navbar";


const cards = [
  {
    image: "/enjoy.png",
    title: "Enjoy",
    description: "Enjoy the beautiful landscapes and vibrant culture.",
  },
  {
    image: "/admire.png",
    title: "Admire",
    description: "Admire the architectural wonders of the ancient world.",
  },
  {
    image: "/team-building.jpeg",
    title: "Team Build",
    description: "Strengthen bonds through exciting team-building activities.",
  },
  {
    image: "/climb.png",
    title: "Climb",
    description: "Challenge yourself with thrilling climbing adventures.",
  },
];

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Navbar at the top, spanning across the entire width */}
      <Navbar />

      {/* Main content area, split into two halves */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Left Half with Background Image */}
        <div
          className="lg:w-1/2 h-64 lg:h-auto bg-cover bg-center"
          style={{ backgroundImage: "url('/background.png')" }}
        >
          {/*Add content here if needed*/}
        </div>
        {/* Right Half with Content */}
        <div className="lg:w-1/2 p-6">
          <p className="mt-4">
          Welcome to Furahia adventures, We are here to make  your weekends super fine 😌
For fun 😊
,Team building
,Tours 😁
,Hiking

And more sweet experiences around KU and it's surroundings. Thank you for joining ❤
          </p>
          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{card.title}</h3>
                  <p className="mt-2 text-gray-600">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
