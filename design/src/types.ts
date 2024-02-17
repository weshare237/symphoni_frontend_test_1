export interface IFormState {
  [key: string]: any
  step: number
  name: IInput
  email: IInput
  phoneNumber: IInput
  plan: IPlanOption
  period: TPeriod
  addOns: Array<IAddOn>
  isCompleted: boolean
}

export interface IPlanOption {
  id: number
  name: TPlan
  price: number
  monthsFree: number
}

export interface IAddOn {
  id: number
  heading: string
  description: string
  price: number
}

export interface IInput {
  value: string
  error: string
}

export type TPlan = 'Arcade' | 'Advanced' | 'Pro'
export type TPeriod = 'Monthly' | 'Yearly'
