import { useEffect } from "react";
import { useRouter } from "next/router";
import Loding from "../components/loding/Loding";
export default function Home(props) {
  const router = useRouter();
  useEffect(() => {
    router.push("/products/1");
  }, [router]);
  return <Loding />;
}
