import SearchBox from "../SearchBox";

const Header = () => {
  return (
    <header className="bg-pattern-mobile lg:bg-pattern-desktop pt-12">
      <div className="container max-w-[700px]">
        <svg
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[18px] lg:w-6"
        >
          <path
            d="M1.9566e-07 15.7619C0.887949 13.6984 1.50951 12 1.86469 10.6667C2.1945 9.36508 2.37209 8.14286 2.39746 7L2.39746 -1.36402e-06L8.41015 -8.38371e-07L8.41015 6.04762C8.38478 8.1746 7.9408 10.3492 7.07823 12.5714C6.21565 14.7937 5.12474 16.6032 3.8055 18L1.9566e-07 15.7619ZM9.58985 15.7619C10.4778 13.6984 11.0994 12 11.4545 10.6667C11.7844 9.36508 11.9619 8.14286 11.9873 7L11.9873 -5.25646e-07L18 0L18 6.04762C17.9746 8.1746 17.5307 10.3492 16.6681 12.5714C15.8055 14.7937 14.7146 16.6032 13.3953 18L9.58985 15.7619Z"
            fill="hsl(var(--clr-secondary-500-hsl))"
          />
        </svg>
        <h1 className="px-4 text-justify text-tittle-1 font-bold leading-155 text-white-500 lg:text-display-2">
          تلاش ما دسترسی{" "}
          <span className="rounded-md bg-accent-500 px-1 text-primary-500">
            سریعتر و آسان
          </span>{" "}
          تر شما به خدمات پزشکی است :)
        </h1>
        <p className="mt-4 max-w-prose px-4 text-body-3 font-normal leading-[170%] text-grey-50 lg:text-balance lg:text-center lg:text-body-1">
          کافیست خدمات درمانی موردنظر خود را جستجو کنید (دریافت نوبت،مشاوره
          پزشکی،خدمات پزشکی در منزل)
        </p>
        <svg
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ms-auto w-[18px] lg:w-6"
        >
          <path
            d="M18 2.23809C17.1121 4.30159 16.4905 6 16.1353 7.33333C15.8055 8.63492 15.6279 9.85714 15.6025 11V18H9.58985V11.9524C9.61522 9.8254 10.0592 7.65079 10.9218 5.42857C11.7844 3.20635 12.8753 1.39682 14.1945 0L18 2.23809ZM8.41015 2.23809C7.5222 4.30159 6.90063 6 6.54545 7.33333C6.21564 8.63492 6.03805 9.85714 6.01268 11V18H0V11.9524C0.02537 9.8254 0.469345 7.65079 1.33192 5.42857C2.1945 3.20635 3.28541 1.39682 4.60465 0L8.41015 2.23809Z"
            fill="hsl(var(--clr-secondary-500-hsl))"
          />
        </svg>
      </div>
      <div className="container mt-2 translate-y-1/2">
        <SearchBox className="mx-auto" />
      </div>
    </header>
  );
};

export default Header;
