const typeImages = import.meta.glob("@/assets/images/types/*.png", {
  eager: true,
  import: "default",
});

const TYPE_IMAGES: Record<number, string> = {};

for (const path in typeImages) {
  const fileName = path.split("/").pop()?.replace(".png", "");

  if (fileName) {
    TYPE_IMAGES[Number(fileName)] = typeImages[path] as string;
  }
}

export default TYPE_IMAGES;
