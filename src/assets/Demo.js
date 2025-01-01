<div
  key={index}
  className={`thumbnail ${activeIndex === index ? "active-thumbnail" : ""}`}
  onClick={() => handleThumbClick(index)}
>
  <img
    src={image}
    alt={`Thumbnail ${index + 1}`}
    className="thumbnail-img"
  />
</div>

.thumbnail {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid transparent; /* Default border for inactive thumbnails */
  transition: border-color 0.3s ease; /* Smooth transition for border */
}

.thumbnail.active-thumbnail {
  border: 3px solid #000; /* 3px solid black border for active thumbnail */
}

.thumbnail-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures proper scaling of thumbnail images */
}
