import LinkContainerCard from "./LinkContainerCard";
import "./LinkContainer.css";
import RabbitWizThumb from "../assets/rabbit-wiz-thumb.jpg";

function LinkContainer() {
  // Sample data, replace or fetch as required
  const links = [
    {
      title: "RabbitFlix",
      url: "http://rabbitflix.vercel.app",
      img: RabbitWizThumb,
      desc: "Stream your favorite shows with a magical twist!",
    },
    // Add more link objects here
  ];

  return (
    <div className="link-container-main">
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
  );
}

export default LinkContainer;
