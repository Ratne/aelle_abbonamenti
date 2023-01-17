import React from 'react'

export interface TableProps {
  // elements?: React.HTMLAttributes<HTMLOrSVGElement>;
  children?: React.ReactNode
  data?: { [key: string]: any }[]
  columns: TableData[]
  pagination?: Pagination
  templates?: TemplateTable
  styleTable?: string
  clickRow?: (event: React.MouseEvent, row: any, index: number) => void
  rowIndexActive?: string[]
  elementsForPage?: number
}

export interface TableData {
  name: string
  label: string
  show?: boolean
  templates?: TemplateTable
  width?: string
}

export type funcTemplate = (
  value: any,
  row: { [key: string]: any }
) => React.ReactNode

export interface TemplateTable {
  [key: string]: funcTemplate
}

export interface Pagination {
  elementForPage?: number
  page?: number
  elements: number
  goPage: (page: number) => void
}
