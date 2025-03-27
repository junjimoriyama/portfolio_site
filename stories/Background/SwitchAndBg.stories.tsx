// storybook
import { SwitchProvider } from "@/components/context/switchProvider";
import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { SwitchAndBg } from "./SwitchAndBg";

const meta: Meta = {
  title: "SwitchAndBg",
  component: SwitchAndBg,
  // contextで管理している場合は囲む必要あり
  decorators: [
    (Story) => (
      <SwitchProvider>
        <Story />
      </SwitchProvider>
    )
  ],
};

export default meta;

type Story = StoryObj<typeof SwitchAndBg>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // スイッチのボタンを取得
    const switchButton = canvas.getByRole("button", { name: "" });

    // スイッチの存在確認
    expect(switchButton).toBeInTheDocument();

    // スイッチをクリック（ON → OFF）
    await userEvent.click(switchButton);

    // Three.jsのCanvasが消えていることを確認
    await waitFor(() => {
      expect(canvasElement.querySelector(".threejs_container")).not.toBeInTheDocument();
    }, { timeout: 5000 }); 
  }
};
