import { DirectoryList, DirectoryType, DBFile } from "@types";
import { getFileFromDirectoryList } from "./getFileFromDirectoryList";

const level0file0: DBFile = {
  id: "file0-0",
  absolute_path: "",
  file_name: "level 0 file 0",
  file_extension: "docx",
};
const level0file1: DBFile = {
  id: "file0-1",
  absolute_path: "",
  file_name: "level 0 file 1",
  file_extension: "docx",
};
const level1file0: DBFile = {
  id: "file1-0",
  absolute_path: "",
  file_name: "level 1 file 0",
  file_extension: "docx",
};
const level1file1: DBFile = {
  id: "file1-1",
  absolute_path: "",
  file_name: "level 1 file 1",
  file_extension: "docx",
};
const level2file0: DBFile = {
  id: "file2-0",
  absolute_path: "",
  file_name: "level 2 file 0",
  file_extension: "docx",
};

const level0directory0: DirectoryType = {
  name: "level 0 directory 0",
  id: "directory0-0",
  children: [],
};
const level0directory1: DirectoryType = {
  name: "level 0 directory 1",
  id: "directory0-1",
  children: [],
};
const level1directory0: DirectoryType = {
  name: "level 1 directory 0",
  id: "directory1-0",
  children: [],
};
const level2directory0: DirectoryType = {
  name: "level 2 directory 0",
  id: "directory2-0",
  children: [],
};

test("throws error if Id not matched", () => {
  const result = () => getFileFromDirectoryList("no match", []);

  expect(result).toThrowError(`File for id /no match/ was not found.`);
});

test("returns a file in the first level", () => {
  const fileList: DirectoryList = [level0file0];

  const result = getFileFromDirectoryList(level0file0.id, fileList);

  expect(result).toEqual(level0file0);
});

test("returns the correct file in the first level (not first)", () => {
  const fileList: DirectoryList = [level0file0, level0file1];

  const result = getFileFromDirectoryList(level0file1.id, fileList);

  expect(result).toEqual(level0file1);
});

test("returns undefined if the id is for a directory in the first level", () => {
  const fileList: DirectoryList = [level0directory0];

  const result = getFileFromDirectoryList(level0directory0.id, fileList);

  expect(result).toBeUndefined();
});

test("returns a file from the first directory ", () => {
  const directory: DirectoryType = {
    ...level0directory0,
    children: [level1file0],
  };

  const fileList: DirectoryList = [directory];

  const result = getFileFromDirectoryList(level1file0.id, fileList);

  expect(result).toEqual(level1file0);
});

test("returns a file from the second directory ", () => {
  const directory0: DirectoryType = {
    ...level0directory0,
    children: [level1file0],
  };
  const directory1: DirectoryType = {
    ...level0directory1,
    children: [level1file1],
  };

  const fileList: DirectoryList = [directory0, directory1];

  const result = getFileFromDirectoryList(level1file1.id, fileList);

  expect(result).toEqual(level1file1);
});

test("returns undefined if the id is for a directory in the second level", () => {
  const directory0: DirectoryType = {
    ...level0directory0,
    children: [level1directory0],
  };

  const fileList: DirectoryList = [directory0];

  const result = getFileFromDirectoryList(level1directory0.id, fileList);

  expect(result).toBeUndefined();
});

test("returns the file after searching a directory (array order test)", () => {
  const directoryLevel1: DirectoryType = {
    ...level1directory0,
    children: [level2directory0, level2file0],
  };
  const directoryLevel0: DirectoryType = {
    ...level0directory0,
    children: [directoryLevel1, level1file0],
  };

  const fileList: DirectoryList = [directoryLevel0, level0file0, level0file1];

  const result0 = getFileFromDirectoryList(level0file1.id, fileList);
  expect(result0).toEqual(level0file1);
  const result1 = getFileFromDirectoryList(level1file0.id, fileList);
  expect(result1).toEqual(level1file0);
  const result2 = getFileFromDirectoryList(level2file0.id, fileList);
  expect(result2).toEqual(level2file0);
});
