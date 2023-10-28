import { DBFile, DirectoryType } from "@types";
import { getDirectoryList } from ".";

const demoFile0: DBFile = {
  id: "id0",
  absolute_path: "path1",
  file_name: "test-0",
  file_extension: "docx",
};

const demoFile1: DBFile = {
  id: "id1",
  absolute_path: "path1/path2",
  file_name: "test-1",
  file_extension: "docx",
};

describe("getDirectoryList", () => {
  it("returns and empty array if no files in list", () => {
    const result = getDirectoryList([]);

    expect(result).toEqual([]);
  });

  it("returns a file if no absolute_path", () => {
    const file0 = { ...demoFile0, absolute_path: "" };
    const result = getDirectoryList([file0]);

    expect(result).toEqual([file0]);
  });

  it("returns a directory with absolute_path", () => {
    const path = "path-0";
    const file0: DBFile = { ...demoFile0, absolute_path: path };
    const result = getDirectoryList([file0]);

    const directory: DirectoryType = {
      id: path,
      name: path,
      children: [file0],
    };
    expect(result).toEqual([directory]);
  });

  it("returns multiple files in path if they have the same path", () => {
    const path = "path-0";
    const file0: DBFile = { ...demoFile0, absolute_path: path };
    const file1: DBFile = { ...demoFile1, absolute_path: path };
    const result = getDirectoryList([file0, file1]);

    const directory: DirectoryType = {
      id: path,
      name: path,
      children: [file0, file1],
    };
    expect(result).toEqual([directory]);
  });

  it("returns subdirectories if multiple paths in absolute_path", () => {
    const path = "path-0/path-1";
    const file0: DBFile = { ...demoFile0, absolute_path: path };
    const result = getDirectoryList([file0]);

    const dir2: DirectoryType = {
      id: path,
      name: "path-1",
      children: [file0],
    };
    const dir1: DirectoryType = {
      id: "path-0",
      name: "path-0",
      children: [dir2],
    };
    expect(result).toEqual([dir1]);
  });

  it("throws an error if there is a missing directory name", () => {
    const path = "path-0//path-2";
    const file0: DBFile = { ...demoFile0, absolute_path: path };

    const errorMessage = `Unknown directory name: id: ${file0.id}, absolutePath: ${file0.absolute_path}.`;
    expect(() => getDirectoryList([file0])).toThrowError(errorMessage);
  });
});
