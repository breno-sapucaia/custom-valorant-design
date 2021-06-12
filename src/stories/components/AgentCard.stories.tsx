import { Story } from "@storybook/react";
import React from "react";
import { ReactComponent as BladeStorm } from "../../assets/icons/skills/blade-storm.svg";
import { ReactComponent as CloudBurst } from "../../assets/icons/skills/cloudburst.svg";
import { ReactComponent as TailWind } from "../../assets/icons/skills/tailwind.svg";
import { ReactComponent as UpDraft } from "../../assets/icons/skills/updraft.svg";
import Jett from "../../assets/images/agents/jett.png";
import {
  AgentCard,
  AgentCardProps,
} from "../../components/AgentCard/AgentCard";

export default {
  title: "Components/AgentCard",
  component: AgentCard,
};

const Template: Story<AgentCardProps> = (args) => <AgentCard {...args} />;

export const JettCard = Template.bind({});

JettCard.args = {
  name: "Jett",
  region: "South Korea",
  imageSource: Jett,
  skills: (
    <>
      <CloudBurst />
      <UpDraft />
      <TailWind />
      <BladeStorm />
    </>
  ),
};
