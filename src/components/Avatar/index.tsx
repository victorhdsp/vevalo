"use client";

import css from "./style.module.scss";
import { useUser } from "@/store/User";
import placeholder from '@/assets/images/avatar.jpg'

import * as Avatar from '@radix-ui/react-avatar';

const _Avatar = () => {
  const user = useUser((store) => store.user);

  return (
    <div className={css["avatar-box"]}>
      <Avatar.Root>
        <Avatar.Image
          className={css["image"]}
          src={placeholder.src}
          alt={user.profile.company.name}
        />
        <Avatar.AvatarFallback>CT</Avatar.AvatarFallback>
        <Avatar.Fallback className="AvatarFallback" delayMs={600}>
          { user.profile.company.name }
        </Avatar.Fallback>
      </Avatar.Root>
    </div>
  );
};

export default _Avatar;
