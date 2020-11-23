import { serverUrl } from "./api";

export function getImgUrl(rawUrl: string) {
  const imgName = rawUrl.split("/").slice(-1)[0];
  console.log(imgName, rawUrl);
  return `${serverUrl}/static/${imgName}`;
}
