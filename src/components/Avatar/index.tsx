"use client";

import css from "./style.module.scss";
import { useUser } from "@/store/User";

import * as Avatar from '@radix-ui/react-avatar';

interface Props {
  name: string;
  onSave?: () => void;
}

const _Avatar = (props:Props) => {

  return (
    <div className={css["avatar-box"]}>
      <Avatar.Root>
        <Avatar.Image
          className={css["image"]}
          src="/images/avatar.jpg"
        />
        <Avatar.Fallback className="AvatarFallback">
          { props.name }
        </Avatar.Fallback>
      </Avatar.Root>
    </div>
  );
};

export default _Avatar;
