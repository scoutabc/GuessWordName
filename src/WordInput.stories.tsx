import type { Meta, StoryObj } from "@storybook/react-vite"; 
import WordInput from "./WordInput";

const meta: Meta<typeof WordInput> = {
  title: "Components/WordInput",
  component: WordInput,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof WordInput>;

export const Default: Story = {
  args:{
    length:5
  }
};