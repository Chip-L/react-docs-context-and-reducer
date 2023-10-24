export type FileTypes = "docx" | "xlsx" | "json";

export type FileType = {
  name: string;
  id: string;
  content?: string;
  type?: FileTypes;
};

export type DirectoryType = {
  name: string;
  id: string;
  children: DirectoryList;
};

export type DirectoryList = (FileType | DirectoryType)[];
