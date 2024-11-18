import { useNavigate } from "react-router-dom";
import { Tool } from "../types/Tool.type";
import { Download, Wrench } from "lucide-react";

interface ToolCardProps extends Tool {}

export const ToolCard: React.FC<ToolCardProps> = ({
  icon,
  name,
  description,
  link,
}) => {
  const icons = {
    download: Download,
    default: Wrench,
  };

  const navigate = useNavigate();
  const navigateToTool = () => {
    navigate(`${link}`);
  };

  const Icon = icons[icon ?? "default"];

  return (
    <div
      className="cursor-pointer flex items-center justify-around	 max-w-96 w-full bg-white rounded-2xl shadow-xl p-4 border"
      onClick={() => navigateToTool()}
    >
      <div>
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      <div>
        <div className="text-xl">{name}</div>
        <div className="text-sm pt-1">{description}</div>
      </div>
    </div>
  );
};
