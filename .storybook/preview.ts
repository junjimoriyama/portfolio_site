import type { Preview } from "@storybook/react";
import "@/app/globals.css"
import "@/stories/SwitchAndLight/SwitchAndLight.stories.scss"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#0a0a0a"
        },
        {
          name: "light",
          value: "#ffffff"
        }
      ]
    },
    docs: {
      source: {
        type: "code"
      }
    }
  },
};

export default preview;
