export interface Profile {
  name: string;
  location: string;
  contacts?: Record<string, string>[];
  profileImg: string;
}
