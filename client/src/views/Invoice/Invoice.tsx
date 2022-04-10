import { useParams } from "react-router-dom";

import { BackButton } from "@/components/BackButton";

export function Invoice() {
  const { id } = useParams();

  return (
    <>
      <BackButton />
      <span>Invoice #{id}</span>
    </>
  );
}