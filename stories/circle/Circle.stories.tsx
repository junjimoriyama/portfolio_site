import { Meta, StoryObj } from "@storybook/react";
import Circle from "./Circle";
import "./Circle.stories.scss";

const meta: Meta<typeof Circle> = {
  component: Circle,
  title: "Circle",
  argTypes: {
    variant: {
      control: {
        type: "color",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

const lightColor = () => {
  return {
    backgrounds: {
      default: "light",
    },
  };
};

type Story = StoryObj<typeof meta>;

/**
ベースの丸です
**/
export const BaseCircle: Story = {
  parameters: {
    ...lightColor()
  },
  args: {
    variant: "black",
  },
};
export const GreenCircle: Story = {
  parameters: {
    ...lightColor()
  },
  args: {
    variant: "green",
  },
};
export const RedCircle: Story = {
  parameters: {
    ...lightColor()
  },
  args: {
    variant: "red",
  },
};
export const GroupCircle: Story = {
  parameters: {
    ...lightColor()
  },
  render: () => (
    <div className="groupCircle">
      <Circle variant="black" />
      <Circle variant="green" />
      <Circle variant="red" />
    </div>
  ),
};

