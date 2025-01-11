import ImageSlider from "./Carousel";

const Projects = () => {
  const cards = [
    { title: "City 1", description: "A bustling urban landscape." },
    { title: "City 2", description: "A city with scenic views." },
    { title: "City 3", description: "A modern metropolis." },
    { title: "Planet 1", description: "A mysterious planet." },
    { title: "Planet 2", description: "A faraway celestial body." },
  ];

  return <ImageSlider cards={cards} />;
};

export default Projects;
