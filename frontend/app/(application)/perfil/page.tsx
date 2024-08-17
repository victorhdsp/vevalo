"use client";

import css from "./perfil.module.scss";
import { database } from "@/lib/database";

import UserPageMobile from "@/components/pages/user/mobile";

function ProfilePage() {
  const user = database.user;

  return (
    <UserPageMobile user={user} />
  );
}

export default ProfilePage;