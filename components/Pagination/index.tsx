import Link from "next/link";
import ChevronLeft from "./svg/ChevronLeft";
import ChevronRight from "./svg/ChevronRight";
import { useRouter } from "next/router";
import { paginationTypes } from "types/paganationTypes";

export default function Pagination(props: paginationTypes) {

  const { totalPages, currentPage, prevDisabled, nextDisabled } = props;
  const route = useRouter();

  
  const prevPageUrl =
    currentPage === "2"
      ? "/blog"
      : `${route.asPath}/page/${parseInt(currentPage as string, 10) - 1}`;
  const nextPageUrl = `${route.asPath}/page/${parseInt(currentPage as string, 10) + 1}`;

  return (
    <div className="mt-5">
      <div className="center-row">
        <div>
          {prevDisabled && (
            <span className="center-row">
              <span>
                <ChevronLeft />
              </span>
              <span>Previous page</span>
            </span>
          )}
          {!prevDisabled && (
            <Link href={prevPageUrl}>
              <a className="center-row">
                <span>
                  <ChevronLeft />
                </span>
                <span>Previous page</span>
              </a>
            </Link>
          )}
        </div>
        <div>
          Page {currentPage} of {totalPages}
        </div>
        <div>
          {nextDisabled && (
            <span className="center-row">
              <span>Next page</span>
              <span>
                <ChevronRight />
              </span>
            </span>
          )}
          {!nextDisabled && (
            <Link href={nextPageUrl}>
              <a className="center-row">
                <span>Next page</span>
                <span>
                  <ChevronRight />
                </span>
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}