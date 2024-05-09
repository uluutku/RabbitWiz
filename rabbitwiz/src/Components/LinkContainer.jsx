import LinkContainerCard from "./LinkContainerCard";
import RabbitFlixThumb from "../assets/rabbitflix-new-thumb.jpg";
import PawPickerThumb from "../assets/pawpicker-thumb.jpg";
import CarrotCrossroadsThumb from "../assets/carrot-crossroads-thumb.jpg";

function LinkContainer() {
  const links = [
    {
      title: "RabbitFlix",
      url: "http://rabbitflix.vercel.app",
      img: RabbitFlixThumb,
      desc: "A Netflix inspired project with our wizard rabbit's touch.",
    },
    {
      title: "Carrot Crossroads",
      url: "http://carrot-crossroads.vercel.app",
      img: CarrotCrossroadsThumb,
      desc: "Desicion based life simulation game with our rabbit touch.",
    },
    {
      title: "PawPicker",
      url: "http://pawpicker.vercel.app",
      img: PawPickerThumb,
      desc: "Modern A/B testing tool for selecting perfect one from multiple images.",
    },
  ];

  return (
    <div className="link-container-main">
      <div className="link-container-title">
        <h2>Our rabbits recent projects:</h2>
      </div>
      <div>
        <p>
          Our rabbit have been working on some projects recently. You can check
          them out by clicking on the images below.
        </p>
      </div>
      <div className="thumbnail-cards-container">
        {links.map((link) => (
          <LinkContainerCard
            key={link.title}
            title={link.title}
            imageUrl={link.img}
            description={link.desc}
            url={link.url}
          />
        ))}
      </div>
    </div>
  );
}

export default LinkContainer;
