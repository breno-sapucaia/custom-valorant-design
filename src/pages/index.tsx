import CloudBurst from "../assets/icons/skills/cloudburst.svg";
import Jett from "../assets/images/agents/jett.png";
import { AgentCard } from "../components/AgentCard/AgentCard";
export default function Home() {
  return (
    <AgentCard
      name="Jett"
      region="South Korea"
      imageSource={Jett}
      skills={<CloudBurst />}
    />
  );
}
