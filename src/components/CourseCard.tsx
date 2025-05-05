
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  instructor: string;
  level: string;
  price: number;
  duration: string;
  image: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  description,
  instructor,
  level,
  price,
  duration,
  image
}) => {
  return (
    <Card className="bg-gray-900 border-gray-800 overflow-hidden card-hover">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
        />
        <div className="absolute top-2 right-2 bg-secondary text-primary px-2 py-1 rounded text-xs font-medium">
          {level}
        </div>
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold text-white line-clamp-1">{title}</h3>
        <p className="text-gray-400 text-sm">Instructor: {instructor}</p>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-gray-300 text-sm line-clamp-2 mb-4">{description}</p>
        <div className="flex justify-between text-sm text-gray-400">
          <span>{duration}</span>
          <span className="text-secondary font-semibold">${price.toFixed(2)}</span>
        </div>
      </CardContent>
      <CardFooter className="pt-0 flex justify-between gap-2">
        <Button variant="outline" className="w-1/2 border-gray-700 text-gray-300 hover:border-secondary hover:text-white">
          <Link to={`/courses/${id}/preview`} className="w-full">Preview</Link>
        </Button>
        <Button className="w-1/2 bg-secondary text-primary hover:bg-secondary/90">
          <Link to={`/courses/${id}`} className="w-full">Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
