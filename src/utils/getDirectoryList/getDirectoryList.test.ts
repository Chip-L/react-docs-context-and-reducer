import { DBFile, DirectoryType } from "@types";
import { getDirectoryList } from ".";

/*
  This should return a directory structure of the following:
    dir-0
    + dir-1
    +-+ dir2
    | | | file-0.docx
    | | | file-1.xlsx
    | | file-2.json
    | file-3.docx
    + dir-3
    | file-4.docx
    file-5.docx
*/

const file0: DBFile = {
  id: "id0",
  absolute_path: "dir-0/dir-1/dir-2",
  file_name: "file-0",
  file_extension: "docx",
};
const file1: DBFile = {
  id: "id1",
  absolute_path: "dir-0/dir-1/dir-2",
  file_name: "file-1",
  file_extension: "xlsx",
};
const file2: DBFile = {
  id: "id2",
  absolute_path: "dir-0/dir-1",
  file_name: "file-2",
  file_extension: "json",
};
const file3: DBFile = {
  id: "id3",
  absolute_path: "dir-0",
  file_name: "file-3",
  file_extension: "docx",
};
const file4: DBFile = {
  id: "id4",
  absolute_path: "dir-3",
  file_name: "file-4",
  file_extension: "docx",
};
const file5: DBFile = {
  id: "id5",
  absolute_path: "",
  file_name: "file-5",
  file_extension: "docx",
};

describe("getDirectoryList", () => {
  it("returns and empty array if no files in list", () => {
    const result = getDirectoryList([]);

    expect(result).toEqual([]);
  });

  it("returns a file if no absolute_path", () => {
    const result = getDirectoryList([file5]);

    expect(result).toEqual([file5]);
  });

  it("throws an error if there is a missing directory name", () => {
    const file: DBFile = { ...file0, absolute_path: "dir-0//dir-2" };

    const errorMessage = `Unknown directory name: id: ${file.id}, absolutePath: ${file.absolute_path}.`;
    expect(() => getDirectoryList([file])).toThrowError(errorMessage);
  });

  it("returns subdirectories with an absolute_path", () => {
    const result = getDirectoryList([file0]);

    const directory: DirectoryType = {
      id: "dir-0",
      name: "dir-0",
      children: [
        {
          id: "dir-0/dir-1",
          name: "dir-1",
          children: [
            {
              id: "dir-0/dir-1/dir-2",
              name: "dir-2",
              children: [file0],
            },
          ],
        },
      ],
    };

    expect(result).toEqual([directory]);
  });

  it("returns multiple files in path if they have the same path", () => {
    const result = getDirectoryList([file0, file1]);

    const directory: DirectoryType = {
      id: "dir-0",
      name: "dir-0",
      children: [
        {
          id: "dir-0/dir-1",
          name: "dir-1",
          children: [
            {
              id: "dir-0/dir-1/dir-2",
              name: "dir-2",
              children: [file0, file1],
            },
          ],
        },
      ],
    };

    // console.log(JSON.stringify(result, undefined, 2));

    expect(result).toEqual([directory]);
  });

  it("returns complex path of multiple levels", () => {
    const result = getDirectoryList([file0, file1, file2, file3, file4, file5]);

    const directory0: DirectoryType = {
      id: "dir-0",
      name: "dir-0",
      children: [
        {
          id: "dir-0/dir-1",
          name: "dir-1",
          children: [
            {
              id: "dir-0/dir-1/dir-2",
              name: "dir-2",
              children: [file0, file1],
            },
            file2,
          ],
        },
        file3,
      ],
    };
    const directory3: DirectoryType = {
      id: "dir-3",
      name: "dir-3",
      children: [file4],
    };

    expect(result).toEqual([directory0, directory3, file5]);
  });
});
