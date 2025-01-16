import { useRef, useState, useEffect } from 'react';
import { projectsData } from '../assets/data';

const CardSlider = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  // Touch handling
  const handleTouchStart = (e) => {
    setIsDragging(true);
    const slider = scrollContainerRef.current;
    const touch = e.touches[0];
    setStartX(touch.pageX - slider.offsetLeft);
    setScrollLeft(slider.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const slider = scrollContainerRef.current;
    const touch = e.touches[0];
    const x = touch.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  };

  // Mouse handling
  const handleMouseDown = (e) => {
    setIsDragging(true);
    const slider = scrollContainerRef.current;
    setStartX(e.pageX - slider.offsetLeft);
    setScrollLeft(slider.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const slider = scrollContainerRef.current;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const slider = scrollContainerRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const slideWidth = slider.clientWidth;
      const currentScroll = slider.scrollLeft;
      const newActiveSlide = Math.round(currentScroll / slideWidth);
      setActiveSlide(newActiveSlide);
    };

    slider.addEventListener('scroll', handleScroll);
    return () => slider.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSlide = (index) => {
    const slider = scrollContainerRef.current;
    if (!slider) return;
    
    const slideWidth = slider.clientWidth;
    slider.scrollLeft = index * slideWidth;
  };

  return (
    <div className="w-full h-full font-exo relative pt-12">
      <div 
        ref={scrollContainerRef}
        className="h-[calc(100%-2.5rem)] cursor-grab active:cursor-grabbing select-none snap-x snap-mandatory overflow-x-hidden touch-pan-x hide-scrollbar"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        <div className="flex h-full ">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="w-full flex-shrink-0 h-full snap-center"
            >
              <div className="flex flex-col h-fit justify-center p-4 sm:p-6 md:p-8 overflow-y-auto hide-scrollbar pt-4">
                <h2 className="text-xl sm:text-2xl font-bold text-secondary mb-3 lg:mb-6 text-center">
                  {project.title}
                </h2>
                <div className="space-y-4 sm:space-y-6 w-full h-full">
                  <p className="text-sm lg:text-lg text-blue-200 font-exo font-light">
                    {project?.description}
                  </p>
                  <div className="bg-white/10 p-3 sm:p-4 rounded-lg">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                      Technical Contribution
                    </h3>
                    <p className="text-sm lg:text-lg text-white/80 font-light">
                      {project?.contribution}
                    </p>
                  </div>
                  <div className="bg-white/10 p-3 sm:p-4 rounded-lg">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                      Key Achievements
                    </h3>
                    <ul className="list-disc list-inside text-sm lg:text-lg font-light text-white/80">
                      {project?.worked_on.map((work, index) => (
                        <li key={index} className="ml-2 sm:ml-4">{work}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Dot indicators */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {projectsData.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              activeSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSlider;