import Link from "next/link";

import { ReactIcon } from "../../assets/react.png";
const data = [
  {
    title: "React",
    link: "",
    text: "React.js is a popular JavaScript library used for building user interfaces. It provides a component-based approach that allows developers to create reusable UI elements and manage the state of their applications more efficiently.",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png",
    id: 1,
  },
  {
    title: "React",
    link: "",
    text: "React.js is a popular JavaScript library used for building user interfaces. It provides a component-based approach that allows developers to create reusable UI elements and manage the state of their applications more efficiently.",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png",

    id: 2,
  },
  {
    title: "React",
    link: "",
    text: "React.js is a popular JavaScript library used for building user interfaces. It provides a component-based approach that allows developers to create reusable UI elements and manage the state of their applications more efficiently.",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png",

    id: 3,
  },
  {
    title: "React",
    link: "",
    text: "React.js is a popular JavaScript library used for building user interfaces. It provides a component-based approach that allows developers to create reusable UI elements and manage the state of their applications more efficiently.",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png",

    id: 4,
  },
];

export default function Card() {
  return (
    <>
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
        Technologies
      </h1>
      <div className="flex flex-wrap justify-center lg:w-3/4 md:w-90 w-full">
        {data.map(({ title, text, image, id, link }) => {
          return (
            <Link
              key={id}
              href={link}
              className="flex flex-col items-center mr-5 ml-5 mb-5 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 "
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={image}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {text}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

{
  /* <div className="flex flex-wrap justify-center">
  <Link
    href="#"
    className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700  "
  >
    <img
      className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      src="https://picsum.photos/200/200"
      alt=""
    />
    <div className="flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </div>
  </Link>
  <Link
    href="#"
    className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700  "
  >
    <img
      className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      src="https://picsum.photos/200/200"
      alt=""
    />
    <div className="flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </div>
  </Link>
</div>; */
}
