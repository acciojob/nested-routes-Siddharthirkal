import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useParams
} from "react-router-dom";

function Layout() {
  return (
    <main>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/women">Women</Link>
            </li>
          </ul>
        </nav>

        <Outlet />
      </div>
    </main>
  );
}

function Home() {
  return <p>Index</p>;
}

function Women() {
  const items = ["Grooming", "Shirt", "Trousers", "Jewellery"];

  return (
    <div>
      <p>Women Items:</p>

      <ul>
        {items.map((item) => (
          <li key={item}>
            <Link to={item}>{item}</Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}

function Item() {
  const { itemName } = useParams();
  return <p>{itemName}</p>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="women" element={<Women />}>
            <Route path=":itemName" element={<Item />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}