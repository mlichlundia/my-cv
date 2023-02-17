export interface ProjectInterface {
  id: number,
  title: string,
  subtitle: string,
  description: string,
  tech: string,
  skills: string[],
  mainPreview: string,
  images: string[],
  links: LinkInterface[]
}

interface LinkInterface {
  url: string,
  type: string
}
