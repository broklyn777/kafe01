import CardMeny from "@/components/Card-meny";
import CardMeny2, { MenuItem } from "../components/Card-meny2";

type MenuItems = MenuItem[];

const menuItems: MenuItems = require("../menuItems.json");

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap">
        {menuItems.map((menuItem, index) => (
          <CardMeny2 key={index} menuItem={menuItem} />
        ))}
      </div>
    </div>
  );
}
