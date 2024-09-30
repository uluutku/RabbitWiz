function LinkContainerCard({ title, imageUrl, description, url }) {
  return (
    <div
      className="link-container-card"
      role="button"
      tabIndex="0"
      onClick={() => window.open(url, "_blank")}
      onKeyPress={(e) => {
        if (e.key === 'Enter') window.open(url, "_blank");
      }}
    >
      <div
        className="card-background"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="card-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default LinkContainerCard;
