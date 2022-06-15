import Link from "next/link";
import ChevronLeft from "./svg/ChevronLeft";
import ChevronRight from "./svg/ChevronRight";
import { useRouter } from "next/router";

export default function Pagination(props) {
  const { totalPages, currentPage, prevDisabled, nextDisabled } = props;
  const route = useRouter();

  
  const prevPageUrl =
    currentPage === "2"
      ? "/blog"
      : `${route.asPath}/page/${parseInt(currentPage, 10) - 1}`;
  const nextPageUrl = `${route.asPath}/page/${parseInt(currentPage, 10) + 1}`;

  return (
    <div>
      <ol>
        <li>
          {prevDisabled && (
            <span>
              <span>
                <ChevronLeft />
              </span>
              <span>Previous page</span>
            </span>
          )}
          {!prevDisabled && (
            <Link href={prevPageUrl}>
              <a>
                <span>
                  <ChevronLeft />
                </span>
                <span>Previous page</span>
              </a>
            </Link>
          )}
        </li>
        <li>
          Page {currentPage} of {totalPages}
        </li>
        <li>
          {nextDisabled && (
            <span>
              <span>Next page</span>
              <span>
                <ChevronRight />
              </span>
            </span>
          )}
          {!nextDisabled && (
            <Link href={nextPageUrl}>
              <a>
                <span>Next page</span>
                <span>
                  <ChevronRight />
                </span>
              </a>
            </Link>
          )}
        </li>
      </ol>
    </div>
  );
}