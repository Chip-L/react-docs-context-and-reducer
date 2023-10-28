import { DBFile, DirectoryList, DirectoryType } from "@types";

/**
 * This takes an array files with an absolute path property and changes
 * it into a tree. Each directory can have multiple files. This will keep
 * the path to the directory in the directory's id property.
 *
 * This was designed to be used with PatterFly's TreeView component.
 *
 * @param fileList:DBFile[]
 * @returns DirectoryList
 */
export function getDirectoryList(fileList: DBFile[]): DirectoryList {
  const dirList: DirectoryList = [];

  for (const file of fileList) {
    const paths = file.absolute_path.split("/");
    let lastItem: DBFile | DirectoryType = file;

    for (let level = paths.length; level >= 0; level--) {
      const pathToDir = paths.join("/");
      const index = dirList.findIndex((dir) => dir.id === pathToDir);
      const pathName = paths.pop();

      if (pathToDir === "") {
        dirList.push(lastItem);
        break;
      }

      if (index > -1) {
        const dir = dirList[index];
        if ("children" in dir) {
          dir.children.push(lastItem);
        }
        break;
      }

      if (pathName) {
        const newDir: DirectoryType = {
          id: pathToDir,
          name: pathName,
          children: [lastItem],
        };
        lastItem = newDir;
      } else {
        throw new Error(
          `Unknown directory name: id: ${file.id}, absolutePath: ${file.absolute_path}.`
        );
      }
    }
  }

  return dirList;
}

// function getDirectory(path: string, pushItem: DBFile|DirectoryType):DirectoryType {
//   const newDir
//   return
// }
