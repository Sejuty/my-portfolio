import { useRef, useState, useEffect } from 'react';

const CardSlider = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const projects = [
    { id: 1, title: "Project 1", color: "bg-blue-500" },
    { id: 2, title: "Project 2", color: "bg-green-500" },
    { id: 3, title: "Project 3", color: "bg-purple-500" },
    { id: 4, title: "Project 4", color: "bg-red-500" },
    { id: 5, title: "Project 5", color: "bg-yellow-500" },
  ];

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
    <div className="w-full h-screen bg-gray-900 relative">
      <div 
        ref={scrollContainerRef}
        className="overflow-x-auto h-full cursor-grab active:cursor-grabbing select-none snap-x snap-mandatory"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex h-full">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`flex-shrink-0 w-screen h-full ${project.color} snap-center`}
            >
              <div className="flex flex-col items-center justify-center h-full p-8">
                <h2 className="text-4xl font-bold text-white mb-4">{project.title}</h2>
                <div className="max-w-2xl">
                  <p className="text-xl text-white/90">
                    This is a full-screen section for {project.title}. Add your project details, 
                    images, and other content here.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Dot indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
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