import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRight,
} from "lucide-react";
import { type SetURLSearchParams } from "react-router";

type Props = {
  page: number;
  totalPage: number;
  setSearchParams: SetURLSearchParams;
};

function HomePagination({ page, totalPage, setSearchParams }: Props) {
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
              <ChevronsLeftIcon className="size-4" />
            </PaginationLink>
          ) : (
            <Button
              variant={"ghost"}
              onClick={() =>
                setSearchParams((searchParams) => {
                  searchParams.set("page", `1`);
                  return searchParams;
                })
              }
              size={"icon-sm"}
            >
              <ChevronsLeftIcon />
            </Button>
          )}
        </PaginationItem>

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
            <Button
              variant={"ghost"}
              onClick={() =>
                setSearchParams((searchParams) => {
                  searchParams.set("page", `${page - 1}`);
                  return searchParams;
                })
              }
              size={"icon-sm"}
            >
              <ChevronLeftIcon />
            </Button>
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
            <Button
              variant={"ghost"}
              onClick={() =>
                setSearchParams((searchParams) => {
                  searchParams.set("page", `${page + 1}`);
                  return searchParams;
                })
              }
              size={"icon-sm"}
            >
              <ChevronRightIcon />
            </Button>
          )}
        </PaginationItem>
        <PaginationItem>
          {isLastPage ? (
            <PaginationLink
              size="icon"
              aria-disabled="true"
              className="pointer-events-none opacity-50"
            >
              <ChevronsRight className="size-4" />
            </PaginationLink>
          ) : (
            <Button
              variant={"ghost"}
              onClick={() =>
                setSearchParams((searchParams) => {
                  searchParams.set("page", `${totalPage}`);
                  return searchParams;
                })
              }
              size={"icon-sm"}
            >
              <ChevronsRight />
            </Button>
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default HomePagination;
