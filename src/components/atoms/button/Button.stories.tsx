import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Buttons'
/** 理解できないので使わない
https://github.com/storybookjs/storybook/issues/13747 
  type CSFType<M extends Meta<any>> = M extends {
    component: ComponentType<infer P> //
    args: infer D
  }
    ? { args: Omit<P, keyof D> } & { args: Partial<P> }
    : never
 */

// type ComponentType<P> = (props: P) => any

const meta = {
  title: 'Button',
  component: Button,
  args: { title: 'Buttona' },
  argTypes: {
    onClick: { action: 'clicked' },
    className: { table: { disable: true } }, // これでcontrolsから対象外にできる
  },
  tags: ['autodocs'], // enable automatic documentation page
} satisfies Meta<typeof Button>

export default meta

// type MetaType = typeof meta
// type MyStory = CSFType<MetaType>

type Story = StoryObj<typeof meta>

export const Green: Story = {
  args: {
    title: 'Button',
    // onClick: () => {},
  },
}

export const Black: Story = {
  args: {
    ...Green.args,
    type: 'black',
  },
}

// type Colors = 'red' | 'green' | 'blue'

// type RGB = [red: number, green: number, blue: number]

// const palette = {
//   red: [255, 0, 0],
//   green: '#00ff00',
//   blue: [0, 0, 255],
//   //  ~~~~ The typo is now correctly detected
// } satisfies Record<Colors, string | RGB>

// // 'red'には配列メソッドを使えるように使いたい
// const redComponent = palette.red.at(0)

// // また'green'には文字列メソッドを使えるように使いたい
// const greenNormalized = palette.green.toUpperCase()
