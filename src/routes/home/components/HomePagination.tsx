import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Link } from "react-router";

type Props = {
  page: number;
  totalPage: number;
};

function HomePagination({ page, totalPage }: Props) {
  const isFirstPage = page === 1;
  const isLastPage = page === totalPage;
  return (
    <Pagination className="my-5">
      <PaginationContent>
        <PaginationItem>
          {isFirstPage ? (
            <PaginationLink
              size="icon"
              aria-disabled="true"
              className="pointer-events-none opacity-50"
            >
              <ChevronLeftIcon className="size-4" />
            </PaginationLink>
          ) : (
            <Link to={`?page=${page - 1}`}>
              <PaginationLink size="icon">
                <ChevronLeftIcon className="size-4" />
              </PaginationLink>
            </Link>
          )}
        </PaginationItem>
        <PaginationItem>
          <p className="text-muted-foreground text-sm" aria-live="polite">
            Page <span className="text-foreground">{page}</span> of{" "}
            <span className="text-foreground">{totalPage}</span>
          </p>
        </PaginationItem>
        <PaginationItem>
          {isLastPage ? (
            <PaginationLink
              size="icon"
              aria-disabled="true"
              className="pointer-events-none opacity-50"
            >
              <ChevronRightIcon className="size-4" />
            </PaginationLink>
          ) : (
            <Link to={`?page=${page + 1}`}>
              <PaginationLink size="icon">
                <ChevronRightIcon className="size-4" />
              </PaginationLink>
            </Link>
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default HomePagination;
