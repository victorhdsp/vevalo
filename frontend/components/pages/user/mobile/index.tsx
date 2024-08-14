"use client";

import css from "./user.module.scss"
import HeaderUser from "@/components/organisms/user/header";
import { Tabs, TabsList } from "@/components/ui/tabs";
import UserPageMobileProfile from "./profile";
import UserPageMobileServices from "./services";
import Footer from "@/components/molecules/footer";

export default function UserPageMobile() {
  const handleSave = () => {

  }

  return (
    <main className={css["root"]}>
        <HeaderUser variant="profile"/>
        <Tabs defaultValue="profile" className={css["content"]}>
          <TabsList className={css["tablist"]}>
              <UserPageMobileProfile.trigger />
              <UserPageMobileServices.trigger />
          </TabsList>
          <UserPageMobileProfile.content />
          <UserPageMobileServices.content />
        </Tabs>
        <Footer onClick={handleSave} />
    </main>
  );
}