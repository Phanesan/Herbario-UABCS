import React from "react";

function ProfileIcon({ style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 100 100"
      x="0px"
      y="0px"
      className={style}
    >
      <path
        d="M20.78,62.23A21.29,21.29,0,0,0,19,70.77V72A10,10,0,0,0,29,82H45a4,4,0,0,0,0-8H29a2,2,0,0,1-2-2V70.77a13.44,13.44,0,0,1,5.2-10.62,36.23,36.23,0,0,1,9.15-5.27,4,4,0,0,0,.83-7A12,12,0,0,1,49,26h.48A12.06,12.06,0,0,1,61,37.46a11.89,11.89,0,0,1-2.06,7.28,4,4,0,0,0,6.61,4.52A19.84,19.84,0,0,0,69,37.11,20.1,20.1,0,0,0,49.78,18H49A20,20,0,0,0,33,50a46.49,46.49,0,0,0-5.73,3.83A21.55,21.55,0,0,0,20.78,62.23Z"
        fill="currentColor"
      />
      <circle cx="57" cy="63" r="4" fill="currentColor" />
      <circle cx="77" cy="63" r="4" fill="currentColor" />
      <path
        d="M67,82a12,12,0,0,0,8.49-3.5,4,4,0,0,0-5.66-5.66,4,4,0,0,1-5.66,0,4,4,0,0,0-5.66,5.66A12,12,0,0,0,67,82Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default ProfileIcon;