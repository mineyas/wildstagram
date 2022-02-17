import React, { useEffect, useState } from "react";
import { Text, Image } from "react-native";
import * as FileSystem from "expo-file-system";

export default function ImagesScreen() {
  const [imagesURI, setImagesURI] = useState([]);
  useEffect(() => {
    (async () => {
      const images = await FileSystem.readDirectoryAsync(
        FileSystem.cacheDirectory + "ImageManipulator"
      );
      setImagesURI(images);
    })();
  }, []);
  return imagesURI.length > 0 ? (
    <Image
      style={{
        flex: 1,
        resizeMode: "cover",
        height: 500,
      }}
      source={{
        uri: FileSystem.cacheDirectory + "ImageManipulator/" + imagesURI[0],
      }}
    />
  ) : null;
}
