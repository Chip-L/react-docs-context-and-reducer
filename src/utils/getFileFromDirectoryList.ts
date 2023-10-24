import { DirectoryList, FileType } from "@types";

type MatchedFile = {
  matched: boolean;
  obj: FileType | undefined;
};

function getFileFromList(id: string, fileList: DirectoryList): MatchedFile {
  let match: MatchedFile = {
    matched: false,
    obj: undefined,
  };

  for (const obj of fileList) {
    const isDirectory = "children" in obj;

    if (obj.id === id) {
      return {
        matched: true,
        obj: isDirectory ? undefined : obj,
      } as MatchedFile;
    }

    if (isDirectory) {
      match = getFileFromList(id, obj.children);
      if (match.matched) {
        return match;
      }
    }
  }
  return match;
}

export function getFileFromDirectoryList(
  id: string,
  fileList: DirectoryList
): FileType | undefined {
  const match = getFileFromList(id, fileList);

  if (!match.matched) {
    throw new Error(`File for id /${id}/ was not found.`);
  }
  return match.obj;
}
