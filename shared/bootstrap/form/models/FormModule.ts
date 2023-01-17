import React from 'react'

export interface LabelProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  label?: string
}

export interface ErrorProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  message: string
  success?: boolean
  isVisible?: boolean
}
export interface ErrorStateProps {
  code: string
  id: number
  success: boolean
  remove: number
}
export interface ErrorListProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  errors?: ErrorStateProps[]
  isVisible?: boolean
}

export interface FormGroupProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  label?: LabelProps
  error?: ErrorProps
  display?: { form?: string; child?: string; label?: string }
}
