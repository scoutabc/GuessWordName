import type { Meta, StoryObj } from "@storybook/react-vite"; 
import GuessPage from "./GuessPage";

const meta: Meta<typeof GuessPage> = {
  title: "Components/GuessPage",
  component: GuessPage,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof GuessPage>;

export const Default: Story = {
};