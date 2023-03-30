export default function ContactLayout({ children }) {
  // must have children as prop, because that's the rest of the DOM.
  // without it, nothing else will show
  return (
    <div>
      <div>{children}</div>
      <h1>contact layout </h1>
    </div>
  );
}
