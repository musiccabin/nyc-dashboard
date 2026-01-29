import { useEffect, useRef } from "react"

interface InfiniteScrollProps {
    visibleCount: number
    filteredCount: number,
    setVisibleCount: (val: number) => void
}

export function InfiniteScroll({
visibleCount, filteredCount, setVisibleCount
}: InfiniteScrollProps) {
    const loadMoreRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        if (!loadMoreRef.current) return

        const observer = new IntersectionObserver(
            ([entry]) => {
            if (entry.isIntersecting) {
                setVisibleCount(Math.min(visibleCount + 5, filteredCount))
            }
            },
            {
            rootMargin: "200px", // preload before hitting bottom
            }
        )

        observer.observe(loadMoreRef.current)

        return () => observer.disconnect()
        }, [filteredCount, visibleCount])

    return (
        <div>
            {visibleCount < filteredCount && (
                <div
                    ref={loadMoreRef}
                    className="h-10 flex items-center justify-center text-sm text-gray-400"
                >
                    Loading more…
                    {/* Fallback: button click*/}
                    <button onClick={() => setVisibleCount(visibleCount + 5)}
                        className="sr-only mt-2 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
                        >
                        Show more
                    </button>
                </div>
            )}
        </div>
    )
}
