interface HttpDataModel {
  url: string;
  other: any
}
export default {
  url: process.env.NEXT_PUBLIC_REACT_APP_URL,
  other: {}
} as HttpDataModel
