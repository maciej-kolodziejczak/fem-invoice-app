import { useParams } from "react-router-dom";

export function Invoice() {
  const { id } = useParams();

  return <span>Invoice #{id}</span>;
}