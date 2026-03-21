import { Github, Linkedin } from "lucide-react";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
  github: string;
}

const TeamCard = ({
  name,
  role,
  image,
  bio,
  linkedin,
  github,
}: TeamCardProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition duration-300 hover:shadow-xl">
      
      <img
        src={image}
        alt={name}
        className="w-28 h-28 rounded-full mx-auto object-cover border-2 border-blue-400"
      />

      <h3 className="text-lg font-semibold mt-4">{name}</h3>

      <p className="text-blue-400 text-sm">{role}</p>

      <p className="text-gray-400 text-sm mt-2">{bio}</p>

      <div className="flex justify-center gap-4 mt-4">
        <a href={linkedin} target="_blank">
          <Linkedin className="w-5 h-5 hover:text-blue-400" />
        </a>

        <a href={github} target="_blank">
          <Github className="w-5 h-5 hover:text-blue-400" />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;