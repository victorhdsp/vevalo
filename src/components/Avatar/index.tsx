"use client";

import css from "./style.module.scss";

import * as Avatar from '@radix-ui/react-avatar';

const _Avatar = () => {
  return (
    <div className={css["avatar-box"]}>
      <Avatar.Root>
        <Avatar.Image
          className={css["image"]}
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          alt="Colm Tuite"
        />
        <Avatar.Fallback className="AvatarFallback" delayMs={600}>
          CT
        </Avatar.Fallback>
      </Avatar.Root>
    </div>
  );
};

export default _Avatar;
