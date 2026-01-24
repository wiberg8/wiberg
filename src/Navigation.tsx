const items = ["Start", "Om", "Kalle"];

function Navigation() {
  return (
    <ul className="bg-vs-bg-darkest text-vs-text-primary flex justify-start items-center text-lg gap-3">
      {items.map((x) => {
        return (
          <li key={`Navigation${x}`} className="p-1">
            <a className="hover:underline" href="#">{x}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default Navigation;
