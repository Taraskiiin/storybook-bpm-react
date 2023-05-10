import Button from '../components/Button';

// eslint-disable-next-line storybook/story-exports
export default {
	title: 'Button',
	component: Button,
};

const Template = (args: any) => <Button {...args} />;

export const Red  = Template.bind({});
Red.args = {
	label: 'Press me',
	backgroundColor: 'red',
	size: 'md',
};

export const Green = Template.bind({});
Green.args = {
	label: 'Press Me',
	backgroundColor: 'green',
	size: 'md',
};
