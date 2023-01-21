import IconLogo from "@/assets/svg/icon_logo";
import React, { memo } from "react";
import { HeaderLeftWrapper } from "./style";

const HeaderLeft = memo(() => {
  return (
    <HeaderLeftWrapper>
      <IconLogo />
    </HeaderLeftWrapper>
  );
});

export default HeaderLeft;
