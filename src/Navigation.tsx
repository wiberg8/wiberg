const items = ["", "Om", "Kalle"];

function Navigation() {
  return (
    <ul className="text-vs-text-primary flex justify-center items-center text-lg gap-3">
      {items.map((x) => {
        return (
          <li key={`Navigation${x}`} className="p-1">
            <a className="hover:underline" href="#teknologier">{x}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default Navigation;