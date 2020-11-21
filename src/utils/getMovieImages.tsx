import axios from "axios";

function base64toBlob(base64: string, type: any) {
  // 将base64转为Unicode规则编码
  const bstr = atob(base64);

  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n); // 转换编码后才可以使用charCodeAt 找到Unicode编码
  }
  return new Blob([u8arr], {
    type,
  });
}

export async function getMovieImages() {
  try {
    const response = await axios.get<{
      image: {
        imgs: string[];
        pic_name: string[];
      };
    }>(`http://127.0.0.1:5000/get_movies/images`);
    const img64 = response.data.image.imgs; //base64 format
    const pic_names = response.data.image.pic_name;
    const imgSrcs = [];
    for (let i = 0, len = img64.length; i < len; i++) {
      const res = base64toBlob(img64[i], "image/jpeg"); //blob format

      const imgSrc = window.URL.createObjectURL(res); //url
      imgSrcs.push({ url: imgSrc, pic_names: pic_names[i] });
    }
    return imgSrcs;
  } catch (e) {
    console.log(e);
    return [];
  }
}
