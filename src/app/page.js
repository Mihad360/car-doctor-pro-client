import Image from "next/image";
import Banner from "./components/Homepage/Banner";
import About from "./components/Homepage/About";
import Services from "./components/Homepage/Services";
import Open from "./components/Homepage/Open";
import Products from "./components/Homepage/Products";

export default function Home() {
  return (
    <div>
      <div><Banner></Banner></div>
      <div><About></About></div>
      <div><Services></Services></div>
      <div><Open></Open></div>
      <div><Products></Products></div>
    </div>
  );
}
