export interface ProjectInterface   {
  title: string,
  description: string,
  descriptionShort: string,
  tags: string[],
  links: LinkInterface[]
}

interface LinkInterface {
  url: string,
  type: string
}
