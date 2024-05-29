import { ImgCard } from "../../components";
import "./Gallery.css";

const path = "/public/assets/gallery/gallery-";
const array = new Array(12).fill(0);

const Gallery = () => {
  return (
    <div className="gallery">
      {array.map((_, index) => {
        return <ImgCard key={index} imgPath={path + (index + 1) + ".jpg"} />;
      })}
    </div>
  );
};

export default Gallery;
