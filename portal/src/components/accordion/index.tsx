"use client";
import { useState } from "react";
import { AccordionProps } from "./accordion.types";

export default function Accordion({
  title = "",
  children,
  defaultOpen = false,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  function getAccordionState() {
    return isOpen ? "collapse-open" : "collapse-close";
  }

  function toggleAccordion() {
    setIsOpen(!isOpen);
  }

  return (
    <button
      onClick={toggleAccordion}
      className={`collapse collapse-arrow bg-white rounded-md shadow-2xl  ${getAccordionState()}`}
    >
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-md font-medium text-left">
        {title}
      </div>
      <div className="collapse-content text-left">{children}</div>
    </button>
  );
}
