import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Alert from './alert'; // Adjust the import according to your file structure
import { fn } from '@storybook/test';


const meta: Meta<typeof Alert> = {
    title: 'Components/Alert',
    component: Alert,
    argTypes: {
        type: {
            control: {
                type: 'radio',
                options: ['information', 'notification'],
            },
        },
        variant: {
            control: {
                type: 'radio',
                options: ['success', 'warning', 'danger', 'default'],
            },
        },
        size: {
            control: {
                type: 'radio',
                options: ['small', 'medium', 'large'],
            },
        },
        message: { control: 'text' },
    },
    args: {
        type: 'information',
        variant: 'success',
        size: 'small',
        message: 'This is a default alert message.',
        onClick: fn()
    },
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
      },
    tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        type: 'information',
        variant: 'default',
        size: 'small',
        message: 'This is a default alert message.',
    },
};

export const Success: Story = {
    args: {
        type: 'information',
        variant: 'success',
        size: 'small',
        message: 'Success! Your action was successful.',
    },
};

export const Warning: Story = {
    args: {
        type: 'information',
        variant: 'warning',
        size: 'small',
        message: 'Warning! Please check your input.',
    },
};

export const Danger: Story = {
    args: {
        type: 'information',
        variant: 'danger',
        size: 'small',
        message: 'Danger! Something went wrong.',
    },
};

export const Notification: Story = {
    args: {
        type: 'notification',
        variant: 'success',
        size: 'small',
        message: 'This is a notification alert.',
    },
};
