export interface ProjectInterface {
  id: number,
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
