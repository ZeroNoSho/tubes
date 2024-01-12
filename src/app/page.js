import About from "./(page)/user/aboutus/page";
import Detail from "./(page)/user/detail/page";
import Homeuser from "./(page)/user/home/page";
import Katalog from "./(page)/user/katalog/page";
import MenuLayout from "./(page)/user/layout";
import Login from "./(page)/user/login/page";
import Profile from "./(page)/user/profile/page";

export default function Home() {
  return (
    <MenuLayout>
      <Profile></Profile>
    </MenuLayout>
  );
}
