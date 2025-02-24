// storybook
import { SwitchProvider } from "@/components/context/switchProvider";
import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { SwitchAndLight } from "./SwitchAndLight";

// style
import "./SwitchAndLight.stories.scss"

const meta: Meta = {
  title: "SwitchAndLight",
  component: SwitchAndLight,
  // contextで管理している場合は囲む必要あり
  decorators: [
    (Story) => (
      <SwitchProvider>
        <Story />
      </SwitchProvider>
    )
  ],
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SwitchAndLight>;

export const Default: Story = {
  play: async({ canvasElement }: { canvasElement: HTMLElement }) => {
    // 描画されたHTMLの中で要素を探す
    const canvas = within(canvasElement);

    // switch定義
    const switchButton = canvas.getByRole("button", {name: ""});
    // switchの存在確認
    expect(switchButton).toBeInTheDocument();

    // lightの定義
    const lightElement = canvasElement.querySelector(".light");
    // lightの存在確認
    expect(lightElement).toBeInTheDocument();

    // 3秒遅らせる
    await new Promise(resolve => setTimeout(resolve, 3000));
    // スイッチボタンクリック
    await userEvent.click(switchButton)

    // 光らせるクラス削除確認
    await waitFor(() => {
      expect(lightElement).not.toHaveClass("isLightOn");

    })
  },
};
