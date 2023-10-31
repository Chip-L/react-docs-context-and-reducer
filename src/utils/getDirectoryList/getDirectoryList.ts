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
    const { pushTo, lastPath, remainingPaths } = findSubDirectory(
      file.absolute_path,
      dirList
    );
    pushTo.push(getNewDirectoryList(remainingPaths, lastPath, file));
  }

  return dirList;
}

function findSubDirectory(path: string, pushTo: DirectoryList) {
  const paths = path.split("/");
  let lastPath = "";
  let remainingPaths = paths.join("/");

  for (let level = 0; level < paths.length; level++) {
    const currentPath = paths.slice(0, level + 1).join("/");
    const index = pushTo.findIndex((dir) => dir.id === currentPath);

    if (index > -1) {
      lastPath = currentPath;
      remainingPaths = paths.slice(level + 1).join("/");

      const dir = pushTo[index];
      if ("children" in dir) {
        pushTo = dir.children;
      }
    } else {
      break;
    }
  }

  return { lastPath, remainingPaths, pushTo };
}

function getNewDirectoryList(
  remainingPath: string,
  currentPath: string,
  file: DBFile
): DBFile | DirectoryType {
  let lastItem: DBFile | DirectoryType = file;
  const paths = remainingPath.split("/");

  if (paths[0]) {
    for (let level = paths.length; level > 0; level--) {
      const pathToDir = joinPaths(currentPath, paths);
      const pathName = paths.pop();

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
  return lastItem;
}

function joinPaths(firstPart: string, secondPart: string[]) {
  if (firstPart === "") {
    return secondPart.join("/");
  }

  const currentPaths = firstPart.split("/");
  const fullPath = currentPaths.concat(secondPart);
  return fullPath.join("/");
}
