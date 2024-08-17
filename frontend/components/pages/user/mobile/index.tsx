"use client";

import css from "./user.module.scss"
import HeaderUser from "@/components/organisms/user/header";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import UserPageMobileProfile from "./profile";
import UserPageMobileServices from "./services";
import Footer from "@/components/molecules/footer";
import { User } from "@/lib/types";

interface UserPageMobileProps {
  user: User
}

export default function UserPageMobile(props: UserPageMobileProps) {
  const handleSave = () => {

  }

  return (
    <main className={css["root"]}>
        <HeaderUser variant="profile"/>
        <Tabs defaultValue="profile" className={css["content"]}>
          <TabsList className={css["tablist"]}>
              <TabsTrigger value="profile">
                <UserPageMobileProfile.trigger />
              </TabsTrigger>
              <TabsTrigger value="services">
                <UserPageMobileServices.trigger />
              </TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <UserPageMobileProfile.content />
          </TabsContent>
          <TabsContent value="services">
            <UserPageMobileServices.content 
              items={props.user.services}
            />
          </TabsContent>
        </Tabs>
        <Footer onClick={handleSave} />
    </main>
  );
}