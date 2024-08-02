import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal'; // Adjust the import according to your file structure

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    argTypes: {
        title: { control: 'text' },
        description: { control: 'text' },
        position: {
            control: {
                type: 'radio',
                options: ['left', 'center'],
            },
        },
        icon: {
            control: {
                type: 'radio',
                options: ['warning', 'confirm', 'scan', 'leave'],
            },
        },
        closeable: { control: 'boolean' },
        positiveLabel: { control: 'text' },
        negativeLabel: { control: 'text' },
        inputType: {
            control: {
                type: 'radio',
                options: ['text', 'import'],
            },
        },
    },
    args: {
        title: 'Modal Title',
        description: 'This is the modal description.',
        position: 'center',
        icon: 'warning',
        closeable: true,
        positiveLabel: 'Submit',
        negativeLabel: 'Cancel',
        inputType: 'text',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Default Modal',
        description: 'This is a default modal description.',
    },
};

export const Notification: Story = {
    args: {
        title: 'Notification Modal',
        description: 'This is a notification modal description.',
        icon: 'confirm',
        inputType: 'import',
    },
};

export const Custom: Story = {
    args: {
        title: 'Custom Modal',
        description: 'This is a custom modal description.',
        position: 'left',
        icon: 'scan',
        closeable: true,
        positiveLabel: 'Confirm',
        negativeLabel: 'Dismiss',
        inputType: 'text',
    },
};
