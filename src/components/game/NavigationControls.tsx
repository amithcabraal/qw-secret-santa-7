import React from 'react';
import { Button } from '../ui/Button';
import { useImageNavigation } from '../../hooks/useImageNavigation';
import { useGameStore } from '../../store/gameStore';

export const NavigationControls: React.FC = () => {
  const { showAnswer, toggleAnswer } = useGameStore();
  const { nextImage, previousImage, isNavigating } = useImageNavigation();

  return (
    <div className="absolute left-0 right-0 bottom-8 flex justify-center gap-4">
      <Button 
        variant="icon" 
        onClick={previousImage}
        disabled={isNavigating}
        className="bg-gray-800/80 hover:bg-gray-800/90 backdrop-blur-sm shadow-lg transition-transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="block w-3 h-3 border-l-2 border-b-2 border-white transform -rotate-45"></span>
      </Button>
      
      <Button 
        onClick={toggleAnswer}
        disabled={isNavigating}
        className="bg-gray-800/80 hover:bg-gray-800/90 backdrop-blur-sm shadow-lg px-6 transition-transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {showAnswer ? 'Hide Answer' : 'Show Answer'}
      </Button>
      
      <Button 
        variant="icon" 
        onClick={nextImage}
        disabled={isNavigating}
        className="bg-gray-800/80 hover:bg-gray-800/90 backdrop-blur-sm shadow-lg transition-transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="block w-3 h-3 border-r-2 border-t-2 border-white transform -rotate-45"></span>
      </Button>
    </div>
  );
};