import { Contact } from './contact';

export interface Profile {
  name: string;
  location: string;
  contacts?: Contact[];
  profileImg: string;
}
