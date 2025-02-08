import { Meta, StoryObj } from "@storybook/react"
import Circle from "./Circle";
import "./Circle.stories.scss";

const meta: Meta<typeof Circle> = {
  component: Circle,
  title: "Circle",
  argTypes: {
    variant: {
      control: {
        type: "color"
      },
    } ,
  },
  tags: ["autodocs"]
}

export default meta;



type Story = StoryObj<typeof meta>

/**
ベースの丸です
**/
export const BaseCircle: Story = {
  args: {
    variant: "black"
  }
}
export const GreenCircle: Story = {
  args: {
    variant: "green"
  }
}
export const RedCircle: Story = {
  args: {
    variant: "red"
  }
}
export const GroupCircle: Story = {
  render: () => (
    <div className="groupCircle">
      <Circle variant="black" />
      <Circle variant="green" />
      <Circle variant="red" />
    </div>
  )
}