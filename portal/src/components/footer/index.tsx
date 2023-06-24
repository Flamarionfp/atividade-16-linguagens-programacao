"use client";
import { Fragment, useCallback, useEffect, useState } from "react";
import { FooterProps } from "./footer.types";

export default function Footer({ quantityOfVisitors = 0 }: FooterProps) {
  const registerVisitor = useCallback(async () => {
    try {
      const currentDate = new Date().toDateString();
      const storedDate = localStorage.getItem("accessDate");

      if (storedDate !== currentDate) {
        const response = await fetch("http://localhost:3333/visitors", {
          method: "PATCH",
        });

        console.log("DEBUG response", response);

        localStorage.setItem("accessDate", currentDate);
      }
    } catch (error) {
      console.log("DEBUG error", error);
    }
  }, []);

  useEffect(() => {
    registerVisitor();
  }, [registerVisitor]);

  return (
    <Fragment>
      <footer
        style={{ padding: 0 }}
        className="flex items-center justify-center w-full pb-6 text-white bg-[#1D232A] bottom-0 h-[60px]"
      >
        <section id="visitors">
          <span>Quantidade de acessos:</span>
          <span className="font-bold ml-1">{quantityOfVisitors}</span>
        </section>
      </footer>
    </Fragment>
  );
}
