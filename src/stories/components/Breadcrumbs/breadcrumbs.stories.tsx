import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Breadcrumbs from './breadcrumbs';
import { fn } from '@storybook/test';


const meta: Meta<typeof Breadcrumbs> = {
    title: 'Components/Breadcrumbs',
    component: Breadcrumbs,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
      },
    argTypes: {
        items: {
            description: 'Array of breadcrumb items', // Description for better UX
            defaultValue: ['Home', 'Category', 'Item'], // Default value
          },
        separator: { control: { type: 'text' } },
        size: { control: { type: 'radio', options: ['small', 'medium', 'large'] } },
    },
    args: { onClick: fn() },
    tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: ['Home', 'Category', 'Item'],
        separator: '/',
    },
};

export const CustomSeparator: Story = {
    args: {
        items: ['Home', 'Category', 'Item'],
        separator: '>',
    },
};