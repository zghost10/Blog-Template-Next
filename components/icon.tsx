import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon: React.FC<{
  className?: string;
  icon: IconDefinition|any;
  size?: number;
}> = ({className, icon, size}) => {
  return <FontAwesomeIcon icon={icon} className={`h-${size} w-${size} ${className??''}`} />
}
export default Icon;