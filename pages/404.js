// // pages/404.js
// export default function Custom404() {
//   return <h1>404 - Page Not Found</h1>;
// }

// 404.js
import Link from "next/link";
const FourOhFour = () => {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </>
  );
};
export default FourOhFour;
