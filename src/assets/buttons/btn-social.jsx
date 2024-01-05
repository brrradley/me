export default function Social(type, url) {
  return (
    <a href={url} target="_new" alt={type} title={type}>
      <div className=""></div>
    </a>
  );
}
