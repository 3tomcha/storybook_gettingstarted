import Button from "../components/Button.vue";
import type { Props} from "@/components/Button";
import type { Meta, Story } from "@storybook/vue3";

const props: Props = {
    text: "gohan"
}

export default {
    title: "Button2",
    component: Button,
} as Meta


export const Template: Story<Props> = (args) => ({
    components: { Button },
    template: '<Button v-bind="args"/>' ,
    setup() {
        return {
            args
        }
    }
});

export const FirstButton = Template.bind({});
FirstButton.args = props
