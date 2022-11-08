export interface Profile {
  name: string;
  location: string;
  contacts?: Contact[];
  profileImg: string;
}

export interface Contact {
  "type": string,
  "value": string
}