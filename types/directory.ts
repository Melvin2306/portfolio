export type Directory = {
  [key: string]: {
    type: string;
    permissions: {
      read: Array<string>;
      write?: Array<string>;
      delete?: Array<string>;
      execute?: Array<string>;
    };
    visibility?: string;
    contents:
      | Directory
      | string
      | Array<string>
      | { [key: string]: Directory | string | Array<string> };
  };
};
