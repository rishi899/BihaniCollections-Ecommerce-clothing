import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@headlessui/react";

const HomeSectionCarousel = ({ data ,sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data.slice(0, 10).map((item, index) => (
    <HomeSectionCard product={item} key={index} />
  ));

  return (
    <div className="relative">
      <h2 className="texl-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="p-5">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />

        {activeIndex > 0 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slidePrev}
            style={{
              position: "absolute",
              top: "50%",
              left: "0",
              transform: "translateY(-50%) rotate(-180deg)",
              backgroundColor: "white",
              width: "40px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            }}
            aria-label="previous"
          >
            <KeyboardArrowLeftIcon sx={{ color: "black", transform: "rotate(180deg)" }} />
          </Button>
        )}

        {activeIndex < items.length - Math.ceil(responsive[1024].items) && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slideNext}
            style={{
              position: "absolute",
              top: "50%",
              right: "0",
              transform: "translateY(-50%) rotate(180deg)",
              backgroundColor: "white",
              width: "40px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon sx={{ color: "black" }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
