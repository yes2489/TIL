"use client";
// rafce
import React from "react";

const page = () => {
  const random = Math.floor(Math.random() * 2);
  console.log(random);

  if (random === 1) {
    throw new Error("프로필 페이지 로딩 과정에서 에러 발생");
  }

  return <div>Profile 페이지</div>;
};

export default page;
