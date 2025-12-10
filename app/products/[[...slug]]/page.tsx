interface Props {
  params: {
    slug?: string[];
  };
}

export default function Page({ params }: Props) {
  const { slug } = params;

  // اگر هیچ پارامتری نبود
  if (!slug) {
    return <div>All Products</div>;
  }

  // اگر چند سطح پارامتر داشتیم
  return <div>{slug.join(" / ")}</div>;
}
