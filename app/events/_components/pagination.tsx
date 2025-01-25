"use client"

import { useState, useEffect } from "react"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function PaginationComponent({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const [visiblePages, setVisiblePages] = useState<(number | string)[]>([])

  useEffect(() => {
    const getVisiblePages = () => {
      if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1)
      }

      if (currentPage <= 4) {
        return [1, 2, 3, 4, 5, "...", totalPages]
      }

      if (currentPage >= totalPages - 3) {
        return [1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
      }

      return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages]
    }

    setVisiblePages(getVisiblePages())
  }, [currentPage, totalPages])

  return (
    <Pagination>
      <PaginationContent className="gap-5 flex-wrap">
        <PaginationItem>
          <PaginationPrevious
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            className={currentPage === 1 ? "pointer-events-none opacity-50 text-[#FEFDF6]" : "text-[#FEFDF6]"}
          />
        </PaginationItem>
        {visiblePages.map((page, index) => (
          <PaginationItem key={index}>
            {typeof page === "number" ? (
              <PaginationLink className={`border border-[#FFFFFF] ${page === currentPage ? 'bg-[#FFD752] text-[#1E1E1E]' : 'bg-[#1E1E1E] text-[#FEFDF6]'}`} onClick={() => onPageChange(page)} isActive={page === currentPage}>
                {page}
              </PaginationLink>
            ) : (
              <PaginationEllipsis className="border border-[#FFFFFF] rounded-sm text-[#FEFDF6]" />
            )}
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            className={currentPage === totalPages ? "pointer-events-none opacity-50 text-[#FEFDF6]" : "text-[#FEFDF6]"}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

