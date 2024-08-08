import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import noimg from "../assets/noimg.jpg";

export function EcommerceCard({
  img = noimg,
  projectName = "Project title",
  description = "Description of the project, brief description only",
  link = "#",
  type = "BLANK",
}) {
  return (
    <Card className="w-full md:w-[40vw] lg:w-[30vw] h-auto md:h-[25vh] lg:h-[50vh]  mx-8 transition-all duration-300 ease-in-out hover:bg-black hover:border-[#7456FF] hover:text-white hover:shadow-lg border border-transparent hover:animate-shake relative group">
      <CardHeader 
        shadow={false} 
        floated={false} 
        className="h-[50%] sm:h-[55%] md:h-[60%] lg:h-[65%] transition-transform duration-500 ease-in-out hover:scale-105"
      >
        <img
          src={img}
          alt="Project Image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="transition-colors duration-300 ease-in-out p-4">
        <div className="mb-2 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <Typography className="font-semibold text-[#333] transition-colors duration-300 ease-in-out group-hover:text-white">
            {projectName}
          </Typography>
          <Typography className="font-bold text-sm text-[#ffffff] bg-[#7456FF] px-2 py-1 border-0 rounded-xl transition-colors duration-300 ease-in-out group-hover:text-white mt-2 sm:mt-0">
            {type}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 transition-colors duration-300 ease-in-out group-hover:text-white text-sm"
        >
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none transition-colors duration-300 ease-in-out group-hover:bg-[#7456FF] group-hover:text-black hover:text-white hover:scale-105 transition-all duration-300 ease-in-out"
          onClick={() => window.open(link, '_blank')}
        >
          View details
        </Button>
      </CardFooter>
    </Card>
  );
}
