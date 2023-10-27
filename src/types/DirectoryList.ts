export type FileTypes = "docx" | "xlsx" | "json";

export type DBFile = {
  id: string;
  absolute_path: string;
  file_name: string;
  file_extension: FileTypes;
  content?: string;
};

export type DirectoryType = {
  name: string;
  id: string;
  children: DirectoryList;
};

export type DirectoryList = (DBFile | DirectoryType)[];
